/* ================================================================
   VITALMATRIX — 3 More Silicon Valley Upgrades to Existing Features
   No new sections. Enhances what already exists.
   14 May 2026 | VitalMatrix Ltd | ICO ZC101813
================================================================ */
(function() {
  'use strict';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  /* ══ UPGRADE 30: Contextual Glow Halos on Active Elements ══
     When any interactive element is in its "active" state (selected zone,
     expanded accordion, active toggle), it gets a soft radial glow halo
     in its accent colour behind it. Creates visual depth hierarchy. */

  function initGlowHalos() {
    var style = document.createElement('style');
    style.textContent = [
      '.vm-halo-active { position: relative; }',
      '.vm-halo-active::before {',
      '  content: "";',
      '  position: absolute;',
      '  inset: -20px;',
      '  border-radius: inherit;',
      '  background: radial-gradient(ellipse at center, var(--halo-color, rgba(201,168,76,0.08)) 0%, transparent 70%);',
      '  pointer-events: none;',
      '  z-index: -1;',
      '  opacity: 0;',
      '  transition: opacity 0.5s cubic-bezier(0.16,1,0.3,1);',
      '}',
      '.vm-halo-active.vm-halo-on::before { opacity: 1; }',
    ].join('\n');
    document.head.appendChild(style);

    // Watch for class changes that indicate active state
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(m) {
        if (m.type !== 'attributes' || m.attributeName !== 'class') return;
        var el = m.target;
        var cls = el.className || '';
        var isActive = cls.indexOf('open') !== -1 || cls.indexOf('active') !== -1 || cls.indexOf('selected') !== -1 || cls.indexOf('expanded') !== -1;

        if (isActive && !el.classList.contains('vm-halo-active')) {
          el.classList.add('vm-halo-active');
          // Set halo colour from element's border or text colour
          var computed = window.getComputedStyle(el);
          var color = computed.borderColor || computed.color || '#C9A84C';
          if (color && color !== 'rgba(0, 0, 0, 0)') {
            // Convert to rgba with low opacity
            el.style.setProperty('--halo-color', color.replace('rgb(', 'rgba(').replace(')', ',0.10)'));
          }
          requestAnimationFrame(function() { el.classList.add('vm-halo-on'); });
        } else if (!isActive && el.classList.contains('vm-halo-on')) {
          el.classList.remove('vm-halo-on');
        }
      });
    });

    // Observe all interactive containers
    var targets = document.querySelectorAll('[class*="la3-ly"], [class*="card"], [class*="accordion"], [class*="panel"], [class*="tab"], [data-zone], [data-node]');
    targets.forEach(function(el) {
      observer.observe(el, { attributes: true, attributeFilter: ['class'] });
    });
  }

  /* ══ UPGRADE 31: Smooth Number Counter on Score Changes ══
     When any numeric score display changes value (slider adjustment,
     toggle switch, patient selection), the number smoothly counts
     up or down to the new value instead of jumping. */

  function initSmoothCounters() {
    // Find all score display elements
    var scoreEls = document.querySelectorAll('[style*="DM Mono"], [class*="score"], [class*="val"], [class*="display"]');
    var tracked = new Map();

    scoreEls.forEach(function(el) {
      var text = el.textContent.trim();
      var num = parseFloat(text);
      if (!isNaN(num) && text.length < 8 && el.offsetHeight > 0 && el.offsetHeight < 80) {
        tracked.set(el, { current: num, target: num, suffix: text.replace(String(num), '') });
      }
    });

    // Watch for text content changes
    var textObs = new MutationObserver(function(mutations) {
      mutations.forEach(function(m) {
        if (m.type !== 'characterData' && m.type !== 'childList') return;
        var el = m.target.nodeType === 3 ? m.target.parentElement : m.target;
        if (!el || !tracked.has(el)) return;

        var data = tracked.get(el);
        var newText = el.textContent.trim();
        var newNum = parseFloat(newText);
        if (isNaN(newNum) || newNum === data.target) return;

        data.target = newNum;
        animateCounter(el, data);
      });
    });

    tracked.forEach(function(data, el) {
      textObs.observe(el, { characterData: true, childList: true, subtree: true });
    });

    function animateCounter(el, data) {
      var start = data.current;
      var end = data.target;
      var duration = 400;
      var startTime = performance.now();
      var suffix = data.suffix;

      function step(time) {
        var elapsed = time - startTime;
        var progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = start + (end - start) * eased;

        // Format: integer or 1 decimal
        var formatted = end % 1 === 0 ? Math.round(current) : (Math.round(current * 10) / 10);
        el.textContent = formatted + suffix;
        data.current = current;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = end + suffix;
          data.current = end;
        }
      }
      requestAnimationFrame(step);
    }
  }

  /* ══ UPGRADE 32: Ripple Feedback on All Clickable Surfaces ══
     Material-design-inspired ripple effect on click. But subtle —
     gold ripple that expands from click point and fades. Applied to
     all buttons, cards, toggles, and interactive elements. */

  function initRippleFeedback() {
    var style = document.createElement('style');
    style.textContent = [
      '.vm-ripple-host { position: relative; overflow: hidden; }',
      '.vm-ripple {',
      '  position: absolute;',
      '  border-radius: 50%;',
      '  background: radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%);',
      '  transform: scale(0);',
      '  animation: vmRippleExpand 0.6s cubic-bezier(0.16,1,0.3,1) forwards;',
      '  pointer-events: none;',
      '  z-index: 100;',
      '}',
      '@keyframes vmRippleExpand {',
      '  0% { transform: scale(0); opacity: 1; }',
      '  100% { transform: scale(4); opacity: 0; }',
      '}',
    ].join('\n');
    document.head.appendChild(style);

    document.addEventListener('click', function(e) {
      var target = e.target.closest('button, [onclick], [role="button"], .vm-cta-primary, .vm-cta-explore, [class*="card"], [class*="tab"], [class*="chip"], [data-zone], [data-node], [class*="la3-hd"]');
      if (!target) return;

      // Ensure host positioning
      if (!target.classList.contains('vm-ripple-host')) {
        target.classList.add('vm-ripple-host');
        if (window.getComputedStyle(target).position === 'static') {
          target.style.position = 'relative';
        }
      }

      var rect = target.getBoundingClientRect();
      var size = Math.max(rect.width, rect.height);
      var ripple = document.createElement('div');
      ripple.className = 'vm-ripple';
      ripple.style.width = size + 'px';
      ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';

      target.appendChild(ripple);
      setTimeout(function() { ripple.remove(); }, 600);
    });
  }

  /* ══ INIT ══ */
  function init() {
    setTimeout(function() {
      initGlowHalos();
      initSmoothCounters();
      initRippleFeedback();
    }, 800);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
