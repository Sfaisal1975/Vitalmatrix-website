/* ================================================================
   VITALMATRIX PHASE 1 DESIGN UPGRADE — JS
   Recommendations 3, 7, 11, 17, 27, 29
   11 April 2026 | VitalMatrix Ltd
================================================================ */
(function() {
  'use strict';

  /* ── REC 3: SCROLL-TRIGGERED REVEAL ── */
  function initReveal() {
    var targets = document.querySelectorAll('.vm-reveal');
    if (!targets.length) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(function(el) { observer.observe(el); });
  }

  /* ── REC 7: FLOATING PILL NAV — COMPACT ON SCROLL ── */
  function initNavCompact() {
    var nav = document.querySelector('.vm-nav-pill');
    if (!nav) return;

    var lastScrollY = 0;
    var ticking = false;

    function onScroll() {
      var currentY = window.scrollY || window.pageYOffset;
      if (currentY > 200) {
        nav.classList.add('nav-compact');
      } else {
        nav.classList.remove('nav-compact');
      }
      lastScrollY = currentY;
      ticking = false;
    }

    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });
  }

  /* ── REC 7: MOBILE NAV OVERLAY ── */
  function initMobileNav() {
    var hamburger = document.querySelector('.vm-nav-hamburger');
    var overlay = document.querySelector('.vm-nav-mobile-overlay');
    var closeBtn = document.querySelector('.vm-nav-mobile-close');
    if (!hamburger || !overlay) return;

    function openNav() {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      // Stagger link animations
      var links = overlay.querySelectorAll('a');
      links.forEach(function(link, i) {
        link.style.transitionDelay = (i * 60) + 'ms';
      });
    }
    function closeNav() {
      var links = overlay.querySelectorAll('a');
      links.forEach(function(link) { link.style.transitionDelay = '0ms'; });
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', openNav);
    if (closeBtn) closeBtn.addEventListener('click', closeNav);
    // Close on link click
    overlay.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', closeNav);
    });
  }

  /* ── REC 11: CURSOR PROXIMITY LIGHT ON CARDS ── */
  function initCardGlow() {
    var cards = document.querySelectorAll('.vm-card-glow');
    if (!cards.length) return;

    var ticking = false;
    document.addEventListener('mousemove', function(e) {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function() {
        cards.forEach(function(card) {
          var rect = card.getBoundingClientRect();
          var x = e.clientX - rect.left;
          var y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', x + 'px');
          card.style.setProperty('--mouse-y', y + 'px');
        });
        ticking = false;
      });
    }, { passive: true });
  }

  /* ── REC 17: TOOLTIP MOBILE TAP SUPPORT ── */
  function initTooltipsMobile() {
    if (window.innerWidth > 767) return;
    var tips = document.querySelectorAll('[data-tip]');
    tips.forEach(function(el) {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        // Remove active from all others
        tips.forEach(function(t) { t.classList.remove('vm-tip-active'); });
        el.classList.toggle('vm-tip-active');
      });
    });
    // Close on outside tap
    document.addEventListener('click', function(e) {
      if (!e.target.closest('[data-tip]')) {
        tips.forEach(function(t) { t.classList.remove('vm-tip-active'); });
      }
    });
  }

  /* ── REC 27: SCROLL PROMPT HIDE ── */
  function initScrollPrompt() {
    var prompt = document.querySelector('.vm-scroll-prompt');
    if (!prompt) return;

    var dismissed = false;
    window.addEventListener('scroll', function() {
      if (dismissed) return;
      if ((window.scrollY || window.pageYOffset) > 100) {
        prompt.classList.add('hidden');
        dismissed = true;
      }
    }, { passive: true });

    // Click to scroll to first section after hero
    prompt.addEventListener('click', function() {
      var hero = prompt.closest('section') || prompt.closest('[class*="hero"]');
      if (hero && hero.nextElementSibling) {
        hero.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
      }
    });
    prompt.style.cursor = 'pointer';
  }

  /* ── REC 29: FLOATING CTA ── */
  function initFloatingCTA() {
    var cta = document.querySelector('.vm-floating-cta');
    if (!cta) return;

    var closeBtn = cta.querySelector('.vm-floating-cta-close');
    var dismissed = false;
    var shown = false;

    window.addEventListener('scroll', function() {
      if (dismissed) return;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = (window.scrollY || window.pageYOffset) / docHeight;

      if (progress > 0.35 && !shown) {
        cta.classList.add('visible');
        shown = true;
      }
    }, { passive: true });

    if (closeBtn) {
      closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        cta.classList.remove('visible');
        dismissed = true;
      });
    }
  }

  /* ================================================================
     PHASE 2 — BATCHES B, C, D
     Recommendations 14, 16, 19, 20, 22, 26, 28
  ================================================================ */

  /* ── PERFORMANCE GATE ── */
  var isHighPerf = (navigator.hardwareConcurrency || 2) > 4;
  var prefersMotion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canAnimate = isHighPerf && prefersMotion;

  /* ── REC 14: PARALLAX DEPTH ── */
  function initParallax() {
    if (!canAnimate) return;
    var bgs = document.querySelectorAll('.vm-parallax-bg');
    if (!bgs.length) return;

    var ticking = false;
    window.addEventListener('scroll', function() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function() {
        var scrollY = window.scrollY || window.pageYOffset;
        bgs.forEach(function(bg) {
          var container = bg.parentElement;
          var rect = container.getBoundingClientRect();
          var offset = rect.top * 0.3;
          bg.style.transform = 'translateY(' + offset + 'px)';
        });
        ticking = false;
      });
    }, { passive: true });
  }

  /* ── REC 16: SCROLL PROGRESS BAR ── */
  function initProgressBar() {
    var bar = document.querySelector('.vm-progress-bar');
    if (!bar) return;

    // Only show on pages with 5+ sections
    var sections = document.querySelectorAll('section');
    if (sections.length < 5) { bar.style.display = 'none'; return; }

    window.addEventListener('scroll', function() {
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? (window.scrollY || window.pageYOffset) / docHeight : 0;
      bar.style.transform = 'scaleX(' + Math.min(progress, 1) + ')';
    }, { passive: true });
  }

  /* ── REC 19: STICKY SECTION LABEL ── */
  function initStickyLabel() {
    var label = document.querySelector('.vm-sticky-label');
    if (!label) return;
    if (window.innerWidth < 1200) return;

    var eyebrows = document.querySelectorAll('.eyebrow, [class*="eyebrow"]');
    if (!eyebrows.length) return;

    var sectionData = [];
    eyebrows.forEach(function(eb) {
      var section = eb.closest('section');
      if (section) {
        sectionData.push({ el: section, text: eb.textContent.trim() });
      }
    });

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var match = sectionData.find(function(s) { return s.el === entry.target; });
          if (match) {
            label.textContent = match.text;
            label.classList.add('visible');
          }
        }
      });
    }, { threshold: 0.2, rootMargin: '-64px 0px -50% 0px' });

    sectionData.forEach(function(s) { observer.observe(s.el); });

    // Hide when at top
    window.addEventListener('scroll', function() {
      if ((window.scrollY || window.pageYOffset) < 200) {
        label.classList.remove('visible');
      }
    }, { passive: true });
  }

  /* ── REC 20: PAGE TRANSITION ── */
  function initPageTransition() {
    if (!prefersMotion) return;
    document.body.classList.add('vm-page-transition');

    window.addEventListener('beforeunload', function() {
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.15s ease';
    });
  }

  /* ── REC 22: VARIABLE FONT WEIGHT ANIMATION ── */
  function initFontSharpen() {
    if (!canAnimate) return;
    var targets = document.querySelectorAll('.vm-font-sharpen');
    if (!targets.length) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    targets.forEach(function(el) { observer.observe(el); });
  }

  /* ── REC 26: SIDEBAR ANCHOR NAV ── */
  function initSidebarNav() {
    var sidebar = document.querySelector('.vm-sidebar-nav');
    if (!sidebar) return;
    if (window.innerWidth < 1280) return;

    var dots = sidebar.querySelectorAll('.vm-sidebar-dot');
    var sections = [];
    dots.forEach(function(dot) {
      var target = document.querySelector(dot.getAttribute('data-target'));
      if (target) sections.push({ dot: dot, el: target });
    });

    if (!sections.length) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        var match = sections.find(function(s) { return s.el === entry.target; });
        if (match) {
          if (entry.isIntersecting) {
            dots.forEach(function(d) { d.classList.remove('active'); });
            match.dot.classList.add('active');
          }
        }
      });
    }, { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' });

    sections.forEach(function(s) {
      observer.observe(s.el);
      s.dot.addEventListener('click', function() {
        s.el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ── REC 28: STAGGERED GRID ANIMATION ── */
  function initStaggerGrid() {
    var grids = document.querySelectorAll('.vm-stagger-grid');
    if (!grids.length) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    grids.forEach(function(grid) { observer.observe(grid); });
  }

  /* ── INIT ALL ── */
  function init() {
    // Phase 1
    initReveal();
    initNavCompact();
    initMobileNav();
    initCardGlow();
    initTooltipsMobile();
    initScrollPrompt();
    initFloatingCTA();
    // Phase 2
    initParallax();
    initProgressBar();
    initStickyLabel();
    initPageTransition();
    initFontSharpen();
    initSidebarNav();
    initStaggerGrid();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
