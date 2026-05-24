/* ================================================================
   VITALMATRIX PAGE TRANSITIONS — vm-page-transitions.js
   Award-Winning Tier (P5)
   1 May 2026 | VitalMatrix Ltd

   Uses View Transitions API where supported, with crossfade
   fallback. Include at end of body (defer).

   Intercepts internal navigation links. External links and anchor
   links (#) pass through normally.

   CSS required (inline or in vm-preloader.css):

   ::view-transition-old(root) {
     animation: vm-fade-out 0.25s ease forwards;
   }
   ::view-transition-new(root) {
     animation: vm-fade-in 0.3s ease 0.1s forwards;
   }
   @keyframes vm-fade-out {
     to { opacity: 0; transform: translateY(-8px); }
   }
   @keyframes vm-fade-in {
     from { opacity: 0; transform: translateY(8px); }
     to { opacity: 1; transform: translateY(0); }
   }

   /* Fallback for browsers without View Transitions API */
   body.vm-page-exit {
     opacity: 0;
     transform: translateY(-8px);
     transition: opacity 0.25s ease, transform 0.25s ease;
   }
================================================================ */
(function() {
  'use strict';

  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  var origin = window.location.origin;

  function isInternalLink(href) {
    if (!href) return false;
    if (href.indexOf('#') === 0) return false;
    if (href.indexOf('mailto:') === 0) return false;
    if (href.indexOf('tel:') === 0) return false;
    if (href.indexOf('javascript:') === 0) return false;
    /* Check same origin */
    if (href.indexOf('/') === 0) return true;
    if (href.indexOf(origin) === 0) return true;
    return false;
  }

  function navigateWithTransition(href) {
    /* View Transitions API (Chrome 111+) */
    if (document.startViewTransition) {
      document.startViewTransition(function() {
        window.location.href = href;
      });
      return;
    }

    /* Fallback: CSS crossfade */
    document.body.classList.add('vm-page-exit');
    setTimeout(function() {
      window.location.href = href;
    }, 280);
  }

  document.addEventListener('click', function(e) {
    var link = e.target.closest('a');
    if (!link) return;

    var href = link.getAttribute('href');
    if (!isInternalLink(href)) return;

    /* Skip if modifier key held (new tab intent) */
    if (e.ctrlKey || e.metaKey || e.shiftKey) return;

    e.preventDefault();
    navigateWithTransition(href);
  });

})();
