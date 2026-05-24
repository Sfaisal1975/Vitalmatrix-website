/* ================================================================
   VITALMATRIX MOBILE EXPERIENCE — vm-mobile-experience.js
   Award-Winning Tier (P5)
   1 May 2026 | VitalMatrix Ltd

   Enhances mobile (max-width: 768px) with:
   - Swipe-driven card carousels
   - Bottom-sheet navigation (replaces hamburger)
   - Touch-hold card expand
   - Device gyroscope tilt on hero particles (optional)

   Include at end of body (defer).

   Required HTML for bottom-sheet nav (add after .vm-nav):
   <div class="vm-bottom-sheet" id="vm-bottom-sheet">
     <div class="vm-bottom-sheet-handle"></div>
     <div class="vm-bottom-sheet-content">
       <!-- same links as .vm-nav-links -->
     </div>
   </div>

   Required CSS: vm-mobile-experience.css (or inline).
================================================================ */
(function() {
  'use strict';

  var isMobile = window.innerWidth <= 768;
  if (!isMobile) return;

  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── SWIPE CAROUSEL ──
     Converts any .vm-swipe-carousel container into a horizontal
     swipeable strip. Children become slides.
  */
  function initSwipeCarousels() {
    var carousels = document.querySelectorAll('.vm-swipe-carousel');

    for (var i = 0; i < carousels.length; i++) {
      setupCarousel(carousels[i]);
    }
  }

  function setupCarousel(container) {
    var track = container.querySelector('.vm-swipe-track');
    if (!track) return;

    var startX = 0;
    var currentX = 0;
    var offsetX = 0;
    var isDragging = false;
    var slides = track.children;
    var currentSlide = 0;
    var slideWidth = container.offsetWidth;

    track.addEventListener('touchstart', function(e) {
      startX = e.touches[0].clientX;
      isDragging = true;
      track.style.transition = 'none';
    }, { passive: true });

    track.addEventListener('touchmove', function(e) {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
      var diff = currentX - startX;
      track.style.transform = 'translateX(' + (offsetX + diff) + 'px)';
    }, { passive: true });

    track.addEventListener('touchend', function(e) {
      if (!isDragging) return;
      isDragging = false;

      var diff = currentX - startX;
      var threshold = slideWidth * 0.3;

      if (diff < -threshold && currentSlide < slides.length - 1) {
        currentSlide++;
      } else if (diff > threshold && currentSlide > 0) {
        currentSlide--;
      }

      offsetX = -currentSlide * slideWidth;
      track.style.transition = 'transform 0.35s cubic-bezier(0.22,1,0.36,1)';
      track.style.transform = 'translateX(' + offsetX + 'px)';

      /* Update dots if present */
      var dots = container.querySelectorAll('.vm-swipe-dot');
      for (var d = 0; d < dots.length; d++) {
        if (d === currentSlide) {
          dots[d].classList.add('active');
        } else {
          dots[d].classList.remove('active');
        }
      }
    });
  }

  /* ── BOTTOM-SHEET NAVIGATION ── */
  function initBottomSheet() {
    var sheet = document.getElementById('vm-bottom-sheet');
    if (!sheet) return;

    var handle = sheet.querySelector('.vm-bottom-sheet-handle');
    if (!handle) return;

    var isOpen = false;
    var startY = 0;
    var currentY = 0;

    /* Toggle on handle tap */
    handle.addEventListener('click', function() {
      isOpen = !isOpen;
      if (isOpen) {
        sheet.classList.add('open');
      } else {
        sheet.classList.remove('open');
      }
    });

    /* Swipe-to-dismiss */
    sheet.addEventListener('touchstart', function(e) {
      startY = e.touches[0].clientY;
    }, { passive: true });

    sheet.addEventListener('touchmove', function(e) {
      currentY = e.touches[0].clientY;
      var diff = currentY - startY;
      if (diff > 0 && isOpen) {
        sheet.style.transform = 'translateY(' + diff + 'px)';
        sheet.style.transition = 'none';
      }
    }, { passive: true });

    sheet.addEventListener('touchend', function() {
      var diff = currentY - startY;
      if (diff > 80 && isOpen) {
        isOpen = false;
        sheet.classList.remove('open');
      }
      sheet.style.transform = '';
      sheet.style.transition = '';
    });

    /* Close on link click */
    var links = sheet.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function() {
        isOpen = false;
        sheet.classList.remove('open');
      });
    }
  }

  /* ── TOUCH-HOLD CARD EXPAND ──
     Add class .vm-touch-expand to cards. On long-press (400ms),
     the card scales up and shows hidden .vm-touch-detail content.
  */
  function initTouchExpand() {
    var cards = document.querySelectorAll('.vm-touch-expand');
    var holdTimer = null;
    var expandedCard = null;

    for (var i = 0; i < cards.length; i++) {
      (function(card) {
        card.addEventListener('touchstart', function() {
          holdTimer = setTimeout(function() {
            if (expandedCard && expandedCard !== card) {
              expandedCard.classList.remove('vm-expanded');
            }
            card.classList.add('vm-expanded');
            expandedCard = card;
          }, 400);
        }, { passive: true });

        card.addEventListener('touchend', function() {
          clearTimeout(holdTimer);
        });

        card.addEventListener('touchmove', function() {
          clearTimeout(holdTimer);
        });
      })(cards[i]);
    }

    /* Tap elsewhere to collapse */
    document.addEventListener('touchstart', function(e) {
      if (expandedCard && !expandedCard.contains(e.target)) {
        expandedCard.classList.remove('vm-expanded');
        expandedCard = null;
      }
    }, { passive: true });
  }

  /* ── GYROSCOPE HERO TILT ──
     Tilts hero particles/orbs based on device orientation.
     Disabled if prefers-reduced-motion or no gyroscope.
  */
  function initGyroTilt() {
    if (prefersReduced) return;
    if (!window.DeviceOrientationEvent) return;

    var hero = document.querySelector('.vm-hero');
    if (!hero) return;

    var orbs = hero.querySelector('.vm-hero-orbs');
    if (!orbs) return;

    window.addEventListener('deviceorientation', function(e) {
      if (e.gamma === null || e.beta === null) return;

      /* Clamp to small range */
      var x = Math.max(-15, Math.min(15, e.gamma)) * 0.4;
      var y = Math.max(-15, Math.min(15, e.beta - 45)) * 0.3;

      orbs.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    });
  }

  /* ── INIT ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initSwipeCarousels();
      initBottomSheet();
      initTouchExpand();
      initGyroTilt();
    });
  } else {
    initSwipeCarousels();
    initBottomSheet();
    initTouchExpand();
    initGyroTilt();
  }

})();
