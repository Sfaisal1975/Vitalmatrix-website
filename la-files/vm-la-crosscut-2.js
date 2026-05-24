/* ================================================================
   VitalMatrix Living Architecture -- Cross-Cutting Upgrades 2
   CCU6:  Dark/Light Mode Toggle
   CCU7:  Responsive Tablet Layout (swipe gestures)
   CCU8:  Micro-Interaction Polish (runtime helpers)
   CCU9:  Export and Share System (URL hash state)
   CCU10: Collaboration Placeholder (modal system)
   Date: 13 May 2026 | W05 Claude Code
   Constraints: No template literals, no default params, no localStorage
   prefers-reduced-motion respected throughout
================================================================ */

(function() {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ================================================================
     CCU6: DARK / LIGHT MODE TOGGLE
     Respects prefers-color-scheme for initial state.
     Stores preference in URL hash (not localStorage).
  ================================================================ */
  (function initThemeToggle() {
    /* Determine initial theme */
    var hashTheme = ccu9ReadHash('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var initial;

    if (hashTheme === 'light' || hashTheme === 'dark') {
      initial = hashTheme;
    } else if (prefersDark || prefersDark === undefined) {
      initial = 'dark';
    } else {
      initial = 'light';
    }

    document.body.setAttribute('data-theme', initial);

    /* Create toggle button */
    var btn = document.createElement('button');
    btn.className = 'ccu6-theme-toggle';
    btn.setAttribute('aria-label', 'Toggle dark and light mode');
    btn.setAttribute('type', 'button');
    btn.innerHTML = '<svg class="ccu6-icon-sun" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<circle cx="10" cy="10" r="4" stroke="#C9A84C" stroke-width="1.5" fill="none"/>' +
      '<line x1="10" y1="1" x2="10" y2="4" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round"/>' +
      '<line x1="10" y1="16" x2="10" y2="19" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round"/>' +
      '<line x1="1" y1="10" x2="4" y2="10" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round"/>' +
      '<line x1="16" y1="10" x2="19" y2="10" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round"/>' +
      '<line x1="3.5" y1="3.5" x2="5.6" y2="5.6" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round"/>' +
      '<line x1="14.4" y1="14.4" x2="16.5" y2="16.5" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round"/>' +
      '<line x1="3.5" y1="16.5" x2="5.6" y2="14.4" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round"/>' +
      '<line x1="14.4" y1="5.6" x2="16.5" y2="3.5" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round"/>' +
      '</svg>' +
      '<svg class="ccu6-icon-moon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M15 12A7 7 0 0 1 8 5a7 7 0 1 0 7 7z" stroke="#C9A84C" stroke-width="1.5" fill="none"/>' +
      '</svg>';

    btn.addEventListener('click', function() {
      var current = document.body.getAttribute('data-theme');
      var next = (current === 'dark') ? 'light' : 'dark';
      document.body.setAttribute('data-theme', next);
      ccu9WriteHash('theme', next);
    });

    /* Insert into first header or body */
    var header = document.querySelector('.comp-header');
    if (header) {
      header.style.position = 'relative';
      header.appendChild(btn);
    } else {
      document.body.appendChild(btn);
    }
  })();


  /* ================================================================
     CCU7: RESPONSIVE TABLET LAYOUT -- SWIPE GESTURES
     Touch swipe on elements with .ccu7-swipeable class.
  ================================================================ */
  (function initSwipeGestures() {
    var startX = 0;
    var startY = 0;
    var threshold = 50;

    document.addEventListener('touchstart', function(e) {
      var target = findSwipeable(e.target);
      if (!target) return;
      var touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
    }, { passive: true });

    document.addEventListener('touchmove', function(e) {
      /* Allow native scroll -- passive listener */
    }, { passive: true });

    document.addEventListener('touchend', function(e) {
      var target = findSwipeable(e.target);
      if (!target) return;
      var touch = e.changedTouches[0];
      var dx = touch.clientX - startX;
      var dy = touch.clientY - startY;

      /* Only trigger horizontal swipe if horizontal distance > vertical */
      if (Math.abs(dx) < threshold || Math.abs(dx) < Math.abs(dy)) return;

      var direction = dx > 0 ? 'right' : 'left';

      /* Dispatch custom event */
      var evt;
      if (typeof CustomEvent === 'function') {
        evt = new CustomEvent('ccu7swipe', { detail: { direction: direction }, bubbles: true });
      } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent('ccu7swipe', true, true, { direction: direction });
      }
      target.dispatchEvent(evt);

      /* Default carousel behaviour: scroll by one child */
      var scrollAmount = target.offsetWidth * 0.8;
      if (direction === 'left') {
        target.scrollLeft = target.scrollLeft + scrollAmount;
      } else {
        target.scrollLeft = target.scrollLeft - scrollAmount;
      }
    }, { passive: true });

    function findSwipeable(el) {
      var node = el;
      var limit = 10;
      while (node && limit > 0) {
        if (node.classList && node.classList.contains('ccu7-swipeable')) {
          return node;
        }
        node = node.parentElement;
        limit--;
      }
      return null;
    }
  })();


  /* ================================================================
     CCU8: MICRO-INTERACTION POLISH -- RUNTIME HELPERS
     Gold dot custom cursor and empty state injection.
  ================================================================ */
  (function initMicroInteractions() {
    if (reducedMotion) return;

    /* Gold dot cursor */
    var dot = document.createElement('div');
    dot.style.cssText = 'position:absolute;width:8px;height:8px;border-radius:50%;' +
      'background:#C9A84C;pointer-events:none;z-index:10000;opacity:0;' +
      'transition:opacity 150ms ease,transform 150ms ease;transform:translate(-50%,-50%);';
    dot.setAttribute('aria-hidden', 'true');
    document.body.appendChild(dot);

    var dotVisible = false;

    document.addEventListener('mousemove', function(e) {
      if (!dotVisible) return;
      dot.style.left = e.pageX + 'px';
      dot.style.top = e.pageY + 'px';
    });

    document.addEventListener('mouseover', function(e) {
      var el = e.target;
      if (!el) return;
      var tag = el.tagName;
      var isInteractive = (tag === 'BUTTON' || tag === 'A' ||
        el.getAttribute('role') === 'button' ||
        el.classList.contains('ccu8-gold-cursor'));

      if (!isInteractive) {
        /* Check parent up to 3 levels */
        var p = el.parentElement;
        var i = 0;
        while (p && i < 3) {
          var pTag = p.tagName;
          if (pTag === 'BUTTON' || pTag === 'A' || p.getAttribute('role') === 'button') {
            isInteractive = true;
            break;
          }
          p = p.parentElement;
          i++;
        }
      }

      if (isInteractive) {
        dotVisible = true;
        dot.style.opacity = '1';
        dot.style.transform = 'translate(-50%,-50%) scale(1)';
      }
    });

    document.addEventListener('mouseout', function(e) {
      var el = e.target;
      if (!el) return;
      var tag = el.tagName;
      if (tag === 'BUTTON' || tag === 'A' ||
        el.getAttribute('role') === 'button' ||
        el.classList.contains('ccu8-gold-cursor')) {
        dotVisible = false;
        dot.style.opacity = '0';
        dot.style.transform = 'translate(-50%,-50%) scale(0.5)';
      }
    });
  })();

  /* Empty state helper: call vmShowEmptyState(container, message) */
  window.vmShowEmptyState = function(container, message) {
    if (!container) return;
    var msg = (message !== undefined && message !== null) ? message : 'No data available';
    var card = document.createElement('div');
    card.className = 'ccu8-empty-state';
    card.innerHTML = '<div class="ccu8-empty-state-title">Empty</div>' +
      '<p>' + msg + '</p>';
    container.innerHTML = '';
    container.appendChild(card);
  };


  /* ================================================================
     CCU9: EXPORT AND SHARE SYSTEM
     URL hash for state encoding. No patient data.
     Hash format: #key1=val1&key2=val2
  ================================================================ */

  /* --- Hash utilities (used by CCU6 and CCU9) --- */
  function ccu9ReadHash(key) {
    var hash = window.location.hash;
    if (!hash || hash.length < 2) return null;
    var pairs = hash.substring(1).split('&');
    for (var i = 0; i < pairs.length; i++) {
      var parts = pairs[i].split('=');
      if (decodeURIComponent(parts[0]) === key) {
        return parts.length > 1 ? decodeURIComponent(parts[1]) : '';
      }
    }
    return null;
  }

  function ccu9WriteHash(key, value) {
    var hash = window.location.hash;
    var pairs = [];
    if (hash && hash.length > 1) {
      pairs = hash.substring(1).split('&');
    }

    var found = false;
    for (var i = 0; i < pairs.length; i++) {
      var parts = pairs[i].split('=');
      if (decodeURIComponent(parts[0]) === key) {
        pairs[i] = encodeURIComponent(key) + '=' + encodeURIComponent(value);
        found = true;
        break;
      }
    }
    if (!found) {
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }

    window.location.hash = pairs.join('&');
  }

  function ccu9GetAllHash() {
    var result = {};
    var hash = window.location.hash;
    if (!hash || hash.length < 2) return result;
    var pairs = hash.substring(1).split('&');
    for (var i = 0; i < pairs.length; i++) {
      var parts = pairs[i].split('=');
      var k = decodeURIComponent(parts[0]);
      result[k] = parts.length > 1 ? decodeURIComponent(parts[1]) : '';
    }
    return result;
  }

  /* Expose hash readers globally for other scripts */
  window.ccu9ReadHash = ccu9ReadHash;
  window.ccu9WriteHash = ccu9WriteHash;
  window.ccu9GetAllHash = ccu9GetAllHash;

  /* --- Share View: encode current architectural state into URL --- */
  window.ccu9ShareView = function() {
    /* Collect active zones */
    var zoneInputs = document.querySelectorAll('input[type="range"][class*="z"]');
    for (var i = 0; i < zoneInputs.length; i++) {
      var input = zoneInputs[i];
      var id = input.id || input.getAttribute('data-zone') || ('z' + i);
      ccu9WriteHash(id, input.value);
    }

    /* Record theme */
    var theme = document.body.getAttribute('data-theme') || 'dark';
    ccu9WriteHash('theme', theme);

    /* Record any active tab/mode */
    var activeTab = document.querySelector('[data-tab].active, [data-tab][aria-selected="true"]');
    if (activeTab) {
      ccu9WriteHash('tab', activeTab.getAttribute('data-tab'));
    }

    return window.location.href;
  };

  /* --- Restore state from hash on load --- */
  (function restoreFromHash() {
    var state = ccu9GetAllHash();
    var keys = [];
    for (var k in state) {
      if (state.hasOwnProperty(k)) {
        keys.push(k);
      }
    }

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var val = state[key];

      if (key === 'theme') continue; /* Handled by CCU6 */

      if (key === 'tab') {
        var tabEl = document.querySelector('[data-tab="' + val + '"]');
        if (tabEl) tabEl.click();
        continue;
      }

      /* Try to find matching range input */
      var input = document.getElementById(key) ||
        document.querySelector('input[data-zone="' + key + '"]');
      if (input && input.type === 'range') {
        input.value = val;
        /* Trigger change event */
        var changeEvt;
        if (typeof Event === 'function') {
          changeEvt = new Event('input', { bubbles: true });
        } else {
          changeEvt = document.createEvent('Event');
          changeEvt.initEvent('input', true, true);
        }
        input.dispatchEvent(changeEvt);
      }
    }
  })();

  /* --- Copy Link button handler --- */
  window.ccu9CopyLink = function(btnElement) {
    var url = ccu9ShareView();
    ccu9CopyToClipboard(url, btnElement);
  };

  /* --- Export as Text --- */
  window.ccu9ExportText = function(btnElement) {
    var lines = [];
    lines.push('VitalMatrix Terrain View Export');
    lines.push('Date: ' + new Date().toLocaleDateString('en-GB'));
    lines.push('');

    /* Theme */
    var theme = document.body.getAttribute('data-theme') || 'dark';
    lines.push('Theme: ' + theme);

    /* Zone values */
    var zoneInputs = document.querySelectorAll('input[type="range"][class*="z"]');
    if (zoneInputs.length > 0) {
      lines.push('');
      lines.push('Zone Values:');
      for (var i = 0; i < zoneInputs.length; i++) {
        var input = zoneInputs[i];
        var label = input.id || input.getAttribute('data-zone') || ('Zone ' + (i + 1));
        lines.push('  ' + label + ': ' + input.value);
      }
    }

    /* Active tab */
    var activeTab = document.querySelector('[data-tab].active, [data-tab][aria-selected="true"]');
    if (activeTab) {
      lines.push('');
      lines.push('Active view: ' + (activeTab.getAttribute('data-tab') || 'unknown'));
    }

    lines.push('');
    lines.push('URL: ' + window.location.href);
    lines.push('');
    lines.push('VitalMatrix Ltd | ICO ZC101813');

    var text = lines.join('\n');
    ccu9CopyToClipboard(text, btnElement);
  };

  /* --- Print View --- */
  window.ccu9PrintView = function() {
    window.print();
  };

  /* --- Shared clipboard copy with button feedback --- */
  function ccu9CopyToClipboard(text, btnElement) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function() {
        ccu9ShowCopied(btnElement);
      });
    } else {
      /* Fallback: textarea copy */
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:absolute;left:-9999px;top:-9999px;';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) { /* silent */ }
      document.body.removeChild(ta);
      ccu9ShowCopied(btnElement);
    }
  }

  function ccu9ShowCopied(btn) {
    if (!btn) return;
    btn.classList.add('ccu9-copied');
    setTimeout(function() {
      btn.classList.remove('ccu9-copied');
    }, 1500);
  }

  /* --- Inject CCU9 toolbar into pages --- */
  (function injectToolbar() {
    var containers = document.querySelectorAll('.ccu9-toolbar-mount');
    for (var i = 0; i < containers.length; i++) {
      var toolbar = document.createElement('div');
      toolbar.className = 'ccu9-toolbar';
      toolbar.setAttribute('role', 'toolbar');
      toolbar.setAttribute('aria-label', 'Export and share tools');

      toolbar.innerHTML =
        '<button type="button" class="ccu9-btn" onclick="ccu9ShareView()" aria-label="Share current view">' +
          '<span class="ccu9-btn-label">Share View</span>' +
          '<svg class="ccu9-check" viewBox="0 0 14 14" fill="none"><polyline points="2,7 6,11 12,3" stroke="#C9A84C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
        '</button>' +
        '<button type="button" class="ccu9-btn" onclick="ccu9CopyLink(this)" aria-label="Copy shareable link">' +
          '<span class="ccu9-btn-label">Copy Link</span>' +
          '<svg class="ccu9-check" viewBox="0 0 14 14" fill="none"><polyline points="2,7 6,11 12,3" stroke="#C9A84C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
        '</button>' +
        '<button type="button" class="ccu9-btn" onclick="ccu9ExportText(this)" aria-label="Export as plain text">' +
          '<span class="ccu9-btn-label">Export as Text</span>' +
          '<svg class="ccu9-check" viewBox="0 0 14 14" fill="none"><polyline points="2,7 6,11 12,3" stroke="#C9A84C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
        '</button>' +
        '<button type="button" class="ccu9-btn" onclick="ccu9PrintView()" aria-label="Open print view">' +
          '<span class="ccu9-btn-label">Print View</span>' +
        '</button>';

      containers[i].appendChild(toolbar);
    }
  })();


  /* ================================================================
     CCU10: COLLABORATION PLACEHOLDER
     Modal with focus trap, Escape to close, ARIA labels.
  ================================================================ */
  var ccu10OverlayEl = null;
  var ccu10LastFocused = null;

  function ccu10CreateModal() {
    if (ccu10OverlayEl) return ccu10OverlayEl;

    var overlay = document.createElement('div');
    overlay.className = 'ccu10-modal-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Collaboration coming soon');
    overlay.setAttribute('tabindex', '-1');

    var modal = document.createElement('div');
    modal.className = 'ccu10-modal';

    var closeBtn = document.createElement('button');
    closeBtn.className = 'ccu10-modal-close';
    closeBtn.setAttribute('type', 'button');
    closeBtn.setAttribute('aria-label', 'Close dialogue');
    closeBtn.textContent = '\u00D7';

    var badge = document.createElement('span');
    badge.className = 'ccu10-coming-soon';
    badge.textContent = 'Coming Soon';

    var title = document.createElement('h3');
    title.className = 'ccu10-modal-title';
    title.textContent = 'Collaborative Terrain Review';

    var text = document.createElement('p');
    text.className = 'ccu10-modal-text';
    text.textContent = 'Collaborative terrain review is coming in Phase 2. ' +
      'In the meantime, use Export to share your current view.';

    var cta = document.createElement('a');
    cta.className = 'ccu10-modal-cta';
    cta.href = '/book/';
    cta.textContent = 'Book a Discovery Call';

    modal.appendChild(closeBtn);
    modal.appendChild(badge);
    modal.appendChild(title);
    modal.appendChild(text);
    modal.appendChild(cta);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    /* Close handlers */
    closeBtn.addEventListener('click', function() { ccu10CloseModal(); });
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) ccu10CloseModal();
    });

    /* Keyboard: Escape to close, Tab trap */
    overlay.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' || e.keyCode === 27) {
        ccu10CloseModal();
        return;
      }
      if (e.key === 'Tab' || e.keyCode === 9) {
        ccu10TrapFocus(e, modal);
      }
    });

    ccu10OverlayEl = overlay;
    return overlay;
  }

  function ccu10TrapFocus(e, container) {
    var focusable = container.querySelectorAll(
      'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;

    var first = focusable[0];
    var last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  function ccu10OpenModal() {
    var overlay = ccu10CreateModal();
    ccu10LastFocused = document.activeElement;
    overlay.classList.add('ccu10-active');

    /* Focus the close button */
    var closeBtn = overlay.querySelector('.ccu10-modal-close');
    if (closeBtn) {
      setTimeout(function() { closeBtn.focus(); }, 50);
    }
  }

  function ccu10CloseModal() {
    if (!ccu10OverlayEl) return;
    ccu10OverlayEl.classList.remove('ccu10-active');
    if (ccu10LastFocused) {
      ccu10LastFocused.focus();
      ccu10LastFocused = null;
    }
  }

  /* Expose globally */
  window.ccu10OpenModal = ccu10OpenModal;
  window.ccu10CloseModal = ccu10CloseModal;

  /* --- Inject "Share with Colleague" buttons into .ccu10-share-mount elements --- */
  (function injectShareButtons() {
    var mounts = document.querySelectorAll('.ccu10-share-mount');
    for (var i = 0; i < mounts.length; i++) {
      var btn = document.createElement('button');
      btn.className = 'ccu10-share-btn';
      btn.setAttribute('type', 'button');
      btn.setAttribute('aria-label', 'Share with colleague');
      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none">' +
        '<circle cx="4" cy="5" r="2" stroke="#2A9BAD" stroke-width="1.2"/>' +
        '<circle cx="10" cy="5" r="2" stroke="#2A9BAD" stroke-width="1.2"/>' +
        '<path d="M1 12c0-2 1.5-3 3-3s3 1 3 3" stroke="#2A9BAD" stroke-width="1.2"/>' +
        '<path d="M7 12c0-2 1.5-3 3-3s3 1 3 3" stroke="#2A9BAD" stroke-width="1.2"/>' +
        '</svg> Share with Colleague';
      btn.addEventListener('click', function() { ccu10OpenModal(); });
      mounts[i].appendChild(btn);
    }
  })();

})();
