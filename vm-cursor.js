/* ================================================================
   VITALMATRIX CUSTOM CURSOR — vm-cursor.js
   Award-Winning Tier (P5) — U1
   1 May 2026 | VitalMatrix Ltd

   Dual-element cursor: 8px Gold dot (inner, exact follow) and
   32px translucent ring (outer, lerp delay). Scales on interactive
   elements. Hidden on mobile/touch.

   Include at end of body (defer).

   Required CSS (inline or in stylesheet):

   .vm-cursor-dot, .vm-cursor-ring {
     position: sticky; top: 0; left: 0;
     pointer-events: none; z-index: 9998;
     border-radius: 50%; transform: translate(-50%, -50%);
   }
   .vm-cursor-dot {
     width: 8px; height: 8px; background: #C9A84C;
   }
   .vm-cursor-ring {
     width: 32px; height: 32px; border: 1.5px solid rgba(201,168,76,0.20);
     background: transparent; transition: width 0.2s, height 0.2s,
     border-color 0.2s;
   }
   .vm-cursor-ring.interactive {
     width: 48px; height: 48px; border-color: rgba(26,122,138,0.35);
   }
   body.vm-custom-cursor { cursor: none; }
   body.vm-custom-cursor a, body.vm-custom-cursor button { cursor: none; }
================================================================ */
(function() {
  'use strict';

  /* Skip on touch devices and reduced motion */
  var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouch) return;

  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  /* Check for fine pointer (not coarse/touchpad) */
  var isFine = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
  if (!isFine) return;

  /* Create cursor elements */
  var dot = document.createElement('div');
  dot.className = 'vm-cursor-dot';
  dot.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:9998;border-radius:50%;width:8px;height:8px;background:#C9A84C;transform:translate(-50%,-50%);will-change:transform;';

  var ring = document.createElement('div');
  ring.className = 'vm-cursor-ring';
  ring.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:9997;border-radius:50%;width:32px;height:32px;border:1.5px solid rgba(201,168,76,0.20);background:transparent;transform:translate(-50%,-50%);will-change:transform;transition:width 0.2s ease,height 0.2s ease,border-color 0.2s ease;';

  var mouseX = -100;
  var mouseY = -100;
  var ringX = -100;
  var ringY = -100;
  var ease = 0.12;

  function onMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    /* Dot follows exactly */
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  }

  function animateRing() {
    ringX = ringX + (mouseX - ringX) * ease;
    ringY = ringY + (mouseY - ringY) * ease;

    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';

    requestAnimationFrame(animateRing);
  }

  function onMouseEnterInteractive() {
    ring.style.width = '48px';
    ring.style.height = '48px';
    ring.style.borderColor = 'rgba(26,122,138,0.35)';
  }

  function onMouseLeaveInteractive() {
    ring.style.width = '32px';
    ring.style.height = '32px';
    ring.style.borderColor = 'rgba(201,168,76,0.20)';
  }

  function init() {
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    document.body.style.cursor = 'none';

    document.addEventListener('mousemove', onMouseMove);
    requestAnimationFrame(animateRing);

    /* Detect interactive elements */
    var interactives = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    for (var i = 0; i < interactives.length; i++) {
      interactives[i].style.cursor = 'none';
      interactives[i].addEventListener('mouseenter', onMouseEnterInteractive);
      interactives[i].addEventListener('mouseleave', onMouseLeaveInteractive);
    }

    /* Hide cursor when mouse leaves window */
    document.addEventListener('mouseleave', function() {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', function() {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
