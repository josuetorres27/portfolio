"""
Tests for the Localized Pages
Validates that the build writes one page per language (English at /, Spanish at /es/),
each with its own <html lang>, title, canonical address and hreflang alternates, every
data-i18n element rendered in that language, and only that language shipped to the scripts.
"""

import html
import json
import os
import re
import unittest
from html.parser import HTMLParser

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST_DIR = os.path.join(ROOT_DIR, "dist")
PUBLIC_DIR = os.path.join(ROOT_DIR, "public")
SITE = "https://josuetorressibaja.com"

PAGES = {
    "en": {"path": os.path.join(DIST_DIR, "index.html"), "url": f"{SITE}/", "og_locale": "en_US"},
    "es": {"path": os.path.join(DIST_DIR, "es", "index.html"), "url": f"{SITE}/es/", "og_locale": "es_CR"},
}


class I18nElementCollector(HTMLParser):
    """Collects the rendered text and attributes of every element marked with a data-i18n* key."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.texts = []  # (key, text)
        self.attrs = []  # (key, attribute, value)
        self.lang_links = []
        self._open = []  # stack of [tag, key or None, collected text]

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if "data-i18n-aria" in a:
            self.attrs.append((a["data-i18n-aria"], "aria-label", a.get("aria-label")))
        if "data-i18n-title" in a:
            self.attrs.append((a["data-i18n-title"], "title", a.get("title")))
        if tag == "a" and "lang-switch-btn" in a.get("class", ""):
            self.lang_links.append(a)
        if tag in ("img", "br", "meta", "link", "input"):
            return
        self._open.append([tag, a.get("data-i18n"), []])

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in ("img", "br", "meta", "link", "input") and self._open:
            self._open.pop()

    def handle_data(self, data):
        for entry in self._open:
            if entry[1] is not None:
                entry[2].append(data)

    def handle_endtag(self, tag):
        while self._open:
            entry = self._open.pop()
            if entry[1] is not None:
                self.texts.append((entry[1], "".join(entry[2])))
            if entry[0] == tag:
                break


def read_page(lang):
    with open(PAGES[lang]["path"], "r", encoding="utf-8") as f:
        return f.read()


def runtime_strings(page):
    match = re.search(r"window\.I18N = (\{.*?\});</script>", page, re.DOTALL)
    return json.loads(match.group(1)) if match else None


class TestLocalizedPages(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.pages = {lang: read_page(lang) for lang in PAGES}
        cls.dicts = {lang: runtime_strings(page) for lang, page in cls.pages.items()}

    def test_one_page_per_language(self):
        """Verify the build writes / and /es/."""
        for lang, info in PAGES.items():
            self.assertTrue(os.path.exists(info["path"]), f"Missing built page for '{lang}': {info['path']}")

    def test_html_lang_matches_page(self):
        """Verify each page declares its own language on <html>."""
        for lang, page in self.pages.items():
            self.assertRegex(page, rf'<html lang="{lang}"', f"/{lang} page has the wrong <html lang>")

    def test_scripts_receive_only_the_page_language(self):
        """Verify window.I18N holds exactly the page's language."""
        for lang, strings in self.dicts.items():
            self.assertIsNotNone(strings, f"window.I18N missing on the '{lang}' page")
            self.assertEqual(list(strings.keys()), [lang])
            self.assertGreater(len(strings[lang]), 200, f"window.I18N for '{lang}' has too few keys")

    def test_runtime_strings_cannot_close_the_script(self):
        """Verify no raw '<' reaches the inline window.I18N script."""
        for lang, page in self.pages.items():
            script = re.search(r"window\.I18N = (\{.*?\});</script>", page, re.DOTALL).group(1)
            self.assertNotIn("<", script, f"Unescaped '<' in the '{lang}' window.I18N script")

    def test_title_and_description_are_localized(self):
        """Verify <title>, meta description and Open Graph tags come from the page's dictionary."""
        for lang, page in self.pages.items():
            strings = self.dicts[lang][lang]
            title = re.search(r"<title>(.*?)</title>", page).group(1)
            self.assertEqual(html.unescape(title), strings["page_title"])
            description = re.search(r'<meta name="description" content="([^"]*)"', page).group(1)
            self.assertEqual(html.unescape(description), strings["meta_description"])
            og_title = re.search(r'<meta property="og:title" content="([^"]*)"', page).group(1)
            self.assertEqual(html.unescape(og_title), strings["page_title"])
            self.assertIn(f'<meta property="og:locale" content="{PAGES[lang]["og_locale"]}">', page)

    def test_canonical_points_to_the_page_itself(self):
        """Verify each page is canonical to its own address."""
        for lang, page in self.pages.items():
            self.assertIn(f'<link rel="canonical" href="{PAGES[lang]["url"]}">', page)
            self.assertIn(f'<meta property="og:url" content="{PAGES[lang]["url"]}">', page)

    def test_hreflang_alternates_list_every_language(self):
        """Verify both pages link to every language and to the English x-default."""
        for page in self.pages.values():
            for lang, info in PAGES.items():
                self.assertIn(f'<link rel="alternate" hreflang="{lang}" href="{info["url"]}">', page)
            self.assertIn(f'<link rel="alternate" hreflang="x-default" href="{SITE}/">', page)

    def test_data_i18n_text_is_rendered_in_the_page_language(self):
        """Verify every data-i18n element shows its dictionary text for that page."""
        for lang, page in self.pages.items():
            strings = self.dicts[lang][lang]
            collector = I18nElementCollector()
            collector.feed(page)
            self.assertGreater(len(collector.texts), 150, f"Too few data-i18n elements on the '{lang}' page")
            for key, text in collector.texts:
                self.assertIn(key, strings, f"data-i18n key '{key}' missing from the '{lang}' strings")
                self.assertEqual(text, strings[key], f"data-i18n '{key}' is not rendered in '{lang}'")

    def test_data_i18n_attributes_are_rendered_in_the_page_language(self):
        """Verify every data-i18n-aria / data-i18n-title attribute holds its dictionary text."""
        for lang, page in self.pages.items():
            strings = self.dicts[lang][lang]
            collector = I18nElementCollector()
            collector.feed(page)
            self.assertGreater(len(collector.attrs), 10, f"Too few data-i18n-aria/title attributes on the '{lang}' page")
            for key, attribute, value in collector.attrs:
                self.assertEqual(value, strings[key], f"{attribute} for '{key}' is not rendered in '{lang}'")

    def test_data_i18n_html_is_rendered_in_the_page_language(self):
        """Verify every data-i18n-html element contains its dictionary markup for that page."""
        for lang, page in self.pages.items():
            strings = self.dicts[lang][lang]
            keys = set(re.findall(r'data-i18n-html="([^"]+)"', page))
            self.assertGreater(len(keys), 5, f"Too few data-i18n-html elements on the '{lang}' page")
            for key in keys:
                self.assertIn(strings[key], page, f"data-i18n-html '{key}' is not rendered in '{lang}'")

    def test_language_switch_links_to_each_page(self):
        """Verify the EN/ES switches are links to / and /es/ and highlight the current language."""
        for lang, page in self.pages.items():
            collector = I18nElementCollector()
            collector.feed(page)
            self.assertEqual(len(collector.lang_links), 4, "Expected desktop and mobile EN/ES links")
            for link in collector.lang_links:
                target = link["data-lang"]
                self.assertEqual(link["href"], "/" if target == "en" else "/es/")
                self.assertEqual(link["hreflang"], target)
                if target == lang:
                    self.assertEqual(link.get("aria-current"), "page")
                    self.assertIn("bg-brand-600", link["class"])
                else:
                    self.assertNotIn("aria-current", link)
                    self.assertNotIn("bg-brand-600", link["class"])

    def test_adventure_rail_labels_are_localized(self):
        """Verify the nine rail checkpoints carry the page's level names."""
        for lang, page in self.pages.items():
            strings = self.dicts[lang][lang]
            for i, aria in enumerate(strings["adv_node_arias"]):
                self.assertIn(f'data-level="{i}"', page)
                self.assertIn(f'aria-label="{html.escape(aria, quote=True)}"', page)
            for tooltip in strings["adv_node_tooltips"]:
                self.assertIn(html.escape(tooltip, quote=False), page)

    def test_sitemap_lists_both_languages(self):
        """Verify the sitemap lists / and /es/ with their hreflang alternates."""
        with open(os.path.join(PUBLIC_DIR, "sitemap.xml"), "r", encoding="utf-8") as f:
            sitemap = f.read()
        for info in PAGES.values():
            self.assertIn(f"<loc>{info['url']}</loc>", sitemap)
        self.assertEqual(sitemap.count('hreflang="es"'), 2)


if __name__ == "__main__":
    unittest.main()
