/* ================================================================
   VITALMATRIX INERTIAL SMOOTH SCROLL — vm-smooth-scroll.js
   Award-Winning Tier (P5) — U5
   1 May 2026 | VitalMatrix Ltd

   Lerp-based smooth scroll. Disabled on touch devices and when
   prefers-reduced-motion is active. Does not break anchor links
   or keyboard navigation.

   Include at end of body (defer).
================================================================ */
(function() {
  'use strict';

  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  /* Disable on touch devices */
  var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouch) return;

  var current = window.scrollY || window.pageYOffset;
  var target = current;
  var ease = 0.09;
  var rafId = null;
  var running = false;

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function update() {
    current = lerp(current, target, ease);

    /* Stop when close enough */
    if (Math.abs(current - target) < 0.5) {
      current = target;
      window.scrollTo(0, current);
      running = false;
      return;
    }

    window.scrollTo(0, current);
    rafId = requestAnimationFrame(update);
  }

  function onWheel(e) {
    e.preventDefault();
    target = target + e.deltaY;

    /* Clamp to document bounds */
    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (target < 0) target = 0;
    if (target > maxScroll) target = maxScroll;

    if (!running) {
      running = true;
      rafId = requestAnimationFrame(update);
    }
  }

  /* Sync on resize and keyboard scroll */
  function syncScroll() {
    target = window.scrollY || window.pageYOffset;
    current = target;
  }

  /* Handle anchor links */
  document.addEventListener('click', function(e) {
    var link = e.target.closest('a');
    if (!link) return;
    var href = link.getAttribute('href');
    if (!href || href.indexOf('#') !== 0) return;

    var el = document.querySelector(href);
    if (!el) return;

    e.preventDefault();
    var rect = el.getBoundingClientRect();
    target = (window.scrollY || window.pageYOffset) + rect.top - 60;

    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (target < 0) target = 0;
    if (target > maxScroll) target = maxScroll;

    if (!running) {
      running = true;
      rafId = requestAnimationFrame(update);
    }
  });

  /* Handle keyboard scrolling: let it pass through and sync */
  window.addEventListener('keydown', function(e) {
    var scrollKeys = [32, 33, 34, 35, 36, 38, 40]; /* space, pgup, pgdn, end, home, up, down */
    if (scrollKeys.indexOf(e.keyCode) !== -1) {
      /* Let native scroll happen, then sync after a frame */
      requestAnimationFrame(syncScroll);
    }
  });

  window.addEventListener('wheel', onWheel, { passive: false });
  window.addEventListener('resize', syncScroll);

  /* Sync on page show (back/forward navigation) */
  window.addEventListener('pageshow', syncScroll);

})();
