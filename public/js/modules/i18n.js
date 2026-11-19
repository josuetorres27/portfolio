/**
 * Portfolio Internationalization (i18n) & Typewriter System
 * Handles the EN/ES language switch between the two pre-rendered pages
 * and the responsive typewriter effect in the hero section.
 */

(function () {
  'use strict';

  var typewriterTimeout = null;
  var currentPhraseIndex = 0;
  var currentCharIndex = 0;
  var isDeleting = false;
  var activePhrases = [];

  function escapeTypewriterHtml(str) {
    return (str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function renderSingleLine(phrase, charCount, withCursor, cursorHtml) {
    if (!phrase) return withCursor ? cursorHtml : '';

    var words = phrase.split(' ');

    if (charCount <= 0) {
      return words.map(function (w, idx) {
        var escaped = escapeTypewriterHtml(w);
        if (idx === 0 && withCursor) {
          return '<span class="inline-block whitespace-nowrap">' + cursorHtml + '<span style="visibility:hidden; user-select:none; pointer-events:none;" aria-hidden="true">' + escaped + '</span></span>';
        }
        return '<span class="inline-block whitespace-nowrap" style="visibility:hidden; user-select:none; pointer-events:none;" aria-hidden="true">' + escaped + '</span>';
      }).join(' ');
    }

    if (charCount >= phrase.length) {
      return words.map(function (w, idx) {
        var escaped = escapeTypewriterHtml(w);
        if (idx === words.length - 1 && withCursor) {
          return '<span class="inline-block whitespace-nowrap">' + escaped + cursorHtml + '</span>';
        }
        return '<span class="inline-block whitespace-nowrap">' + escaped + '</span>';
      }).join(' ');
    }

    var tokens = [];
    var regex = /(\s+|[^\s]+)/g;
    var match;
    while ((match = regex.exec(phrase)) !== null) {
      tokens.push({
        text: match[0],
        isSpace: /^\s+$/.test(match[0]),
        start: match.index,
        end: match.index + match[0].length
      });
    }

    var html = '';
    var cursorPlaced = false;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (token.isSpace) {
        html += token.text;
      } else {
        var wordText = escapeTypewriterHtml(token.text);
        if (charCount >= token.end) {
          var wordHtml = wordText;
          if (withCursor && !cursorPlaced && charCount === token.end) {
            wordHtml += cursorHtml;
            cursorPlaced = true;
          }
          html += '<span class="inline-block whitespace-nowrap">' + wordHtml + '</span>';
        } else if (charCount <= token.start) {
          if (withCursor && !cursorPlaced && charCount <= token.start) {
            html += '<span class="inline-block whitespace-nowrap">' +
              cursorHtml +
              '<span style="visibility:hidden; user-select:none; pointer-events:none;" aria-hidden="true">' + wordText + '</span>' +
            '</span>';
            cursorPlaced = true;
          } else {
            html += '<span class="inline-block whitespace-nowrap" style="visibility:hidden; user-select:none; pointer-events:none;" aria-hidden="true">' + wordText + '</span>';
          }
        } else {
          var typed = token.text.substring(0, charCount - token.start);
          var untyped = token.text.substring(charCount - token.start);
          html += '<span class="inline-block whitespace-nowrap">' +
            '<span>' + escapeTypewriterHtml(typed) + '</span>' +
            (withCursor ? cursorHtml : '') +
            '<span style="visibility:hidden; user-select:none; pointer-events:none;" aria-hidden="true">' + escapeTypewriterHtml(untyped) + '</span>' +
          '</span>';
          if (withCursor) cursorPlaced = true;
        }
      }
    }

    if (withCursor && !cursorPlaced) {
      html += cursorHtml;
    }

    return html;
  }

  function renderTypewriter(fullPhrase, charCount) {
    if (!fullPhrase) return '<span class="typewriter-cursor" aria-hidden="true"></span>';

    var cursorHtml = '<span class="typewriter-cursor" aria-hidden="true"></span>';
    var lines = fullPhrase.split('\n');

    if (lines.length === 1) {
      return renderSingleLine(lines[0], charCount, true, cursorHtml);
    }

    var line1 = lines[0];
    var line2 = lines[1];

    if (charCount <= line1.length) {
      return renderSingleLine(line1, charCount, true, cursorHtml) +
             '<br>' +
             renderSingleLine(line2, 0, false, cursorHtml);
    } else {
      var line2CharCount = Math.max(0, charCount - (line1.length + 1));
      return renderSingleLine(line1, line1.length, false, cursorHtml) +
             '<br>' +
             renderSingleLine(line2, line2CharCount, true, cursorHtml);
    }
  }

  // The headline is only animated while it can be seen: it is a large gradient text, and
  // repainting it every 82 ms while the reader is further down the page (or in another tab)
  // only takes frame time away from scrolling and the companion.
  var isTypewriterOnScreen = true;
  var isTypewriterPaused = false;

  function canAnimateTypewriter() {
    return isTypewriterOnScreen && !document.hidden;
  }

  function resumeTypewriter() {
    if (!isTypewriterPaused || !canAnimateTypewriter()) return;
    isTypewriterPaused = false;
    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    typewriterTimeout = setTimeout(tickTypewriter, 120);
  }

  document.addEventListener('visibilitychange', resumeTypewriter);
  if ('IntersectionObserver' in window) {
    var observeTypewriter = function () {
      var wrap = document.getElementById('hero-typewriter-wrapper');
      if (!wrap) return;
      new IntersectionObserver(function (entries) {
        isTypewriterOnScreen = entries[entries.length - 1].isIntersecting;
        resumeTypewriter();
      }).observe(wrap);
    };
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', observeTypewriter);
    } else {
      observeTypewriter();
    }
  }

  function tickTypewriter() {
    var el = document.getElementById('hero-typewriter');
    if (!el || !activePhrases.length) return;

    if (!canAnimateTypewriter()) {
      // Stop scheduling; the observer or visibilitychange resumes from the same character.
      isTypewriterPaused = true;
      typewriterTimeout = null;
      return;
    }

    var fullPhrase = activePhrases[currentPhraseIndex % activePhrases.length];

    if (isDeleting) {
      currentCharIndex--;
    } else {
      currentCharIndex++;
    }

    el.innerHTML = renderTypewriter(fullPhrase, currentCharIndex);

    var delta = isDeleting ? 38 : 82;

    if (!isDeleting && currentCharIndex === fullPhrase.length) {
      delta = 3100;
      isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % activePhrases.length;
      delta = 500;
    }

    typewriterTimeout = setTimeout(tickTypewriter, delta);
  }

  // Reserves the height of the tallest phrase (at the current width), so the content below
  // the headline never moves while the phrases change.
  function reserveTypewriterHeight() {
    var wrap = document.getElementById('hero-typewriter-wrapper');
    var el = document.getElementById('hero-typewriter');
    if (!wrap || !el || !activePhrases.length) return;

    var probe = el.cloneNode(false);
    probe.removeAttribute('id');
    probe.setAttribute('aria-hidden', 'true');
    probe.style.cssText = 'visibility:hidden;position:absolute;pointer-events:none;width:' + wrap.clientWidth + 'px';
    wrap.appendChild(probe);

    // Only the active language counts, so each language reserves just the space it needs.
    var phrases = activePhrases.slice();

    var tallest = 0;
    phrases.forEach(function (phrase) {
      probe.innerHTML = escapeTypewriterHtml(phrase).replace(/\n/g, '<br>');
      tallest = Math.max(tallest, probe.getBoundingClientRect().height);
    });
    wrap.removeChild(probe);

    if (tallest > 0) wrap.style.minHeight = Math.ceil(tallest) + 'px';
  }

  var reserveResizeTimeout = null;
  window.addEventListener('resize', function () {
    if (reserveResizeTimeout) clearTimeout(reserveResizeTimeout);
    reserveResizeTimeout = setTimeout(reserveTypewriterHeight, 120);
  });
  window.addEventListener('load', reserveTypewriterHeight);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(reserveTypewriterHeight);

  function initTypewriter(phrases) {
    if (typewriterTimeout) {
      clearTimeout(typewriterTimeout);
      typewriterTimeout = null;
    }
    activePhrases = Array.isArray(phrases) && phrases.length ? phrases : [
      "Computer Science\nGraduating Senior"
    ];
    currentPhraseIndex = 0;
    currentCharIndex = 0;
    isDeleting = false;

    var el = document.getElementById('hero-typewriter');
    var cursor = document.getElementById('hero-typewriter-cursor');
    if (!el) return;

    reserveTypewriterHeight();

    if (cursor) cursor.style.display = 'none';

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.innerHTML = escapeTypewriterHtml(activePhrases[0]).replace(/\n/g, '<br>');
      return;
    }

    tickTypewriter();
  }

  // Each language is its own pre-rendered page (English at /, Spanish at /es/), so the text,
  // labels and alt texts are already in place. This only remembers the choice and moves
  // between the two pages, keeping the section the visitor was reading.
  function getPageLanguage() {
    return document.documentElement.lang === 'es' ? 'es' : 'en';
  }

  function languagePath(lang) {
    return lang === 'es' ? '/es/' : '/';
  }

  // The section the visitor is reading: the last one whose top has passed a third of the screen.
  function currentSectionHash() {
    var current = '';
    document.querySelectorAll('section[id]').forEach(function (section) {
      if (section.getBoundingClientRect().top <= window.innerHeight / 3) {
        current = section.id;
      }
    });
    return current && current !== 'hero' ? '#' + current : '';
  }

  function applyLanguage(lang) {
    var targetLang = lang === 'es' ? 'es' : 'en';
    localStorage.setItem('portfolio_lang', targetLang);
    if (targetLang !== getPageLanguage()) {
      window.location.href = languagePath(targetLang) + currentSectionHash();
    }
  }

  // Opens the other language at the section that was being read.
  function restoreSection() {
    var target = window.location.hash ? document.getElementById(window.location.hash.slice(1)) : null;
    if (!target) return;
    window.addEventListener('load', function () {
      target.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
  }

  function initI18n() {
    var pageLang = getPageLanguage();

    document.querySelectorAll('.lang-switch-btn[data-lang]').forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        applyLanguage(link.getAttribute('data-lang'));
      });
    });

    restoreSection();

    var dict = (typeof I18N !== 'undefined' && I18N[pageLang]) ? I18N[pageLang] : {};
    if (dict.hero_phrases) {
      initTypewriter(dict.hero_phrases);
    }

    if (window.PortfolioAudio && typeof window.PortfolioAudio.updateUI === 'function') {
      window.PortfolioAudio.updateUI();
    }
  }

  window.PortfolioI18n = {
    init: initI18n,
    applyLanguage: applyLanguage,
    initTypewriter: initTypewriter,
    escapeHtml: escapeTypewriterHtml
  };
})();
