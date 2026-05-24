/* ================================================================
   VITALMATRIX PRELOADER — vm-preloader.js
   Award-Winning Tier (P5)
   1 May 2026 | VitalMatrix Ltd

   Include in <head> (NOT deferred). Add matching CSS inline or in
   vm-preloader.css. Add preloader HTML at top of <body>:

   <div class="vm-preloader" id="vm-preloader">
     <div class="vm-preloader-inner">
       <svg class="vm-preloader-logo" viewBox="0 0 100 100" width="64" height="64">
         <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(201,168,76,0.25)"
           stroke-width="1.5" class="vm-preloader-ring"/>
         <circle cx="50" cy="50" r="38" fill="none" stroke="#C9A84C"
           stroke-width="1.5" stroke-dasharray="239" stroke-dashoffset="239"
           stroke-linecap="round" class="vm-preloader-progress"/>
       </svg>
       <p class="vm-preloader-text">Loading</p>
     </div>
   </div>
================================================================ */
(function() {
  'use strict';

  var preloader = null;
  var progressCircle = null;
  var startTime = Date.now();
  var minDuration = 800;

  function init() {
    preloader = document.getElementById('vm-preloader');
    if (!preloader) return;

    progressCircle = preloader.querySelector('.vm-preloader-progress');
    if (!progressCircle) return;

    /* Animate the stroke-dashoffset from 239 to 0 */
    var circumference = 239;
    var elapsed = 0;
    var duration = 600;

    function animateProgress(timestamp) {
      elapsed = Date.now() - startTime;
      var ratio = Math.min(elapsed / duration, 1);
      /* easeOutQuad */
      var eased = 1 - (1 - ratio) * (1 - ratio);
      var offset = circumference * (1 - eased);
      progressCircle.setAttribute('stroke-dashoffset', String(offset));

      if (ratio < 1) {
        requestAnimationFrame(animateProgress);
      }
    }

    requestAnimationFrame(animateProgress);
  }

  function dismiss() {
    if (!preloader) return;

    var elapsed = Date.now() - startTime;
    var remaining = Math.max(0, minDuration - elapsed);

    setTimeout(function() {
      preloader.style.opacity = '0';
      preloader.style.transition = 'opacity 0.4s cubic-bezier(0.4,0,0.2,1)';

      setTimeout(function() {
        preloader.style.display = 'none';
        /* Trigger page entrance */
        document.body.classList.add('vm-page-loaded');
      }, 420);
    }, remaining);
  }

  /* Start progress animation immediately */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Dismiss when fully loaded */
  window.addEventListener('load', dismiss);

  /* Safety timeout: dismiss after 4s regardless */
  setTimeout(function() {
    if (preloader && preloader.style.display !== 'none') {
      dismiss();
    }
  }, 4000);

})();
