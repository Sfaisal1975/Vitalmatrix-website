/* ═══════════════════════════════════════════════════════════════════════
   VitalMatrix — Shared Award-Winning Enhancements JS (Tier 2 Pages)
   6 universal enhancements for all non-homepage pages
   Date: 2 May 2026 | W05 Claude Code
   Constraints: No template literals, no default params, no localStorage
   GOVERNANCE: Page loader is cosmetic overlay only. All DOM content
   (MHRA, ICO, TM footer, governance) present from HTML parse time.
   ═══════════════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isMobile = window.innerWidth < 769;


  /* ═══ 6. PAGE LOADER — Architectural Reveal ═══ */
  (function initLoader() {
    if (reducedMotion) {
      document.body.classList.remove('vm-loading');
      var el = document.getElementById('vm-page-loader');
      if (el && el.parentNode) el.parentNode.removeChild(el);
      return;
    }

    var loader = document.getElementById('vm-page-loader');
    if (!loader) {
      /* Auto-inject loader if not in HTML */
      loader = document.createElement('div');
      loader.className = 'vm-loader';
      loader.id = 'vm-page-loader';
      loader.setAttribute('aria-hidden', 'true');
      loader.innerHTML = '<div class="vm-loader-logo"><img src="VM_Logo_1000_x_1000_px_png_New_Transparent.png" height="48" style="display:block;margin:0;padding:0;border:none;" alt="VitalMatrix"></div>' +
        '<div class="vm-loader-pentagon"><svg viewBox="0 0 120 120" fill="none"><polygon points="60,5 112,40 95,100 25,100 8,40" stroke="#C9A84C" stroke-width="1" fill="none"/></svg></div>' +
        '<div class="vm-loader-line"></div>';
      document.body.insertBefore(loader, document.body.firstChild);
      document.body.classList.add('vm-loading');
    }

    var logo = loader.querySelector('.vm-loader-logo');
    var pentagon = loader.querySelector('.vm-loader-pentagon');
    var line = loader.querySelector('.vm-loader-line');

    setTimeout(function() { if (logo) logo.classList.add('active'); }, 80);
    setTimeout(function() { if (pentagon) pentagon.classList.add('active'); }, 350);
    setTimeout(function() { if (pentagon) pentagon.classList.add('draw'); }, 500);
    setTimeout(function() { if (line) line.classList.add('draw'); }, 800);
    setTimeout(function() {
      loader.classList.add('vm-loader-done');
      document.body.classList.remove('vm-loading');
    }, 1500);
    setTimeout(function() {
      if (loader.parentNode) loader.parentNode.removeChild(loader);
    }, 2100);
  })();


  /* ═══ 1. SCROLL-VELOCITY-RESPONSIVE TRANSITIONS ═══ */
  (function initScrollVelocity() {
    if (reducedMotion) return;

    var lastY = window.pageYOffset;
    var lastTime = Date.now();
    var currentClass = '';
    var clearTimer = null;

    function tick() {
      var now = Date.now();
      var dt = now - lastTime;
      if (dt < 50) { requestAnimationFrame(tick); return; }

      var y = window.pageYOffset;
      var speed = Math.abs(y - lastY) / dt * 1000;

      var newClass = '';
      if (speed > 2000) newClass = 'vm-scroll-fast';
      else if (speed > 0 && speed < 300) newClass = 'vm-scroll-slow';

      if (newClass !== currentClass) {
        if (currentClass) document.body.classList.remove(currentClass);
        if (newClass) document.body.classList.add(newClass);
        currentClass = newClass;
      }

      if (clearTimer) clearTimeout(clearTimer);
      clearTimer = setTimeout(function() {
        if (currentClass) {
          document.body.classList.remove(currentClass);
          currentClass = '';
        }
      }, 250);

      lastY = y;
      lastTime = now;
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  })();


  /* ═══ 2. SMOOTH SCROLL ENGINE — DISABLED ═══
     Removed: wheel preventDefault conflicts with existing page scroll
     listeners and blocks native scroll during loader phase. Pages use
     native scroll-behavior:smooth (CSS) for anchor navigation instead.
     The remaining 5 enhancements deliver award-level feel without this. */


  /* ═══ 4. CARD PROXIMITY LIGHT ═══ */
  (function initProximityLight() {
    if (reducedMotion || isMobile) return;

    var selectors = [
      '.vm-problems-grid', '.vm-infra-grid', '.vm-compare-wrap table',
      '.grid-2', '.grid-3', '.grid-5',
      '.infrastructure-grid', '.vm-diff-grid',
      '.out-grid-top', '.out-grid-bottom', '.pp-grid',
      '[class*="card-grid"]', '[class*="stagger-grid"]'
    ];

    var grids = document.querySelectorAll(selectors.join(','));

    for (var i = 0; i < grids.length; i++) {
      (function(grid) {
        if (grid.querySelector('.vm-proximity-light')) return;
        grid.classList.add('vm-proximity-grid');
        var light = document.createElement('div');
        light.className = 'vm-proximity-light';
        light.setAttribute('aria-hidden', 'true');
        grid.appendChild(light);

        grid.addEventListener('mousemove', function(e) {
          var rect = grid.getBoundingClientRect();
          light.style.left = (e.clientX - rect.left) + 'px';
          light.style.top = (e.clientY - rect.top) + 'px';
        });
      })(grids[i]);
    }
  })();


  /* ═══ 5. TERRAIN MESH LIVING BACKGROUND ═══ */
  (function initTerrainBg() {
    if (reducedMotion) return;

    var existing = document.getElementById('vm-terrain-bg');
    if (existing) return;

    var bg = document.createElement('div');
    bg.className = 'vm-terrain-bg';
    bg.id = 'vm-terrain-bg';
    bg.setAttribute('aria-hidden', 'true');
    bg.innerHTML = '<svg viewBox="0 0 400 400" fill="none">' +
      '<polygon points="200,25 365,148 300,350 100,350 35,148" stroke="rgba(201,168,76,0.07)" stroke-width="0.5" fill="none"/>' +
      '<polygon points="200,95 310,182 275,305 125,305 90,182" stroke="rgba(26,122,138,0.05)" stroke-width="0.4" fill="none"/>' +
      '<polygon points="200,145 265,200 245,268 155,268 135,200" stroke="rgba(123,94,167,0.04)" stroke-width="0.3" fill="none"/>' +
      '<circle cx="200" cy="25" r="2.5" fill="rgba(201,168,76,0.10)"/>' +
      '<circle cx="35" cy="148" r="2.5" fill="rgba(26,122,138,0.08)"/>' +
      '<circle cx="365" cy="148" r="2.5" fill="rgba(74,144,196,0.07)"/>' +
      '<circle cx="300" cy="350" r="2.5" fill="rgba(123,94,167,0.07)"/>' +
      '<circle cx="100" cy="350" r="2.5" fill="rgba(95,124,108,0.07)"/>' +
      '</svg>';
    document.body.appendChild(bg);

    function checkVisibility() {
      var sections = document.querySelectorAll('section, [class*="-wrap"], [class*="-section"]');
      var isLight = false;
      for (var i = 0; i < sections.length; i++) {
        var rect = sections[i].getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5) {
          var bg = window.getComputedStyle(sections[i]).backgroundColor;
          var style = sections[i].getAttribute('style') || '';
          if (bg.indexOf('255') > -1 || style.indexOf('#FFF') > -1 || style.indexOf('#F5') > -1 || style.indexOf('#FBF') > -1 || style.indexOf('#A0A0A0') > -1) {
            isLight = true;
          }
          break;
        }
      }
      var el = document.getElementById('vm-terrain-bg');
      if (el) {
        if (isLight) el.classList.remove('visible');
        else el.classList.add('visible');
      }
    }

    window.addEventListener('scroll', checkVisibility, { passive: true });
    setTimeout(checkVisibility, 1800);
  })();


  /* ═══ 3. SPRING PHYSICS ═══ */
  /* Applied via CSS — no JS needed. The cubic-bezier override in
     vm-award-tier2.css handles all interactive element easing. */


  /* ═══ Console signature ═══ */
  console.log('%cVitalMatrix%c Award Tier 2 | 6 shared enhancements loaded',
    'color:#C9A84C;font-weight:bold;font-size:12px;',
    'color:#8BA5B8;font-size:10px;');

})();
