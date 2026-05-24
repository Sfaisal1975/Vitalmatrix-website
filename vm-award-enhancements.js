/* ═══════════════════════════════════════════════════════════════════════
   VitalMatrix S9 Homepage — Award-Winning Enhancements (Beyond SV)
   15 features for Awwwards / FWA / CSS Design Awards tier
   Date: 2 May 2026 | W05 Claude Code
   Constraints: No template literals, no default params, no localStorage
   ═══════════════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isMobile = window.innerWidth < 769;

  /* ═══ ENHANCEMENT 13: Page Loader with Architectural Reveal ═══ */
  (function initLoader() {
    if (reducedMotion) return;

    var loader = document.createElement('div');
    loader.className = 'vm-loader';
    loader.innerHTML = '<div class="vm-loader-logo"><img src="VM_Logo_1000_x_1000_px_png_New_Transparent.png" height="48" style="display:block;margin:0;padding:0;border:none;" alt="VitalMatrix"></div>' +
      '<div class="vm-loader-pentagon"><svg viewBox="0 0 120 120" fill="none"><polygon points="60,5 112,40 95,100 25,100 8,40" stroke="#C9A84C" stroke-width="1" fill="none"/></svg></div>' +
      '<div class="vm-loader-line"></div>' +
      '<div class="vm-loader-text">Loading terrain intelligence</div>';

    document.body.insertBefore(loader, document.body.firstChild);
    document.body.classList.add('vm-loading');

    var logo = loader.querySelector('.vm-loader-logo');
    var pentagon = loader.querySelector('.vm-loader-pentagon');
    var line = loader.querySelector('.vm-loader-line');
    var text = loader.querySelector('.vm-loader-text');

    setTimeout(function() { logo.classList.add('vm-loader-logo-in'); }, 100);
    setTimeout(function() { pentagon.classList.add('vm-loader-pentagon-in'); }, 400);
    setTimeout(function() { pentagon.classList.add('vm-loader-pentagon-draw'); }, 600);
    setTimeout(function() { line.classList.add('vm-loader-line-draw'); }, 900);
    setTimeout(function() { text.classList.add('vm-loader-text-in'); }, 1000);
    setTimeout(function() {
      loader.classList.add('vm-loader-done');
      document.body.classList.remove('vm-loading');
    }, 1800);
    setTimeout(function() {
      if (loader.parentNode) loader.parentNode.removeChild(loader);
    }, 2400);
  })();


  /* ═══ ENHANCEMENT 1: Scroll-Velocity-Responsive Transitions ═══ */
  (function initScrollVelocity() {
    if (reducedMotion) return;

    var lastY = window.pageYOffset;
    var lastTime = Date.now();
    var velocityClass = '';

    function checkVelocity() {
      var now = Date.now();
      var dt = now - lastTime;
      if (dt < 50) { requestAnimationFrame(checkVelocity); return; }

      var currentY = window.pageYOffset;
      var dy = Math.abs(currentY - lastY);
      var speed = dy / dt * 1000; // pixels per second

      var newClass = '';
      if (speed > 2000) {
        newClass = 'vm-scroll-fast';
      } else if (speed < 300 && speed > 0) {
        newClass = 'vm-scroll-slow';
      }

      if (newClass !== velocityClass) {
        if (velocityClass) document.body.classList.remove(velocityClass);
        if (newClass) document.body.classList.add(newClass);
        velocityClass = newClass;
      }

      lastY = currentY;
      lastTime = now;
      requestAnimationFrame(checkVelocity);
    }

    requestAnimationFrame(checkVelocity);
  })();


  /* ═══ ENHANCEMENT 3: Cursor Identity System ═══ */
  (function initCursor() {
    if (reducedMotion || isMobile || !window.matchMedia('(hover: hover)').matches) return;

    var cursor = document.createElement('div');
    cursor.className = 'vm-cursor';
    document.body.appendChild(cursor);

    var mouseX = 0, mouseY = 0;
    var curX = 0, curY = 0;

    document.addEventListener('mousemove', function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateCursor() {
      curX += (mouseX - curX) * 0.15;
      curY += (mouseY - curY) * 0.15;
      cursor.style.left = curX + 'px';
      cursor.style.top = curY + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Detect interactive elements
    document.addEventListener('mouseover', function(e) {
      var el = e.target;
      var tag = el.tagName ? el.tagName.toLowerCase() : '';

      if (tag === 'a' || tag === 'button' || el.classList.contains('vm-cta-glow') ||
          el.classList.contains('btn-s') || el.classList.contains('vm-nav-cta') ||
          el.closest && el.closest('a, button, [role="button"]')) {
        cursor.classList.add('vm-cursor-hover');
        cursor.classList.remove('vm-cursor-text');
      } else if (tag === 'p' || tag === 'span' || tag === 'h1' || tag === 'h2' || tag === 'h3') {
        cursor.classList.add('vm-cursor-text');
        cursor.classList.remove('vm-cursor-hover');
      } else {
        cursor.classList.remove('vm-cursor-hover');
        cursor.classList.remove('vm-cursor-text');
      }
    });

    document.addEventListener('mouseout', function(e) {
      if (e.relatedTarget === null) {
        cursor.classList.add('vm-cursor-hidden');
      }
    });
    document.addEventListener('mouseover', function(e) {
      cursor.classList.remove('vm-cursor-hidden');
    });
  })();


  /* ═══ ENHANCEMENT 4: Smooth Scroll Engine (Lenis-style Momentum) ═══ */
  (function initSmoothScroll() {
    if (reducedMotion || isMobile) return;

    // Lightweight momentum scroll without wrapping the DOM
    var currentScroll = window.pageYOffset;
    var targetScroll = currentScroll;
    var ease = 0.08;
    var running = true;

    window.addEventListener('wheel', function(e) {
      e.preventDefault();
      targetScroll += e.deltaY;
      targetScroll = Math.max(0, Math.min(targetScroll, document.documentElement.scrollHeight - window.innerHeight));
    }, { passive: false });

    function smoothStep() {
      if (!running) return;
      currentScroll += (targetScroll - currentScroll) * ease;

      if (Math.abs(targetScroll - currentScroll) > 0.5) {
        window.scrollTo(0, currentScroll);
      }
      requestAnimationFrame(smoothStep);
    }
    smoothStep();

    // Sync with programmatic scroll (anchor clicks, etc.)
    var anchors = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < anchors.length; i++) {
      anchors[i].addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        if (!href || href === '#') return;
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          targetScroll = target.offsetTop;
        }
      });
    }

    // Keyboard sync
    window.addEventListener('keydown', function(e) {
      if (e.key === 'Home') { targetScroll = 0; }
      if (e.key === 'End') { targetScroll = document.documentElement.scrollHeight - window.innerHeight; }
      if (e.key === 'PageDown') { targetScroll += window.innerHeight * 0.85; }
      if (e.key === 'PageUp') { targetScroll -= window.innerHeight * 0.85; }
      targetScroll = Math.max(0, Math.min(targetScroll, document.documentElement.scrollHeight - window.innerHeight));
    });
  })();


  /* ═══ ENHANCEMENT 5: Scroll-Driven FLINT Pipeline Animation ═══ */
  (function initFlintPipeline() {
    if (reducedMotion) return;

    var archSection = document.querySelector('[aria-label="The architecture"]');
    if (!archSection) return;

    // Check if the FLINT explorer SVG exists (hex row)
    var hexRow = document.getElementById('flint-explorer');
    if (!hexRow) return;

    // Create animated pipeline below the hex SVG
    var pipeline = document.createElement('div');
    pipeline.className = 'vm-flint-pipeline';
    pipeline.setAttribute('aria-hidden', 'true');

    var layers = [
      { cls: 'vm-flint-layer-l1', label: 'L1', colour: '#C9A84C', desc: 'Node Intelligence' },
      { cls: 'vm-flint-layer-l2', label: 'L2', colour: '#1A7A8A', desc: 'Zone Intelligence' },
      { cls: 'vm-flint-layer-l3', label: 'L3', colour: '#7B5EA7', desc: 'Cascade Intelligence' },
      { cls: 'vm-flint-layer-l4', label: 'L4', colour: '#5F7C6C', desc: 'Causality Intelligence' },
      { cls: 'vm-flint-layer-l5', label: 'L5', colour: '#D4B870', desc: 'Examination Intelligence' }
    ];

    var connectorDiv = document.createElement('div');
    connectorDiv.className = 'vm-flint-connector';
    pipeline.appendChild(connectorDiv);

    for (var i = 0; i < layers.length; i++) {
      var layer = document.createElement('div');
      layer.className = 'vm-flint-layer ' + layers[i].cls;
      layer.innerHTML = '<span class="vm-flint-label" style="color:' + layers[i].colour + '">' + layers[i].label + '</span>' +
        '<span class="vm-flint-desc">' + layers[i].desc + '</span>';
      pipeline.appendChild(layer);
    }

    hexRow.parentNode.insertBefore(pipeline, hexRow.nextSibling);

    // Scroll-triggered sequential reveal
    var revealed = false;
    function checkPipeline() {
      if (revealed) return;
      var rect = pipeline.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.7) {
        revealed = true;
        var layerEls = pipeline.querySelectorAll('.vm-flint-layer');
        for (var j = 0; j < layerEls.length; j++) {
          (function(idx) {
            setTimeout(function() {
              layerEls[idx].classList.add('vm-flint-drawn');
            }, idx * 200);
          })(j);
        }
        setTimeout(function() {
          connectorDiv.classList.add('vm-flint-connected');
        }, layers.length * 200 + 100);
      }
    }
    window.addEventListener('scroll', checkPipeline, { passive: true });
    checkPipeline();
  })();


  /* ═══ ENHANCEMENT 6: Terrain Mesh as Living Background ═══ */
  (function initTerrainBg() {
    if (reducedMotion) return;

    var bg = document.createElement('div');
    bg.className = 'vm-terrain-bg';
    bg.innerHTML = '<svg viewBox="0 0 400 400" fill="none">' +
      '<polygon points="200,25 365,148 300,350 100,350 35,148" stroke="rgba(201,168,76,0.08)" stroke-width="0.6" fill="none"/>' +
      '<polygon points="200,95 310,182 275,305 125,305 90,182" stroke="rgba(26,122,138,0.06)" stroke-width="0.4" fill="none"/>' +
      '<polygon points="200,145 265,200 245,268 155,268 135,200" stroke="rgba(123,94,167,0.04)" stroke-width="0.3" fill="none"/>' +
      '<circle cx="200" cy="25" r="3" fill="rgba(201,168,76,0.12)"/>' +
      '<circle cx="35" cy="148" r="3" fill="rgba(26,122,138,0.10)"/>' +
      '<circle cx="365" cy="148" r="3" fill="rgba(212,184,112,0.08)"/>' +
      '<circle cx="300" cy="350" r="3" fill="rgba(123,94,167,0.08)"/>' +
      '<circle cx="100" cy="350" r="3" fill="rgba(95,124,108,0.08)"/>' +
      '</svg>';
    document.body.appendChild(bg);

    // Show only on dark sections (not on white/light sections)
    function updateTerrainVisibility() {
      var scrollY = window.pageYOffset;
      var sections = document.querySelectorAll('section');
      var currentBg = '';
      for (var i = 0; i < sections.length; i++) {
        var rect = sections[i].getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5) {
          currentBg = sections[i].style.background || '';
          break;
        }
      }
      var isLight = currentBg.indexOf('#FFFFFF') > -1 || currentBg.indexOf('#F5F0E8') > -1 || currentBg.indexOf('#A0A0A0') > -1;
      if (isLight) {
        bg.classList.remove('visible');
      } else {
        bg.classList.add('visible');
      }
    }
    window.addEventListener('scroll', updateTerrainVisibility, { passive: true });
    setTimeout(updateTerrainVisibility, 2000);
  })();


  /* ═══ ENHANCEMENT 7: Zone Colour Bleed on Section Transitions ═══ */
  (function initZoneBleed() {
    if (reducedMotion) return;

    var bleed = document.createElement('div');
    bleed.className = 'vm-zone-bleed';
    document.body.appendChild(bleed);

    var zoneMap = {
      'z1': 'vm-zone-bleed-z1',
      'z2': 'vm-zone-bleed-z2',
      'z3': 'vm-zone-bleed-z3',
      'z4': 'vm-zone-bleed-z4',
      'z5': 'vm-zone-bleed-z5'
    };
    var currentZone = '';

    function updateBleed() {
      var sections = document.querySelectorAll('section[data-zone]');
      var found = '';
      for (var i = 0; i < sections.length; i++) {
        var rect = sections[i].getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.4) {
          found = sections[i].getAttribute('data-zone') || '';
          break;
        }
      }

      if (found !== currentZone) {
        // Remove all zone classes
        for (var key in zoneMap) {
          if (zoneMap.hasOwnProperty(key)) {
            bleed.classList.remove(zoneMap[key]);
          }
        }
        if (found && zoneMap[found]) {
          bleed.classList.add(zoneMap[found]);
          bleed.classList.add('active');
        } else {
          bleed.classList.remove('active');
        }
        currentZone = found;
      }
    }

    window.addEventListener('scroll', updateBleed, { passive: true });
  })();


  /* ═══ ENHANCEMENT 8: Typography Weight Animation on Scroll Entry ═══ */
  (function initWeightReveal() {
    if (reducedMotion) return;

    var headings = document.querySelectorAll('section h2');
    for (var i = 0; i < headings.length; i++) {
      headings[i].classList.add('vm-weight-reveal');
    }

    function checkHeadings() {
      for (var i = 0; i < headings.length; i++) {
        var rect = headings[i].getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.65 && rect.bottom > 0) {
          headings[i].classList.add('vm-weight-crystallised');
        }
      }
    }

    window.addEventListener('scroll', checkHeadings, { passive: true });
    setTimeout(checkHeadings, 2200);
  })();


  /* ═══ ENHANCEMENT 9: Card Proximity Light ═══ */
  (function initProximityLight() {
    if (reducedMotion || isMobile) return;

    var grids = document.querySelectorAll('.grid-2, .grid-3, .grid-5, .infrastructure-grid, .vm-diff-grid, .out-grid-top, .out-grid-bottom, .pp-grid');

    for (var i = 0; i < grids.length; i++) {
      (function(grid) {
        grid.classList.add('vm-proximity-grid');
        var light = document.createElement('div');
        light.className = 'vm-proximity-light';
        grid.appendChild(light);

        grid.addEventListener('mousemove', function(e) {
          var rect = grid.getBoundingClientRect();
          var x = e.clientX - rect.left;
          var y = e.clientY - rect.top;
          light.style.left = x + 'px';
          light.style.top = y + 'px';
        });
      })(grids[i]);
    }
  })();


  /* ═══ ENHANCEMENT 10: Ripple-on-Click for CTAs ═══ */
  (function initRipple() {
    if (reducedMotion) return;

    function addRipple(e) {
      var el = this;
      if (!el.classList.contains('vm-ripple-wrap')) {
        el.classList.add('vm-ripple-wrap');
      }

      var rect = el.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var size = Math.max(rect.width, rect.height);

      var ripple = document.createElement('span');
      ripple.className = 'vm-ripple';
      ripple.style.width = size + 'px';
      ripple.style.height = size + 'px';
      ripple.style.left = (x - size / 2) + 'px';
      ripple.style.top = (y - size / 2) + 'px';

      el.appendChild(ripple);
      setTimeout(function() {
        if (ripple.parentNode) ripple.parentNode.removeChild(ripple);
      }, 700);
    }

    var ctas = document.querySelectorAll('.vm-cta-glow, .btn-s, .vm-nav-cta, .next-steps-card, .vm-quiz-cta');
    for (var i = 0; i < ctas.length; i++) {
      ctas[i].addEventListener('click', addRipple);
    }
  })();


  /* ═══ ENHANCEMENT 11: Spring Physics — applied via CSS (no JS needed) ═══ */
  // Spring easing is handled in vm-award-enhancements.css via cubic-bezier overrides.
  // This block exists for documentation only.


  /* ═══ ENHANCEMENT 12: Magnetic Nav Items ═══ */
  (function initMagneticNav() {
    if (reducedMotion || isMobile) return;

    var navLinks = document.querySelectorAll('.vm-nav-links a, .vm-nav-links button');
    for (var i = 0; i < navLinks.length; i++) {
      (function(link) {
        link.addEventListener('mousemove', function(e) {
          var rect = link.getBoundingClientRect();
          var cx = e.clientX - rect.left - rect.width / 2;
          var cy = e.clientY - rect.top - rect.height / 2;
          link.style.transform = 'translate(' + (cx * 0.12) + 'px,' + (cy * 0.12) + 'px)';
        });
        link.addEventListener('mouseleave', function() {
          link.style.transform = 'translate(0,0)';
        });
      })(navLinks[i]);
    }
  })();


  /* ═══ ENHANCEMENT 14: Skeleton Shimmer on Below-Fold Content ═══ */
  (function initSkeleton() {
    if (reducedMotion) return;

    var sections = document.querySelectorAll('section');
    for (var i = 0; i < sections.length; i++) {
      var rect = sections[i].getBoundingClientRect();
      if (rect.top > window.innerHeight) {
        sections[i].classList.add('vm-skeleton');
      }
    }

    function removeSkeleton() {
      var skeletons = document.querySelectorAll('.vm-skeleton');
      for (var i = 0; i < skeletons.length; i++) {
        var rect = skeletons[i].getBoundingClientRect();
        if (rect.top < window.innerHeight + 200) {
          skeletons[i].classList.add('vm-skeleton-loaded');
          // Clean up class after transition
          (function(el) {
            setTimeout(function() {
              el.classList.remove('vm-skeleton');
              el.classList.remove('vm-skeleton-loaded');
            }, 2000);
          })(skeletons[i]);
        }
      }
    }

    window.addEventListener('scroll', removeSkeleton, { passive: true });
    setTimeout(removeSkeleton, 2500);
  })();


  /* ═══ ENHANCEMENT 15: View Transitions API ═══ */
  (function initViewTransitions() {
    if (!document.startViewTransition) return;

    // Intercept internal navigation links for cross-page morphing
    var internalLinks = document.querySelectorAll('a[href^="/"]');
    for (var i = 0; i < internalLinks.length; i++) {
      (function(link) {
        link.addEventListener('click', function(e) {
          var href = link.getAttribute('href');
          if (!href || href.indexOf('#') === 0) return;

          e.preventDefault();
          document.startViewTransition(function() {
            window.location.href = href;
          });
        });
      })(internalLinks[i]);
    }
  })();


  /* ═══ ENHANCEMENT 2: Scroll-Pinned Narrative — marker for future pin sections ═══ */
  // Note: The Before/After section and Architecture section are candidates for pinning.
  // This enhancement marks sections that already exist. The CSS handles the sticky behaviour.
  // Full implementation requires wrapping target sections in .vm-pin-wrap containers.
  // Integration note: to activate on a specific section, wrap it:
  //   <div class="vm-pin-wrap">
  //     <div class="vm-pin-content">
  //       <div class="vm-pin-frame">... steps ...</div>
  //     </div>
  //   </div>
  // Steps animate based on scroll position within the 300vh container.

  (function initPinSections() {
    if (reducedMotion || isMobile) return;

    var pinWraps = document.querySelectorAll('.vm-pin-wrap');
    if (!pinWraps.length) return;

    function updatePins() {
      for (var i = 0; i < pinWraps.length; i++) {
        var wrap = pinWraps[i];
        var rect = wrap.getBoundingClientRect();
        var progress = -rect.top / (rect.height - window.innerHeight);
        progress = Math.max(0, Math.min(1, progress));

        var steps = wrap.querySelectorAll('.vm-pin-step');
        var stepSize = 1 / steps.length;
        for (var j = 0; j < steps.length; j++) {
          var stepStart = j * stepSize;
          var stepEnd = (j + 1) * stepSize;
          if (progress >= stepStart && progress < stepEnd) {
            steps[j].classList.add('active');
          } else {
            steps[j].classList.remove('active');
          }
        }
      }
    }

    window.addEventListener('scroll', updatePins, { passive: true });
  })();


  /* ═══ CONSOLE SIGNATURE ═══ */
  console.log('%cVitalMatrix%c Award Enhancements v1.0 | 15 features loaded',
    'color:#C9A84C;font-weight:bold;font-size:14px;',
    'color:#8BA5B8;font-size:11px;');
  console.log('%c7 Nodes | 5 Zones | 6 Cascades | 5 Outputs',
    'color:#1A7A8A;font-size:10px;letter-spacing:1px;');

})();
