/* ============================================================
   vm-la-crosscut.js
   VitalMatrix Living Architecture Cross-Cutting Upgrades
   CCU1-CCU5 | All LA pages | D-53 compliant
   No template literals, no default params, no localStorage
   ============================================================ */

(function () {
  'use strict';

  /* ---- Utility: reduced motion check ---- */
  var prefersReducedMotion = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  /* ============================================================
     CCU5: Performance Consolidation
     ============================================================ */

  /* -- Shared IntersectionObserver for scroll-triggered animations -- */
  var sharedObserver = null;
  if (typeof IntersectionObserver !== 'undefined') {
    sharedObserver = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add('vm-cc-visible');
          sharedObserver.unobserve(entries[i].target);
        }
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  }

  /* -- Scroll event throttle via requestAnimationFrame -- */
  var scrollCallbacks = [];
  var scrollTicking = false;

  function onScrollFrame() {
    for (var i = 0; i < scrollCallbacks.length; i++) {
      scrollCallbacks[i]();
    }
    scrollTicking = false;
  }

  window.addEventListener('scroll', function () {
    if (!scrollTicking) {
      scrollTicking = true;
      requestAnimationFrame(onScrollFrame);
    }
  }, { passive: true });

  /* -- Canvas frame rate limiter: 30fps cap -- */
  var VM_CC_FRAME_INTERVAL = 1000 / 30;
  window.vmCCFrameLimiter = function (callback) {
    var lastTime = 0;
    function loop(now) {
      if (now - lastTime >= VM_CC_FRAME_INTERVAL) {
        lastTime = now;
        callback(now);
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  };

  /* -- Lazy-load: mark sections below fold -- */
  function initLazyLoad() {
    var sections = document.querySelectorAll('section, [data-vm-lazy]');
    var viewH = window.innerHeight;
    for (var i = 0; i < sections.length; i++) {
      var rect = sections[i].getBoundingClientRect();
      if (rect.top > viewH * 0.9) {
        sections[i].classList.add('vm-cc-lazy');
        if (sharedObserver) {
          sharedObserver.observe(sections[i]);
        } else {
          sections[i].classList.add('vm-cc-visible');
        }
      }
    }
    /* Image/SVG lazy loading */
    var images = document.querySelectorAll('img:not([loading]), svg image:not([loading])');
    for (var j = 0; j < images.length; j++) {
      var imgRect = images[j].getBoundingClientRect();
      if (imgRect.top > viewH) {
        images[j].setAttribute('loading', 'lazy');
      }
    }
  }

  /* ============================================================
     CCU4: Keyboard Accessibility Layer
     ============================================================ */
  function initAccessibility() {
    /* Skip-to-content link */
    var mainContent = document.querySelector('main, [role="main"], .main-content, section');
    if (mainContent && !mainContent.id) {
      mainContent.id = 'vm-main-content';
    }
    var skipLink = document.createElement('a');
    skipLink.className = 'vm-skip-link';
    skipLink.href = '#' + (mainContent ? mainContent.id : '');
    skipLink.textContent = 'Skip to content';
    if (document.body.firstChild) {
      document.body.insertBefore(skipLink, document.body.firstChild);
    } else {
      document.body.appendChild(skipLink);
    }

    /* Escape closes panels/modals */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        /* Close Patient Journey panel */
        var pjPanel = document.querySelector('.vm-pj-panel--open');
        if (pjPanel) {
          pjPanel.classList.remove('vm-pj-panel--open');
        }
        /* Close tour */
        if (tourActive) {
          endTour();
        }
      }

      /* Arrow keys for carousel/list navigation */
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        var focused = document.activeElement;
        if (focused && focused.classList.contains('vm-la-nav__link')) {
          var next = focused.nextElementSibling;
          while (next && !next.classList.contains('vm-la-nav__link')) {
            next = next.nextElementSibling;
          }
          if (next) {
            e.preventDefault();
            next.focus();
          }
        }
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        var focusedEl = document.activeElement;
        if (focusedEl && focusedEl.classList.contains('vm-la-nav__link')) {
          var prev = focusedEl.previousElementSibling;
          while (prev && !prev.classList.contains('vm-la-nav__link')) {
            prev = prev.previousElementSibling;
          }
          if (prev) {
            e.preventDefault();
            prev.focus();
          }
        }
      }

      /* Enter activates buttons/toggles */
      if (e.key === 'Enter') {
        var active = document.activeElement;
        if (active && active.getAttribute('role') === 'button') {
          e.preventDefault();
          active.click();
        }
      }
    });
  }

  /* ============================================================
     CCU1: Cross-LA Navigation Bar
     ============================================================ */

  var LA_LINKS = [
    { key: 'flint',       label: 'FLINT',        full: 'FLINT Clinical Architecture',      file: 'NCZ_FLINT_ClinicalArchitecture_Cards_D53_2026-04-11_v2.html' },
    { key: 'ncz',         label: 'NCZ',           full: 'NCZ Living Architecture',          file: 'NCZ_LivingArchitecture_V2_D53_2026-04-11_v2.html' },
    { key: 'cascadeatlas',label: 'CascadeAtlas',  full: 'CascadeAtlas Master Connection',   file: 'CascadeAtlas_MasterConnectionMap_D53_2026-04-11_v5.html' },
    { key: 'drd',         label: 'DRD',           full: 'DRD Visualiser',                   file: 'LA4_DRD_Visualiser_D53_2026-04-11_v2.html' },
    { key: 'kinetics',    label: 'KINETICS',      full: 'KINETICS Velocity Board',          file: 'LA5_KINETICS_VelocityBoard_D53_2026-04-11_v2.html' },
    { key: 'apex',        label: 'APEX',          full: 'APEX Investigation Planner',       file: 'LA6_APEX_InvestigationPlanner_D53_2026-04-11_v2.html' },
    { key: 'terrainlock', label: 'TerrainLock',   full: 'TerrainLock Loop Visualiser',      file: 'LA7_TerrainLock_LoopVisualiser_D53_2026-04-11_v2.html' },
    { key: 'deltascan',   label: 'DeltaScan',     full: 'DeltaScan Comparison View',        file: 'LA8_DeltaScan_ComparisonView_D53_2026-04-11_v2.html' },
    { key: 'trace',       label: 'TRACE',         full: 'TRACE Timeline',                   file: 'LA9_TRACE_Timeline_D53_2026-04-11_v2.html' },
    { key: 'tiq',         label: 'TIQ',           full: 'TIQ Composite Score',              file: 'LA10_TIQ_CompositeScore_D53_2026-04-11_v2.html' }
  ];

  var navCollapsed = false;

  function detectActivePage() {
    var loc = window.location.href.toLowerCase();
    for (var i = 0; i < LA_LINKS.length; i++) {
      if (loc.indexOf(LA_LINKS[i].file.toLowerCase()) !== -1) {
        return LA_LINKS[i].key;
      }
    }
    /* Fallback: match by key in filename */
    for (var j = 0; j < LA_LINKS.length; j++) {
      if (loc.indexOf(LA_LINKS[j].key) !== -1) {
        return LA_LINKS[j].key;
      }
    }
    return '';
  }

  function buildNavBar() {
    var activeKey = detectActivePage();

    var nav = document.createElement('nav');
    nav.className = 'vm-la-nav';
    nav.setAttribute('aria-label', 'Living Architecture navigation');
    nav.setAttribute('role', 'navigation');

    var inner = document.createElement('div');
    inner.className = 'vm-la-nav__inner';

    for (var i = 0; i < LA_LINKS.length; i++) {
      var item = LA_LINKS[i];
      var link = document.createElement('a');
      link.className = 'vm-la-nav__link';
      if (item.key === activeKey) {
        link.classList.add('vm-la-nav__link--active');
        link.setAttribute('aria-current', 'page');
      }
      link.href = item.file;
      link.textContent = item.label;
      link.setAttribute('tabindex', '0');

      var tooltip = document.createElement('span');
      tooltip.className = 'vm-la-nav__tooltip';
      tooltip.textContent = item.full;
      link.appendChild(tooltip);

      inner.appendChild(link);
    }

    /* Collapse/expand toggle */
    var toggle = document.createElement('button');
    toggle.className = 'vm-la-nav__toggle';
    toggle.setAttribute('aria-label', 'Toggle navigation bar');
    toggle.setAttribute('type', 'button');
    toggle.innerHTML = '&#8964;'; /* chevron down */

    toggle.addEventListener('click', function () {
      navCollapsed = !navCollapsed;
      if (navCollapsed) {
        nav.classList.add('vm-la-nav--collapsed');
        toggle.innerHTML = '&#8963;'; /* chevron up */
      } else {
        nav.classList.remove('vm-la-nav--collapsed');
        toggle.innerHTML = '&#8964;';
      }
    });
    inner.appendChild(toggle);

    nav.appendChild(inner);
    document.body.appendChild(nav);
  }

  /* ============================================================
     CCU2: Patient Journey Thread
     ============================================================ */

  var PJ_STEPS = [
    { key: 'flint',       name: 'FLINT: Layer Assessment',       finding: 'L1-L5 terrain layers mapped',       file: 'NCZ_FLINT_ClinicalArchitecture_Cards_D53_2026-04-11_v2.html' },
    { key: 'ncz',         name: 'NCZ: Zone Composition',         finding: 'N6 dampened at 0.7x, Z5 threshold 32', file: 'NCZ_LivingArchitecture_V2_D53_2026-04-11_v2.html' },
    { key: 'cascadeatlas',name: 'CascadeAtlas: Connection Map',   finding: '6 stacks identified, S4 Theoretical',  file: 'CascadeAtlas_MasterConnectionMap_D53_2026-04-11_v5.html' },
    { key: 'drd',         name: 'DRD: Burden Designation',        finding: 'Z2 highest burden zone detected',      file: 'LA4_DRD_Visualiser_D53_2026-04-11_v2.html' },
    { key: 'kinetics',    name: 'KINETICS: Velocity Analysis',    finding: 'S2 FAST velocity confirmed',           file: 'LA5_KINETICS_VelocityBoard_D53_2026-04-11_v2.html' },
    { key: 'apex',        name: 'APEX: Investigation Plan',       finding: 'Tier 1 baseline panel selected',       file: 'LA6_APEX_InvestigationPlanner_D53_2026-04-11_v2.html' },
    { key: 'terrainlock', name: 'TerrainLock: Loop Detection',    finding: 'Z2-Z1-Z5-Z2 loop assessed',            file: 'LA7_TerrainLock_LoopVisualiser_D53_2026-04-11_v2.html' },
    { key: 'deltascan',   name: 'DeltaScan: Comparison',          finding: 'T1 vs T2 terrain shift measured',       file: 'LA8_DeltaScan_ComparisonView_D53_2026-04-11_v2.html' },
    { key: 'trace',       name: 'TRACE: Timeline',                finding: 'Longitudinal terrain pattern logged',  file: 'LA9_TRACE_Timeline_D53_2026-04-11_v2.html' },
    { key: 'tiq',         name: 'TIQ: Composite Score',           finding: 'Terrain Resilience score generated',   file: 'LA10_TIQ_CompositeScore_D53_2026-04-11_v2.html' }
  ];

  function buildPatientJourney() {
    var activeKey = detectActivePage();
    var activeIdx = -1;
    for (var a = 0; a < PJ_STEPS.length; a++) {
      if (PJ_STEPS[a].key === activeKey) { activeIdx = a; break; }
    }

    /* Floating button */
    var btn = document.createElement('button');
    btn.className = 'vm-pj-btn';
    btn.setAttribute('type', 'button');
    btn.setAttribute('aria-label', 'Open Patient B Journey panel');
    btn.textContent = 'Patient B Journey';

    /* Side panel */
    var panel = document.createElement('div');
    panel.className = 'vm-pj-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Patient B Journey');

    var header = document.createElement('div');
    header.className = 'vm-pj-panel__header';

    var title = document.createElement('h2');
    title.className = 'vm-pj-panel__title';
    title.textContent = 'Patient B Journey';

    var closeBtn = document.createElement('button');
    closeBtn.className = 'vm-pj-panel__close';
    closeBtn.setAttribute('type', 'button');
    closeBtn.setAttribute('aria-label', 'Close panel');
    closeBtn.innerHTML = '&#10005;';

    header.appendChild(title);
    header.appendChild(closeBtn);
    panel.appendChild(header);

    /* Steps */
    for (var i = 0; i < PJ_STEPS.length; i++) {
      var step = PJ_STEPS[i];
      var stepEl = document.createElement('a');
      stepEl.className = 'vm-pj-step';
      stepEl.href = step.file;

      var state = 'future';
      var iconChar = (i + 1).toString();
      if (activeIdx >= 0 && i < activeIdx) {
        state = 'completed';
        iconChar = '\u2713';
      } else if (i === activeIdx) {
        state = 'current';
        iconChar = '\u25CF';
      }
      stepEl.classList.add('vm-pj-step--' + state);

      var icon = document.createElement('span');
      icon.className = 'vm-pj-step__icon';
      icon.textContent = iconChar;

      var body = document.createElement('div');
      body.className = 'vm-pj-step__body';

      var name = document.createElement('div');
      name.className = 'vm-pj-step__name';
      name.textContent = step.name;

      var badge = document.createElement('span');
      badge.className = 'vm-pj-step__badge';
      badge.textContent = step.finding;

      body.appendChild(name);
      body.appendChild(badge);
      stepEl.appendChild(icon);
      stepEl.appendChild(body);
      panel.appendChild(stepEl);
    }

    /* Events */
    btn.addEventListener('click', function () {
      panel.classList.add('vm-pj-panel--open');
      closeBtn.focus();
    });
    closeBtn.addEventListener('click', function () {
      panel.classList.remove('vm-pj-panel--open');
      btn.focus();
    });

    document.body.appendChild(btn);
    document.body.appendChild(panel);
  }

  /* ============================================================
     CCU3: Guided Onboarding Tour
     ============================================================ */

  var TOUR_STEPS = [
    { text: 'This is the main visualisation. It shows the core architecture for this Living Architecture component.', selector: '[data-tour="main"], section:first-of-type, .vm-hero, main > *:first-child' },
    { text: 'Interactive elements glow on hover. Try moving your cursor over charts, zones, and cards.', selector: '[data-tour="interactive"], canvas, svg, .card, [role="button"]:first-of-type' },
    { text: 'Click any zone or element for details. Expanding panels reveal deeper clinical context.', selector: '[data-tour="details"], .zone, .stack, details, [data-zone]:first-of-type' },
    { text: 'Use controls to adjust parameters. Sliders, toggles, and selectors let you explore different scenarios.', selector: '[data-tour="controls"], input[type="range"], select, .toggle, button:not(.vm-tour-btn):not(.vm-pj-btn):not(.vm-la-nav__toggle):not(.vm-pj-panel__close):first-of-type' },
    { text: 'Scroll down for more features. Each section provides a different perspective on the terrain data.', selector: '[data-tour="scroll"], section:nth-of-type(2), footer' }
  ];

  var tourActive = false;
  var tourShown = false;
  var tourStep = 0;
  var tourOverlay = null;
  var tourTooltip = null;
  var previousHighlight = null;

  function findTourTarget(selectorList) {
    var selectors = selectorList.split(',');
    for (var i = 0; i < selectors.length; i++) {
      var s = selectors[i].replace(/^\s+|\s+$/g, '');
      try {
        var el = document.querySelector(s);
        if (el) return el;
      } catch (e) {
        /* skip invalid selectors */
      }
    }
    return null;
  }

  function showTourStep(idx) {
    if (idx >= TOUR_STEPS.length) {
      endTour();
      return;
    }
    tourStep = idx;

    /* Remove previous highlight */
    if (previousHighlight) {
      previousHighlight.classList.remove('vm-tour-highlight');
      previousHighlight = null;
    }

    /* Find target element */
    var target = findTourTarget(TOUR_STEPS[idx].selector);

    /* Highlight target */
    if (target) {
      target.classList.add('vm-tour-highlight');
      previousHighlight = target;
      target.scrollIntoView({ block: 'center', behavior: 'auto' });
    }

    /* Build tooltip */
    if (tourTooltip) {
      tourTooltip.parentNode.removeChild(tourTooltip);
    }

    tourTooltip = document.createElement('div');
    tourTooltip.className = 'vm-tour-tooltip';

    var text = document.createElement('p');
    text.className = 'vm-tour-tooltip__text';
    text.textContent = TOUR_STEPS[idx].text;

    var footer = document.createElement('div');
    footer.className = 'vm-tour-tooltip__footer';

    /* Progress dots */
    var dots = document.createElement('div');
    dots.className = 'vm-tour-tooltip__dots';
    for (var d = 0; d < TOUR_STEPS.length; d++) {
      var dot = document.createElement('span');
      dot.className = 'vm-tour-tooltip__dot';
      if (d === idx) {
        dot.classList.add('vm-tour-tooltip__dot--active');
      }
      dots.appendChild(dot);
    }

    /* Buttons */
    var actions = document.createElement('div');
    actions.className = 'vm-tour-tooltip__actions';

    var skipBtn = document.createElement('button');
    skipBtn.className = 'vm-tour-btn vm-tour-btn--skip';
    skipBtn.setAttribute('type', 'button');
    skipBtn.textContent = 'Skip tour';
    skipBtn.addEventListener('click', function () { endTour(); });

    var nextBtn = document.createElement('button');
    nextBtn.className = 'vm-tour-btn vm-tour-btn--next';
    nextBtn.setAttribute('type', 'button');
    nextBtn.textContent = idx === TOUR_STEPS.length - 1 ? 'Finish' : 'Next';
    nextBtn.addEventListener('click', function () { showTourStep(tourStep + 1); });

    actions.appendChild(skipBtn);
    actions.appendChild(nextBtn);
    footer.appendChild(dots);
    footer.appendChild(actions);
    tourTooltip.appendChild(text);
    tourTooltip.appendChild(footer);
    document.body.appendChild(tourTooltip);

    /* Position tooltip near target */
    if (target) {
      var rect = target.getBoundingClientRect();
      var ttLeft = Math.min(rect.left, window.innerWidth - 340);
      var ttTop = rect.bottom + 12;
      if (ttTop + 160 > window.innerHeight) {
        ttTop = Math.max(8, rect.top - 160);
      }
      if (ttLeft < 8) ttLeft = 8;
      tourTooltip.style.left = ttLeft + 'px';
      tourTooltip.style.top = ttTop + 'px';
    } else {
      /* Centre if no target found */
      tourTooltip.style.left = '50%';
      tourTooltip.style.top = '50%';
      tourTooltip.style.transform = 'translate(-50%, -50%)';
    }

    nextBtn.focus();
  }

  function startTour() {
    if (tourShown || tourActive || prefersReducedMotion) return;
    tourShown = true;
    tourActive = true;

    tourOverlay = document.createElement('div');
    tourOverlay.className = 'vm-tour-overlay';
    tourOverlay.addEventListener('click', function () { endTour(); });
    document.body.appendChild(tourOverlay);

    showTourStep(0);
  }

  function endTour() {
    tourActive = false;
    if (previousHighlight) {
      previousHighlight.classList.remove('vm-tour-highlight');
      previousHighlight = null;
    }
    if (tourOverlay && tourOverlay.parentNode) {
      tourOverlay.parentNode.removeChild(tourOverlay);
      tourOverlay = null;
    }
    if (tourTooltip && tourTooltip.parentNode) {
      tourTooltip.parentNode.removeChild(tourTooltip);
      tourTooltip = null;
    }
  }

  /* ============================================================
     Initialisation
     ============================================================ */

  function init() {
    /* CCU4: Accessibility */
    initAccessibility();

    /* CCU1: Navigation bar */
    buildNavBar();

    /* CCU2: Patient Journey */
    buildPatientJourney();

    /* CCU5: Lazy load and performance */
    initLazyLoad();

    /* CCU3: Tour (delayed to let page render first, once per load) */
    if (!prefersReducedMotion) {
      setTimeout(function () {
        startTour();
      }, 1200);
    }
  }

  /* Run on DOM ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
