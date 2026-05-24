/* ================================================================
   VITALMATRIX — 3 Silicon Valley Upgrades to Existing Features
   No new sections. Enhances what already exists.
   14 May 2026 | VitalMatrix Ltd | ICO ZC101813
================================================================ */
(function() {
  'use strict';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  /* ══ UPGRADE 1: Animated Particle Flow on Cascade Stack Lines ══
     Finds all SVG lines/paths connecting zones (cascade stacks)
     and adds animated circles that travel along them at velocity-matched speed.
     Works on: LA-1 CascadeAtlas, CascadeAtlas page pentagon, any SVG with cascade lines. */

  function initParticleFlow() {
    // Find cascade SVGs by looking for stack-related elements
    var svgs = document.querySelectorAll('svg');
    svgs.forEach(function(svg) {
      var lines = svg.querySelectorAll('line[stroke], path[stroke]');
      if (lines.length < 3) return; // Need at least 3 lines to be a cascade diagram

      lines.forEach(function(line) {
        // Skip if already has particles
        if (line.getAttribute('data-particles')) return;
        line.setAttribute('data-particles', 'true');

        var strokeColor = line.getAttribute('stroke') || '#C9A84C';
        // Skip very faint lines
        var opacity = parseFloat(line.getAttribute('opacity') || line.getAttribute('stroke-opacity') || '1');
        if (opacity < 0.15) return;
        // Skip dashed theoretical lines (S4)
        var dasharray = line.getAttribute('stroke-dasharray');
        var isTheoretical = dasharray && dasharray.indexOf('3') !== -1;

        // Determine speed from context
        var parent = line.parentElement;
        var text = parent ? parent.textContent || '' : '';
        var speed = 2.4; // default MEDIUM
        if (text.indexOf('FAST') !== -1) speed = 1.2;
        if (text.indexOf('SLOW') !== -1) speed = 4.5;

        // Create animated particle
        var particle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        particle.setAttribute('r', isTheoretical ? '2' : '3');
        particle.setAttribute('fill', strokeColor);
        particle.setAttribute('opacity', isTheoretical ? '0.3' : '0.7');

        // Get line coordinates
        var x1 = parseFloat(line.getAttribute('x1') || '0');
        var y1 = parseFloat(line.getAttribute('y1') || '0');
        var x2 = parseFloat(line.getAttribute('x2') || '0');
        var y2 = parseFloat(line.getAttribute('y2') || '0');

        if (x1 === 0 && y1 === 0 && x2 === 0 && y2 === 0) return; // Skip paths without coords

        // Animate along the line
        var animX = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animX.setAttribute('attributeName', 'cx');
        animX.setAttribute('values', x1 + ';' + x2);
        animX.setAttribute('dur', speed + 's');
        animX.setAttribute('repeatCount', 'indefinite');

        var animY = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animY.setAttribute('attributeName', 'cy');
        animY.setAttribute('values', y1 + ';' + y2);
        animY.setAttribute('dur', speed + 's');
        animY.setAttribute('repeatCount', 'indefinite');

        // Fade pulse
        var animOpacity = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animOpacity.setAttribute('attributeName', 'opacity');
        animOpacity.setAttribute('values', '0;' + (isTheoretical ? '0.3' : '0.7') + ';0');
        animOpacity.setAttribute('dur', speed + 's');
        animOpacity.setAttribute('repeatCount', 'indefinite');

        particle.appendChild(animX);
        particle.appendChild(animY);
        particle.appendChild(animOpacity);

        // Add a second particle offset by half the duration for continuous flow
        var particle2 = particle.cloneNode(true);
        var anims2 = particle2.querySelectorAll('animate');
        anims2.forEach(function(a) {
          a.setAttribute('begin', (speed / 2) + 's');
        });

        svg.appendChild(particle);
        svg.appendChild(particle2);
      });
    });
  }

  /* ══ UPGRADE 2: Glassmorphism + Depth on Zone Elements ══
     Finds zone bubbles/cards and adds glassmorphism effect:
     backdrop-filter blur, inner glow, floating depth on active zones.
     Works on: any element with zone colour or zone ID reference. */

  function initGlassmorphism() {
    var style = document.createElement('style');
    style.textContent = [
      /* Glass effect on zone-coloured elements */
      '[data-zone], [style*="border-color:#C9A84C"], [style*="border-color:#1A7A8A"], [style*="border-color:#7B5EA7"], [style*="border-color:#5F7C6C"], [style*="border-color:#2E6DB4"] {',
      '  backdrop-filter: blur(6px) saturate(1.2);',
      '  -webkit-backdrop-filter: blur(6px) saturate(1.2);',
      '}',
      /* Floating depth on active/highlighted zones */
      '.vm-zone-elevated {',
      '  transform: translateY(-4px) scale(1.02);',
      '  box-shadow: 0 12px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08);',
      '  transition: all 0.4s cubic-bezier(0.34,1.56,0.64,1);',
      '}',
      /* Inner glow border effect */
      '.vm-zone-glow::after {',
      '  content: "";',
      '  position: absolute;',
      '  inset: -1px;',
      '  border-radius: inherit;',
      '  background: linear-gradient(135deg, rgba(255,255,255,0.08), transparent, rgba(255,255,255,0.04));',
      '  pointer-events: none;',
      '  z-index: 1;',
      '}',
      /* Zone bubble shine */
      '[style*="border-radius:50%"][style*="border-color"], [style*="border-radius: 50%"][style*="border-color"] {',
      '  position: relative;',
      '  overflow: hidden;',
      '}',
    ].join('\n');
    document.head.appendChild(style);

    // Find zone-like elements and add elevation on hover
    var zoneEls = document.querySelectorAll('[data-zone], .vm-la2-zone, .la3-zc, [class*="zone-circle"], [class*="zone-bubble"]');
    zoneEls.forEach(function(el) {
      el.style.position = el.style.position || 'relative';
      el.style.transition = 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)';
      el.addEventListener('mouseenter', function() {
        el.classList.add('vm-zone-elevated');
      });
      el.addEventListener('mouseleave', function() {
        el.classList.remove('vm-zone-elevated');
      });
    });

    // Add inner glow to rounded zone elements
    var roundEls = document.querySelectorAll('[style*="border-radius:50%"][style*="width:"]');
    roundEls.forEach(function(el) {
      if (el.offsetWidth > 40 && el.offsetWidth < 200) {
        el.classList.add('vm-zone-glow');
        el.style.position = 'relative';
        el.style.overflow = 'hidden';
      }
    });
  }

  /* ══ UPGRADE 3: Typewriter Reveal on Key Text Elements ══
     Finds headings and value displays in LA panels and applies
     a character-by-character typewriter reveal when first scrolled into view.
     Works on: dimension values, score displays, clinical narratives. */

  function initTypewriterReveal() {
    var style = document.createElement('style');
    style.textContent = [
      '.vm-typewriter {',
      '  overflow: hidden;',
      '  border-right: 2px solid rgba(201,168,76,0.5);',
      '  white-space: nowrap;',
      '  animation: vmTypewriter 0.015s steps(1) forwards, vmBlink 0.8s step-end infinite;',
      '}',
      '.vm-typewriter-done {',
      '  border-right: none;',
      '  white-space: normal;',
      '}',
      '@keyframes vmBlink { 50% { border-color: transparent; } }',
    ].join('\n');
    document.head.appendChild(style);

    // Find value/score text elements that should typewrite
    var targets = document.querySelectorAll('[class*="value"], [class*="score"], [class*="narrative"], [class*="summary"]');
    // Also find DM Mono elements that look like data displays
    var monos = document.querySelectorAll('[style*="DM Mono"][style*="font-size"]');

    var allTargets = [];
    targets.forEach(function(t) { if (t.textContent.trim().length > 5 && t.textContent.trim().length < 200) allTargets.push(t); });
    monos.forEach(function(m) { if (m.textContent.trim().length > 10 && m.textContent.trim().length < 100 && m.offsetHeight > 0) allTargets.push(m); });

    // Limit to first 20 to avoid performance issues
    allTargets = allTargets.slice(0, 20);

    var revealObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          typewriteElement(entry.target);
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    allTargets.forEach(function(el) {
      el.setAttribute('data-full-text', el.textContent);
      revealObs.observe(el);
    });
  }

  function typewriteElement(el) {
    var fullText = el.getAttribute('data-full-text') || el.textContent;
    var originalDisplay = el.style.display;
    el.textContent = '';
    el.classList.add('vm-typewriter');
    el.style.display = 'inline-block';

    var i = 0;
    var speed = Math.max(15, Math.min(40, 600 / fullText.length)); // Adaptive speed
    var interval = setInterval(function() {
      if (i < fullText.length) {
        el.textContent += fullText[i];
        i++;
      } else {
        clearInterval(interval);
        el.classList.remove('vm-typewriter');
        el.classList.add('vm-typewriter-done');
        el.style.display = originalDisplay;
        // Announce for screen readers
        if (window.vmAnnounce) window.vmAnnounce(fullText);
      }
    }, speed);
  }

  /* ══ INIT ══ */
  function init() {
    // Delay slightly to ensure DOM is fully painted
    setTimeout(function() {
      initParticleFlow();
      initGlassmorphism();
      initTypewriterReveal();
    }, 500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
