/* ================================================================
   VITALMATRIX SILICON VALLEY V3 — 10 More Award-Winning Upgrades
   13 May 2026 | VitalMatrix Ltd | ICO ZC101813
   Load AFTER vm-silicon-valley-v2.js
================================================================ */
(function() {
  'use strict';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ══ 1. SCROLL VELOCITY INDICATOR ══
     A thin bar at the very top that changes colour based on how fast
     the user is scrolling — gold=slow reading, teal=scanning, red=skipping.
     Practitioners see their own engagement speed. */
  function initScrollVelocity() {
    if (reduced) return;
    var bar = document.createElement('div');
    bar.style.cssText = 'position:fixed;top:0;left:0;right:0;height:2px;z-index:100000;transition:background 0.3s;pointer-events:none;background:#C9A84C';
    document.body.appendChild(bar);
    var lastY = window.scrollY; var lastT = Date.now();
    window.addEventListener('scroll', function() {
      var now = Date.now(); var dt = now - lastT;
      if (dt < 16) return;
      var dy = Math.abs(window.scrollY - lastY);
      var speed = dy / dt * 1000;
      if (speed < 200) bar.style.background = '#C9A84C'; // reading
      else if (speed < 800) bar.style.background = '#1A7A8A'; // scanning
      else bar.style.background = '#B83232'; // skipping
      bar.style.opacity = speed > 50 ? '1' : '0';
      lastY = window.scrollY; lastT = now;
    }, { passive: true });
  }

  /* ══ 2. CONTEXTUAL TOOLTIP SYSTEM ══
     Hover any mnemonic (TM-marked text) to see a one-line definition
     without clicking away from the current section. */
  function initTooltips() {
    var defs = {
      'FLINT': 'Five-Layer Intelligent Node Terrain: the scoring engine',
      'NCZ': 'Node-Cascade Zone: where nodes converge into clinical zones',
      'VOLTERRAIN': 'Seven upstream environmental and cellular drivers',
      'VANTAGE': 'Five-dimension integrative intelligence output',
      'TerrainSpiral': 'Temporal trajectory overlay across FLINT layers',
      'GRADE': 'Graded Reactivity, Absorption, and Detoxification Engine',
      'CLVF': 'Eight-rule architectural compliance verification',
      'VERITY': 'Evidence verification and tier classification engine',
      'NEXUS': 'Cross-zone interaction detection (Tier 4 internal)',
      'MODES': 'Terrain state classifier: Quiescent / Focal / Distributed / Systemic',
      'CascadeAtlas': 'Five-zone six-stack cascade architecture map',
      'TerrainLock': 'Self-perpetuating loop: Z2 to Z1 to Z5 to Z2',
      'DRD': 'Driver-Reactor Designation: highest burden zone identification',
      'APEX': 'Assessment Priority and Evidence Xray: investigation planner',
      'KINETICS': 'Cascade velocity intelligence: how fast burden moves',
      'DeltaScan': 'Longitudinal terrain comparison: what changed',
      'TRACE': 'Patient terrain timeline: when it happened',
      'TIQ': 'Terrain Intelligence Quotient: single composite score',
      'RECON': 'Lab investigation intelligence: find the burden',
      'COMPASS': 'Pathway builder: construct the intervention sequence',
      'ANCHOR': 'Confidence layer for scoring output',
      'CascadeIQ': 'Composite cascade intelligence score',
    };
    var tip = document.createElement('div');
    tip.style.cssText = 'position:fixed;z-index:99997;background:#1A2030;border:1px solid rgba(201,168,76,0.25);border-radius:8px;padding:8px 14px;font-family:Outfit,sans-serif;font-size:12px;color:#F4F4F2;max-width:280px;pointer-events:none;opacity:0;transition:opacity 0.15s;box-shadow:0 8px 24px rgba(0,0,0,0.4);line-height:1.5';
    document.body.appendChild(tip);

    document.addEventListener('mouseover', function(e) {
      var text = e.target.textContent || '';
      var match = null;
      Object.keys(defs).forEach(function(key) {
        if (text.indexOf(key + '\u2122') !== -1 || text.indexOf(key + '™') !== -1) match = key;
      });
      if (match && e.target.tagName !== 'SECTION' && e.target.tagName !== 'DIV') {
        tip.innerHTML = '<span style="font-family:DM Mono,monospace;font-size:10px;color:#C9A84C;font-weight:700;letter-spacing:0.08em">' + match + '\u2122</span><br>' + defs[match];
        tip.style.opacity = '1';
        tip.style.left = Math.min(e.clientX + 12, window.innerWidth - 300) + 'px';
        tip.style.top = (e.clientY - 50) + 'px';
      }
    });
    document.addEventListener('mouseout', function() { tip.style.opacity = '0'; });
  }

  /* ══ 3. READING TIME ESTIMATOR ══
     Shows estimated reading time for the current page in a small
     fixed badge. Updates as user scrolls past content. */
  function initReadingTime() {
    var text = document.body.innerText || '';
    var words = text.split(/\s+/).length;
    var mins = Math.max(1, Math.round(words / 200));
    var badge = document.createElement('div');
    badge.style.cssText = 'position:fixed;top:60px;left:16px;z-index:997;font-family:DM Mono,monospace;font-size:9px;color:rgba(244,244,242,0.25);padding:4px 10px;background:rgba(13,43,78,0.60);border:1px solid rgba(255,255,255,0.06);border-radius:4px;pointer-events:none';
    badge.textContent = mins + ' min read';
    document.body.appendChild(badge);

    window.addEventListener('scroll', function() {
      var pct = Math.min(100, Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100));
      var remaining = Math.max(0, Math.round(mins * (1 - pct / 100)));
      badge.textContent = remaining > 0 ? remaining + ' min left' : 'Complete';
      if (remaining === 0) badge.style.color = '#1F7A3A';
    }, { passive: true });
  }

  /* ══ 4. ZONE COLOUR LEGEND (FLOATING) ══
     A small expandable legend showing all 5 zone colours with names.
     Always accessible without scrolling to find the reference. */
  function initZoneLegend() {
    var legend = document.createElement('div');
    legend.style.cssText = 'position:fixed;bottom:60px;left:16px;z-index:997;font-family:DM Mono,monospace;font-size:9px;cursor:pointer;transition:all 0.3s';
    var collapsed = '<div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#C9A84C,#1A7A8A,#7B5EA7,#5F7C6C,#2E6DB4);border:1px solid rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center" title="Zone colours"><span style="font-size:8px;color:#fff">Z</span></div>';
    var expanded = '<div style="background:rgba(13,43,78,0.92);backdrop-filter:blur(8px);border:1px solid rgba(201,168,76,0.15);border-radius:10px;padding:10px 14px;display:flex;flex-direction:column;gap:5px">' +
      '<div style="display:flex;align-items:center;gap:8px"><span style="width:8px;height:8px;border-radius:50%;background:#C9A84C"></span><span style="color:rgba(244,244,242,0.50)">Z1 Metabolic Energy</span></div>' +
      '<div style="display:flex;align-items:center;gap:8px"><span style="width:8px;height:8px;border-radius:50%;background:#1A7A8A"></span><span style="color:rgba(244,244,242,0.50)">Z2 Resilience</span></div>' +
      '<div style="display:flex;align-items:center;gap:8px"><span style="width:8px;height:8px;border-radius:50%;background:#7B5EA7"></span><span style="color:rgba(244,244,242,0.50)">Z3 Cardiovascular-Neural</span></div>' +
      '<div style="display:flex;align-items:center;gap:8px"><span style="width:8px;height:8px;border-radius:50%;background:#5F7C6C"></span><span style="color:rgba(244,244,242,0.50)">Z4 Detoxification</span></div>' +
      '<div style="display:flex;align-items:center;gap:8px"><span style="width:8px;height:8px;border-radius:50%;background:#2E6DB4"></span><span style="color:rgba(244,244,242,0.50)">Z5 Hormonal Terrain</span></div>' +
      '</div>';
    legend.innerHTML = collapsed;
    var open = false;
    legend.addEventListener('click', function() {
      open = !open;
      legend.innerHTML = open ? expanded : collapsed;
    });
    document.body.appendChild(legend);
  }

  /* ══ 5. SMART BACK-TO-TOP ══
     Appears after scrolling 30%. Gold ring that fills as a progress
     indicator. Click to smooth-scroll to top. */
  function initBackToTop() {
    var btn = document.createElement('button');
    btn.setAttribute('aria-label', 'Back to top');
    btn.style.cssText = 'position:fixed;bottom:60px;right:16px;z-index:997;width:36px;height:36px;border-radius:50%;border:none;background:rgba(13,43,78,0.85);backdrop-filter:blur(8px);cursor:pointer;opacity:0;transition:opacity 0.3s,transform 0.2s;display:flex;align-items:center;justify-content:center';
    btn.innerHTML = '<svg width="36" height="36" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="none" stroke="rgba(201,168,76,0.15)" stroke-width="2"/><circle id="vm-btt-ring" cx="18" cy="18" r="16" fill="none" stroke="#C9A84C" stroke-width="2" stroke-dasharray="100.5" stroke-dashoffset="100.5" stroke-linecap="round" transform="rotate(-90 18 18)"/><path d="M18 22V14M14 17l4-4 4 4" fill="none" stroke="rgba(244,244,242,0.5)" stroke-width="1.5" stroke-linecap="round"/></svg>';
    btn.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    btn.addEventListener('mouseenter', function() { btn.style.transform = 'scale(1.1)'; });
    btn.addEventListener('mouseleave', function() { btn.style.transform = ''; });
    document.body.appendChild(btn);

    var ring = btn.querySelector('#vm-btt-ring');
    window.addEventListener('scroll', function() {
      var pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      btn.style.opacity = pct > 0.3 ? '1' : '0';
      if (ring) ring.setAttribute('stroke-dashoffset', (1 - pct) * 100.5);
    }, { passive: true });
  }

  /* ══ 6. COPY-ON-CLICK FOR SCORES ══
     Click any score display (X/10 or internal score) to copy it
     to clipboard with a brief "Copied" toast. */
  function initCopyScores() {
    document.addEventListener('click', function(e) {
      var el = e.target;
      var text = el.textContent || '';
      if (text.match(/^\d+\.?\d*\/10$/) || (el.style.fontFamily && el.style.fontFamily.indexOf('Mono') !== -1 && text.match(/^\d{1,3}$/))) {
        navigator.clipboard.writeText(text).then(function() {
          var toast = document.createElement('div');
          toast.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);z-index:99999;background:#1F7A3A;color:#fff;font-family:DM Mono,monospace;font-size:11px;padding:6px 16px;border-radius:6px;opacity:0;transition:opacity 0.2s';
          toast.textContent = 'Copied: ' + text;
          document.body.appendChild(toast);
          requestAnimationFrame(function() { toast.style.opacity = '1'; });
          setTimeout(function() { toast.style.opacity = '0'; setTimeout(function() { toast.remove(); }, 200); }, 1500);
          if (window.vmAnnounce) window.vmAnnounce('Copied ' + text);
        });
      }
    });
  }

  /* ══ 7. SECTION TRANSITION WIPES ══
     As sections scroll into view, a subtle gold line wipes across
     the top edge — signalling the section boundary. */
  function initSectionWipes() {
    if (reduced) return;
    var style = document.createElement('style');
    style.textContent = '@keyframes vmWipe{from{transform:scaleX(0)}to{transform:scaleX(1)}}.vm-wipe::before{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent);transform-origin:left;transform:scaleX(0)}.vm-wipe.wiped::before{animation:vmWipe 0.8s ease-out forwards}';
    document.head.appendChild(style);

    var sections = document.querySelectorAll('section');
    sections.forEach(function(sec) {
      sec.style.position = sec.style.position || 'relative';
      sec.classList.add('vm-wipe');
    });

    var wipeObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('wiped');
          wipeObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    sections.forEach(function(sec) { wipeObs.observe(sec); });
  }

  /* ══ 8. ENGAGEMENT HEATMAP DOTS ══
     Small dots appear at positions where the user clicked or spent
     >3 seconds — building a visible engagement heatmap over the session. */
  function initEngagementDots() {
    if (reduced) return;
    var dots = [];
    document.addEventListener('click', function(e) {
      if (e.target.closest('#vm-cmd-palette, #vm-theme-toggle, button')) return;
      var dot = document.createElement('div');
      dot.style.cssText = 'position:absolute;width:8px;height:8px;border-radius:50%;background:rgba(201,168,76,0.15);pointer-events:none;z-index:0;transition:opacity 2s';
      dot.style.left = (e.pageX - 4) + 'px';
      dot.style.top = (e.pageY - 4) + 'px';
      document.body.appendChild(dot);
      dots.push(dot);
      if (dots.length > 50) { var old = dots.shift(); if (old.parentNode) old.parentNode.removeChild(old); }
    });
  }

  /* ══ 9. KEYBOARD SHORTCUTS PANEL ══
     Press ? to show a shortcuts overlay listing all available keys. */
  function initShortcutsPanel() {
    var panel = document.createElement('div');
    panel.id = 'vm-shortcuts';
    panel.style.cssText = 'display:none;position:fixed;inset:0;z-index:99996;background:rgba(0,0,0,0.7);backdrop-filter:blur(6px);align-items:center;justify-content:center';
    panel.innerHTML = '<div style="background:#1A2030;border:1px solid rgba(201,168,76,0.20);border-radius:14px;padding:32px;max-width:400px;width:90vw">' +
      '<h3 style="font-family:Cormorant Garamond,serif;font-size:20px;color:#F4F4F2;margin-bottom:16px">Keyboard Shortcuts</h3>' +
      '<div style="display:grid;grid-template-columns:80px 1fr;gap:8px;font-family:DM Mono,monospace;font-size:11px">' +
      '<span style="color:#C9A84C">Ctrl+K</span><span style="color:rgba(244,244,242,0.50)">Command palette</span>' +
      '<span style="color:#C9A84C">?</span><span style="color:rgba(244,244,242,0.50)">This shortcuts panel</span>' +
      '<span style="color:#C9A84C">T</span><span style="color:rgba(244,244,242,0.50)">Toggle dark/light mode</span>' +
      '<span style="color:#C9A84C">Home</span><span style="color:rgba(244,244,242,0.50)">Scroll to top</span>' +
      '<span style="color:#C9A84C">End</span><span style="color:rgba(244,244,242,0.50)">Scroll to bottom</span>' +
      '<span style="color:#C9A84C">Esc</span><span style="color:rgba(244,244,242,0.50)">Close any overlay</span>' +
      '</div>' +
      '<p style="font-size:10px;color:rgba(244,244,242,0.20);margin-top:16px;text-align:center">Press Esc or click outside to close</p>' +
      '</div>';
    document.body.appendChild(panel);
    panel.addEventListener('click', function(e) { if (e.target === panel) panel.style.display = 'none'; });

    document.addEventListener('keydown', function(e) {
      if (e.key === '?' && !e.ctrlKey && !e.metaKey && document.activeElement.tagName !== 'INPUT') {
        panel.style.display = panel.style.display === 'flex' ? 'none' : 'flex';
      }
      if (e.key === 'Escape') panel.style.display = 'none';
      if (e.key === 't' && !e.ctrlKey && !e.metaKey && document.activeElement.tagName !== 'INPUT') {
        var toggle = document.getElementById('vm-theme-toggle');
        if (toggle) toggle.click();
      }
    });
  }

  /* ══ 10. CINEMATIC PAGE ENTRANCE ══
     On first load, page content fades in with staggered timing
     per major element — hero first, then sections cascade down. */
  function initCinematicEntrance() {
    if (reduced) return;
    var style = document.createElement('style');
    style.textContent = '.vm-entrance{opacity:0;transform:translateY(16px);transition:opacity 0.5s cubic-bezier(0.16,1,0.3,1),transform 0.5s cubic-bezier(0.16,1,0.3,1)}.vm-entrance.entered{opacity:1;transform:translateY(0)}';
    document.head.appendChild(style);

    var elements = document.querySelectorAll('section, nav, .vm-crosslink-bar, [class*="vm-trust"], [class*="vm-hero"]');
    elements.forEach(function(el, i) {
      if (i > 12) return;
      el.classList.add('vm-entrance');
      el.style.transitionDelay = (i * 0.08) + 's';
    });
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        document.querySelectorAll('.vm-entrance').forEach(function(el) { el.classList.add('entered'); });
      });
    });
  }

  /* ══ INIT ══ */
  function init() {
    initScrollVelocity();
    initTooltips();
    initReadingTime();
    initZoneLegend();
    initBackToTop();
    initCopyScores();
    initSectionWipes();
    initEngagementDots();
    initShortcutsPanel();
    initCinematicEntrance();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
