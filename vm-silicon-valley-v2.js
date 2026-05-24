/* ================================================================
   VITALMATRIX SILICON VALLEY V2 — Award-Winning Upgrade
   Cursor Intelligence + Sound + Loading + Cmd+K + Transitions
   13 May 2026 | VitalMatrix Ltd | ICO ZC101813
   Load AFTER vm-silicon-valley.js
================================================================ */
(function() {
  'use strict';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ══ 1. CURSOR INTELLIGENCE ══ */
  function initCursorIntelligence() {
    if (reduced || window.innerWidth < 768) return;

    // Spotlight gradient following cursor on dark sections
    var sections = document.querySelectorAll('section[style*="background"]');
    sections.forEach(function(sec) {
      var bg = sec.style.background || sec.style.backgroundColor || '';
      if (bg.indexOf('#0D2B4E') !== -1 || bg.indexOf('#1A2030') !== -1 || bg.indexOf('#0C4452') !== -1 || bg.indexOf('prussian') !== -1 || bg.indexOf('charcoal') !== -1 || bg.indexOf('deep-teal') !== -1 || bg.indexOf('deep_teal') !== -1) {
        sec.style.position = sec.style.position || 'relative';
        sec.style.overflow = 'hidden';
        var glow = document.createElement('div');
        glow.style.cssText = 'position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(201,168,76,0.04) 0%,transparent 70%);pointer-events:none;z-index:0;transition:transform 0.15s ease-out;will-change:transform;display:none';
        sec.appendChild(glow);
        sec.addEventListener('mouseenter', function() { glow.style.display = 'block'; });
        sec.addEventListener('mouseleave', function() { glow.style.display = 'none'; });
        sec.addEventListener('mousemove', function(e) {
          var rect = sec.getBoundingClientRect();
          glow.style.transform = 'translate(' + (e.clientX - rect.left - 200) + 'px,' + (e.clientY - rect.top - 200) + 'px)';
        });
      }
    });

    // Magnetic buttons
    var btns = document.querySelectorAll('.vm-cta-primary, .vm-cta-explore, button[class*="vm-"]');
    btns.forEach(function(btn) {
      btn.addEventListener('mousemove', function(e) {
        var rect = btn.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        var dx = (e.clientX - cx) * 0.15;
        var dy = (e.clientY - cy) * 0.15;
        btn.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
      });
      btn.addEventListener('mouseleave', function() {
        btn.style.transform = '';
        btn.style.transition = 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)';
      });
    });

    // 3D tilt on cards
    var cards = document.querySelectorAll('[class*="card"]:not(.vm-no-tilt), [class*="vm-glass"], [class*="la3-ly"]');
    cards.forEach(function(card) {
      card.addEventListener('mousemove', function(e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = 'perspective(800px) rotateY(' + (x * 6) + 'deg) rotateX(' + (-y * 6) + 'deg) translateY(-2px)';
        card.style.transition = 'transform 0.1s ease-out';
      });
      card.addEventListener('mouseleave', function() {
        card.style.transform = '';
        card.style.transition = 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)';
      });
    });
  }

  /* ══ 2. SOUND DESIGN ══ */
  var audioCtx = null;
  function getAudioCtx() {
    if (!audioCtx) {
      try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
    }
    return audioCtx;
  }
  function playTone(freq, dur, vol) {
    var ctx = getAudioCtx();
    if (!ctx) return;
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.value = vol || 0.03;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (dur || 0.1));
    osc.stop(ctx.currentTime + (dur || 0.1));
  }
  function initSound() {
    if (localStorage.getItem('vm-sound') === 'off') return;

    // Click sound on buttons
    document.addEventListener('click', function(e) {
      var target = e.target.closest('button, .vm-cta-primary, .vm-cta-explore, [onclick]');
      if (target) playTone(880, 0.06, 0.02);
    });

    // Toggle sound on checkboxes/toggles
    document.addEventListener('change', function(e) {
      if (e.target.type === 'checkbox' || e.target.type === 'radio') {
        playTone(e.target.checked ? 1047 : 523, 0.08, 0.02);
      }
    });

    // Slider tick
    document.addEventListener('input', function(e) {
      if (e.target.type === 'range') {
        playTone(660 + parseInt(e.target.value) * 2, 0.03, 0.01);
      }
    });
  }

  /* ══ 3. LOADING STATES ══ */
  function initLoadingStates() {
    var style = document.createElement('style');
    style.textContent = [
      '@keyframes vmShimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}',
      '.vm-skeleton{background:linear-gradient(90deg,rgba(255,255,255,0.03) 25%,rgba(255,255,255,0.06) 50%,rgba(255,255,255,0.03) 75%);background-size:200% 100%;animation:vmShimmer 1.5s ease-in-out infinite;border-radius:8px;min-height:40px}',
      '.vm-loading-dot{display:inline-block;width:6px;height:6px;border-radius:50%;background:#C9A84C;animation:vmLoadPulse 1s ease-in-out infinite}',
      '.vm-loading-dot:nth-child(2){animation-delay:0.15s}',
      '.vm-loading-dot:nth-child(3){animation-delay:0.3s}',
      '@keyframes vmLoadPulse{0%,100%{opacity:0.3;transform:scale(0.8)}50%{opacity:1;transform:scale(1.2)}}',
      /* Branded page transition */
      '.vm-page-fade{animation:vmPageFade 0.4s ease-out}',
      '@keyframes vmPageFade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}',
    ].join('\n');
    document.head.appendChild(style);

    // Apply page fade on load
    document.body.classList.add('vm-page-fade');

    // Add skeleton to iframes while loading
    var iframes = document.querySelectorAll('iframe');
    iframes.forEach(function(iframe) {
      var wrapper = iframe.parentElement;
      if (!wrapper) return;
      var skeleton = document.createElement('div');
      skeleton.className = 'vm-skeleton';
      skeleton.style.cssText = 'position:absolute;inset:0;z-index:1;display:flex;align-items:center;justify-content:center;gap:6px';
      skeleton.innerHTML = '<span class="vm-loading-dot"></span><span class="vm-loading-dot"></span><span class="vm-loading-dot"></span>';
      wrapper.style.position = wrapper.style.position || 'relative';
      wrapper.appendChild(skeleton);
      iframe.addEventListener('load', function() { skeleton.remove(); });
    });
  }

  /* ══ 4. COMMAND PALETTE (Cmd+K) ══ */
  function initCommandPalette() {
    var palette = document.createElement('div');
    palette.id = 'vm-cmd-palette';
    palette.style.cssText = 'display:none;position:fixed;inset:0;z-index:99998;background:rgba(0,0,0,0.6);backdrop-filter:blur(8px);align-items:flex-start;justify-content:center;padding-top:20vh';

    var box = document.createElement('div');
    box.style.cssText = 'width:560px;max-width:90vw;background:#1A2030;border:1px solid rgba(201,168,76,0.20);border-radius:14px;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,0.5)';

    var input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Jump to section, zone, or mnemonic...';
    input.style.cssText = 'width:100%;padding:16px 20px;background:transparent;border:none;border-bottom:1px solid rgba(255,255,255,0.08);color:#F4F4F2;font-family:Outfit,sans-serif;font-size:16px;outline:none';

    var results = document.createElement('div');
    results.id = 'vm-cmd-results';
    results.style.cssText = 'max-height:320px;overflow-y:auto;padding:8px';

    box.appendChild(input);
    box.appendChild(results);
    palette.appendChild(box);
    document.body.appendChild(palette);

    // Build search index from headings and sections
    var items = [];
    document.querySelectorAll('h1, h2, h3, section[id], [id*="vm-"]').forEach(function(el) {
      var text = el.textContent.trim().substring(0, 80);
      var id = el.id || (el.closest('section') || {}).id || '';
      if (text && text.length > 2) {
        items.push({ text: text.toLowerCase(), label: text, id: id, el: el });
      }
    });

    // Add mnemonic shortcuts
    var mnemonics = ['FLINT','NCZ','VOLTERRAIN','VANTAGE','TerrainSpiral','GRADE','CLVF','VERITY','NEXUS','MODES','CascadeAtlas','TerrainLock','DRD','APEX','KINETICS','DeltaScan','TRACE','TIQ','RECON','COMPASS'];
    mnemonics.forEach(function(m) {
      items.push({ text: m.toLowerCase(), label: m + '\u2122', id: '', el: null, mnemonic: true });
    });

    function showPalette() {
      palette.style.display = 'flex';
      input.value = '';
      input.focus();
      renderResults('');
    }
    function hidePalette() {
      palette.style.display = 'none';
    }
    function renderResults(query) {
      var q = query.toLowerCase().trim();
      var matches = q ? items.filter(function(it) { return it.text.indexOf(q) !== -1; }).slice(0, 10) : items.slice(0, 8);
      var html = '';
      matches.forEach(function(m, i) {
        html += '<div class="vm-cmd-item" data-idx="' + i + '" style="padding:10px 16px;border-radius:8px;cursor:pointer;display:flex;align-items:center;gap:10px;transition:background 0.15s;' + (i === 0 ? 'background:rgba(201,168,76,0.08);' : '') + '" onmouseover="this.style.background=\'rgba(201,168,76,0.08)\'" onmouseout="this.style.background=\'\'">';
        html += '<span style="font-family:DM Mono,monospace;font-size:10px;color:rgba(244,244,242,0.30);width:20px">' + (m.mnemonic ? '\u2122' : '\u2192') + '</span>';
        html += '<span style="font-family:Outfit,sans-serif;font-size:14px;color:#F4F4F2">' + m.label + '</span>';
        html += '</div>';
      });
      results.innerHTML = html || '<div style="padding:16px;text-align:center;color:rgba(244,244,242,0.25);font-size:13px">No results</div>';

      // Click handlers
      results.querySelectorAll('.vm-cmd-item').forEach(function(item, i) {
        item.addEventListener('click', function() {
          var match = matches[i];
          if (match && match.el) {
            match.el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            match.el.style.outline = '2px solid #C9A84C';
            setTimeout(function() { match.el.style.outline = ''; }, 2000);
          }
          hidePalette();
        });
      });
    }

    input.addEventListener('input', function() { renderResults(input.value); });
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') hidePalette();
      if (e.key === 'Enter') {
        var first = results.querySelector('.vm-cmd-item');
        if (first) first.click();
      }
    });
    palette.addEventListener('click', function(e) {
      if (e.target === palette) hidePalette();
    });

    // Cmd+K / Ctrl+K shortcut
    document.addEventListener('keydown', function(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (palette.style.display === 'flex') hidePalette();
        else showPalette();
      }
    });

    // Add hint to page
    var hint = document.createElement('div');
    hint.style.cssText = 'position:fixed;bottom:16px;right:16px;z-index:999;font-family:DM Mono,monospace;font-size:10px;color:rgba(244,244,242,0.20);padding:6px 12px;background:rgba(13,43,78,0.80);border:1px solid rgba(201,168,76,0.10);border-radius:6px;pointer-events:none';
    hint.textContent = 'Ctrl+K to search';
    document.body.appendChild(hint);
    setTimeout(function() { hint.style.transition = 'opacity 2s'; hint.style.opacity = '0'; }, 5000);
  }

  /* ══ 5. MICRO-COPY WARMTH ══ */
  function initMicroCopy() {
    // Warm empty states
    var empties = document.querySelectorAll('[class*="placeholder"], [style*="dashed"]');
    empties.forEach(function(el) {
      if (el.textContent.trim() === '' || el.textContent.indexOf('to be completed') !== -1) {
        if (!el.querySelector('.vm-empty-state')) {
          var warm = document.createElement('div');
          warm.className = 'vm-empty-state';
          warm.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:6px;opacity:0.3';
          warm.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg><span style="font-size:11px">Your notes here</span>';
        }
      }
    });
  }

  /* ══ 6. DARK/LIGHT MODE TOGGLE ══ */
  function initThemeToggle() {
    var toggle = document.createElement('button');
    toggle.id = 'vm-theme-toggle';
    toggle.setAttribute('aria-label', 'Toggle dark/light mode');
    toggle.style.cssText = 'position:fixed;bottom:16px;left:16px;z-index:999;width:36px;height:36px;border-radius:50%;border:1px solid rgba(201,168,76,0.20);background:rgba(13,43,78,0.80);backdrop-filter:blur(8px);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.3s;color:rgba(244,244,242,0.50)';
    toggle.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';

    var isLight = false;
    var lightStyle = document.createElement('style');
    lightStyle.id = 'vm-light-mode';

    toggle.addEventListener('click', function() {
      isLight = !isLight;
      if (isLight) {
        lightStyle.textContent = 'body{background:#F4F4F2 !important;color:#0D2B4E !important}section[style*="background:#0D2B4E"],section[style*="background:var(--vm-prussian)"]{background:#F4F4F2 !important;color:#0D2B4E !important}section[style*="background:#1A2030"],section[style*="background:var(--vm-charcoal)"]{background:#E8E6E2 !important;color:#0D2B4E !important}section[style*="background:#0C4452"],section[style*="background:var(--vm-deep-teal)"]{background:#E0EEF0 !important;color:#0D2B4E !important}';
        document.head.appendChild(lightStyle);
        toggle.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
        playTone(1047, 0.08, 0.02);
      } else {
        if (lightStyle.parentNode) lightStyle.parentNode.removeChild(lightStyle);
        toggle.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
        playTone(523, 0.08, 0.02);
      }
    });

    document.body.appendChild(toggle);
  }

  /* ══ 7. PRESENCE INDICATOR ══ */
  function initPresence() {
    var presence = document.createElement('div');
    presence.style.cssText = 'position:fixed;top:60px;right:16px;z-index:998;display:flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(13,43,78,0.85);backdrop-filter:blur(8px);border:1px solid rgba(201,168,76,0.10);border-radius:20px;font-family:DM Mono,monospace;font-size:10px;color:rgba(244,244,242,0.40);opacity:0;transition:opacity 1s ease';
    presence.innerHTML = '<span style="width:6px;height:6px;border-radius:50%;background:#1F7A3A;display:inline-block"></span> Dr Faisal is viewing this terrain';
    document.body.appendChild(presence);
    setTimeout(function() { presence.style.opacity = '1'; }, 3000);
    setTimeout(function() { presence.style.opacity = '0'; }, 8000);
  }

  /* ══ 8. SCROLL PROGRESS SECTIONS ══ */
  function initScrollSections() {
    if (reduced) return;
    var sections = document.querySelectorAll('section[id]');
    if (sections.length < 3) return;

    var dots = document.createElement('div');
    dots.style.cssText = 'position:fixed;right:12px;top:50%;transform:translateY(-50%);z-index:997;display:flex;flex-direction:column;gap:6px';

    sections.forEach(function(sec, i) {
      if (i > 15) return; // Max 15 dots
      var dot = document.createElement('div');
      dot.style.cssText = 'width:6px;height:6px;border-radius:50%;background:rgba(244,244,242,0.12);transition:all 0.3s;cursor:pointer';
      dot.setAttribute('title', sec.getAttribute('aria-label') || sec.id);
      dot.addEventListener('click', function() {
        sec.scrollIntoView({ behavior: 'smooth' });
      });
      dots.appendChild(dot);
    });

    document.body.appendChild(dots);

    // Highlight current section
    var sectionObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        var idx = Array.prototype.indexOf.call(sections, entry.target);
        if (idx >= 0 && idx < dots.children.length) {
          dots.children[idx].style.background = entry.isIntersecting ? '#C9A84C' : 'rgba(244,244,242,0.12)';
          dots.children[idx].style.width = entry.isIntersecting ? '8px' : '6px';
          dots.children[idx].style.height = entry.isIntersecting ? '8px' : '6px';
        }
      });
    }, { threshold: 0.3 });
    sections.forEach(function(sec) { sectionObs.observe(sec); });
  }

  /* ══ INIT ══ */
  function init() {
    initCursorIntelligence();
    initSound();
    initLoadingStates();
    initCommandPalette();
    initMicroCopy();
    initThemeToggle();
    initPresence();
    initScrollSections();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
