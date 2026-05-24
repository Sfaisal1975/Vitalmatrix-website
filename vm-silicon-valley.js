/* ================================================================
   VITALMATRIX SILICON VALLEY UPGRADE — JS
   Performance + Mobile + Accessibility + Animation + Consistency
   13 May 2026 | VitalMatrix Ltd | ICO ZC101813
   Load on ALL pages via <script src="vm-silicon-valley.js" defer>
================================================================ */
(function() {
  'use strict';

  /* ══ 1. PERFORMANCE: Lazy-load sections ══ */
  function initLazyLoad() {
    var sections = document.querySelectorAll('section, [id*="vm-la"], [id*="vm-ca-"], [id*="vm-tl-"], [id*="vm-ti-"], [id*="vm-ncz2-"], [id*="vm-mnemo-"], [id*="vm-learn-"]');
    if (!sections.length || !window.IntersectionObserver) return;

    sections.forEach(function(sec) {
      var children = sec.querySelectorAll('canvas, iframe, svg[viewBox]');
      children.forEach(function(child) {
        if (child.tagName === 'IFRAME') {
          var src = child.getAttribute('src');
          if (src) {
            child.setAttribute('data-src', src);
            child.removeAttribute('src');
            child.style.minHeight = '200px';
            child.style.background = '#0D2B4E';
          }
        }
      });
    });

    var lazyObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var iframes = entry.target.querySelectorAll('iframe[data-src]');
          iframes.forEach(function(iframe) {
            iframe.src = iframe.getAttribute('data-src');
            iframe.removeAttribute('data-src');
          });
          lazyObs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '200px 0px' });

    sections.forEach(function(sec) { lazyObs.observe(sec); });
  }

  /* ══ 2. MOBILE: Touch-friendly upgrades ══ */
  function initMobile() {
    if (window.innerWidth > 768) return;

    // Make slider inputs larger on touch
    var sliders = document.querySelectorAll('input[type="range"]');
    sliders.forEach(function(slider) {
      slider.style.height = '32px';
      slider.style.cursor = 'pointer';
    });

    // Make clickable elements larger
    var buttons = document.querySelectorAll('button, [onclick], .vm-cta-explore, .vm-cta-primary, .vm-cta-inline');
    buttons.forEach(function(btn) {
      var rect = btn.getBoundingClientRect();
      if (rect.height < 44) {
        btn.style.minHeight = '44px';
        btn.style.display = 'inline-flex';
        btn.style.alignItems = 'center';
      }
    });

    // Fix pentagon SVGs on small screens
    var svgs = document.querySelectorAll('svg[viewBox]');
    svgs.forEach(function(svg) {
      svg.style.maxWidth = '100%';
      svg.style.height = 'auto';
    });

    // Stack grids to single column
    var grids = document.querySelectorAll('[style*="grid-template-columns: repeat"], [style*="grid-template-columns:repeat"]');
    grids.forEach(function(grid) {
      var cols = grid.style.gridTemplateColumns;
      if (cols && cols.indexOf('repeat') !== -1) {
        grid.style.gridTemplateColumns = '1fr';
      }
    });
  }

  /* ══ 3. ACCESSIBILITY: ARIA + keyboard + focus ══ */
  function initAccessibility() {
    // Add ARIA labels to interactive sections
    var sections = document.querySelectorAll('section[id]');
    sections.forEach(function(sec) {
      if (!sec.getAttribute('aria-label')) {
        var heading = sec.querySelector('h2, h3');
        if (heading) {
          sec.setAttribute('aria-label', heading.textContent.trim());
        }
      }
    });

    // Make clickable divs keyboard accessible
    var clickables = document.querySelectorAll('[onclick]');
    clickables.forEach(function(el) {
      if (!el.getAttribute('tabindex')) {
        el.setAttribute('tabindex', '0');
        el.setAttribute('role', 'button');
      }
      el.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          el.click();
        }
      });
    });

    // Add focus ring style
    var style = document.createElement('style');
    style.textContent = '*:focus-visible{outline:2px solid #C9A84C !important;outline-offset:2px !important;border-radius:4px}';
    document.head.appendChild(style);

    // Add skip-to-content link
    var skip = document.createElement('a');
    skip.href = '#main-content';
    skip.textContent = 'Skip to content';
    skip.className = 'vm-skip-link';
    skip.style.cssText = 'position:fixed;top:-50px;left:16px;z-index:99999;background:#C9A84C;color:#0D2B4E;padding:8px 16px;border-radius:0 0 6px 6px;font-family:Outfit,sans-serif;font-size:14px;font-weight:600;text-decoration:none;transition:top 0.2s';
    skip.addEventListener('focus', function() { skip.style.top = '0'; });
    skip.addEventListener('blur', function() { skip.style.top = '-50px'; });
    document.body.insertBefore(skip, document.body.firstChild);

    // Label main content
    var main = document.querySelector('main, [role="main"], section:first-of-type');
    if (main && !main.id) main.id = 'main-content';

    // ARIA live region for dynamic updates
    var live = document.createElement('div');
    live.setAttribute('aria-live', 'polite');
    live.setAttribute('aria-atomic', 'true');
    live.className = 'vm-sr-only';
    live.style.cssText = 'position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0';
    document.body.appendChild(live);
    window.vmAnnounce = function(text) { live.textContent = text; };
  }

  /* ══ 4. ANIMATION: Spring physics + micro-interactions ══ */
  function initAnimations() {
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Spring-physics hover on all cards
    var style = document.createElement('style');
    style.textContent = [
      '.vm-spring-hover{transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.3s ease !important}',
      '.vm-spring-hover:hover{transform:translateY(-4px) scale(1.01) !important}',
      '.vm-spring-hover:active{transform:translateY(-1px) scale(0.99) !important;transition-duration:0.1s !important}',
      /* Smooth reveal for scroll-triggered elements */
      '.vm-smooth-reveal{opacity:0;transform:translateY(20px);transition:opacity 0.6s cubic-bezier(0.16,1,0.3,1),transform 0.6s cubic-bezier(0.16,1,0.3,1)}',
      '.vm-smooth-reveal.visible{opacity:1;transform:translateY(0)}',
      /* Pulse animation for active states */
      '@keyframes vmSoftPulse{0%,100%{box-shadow:0 0 0 0 rgba(201,168,76,0.2)}50%{box-shadow:0 0 0 8px rgba(201,168,76,0)}}',
      '.vm-pulse-active{animation:vmSoftPulse 2s ease-in-out infinite}',
      /* Button press feedback */
      'button:active,.vm-cta-primary:active,.vm-cta-explore:active{transform:scale(0.97) !important;transition-duration:0.08s !important}',
      /* Smooth number transitions */
      '.vm-number-transition{transition:all 0.3s cubic-bezier(0.16,1,0.3,1)}',
    ].join('\n');
    document.head.appendChild(style);

    // Apply spring hover to card-like elements
    var cards = document.querySelectorAll('[class*="card"], [class*="vm-glass"], [class*="la3-ly"], [class*="pipeline-stage"], [class*="vm-trust-card"]');
    cards.forEach(function(card) {
      card.classList.add('vm-spring-hover');
    });

    // Smooth scroll-reveal observer
    var revealTargets = document.querySelectorAll('[class*="animate-on-scroll"]:not(.visible), .vm-smooth-reveal:not(.visible)');
    if (revealTargets.length) {
      var revealObs = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
      revealTargets.forEach(function(el) { revealObs.observe(el); });
    }
  }

  /* ══ 5. DESIGN CONSISTENCY: Unify spacing, fonts, borders ══ */
  function initConsistency() {
    var style = document.createElement('style');
    style.textContent = [
      /* Unified card radius */
      '[class*="card"],[class*="vm-glass"],[class*="la3-ly"],[class*="pipeline-stage"],[class*="vm-trust-card"],[id*="vm-ca-"],[id*="vm-tl-"],[id*="vm-ti-"],[id*="vm-ncz2-"],[id*="vm-mnemo-"],[id*="vm-learn-"]{border-radius:12px !important}',
      /* Unified section padding */
      'section[id*="vm-"]{padding-left:max(24px,4vw) !important;padding-right:max(24px,4vw) !important}',
      /* Unified font smoothing */
      'body,body *{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}',
      /* Consistent mono font size for labels */
      '[class*="label"],[class*="eyebrow"],[class*="badge"]{font-variant-numeric:tabular-nums}',
      /* Prevent layout shift on images/iframes */
      'img,iframe{max-width:100%}',
      'iframe{border:none;border-radius:10px}',
      /* Consistent scrollbar on webkit */
      '::-webkit-scrollbar{width:6px;height:6px}',
      '::-webkit-scrollbar-track{background:rgba(13,43,78,0.3);border-radius:3px}',
      '::-webkit-scrollbar-thumb{background:rgba(201,168,76,0.25);border-radius:3px}',
      '::-webkit-scrollbar-thumb:hover{background:rgba(201,168,76,0.4)}',
      /* Mobile responsive overrides */
      '@media(max-width:768px){',
      '  [style*="grid-template-columns"]{grid-template-columns:1fr !important}',
      '  [style*="display:flex"][style*="gap"]{flex-wrap:wrap !important}',
      '  svg[viewBox]{max-width:100% !important;height:auto !important}',
      '  canvas{max-width:100% !important}',
      '  .vm-crosslink-bar{flex-direction:column !important;gap:12px !important}',
      '  h1{font-size:clamp(24px,6vw,48px) !important}',
      '  h2{font-size:clamp(20px,4vw,36px) !important}',
      '}',
      '@media(max-width:480px){',
      '  section[id*="vm-"]{padding-left:16px !important;padding-right:16px !important}',
      '}',
      /* Print styles */
      '@media print{',
      '  nav,.vm-progress-bar,.vm-crosslink-bar,button,[onclick],input[type="range"],canvas{display:none !important}',
      '  body{background:#fff !important;color:#000 !important}',
      '  section{break-inside:avoid;page-break-inside:avoid}',
      '}',
    ].join('\n');
    document.head.appendChild(style);
  }

  /* ══ INIT ══ */
  function init() {
    initConsistency();
    initAccessibility();
    initAnimations();
    initMobile();
    initLazyLoad();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
