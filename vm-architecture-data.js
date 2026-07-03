/**
 * vm-architecture-data.js
 * VitalMatrix Shared Architecture Data Layer
 * ALB v1.5 | D-53 Zone Colours | T-01 Active | 8 May 2026
 *
 * SINGLE SOURCE OF TRUTH for all Living Architecture components.
 * Load this file BEFORE any LA section file.
 * Every LA section should reference window.VM instead of defining local copies.
 *
 * Usage:
 *   <script src="vm-architecture-data.js"></script>
 *   <script src="la6-apex-20features-section.js"></script>
 *
 * In any LA section JS:
 *   var zones = VM.ZONES;
 *   var stacks = VM.STACKS;
 *   var colour = VM.zoneColour('Z1');
 *   var drd = VM.computeDRD({Z1:55, Z2:65, Z3:30, Z4:25, Z5:50});
 */
(function() {
'use strict';

var VM = {};

/* ══════════════════════════════════════════════════════════════════
   ZONE DEFINITIONS (D-53 locked)
   ══════════════════════════════════════════════════════════════════ */
VM.ZONES = {
  Z1: { id: 'Z1', name: 'Metabolic Energy Axis',       systems: 'Adrenal, Thyroid, Pancreatic',              nodes: ['N3','N6'], colour: '#C9A84C', threshold: 40 },
  Z2: { id: 'Z2', name: 'Resilience Network',           systems: 'Gut, Immune, Brain',                        nodes: ['N1','N2','N6'], colour: '#1A7A8A', threshold: 40 },
  Z3: { id: 'Z3', name: 'Cardiovascular-Neural Axis',   systems: 'Cardiac, Pulmonary, Neurovascular',         nodes: ['N5','N6'], colour: '#7B5EA7', threshold: 40 },
  Z4: { id: 'Z4', name: 'Detoxification Trident',       systems: 'Hepatic, Lymphatic, Renal',                 nodes: ['N2','N4'], colour: '#5F7C6C', threshold: 40 },
  Z5: { id: 'Z5', name: 'Hormonal Terrain Axis',        systems: 'Androgenic, Estrogenic, Progestogenic',     nodes: ['N3','N4','N6'], colour: '#2E6DB4', threshold: 32 }
};

VM.ZONE_IDS = ['Z1','Z2','Z3','Z4','Z5'];

VM.ZONE_COLOURS = {
  Z1: '#C9A84C',
  Z2: '#1A7A8A',
  Z3: '#7B5EA7',
  Z4: '#5F7C6C',
  Z5: '#2E6DB4'
};

/* ══════════════════════════════════════════════════════════════════
   NODE DEFINITIONS (7 only, never 8)
   ══════════════════════════════════════════════════════════════════ */
VM.NODES = {
  N1: { id: 'N1', name: 'Assimilation',                        zones: ['Z2'] },
  N2: { id: 'N2', name: 'Defence and Repair',                  zones: ['Z2','Z4'] },
  N3: { id: 'N3', name: 'Energy',                              zones: ['Z1','Z5'] },
  N4: { id: 'N4', name: 'Biotransformation and Elimination',   zones: ['Z4','Z5'] },
  N5: { id: 'N5', name: 'Transport',                           zones: ['Z3'] },
  N6: { id: 'N6', name: 'Communication',                       zones: ['Z1','Z2','Z3','Z5'], dampening: 0.7 },
  N7: { id: 'N7', name: 'Structural Integrity',                zones: [], phase2: true }
};

VM.NODE_IDS = ['N1','N2','N3','N4','N5','N6','N7'];
VM.N6_DAMPENING = 0.7;

/* ══════════════════════════════════════════════════════════════════
   CASCADE STACK DEFINITIONS (6 only, never 7)
   ══════════════════════════════════════════════════════════════════ */
VM.STACKS = [
  { id: 'S1', from: 'Z2', to: 'Z1', velocity: 'MEDIUM', evidence: 'Mechanism Established, Cascade Emerging', qualifier: null,            timing: 'Weeks to months' },
  { id: 'S2', from: 'Z1', to: 'Z5', velocity: 'FAST',   evidence: 'Established',                            qualifier: null,            timing: 'Days to weeks' },
  { id: 'S3', from: 'Z4', to: 'Z1', velocity: 'SLOW',   evidence: 'Emerging',                               qualifier: null,            timing: 'Months to quarters' },
  { id: 'S4', from: 'Z5', to: 'Z2', velocity: 'MEDIUM', evidence: 'Theoretical',                            qualifier: 'THEORETICAL',   timing: 'Weeks to months' },
  { id: 'S5', from: 'Z2', to: 'Z3', velocity: 'FAST',   evidence: 'Emerging',                               qualifier: null,            timing: 'Days to weeks' },
  { id: 'S6', from: 'Z1', to: 'Z3', velocity: 'MEDIUM', evidence: 'Established',                            qualifier: 'UNIDIRECTIONAL', timing: 'Weeks' }
];

VM.VELOCITY_SPEEDS = { FAST: 1, MEDIUM: 2, SLOW: 4 };

/* ══════════════════════════════════════════════════════════════════
   SCORING CONSTANTS (D-15, D-37, D-38)
   ══════════════════════════════════════════════════════════════════ */
VM.SCORING = {
  internalScale: [0, 100],
  displayScale: [0, 10],
  translationDivisor: 10,
  n6Dampening: 0.7,
  floorMethod: 'MAX_DAMPENED_MINUS_10',
  nearThresholdWindow: 5
};

/* ══════════════════════════════════════════════════════════════════
   EVIDENCE TIERS (D-05)
   ══════════════════════════════════════════════════════════════════ */
VM.EVIDENCE_TIERS = [
  { id: 'Established',          colour: '#1A7A8A', desc: 'Mechanism confirmed in peer-reviewed literature with consistent replication' },
  { id: 'Emerging',             colour: '#C9A84C', desc: 'Mechanism supported by preliminary evidence; replication pending' },
  { id: 'Theoretical',          colour: '#8A9AAA', desc: 'Plausible mechanism based on known physiology; no direct clinical confirmation' },
  { id: 'Observed in Practice', colour: '#7B5EA7', desc: 'Clinician-reported pattern; formal study not yet conducted' },
  { id: 'Contested',            colour: '#C0392B', desc: 'Published evidence exists both for and against the proposed mechanism' }
];

/* ══════════════════════════════════════════════════════════════════
   TIER BUDGET DEFINITIONS (APEX)
   ══════════════════════════════════════════════════════════════════ */
VM.BUDGET_TIERS = [
  { key: 'tier1', label: 'Tier 1: GBP 200-400', colour: '#1A7A8A', desc: 'Core confirmation investigations. Non-invasive. NHS and private lab accessible.' },
  { key: 'tier2', label: 'Tier 2: GBP 400-800', colour: '#C9A84C', desc: 'Extended reactor investigations. Specialist lab panels. 4-point cortisol included.' },
  { key: 'tier3', label: 'Tier 3: GBP 800+',    colour: '#7B5EA7', desc: 'Comprehensive structural and advanced investigations. Genomics, advanced panels, imaging.' }
];

/* ══════════════════════════════════════════════════════════════════
   TERRAINLOCK DEFINITION
   ══════════════════════════════════════════════════════════════════ */
VM.TERRAINLOCK = {
  loop: ['Z2','Z1','Z5','Z2'],
  stacks: ['S1','S2','S4'],
  entryPoint: 'Z2',
  activationRule: 'S1 Active AND S2 Active AND (S4 Active OR both Z5 and Z2 internal >= 60)',
  caveat: 'Architecturally possible but clinically uncommon in Phase 1. Do not present as routinely firing.'
};

/* ══════════════════════════════════════════════════════════════════
   DESIGN SYSTEM CONSTANTS
   ══════════════════════════════════════════════════════════════════ */
VM.COLOURS = {
  prussian:  '#0D2B4E',
  charcoal:  '#1A2030',
  deepTeal:  '#0C4452',
  navy:      '#071C33',
  gold:      '#C9A84C',
  teal:      '#1A7A8A',
  purple:    '#7B5EA7',
  sage:      '#5F7C6C',
  white:     '#F4F4F2',
  muted:     'rgba(244,244,242,0.55)',
  muted2:    'rgba(244,244,242,0.35)',
  card:      'rgba(255,255,255,0.06)',
  border:    'rgba(255,255,255,0.11)'
};

VM.FONTS = {
  heading: "'Cormorant Garamond', serif",
  body:    "'Outfit', sans-serif",
  mono:    "'DM Mono', monospace"
};

/* ══════════════════════════════════════════════════════════════════
   T-01 DISPLAY LANGUAGE
   ══════════════════════════════════════════════════════════════════ */
VM.T01 = {
  drdLabel: 'Highest burden zone',
  outputTitle: 'Personalised Terrain Management Protocol',
  openingLine: 'Based on the terrain assessment, the following support considerations are noted for your review.',
  cascadeIqLabel: 'Terrain Resilience',
  contentFilter: 'Supplements, dietary, lifestyle only. Zero pharmaceutical.',
  protectiveHeader: 'For practitioner use only. Not a diagnostic tool. VitalMatrix provides terrain intelligence support for practitioner review. It does not diagnose, prescribe, or replace clinical judgement.',
  pcdSection: ['Clinical interpretation', 'Adjusted priorities', 'Deferred items', 'Follow-up interval', 'Additional notes']
};

/* ══════════════════════════════════════════════════════════════════
   HELPER FUNCTIONS
   ══════════════════════════════════════════════════════════════════ */

/**
 * Get zone colour by ID
 * @param {string} zoneId - e.g. 'Z1'
 * @returns {string} hex colour
 */
VM.zoneColour = function(zoneId) {
  return VM.ZONE_COLOURS[zoneId] || '#8A9AAA';
};

/**
 * Get zone name by ID
 * @param {string} zoneId
 * @returns {string}
 */
VM.zoneName = function(zoneId) {
  var z = VM.ZONES[zoneId];
  return z ? z.name : zoneId;
};

/**
 * Get zone threshold by ID
 * @param {string} zoneId
 * @returns {number}
 */
VM.zoneThreshold = function(zoneId) {
  var z = VM.ZONES[zoneId];
  return z ? z.threshold : 40;
};

/**
 * Check if a zone is active (at or above threshold)
 * @param {string} zoneId
 * @param {number} internalScore
 * @returns {boolean}
 */
VM.isZoneActive = function(zoneId, internalScore) {
  return internalScore >= VM.zoneThreshold(zoneId);
};

/**
 * Check if a zone is borderline (D-38: within 5 points below threshold)
 * @param {string} zoneId
 * @param {number} internalScore
 * @returns {boolean}
 */
VM.isZoneBorderline = function(zoneId, internalScore) {
  var th = VM.zoneThreshold(zoneId);
  return internalScore >= (th - VM.SCORING.nearThresholdWindow) && internalScore < th;
};

/**
 * Get zone status string
 * @param {string} zoneId
 * @param {number} internalScore
 * @returns {string} 'active' | 'borderline' | 'inactive'
 */
VM.zoneStatus = function(zoneId, internalScore) {
  if (VM.isZoneActive(zoneId, internalScore)) return 'active';
  if (VM.isZoneBorderline(zoneId, internalScore)) return 'borderline';
  return 'inactive';
};

/**
 * Convert internal score (0-100, high=burden) to display score (0-10, low=burden)
 * @param {number} internal
 * @returns {number}
 */
VM.toDisplayScore = function(internal) {
  return Math.round((100 - internal) / VM.SCORING.translationDivisor);
};

/**
 * Convert display score (0-10) back to internal score (0-100)
 * @param {number} display
 * @returns {number}
 */
VM.toInternalScore = function(display) {
  return 100 - (display * VM.SCORING.translationDivisor);
};

/**
 * Check if a cascade stack is active (both source and target zones above threshold)
 * @param {object} stack - stack definition from VM.STACKS
 * @param {object} scores - { Z1: number, Z2: number, ... } internal scores
 * @returns {boolean}
 */
VM.isStackActive = function(stack, scores) {
  return VM.isZoneActive(stack.from, scores[stack.from] || 0) &&
         VM.isZoneActive(stack.to, scores[stack.to] || 0);
};

/**
 * Get all active stacks given zone scores
 * @param {object} scores - { Z1: number, Z2: number, ... }
 * @returns {Array} active stack objects
 */
VM.getActiveStacks = function(scores) {
  return VM.STACKS.filter(function(s) {
    return VM.isStackActive(s, scores);
  });
};

/**
 * Compute DRD designation (highest burden zone, Z2 tiebreaker)
 * S4 excluded from DRD cascade trace (D-12)
 * @param {object} scores - { Z1: number, Z2: number, ... } internal scores
 * @returns {object|null} { zone: string, score: number, reactors: string[] }
 */
VM.computeDRD = function(scores) {
  var activeZones = VM.ZONE_IDS.filter(function(z) {
    return VM.isZoneActive(z, scores[z] || 0);
  });
  if (activeZones.length === 0) return null;

  var highest = activeZones[0];
  activeZones.forEach(function(z) {
    if ((scores[z] || 0) > (scores[highest] || 0)) {
      highest = z;
    } else if ((scores[z] || 0) === (scores[highest] || 0) && z === 'Z2') {
      highest = 'Z2'; // Z2 tiebreaker
    }
  });

  var reactors = activeZones.filter(function(z) { return z !== highest; });

  return {
    zone: highest,
    score: scores[highest] || 0,
    reactors: reactors
  };
};

/**
 * Check TerrainLock activation
 * S1 Active AND S2 Active AND (S4 Active OR both Z5 and Z2 >= 60)
 * @param {object} scores - { Z1: number, Z2: number, ... }
 * @returns {boolean}
 */
VM.isTerrainLockActive = function(scores) {
  var s1 = VM.isStackActive(VM.STACKS[0], scores); // S1: Z2->Z1
  var s2 = VM.isStackActive(VM.STACKS[1], scores); // S2: Z1->Z5
  var s4 = VM.isStackActive(VM.STACKS[3], scores); // S4: Z5->Z2
  var highBoth = (scores.Z5 || 0) >= 60 && (scores.Z2 || 0) >= 60;
  return s1 && s2 && (s4 || highBoth);
};

/**
 * Get downstream zones from a source zone via active stacks (S4 excluded)
 * @param {string} sourceZone
 * @returns {Array} [{zone, stack, velocity, evidence}]
 */
VM.getDownstreamZones = function(sourceZone) {
  var downstream = [];
  VM.STACKS.forEach(function(s) {
    if (s.from === sourceZone && s.qualifier !== 'THEORETICAL') {
      downstream.push({ zone: s.to, stack: s.id, velocity: s.velocity, evidence: s.evidence });
    }
  });
  return downstream;
};

/**
 * Get evidence tier colour
 * @param {string} tier - e.g. 'Established'
 * @returns {string} hex colour
 */
VM.evidenceColour = function(tier) {
  for (var i = 0; i < VM.EVIDENCE_TIERS.length; i++) {
    if (VM.EVIDENCE_TIERS[i].id === tier) return VM.EVIDENCE_TIERS[i].colour;
  }
  return '#8A9AAA';
};

/**
 * Parse cost string to midpoint number
 * @param {string} costStr - e.g. 'GBP 15-25'
 * @returns {number}
 */
VM.parseCostMid = function(costStr) {
  var m = costStr.match(/(\d+)[\-\u2013](\d+)/);
  if (m) return (parseInt(m[1]) + parseInt(m[2])) / 2;
  var s = costStr.match(/(\d+)/);
  return s ? parseInt(s[1]) : 0;
};

/**
 * Parse cost string to range object
 * @param {string} costStr
 * @returns {object} { lo: number, hi: number }
 */
VM.parseCostRange = function(costStr) {
  var m = costStr.match(/(\d+)[\-\u2013](\d+)/);
  if (m) return { lo: parseInt(m[1]), hi: parseInt(m[2]) };
  var s = costStr.match(/(\d+)/);
  return s ? { lo: parseInt(s[1]), hi: parseInt(s[1]) } : { lo: 0, hi: 0 };
};

/**
 * Create an evidence tier badge HTML string
 * @param {string} tier
 * @returns {string} HTML
 */
VM.evidenceBadgeHTML = function(tier) {
  var c = VM.evidenceColour(tier);
  return '<span style="font-size:9px;padding:2px 7px;border-radius:3px;font-family:' +
    VM.FONTS.mono + ';font-weight:600;background:' + c + '20;color:' + c + '">' + tier + '</span>';
};

/**
 * Create zone selector buttons HTML and bind click handlers
 * @param {HTMLElement} container
 * @param {string} selected - currently selected zone ID
 * @param {function} callback - called with zone ID on click
 */
VM.createZoneSelector = function(container, selected, callback) {
  container.innerHTML = '';
  VM.ZONE_IDS.forEach(function(z) {
    var btn = document.createElement('button');
    btn.style.cssText = 'padding:8px 16px;border-radius:6px;border:2px solid ' + VM.zoneColour(z) +
      ';background:' + (selected === z ? VM.zoneColour(z) + '22' : 'transparent') +
      ';color:' + VM.zoneColour(z) + ';font-family:' + VM.FONTS.mono +
      ';font-size:11px;font-weight:700;cursor:pointer;transition:all .25s;margin-right:6px;margin-bottom:6px';
    btn.textContent = z + ': ' + VM.zoneName(z);
    if (selected === z) btn.className = 'act';
    btn.addEventListener('click', function() { callback(z); });
    container.appendChild(btn);
  });
};

/**
 * CascadeAtlas canonical pentagon positions (Z1 top, Z2 right, Z3 bottom-right, Z4 bottom-left, Z5 left)
 * @param {number} cx - centre x
 * @param {number} cy - centre y
 * @param {number} r - radius
 * @returns {object} { Z1: {x,y}, Z2: {x,y}, ... }
 */
VM.pentagonPositions = function(cx, cy, r) {
  var pts = {};
  VM.ZONE_IDS.forEach(function(z, i) {
    var angle = (-90 + i * 72) * Math.PI / 180;
    pts[z] = { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });
  return pts;
};

/**
 * Draw a mini pentagon radar on a canvas
 * @param {HTMLCanvasElement} canvas
 * @param {Array} activeZones - e.g. ['Z1','Z3']
 */
VM.drawMiniRadar = function(canvas, activeZones) {
  var ctx = canvas.getContext('2d');
  var w = canvas.width, h = canvas.height;
  var cx = w / 2, cy = h / 2, r = w / 2 - 8;
  ctx.clearRect(0, 0, w, h);

  var pts = [];
  VM.ZONE_IDS.forEach(function(z, i) {
    var a = (-90 + i * 72) * Math.PI / 180;
    pts.push({ x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) });
  });

  // Grid
  ctx.strokeStyle = 'rgba(255,255,255,0.1)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (var j = 0; j < 5; j++) {
    ctx.moveTo(pts[j].x, pts[j].y);
    ctx.lineTo(pts[(j + 1) % 5].x, pts[(j + 1) % 5].y);
  }
  ctx.stroke();

  // Fill
  ctx.beginPath();
  var first = true;
  VM.ZONE_IDS.forEach(function(z, k) {
    var active = activeZones.indexOf(z) >= 0;
    var px = cx + (active ? r : r * 0.15) * Math.cos((-90 + k * 72) * Math.PI / 180);
    var py = cy + (active ? r : r * 0.15) * Math.sin((-90 + k * 72) * Math.PI / 180);
    if (first) { ctx.moveTo(px, py); first = false; } else { ctx.lineTo(px, py); }
  });
  ctx.closePath();
  ctx.fillStyle = 'rgba(201,168,76,0.2)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(201,168,76,0.6)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Dots
  VM.ZONE_IDS.forEach(function(z, m) {
    var active = activeZones.indexOf(z) >= 0;
    ctx.fillStyle = active ? VM.zoneColour(z) : 'rgba(255,255,255,0.15)';
    ctx.beginPath();
    ctx.arc(pts[m].x, pts[m].y, active ? 3 : 2, 0, Math.PI * 2);
    ctx.fill();
  });
};

/**
 * Create SVG sparkline HTML string from trajectory array
 * @param {Array} traj - e.g. [3,3,4,4,5]
 * @param {number} w - width (default 40)
 * @param {number} h - height (default 14)
 * @returns {string} SVG HTML
 */
VM.sparklineHTML = function(traj, w, h) {
  w = w || 40;
  h = h || 14;
  var pts = [];
  for (var i = 0; i < traj.length; i++) {
    pts.push((i / (traj.length - 1)) * w + ',' + (h - ((traj[i] - 1) / 4) * h));
  }
  return '<svg style="display:inline-block;vertical-align:middle;margin-left:6px" width="' + w +
    '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h +
    '"><polyline points="' + pts.join(' ') +
    '" fill="none" stroke="' + VM.COLOURS.gold + '" stroke-width="1.5" stroke-linecap="round"/></svg>';
};

/* ══════════════════════════════════════════════════════════════════
   INVESTIGATION DATA (APEX — all zones, all tiers)
   Enhanced fields: pt, fr, spec, fast, time, zones, prov,
   nhs, priv, func, traj, dep, covers, season
   ══════════════════════════════════════════════════════════════════ */
VM.INVESTIGATIONS = {
  Z1: {
    tier1: [
      {t:'HbA1c',co:'GBP 15-25',ev:'Established',ph:'Phase 1',pt:'Long-term blood sugar test',fr:[4.0,6.5,4.0,5.3],spec:'blood',fast:false,time:'Any time',zones:['Z1','Z3'],prov:'IFM Textbook 4th ed, ADA Guidelines',nhs:0,priv:20,func:35,traj:[5,5,5,5,5],dep:null,covers:null,season:null},
      {t:'Fasting glucose',co:'GBP 10-20',ev:'Established',ph:'Phase 1',pt:'Blood sugar level (fasting)',fr:[3.9,5.6,3.9,4.7],spec:'blood',fast:true,time:'08:00-10:00',zones:['Z1'],prov:'WHO diagnostic criteria',nhs:0,priv:15,func:25,traj:[5,5,5,5,5],dep:null,covers:null,season:null},
      {t:'Fasting insulin',co:'GBP 30-50',ev:'Established',ph:'Phase 1',pt:'Insulin level (fasting)',fr:[2.0,25.0,2.0,8.0],spec:'blood',fast:true,time:'08:00-10:00',zones:['Z1','Z5'],prov:'IFM Clinical Practice Guidelines',nhs:0,priv:40,func:50,traj:[4,4,5,5,5],dep:null,covers:null,season:null},
      {t:'Thyroid panel (TSH, fT4, fT3)',co:'GBP 60-90',ev:'Established',ph:'Phase 1',pt:'Thyroid function check',fr:[0.5,4.5,1.0,2.5],spec:'blood',fast:false,time:'08:00-10:00',zones:['Z1','Z5'],prov:'BTA Guidelines 2022',nhs:0,priv:75,func:90,traj:[5,5,5,5,5],dep:'thyroid_full',covers:['tsh_solo'],season:null},
      {t:'Vitamin D (25-OH)',co:'GBP 30-40',ev:'Established',ph:'Phase 1',pt:'Vitamin D level',fr:[30,100,50,80],spec:'blood',fast:false,time:'Any time',zones:['Z1','Z2'],prov:'Endocrine Society Guidelines',nhs:0,priv:35,func:40,traj:[4,5,5,5,5],dep:null,covers:null,season:'Winter specimen preferred for baseline'},
      {t:'Ferritin',co:'GBP 15-25',ev:'Established',ph:'Phase 1',pt:'Iron storage level',fr:[12,300,40,150],spec:'blood',fast:false,time:'Any time',zones:['Z1'],prov:'WHO/NICE iron deficiency guidelines',nhs:0,priv:20,func:25,traj:[5,5,5,5,5],dep:null,covers:null,season:null}
    ],
    tier2: [
      {t:'Comprehensive metabolic panel',co:'GBP 80-120',ev:'Established',ph:'Phase 2',pt:'Full body chemistry check',fr:null,spec:'blood',fast:true,time:'08:00-10:00',zones:['Z1','Z4'],prov:'Standard clinical biochemistry',nhs:0,priv:100,func:120,traj:[5,5,5,5,5],dep:'cmp_full',covers:['glucose_solo','electrolytes'],season:null},
      {t:'Organic acids test',co:'GBP 200-300',ev:'Emerging',ph:'Phase 2',pt:'Cell energy and nutrient processing test',fr:null,spec:'urine',fast:false,time:'First morning void',zones:['Z1','Z4'],prov:'Great Plains/Mosaic Diagnostics validation',nhs:null,priv:null,func:250,traj:[2,3,3,4,4],dep:null,covers:null,season:null},
      {t:'CoQ10 levels',co:'GBP 60-90',ev:'Emerging',ph:'Phase 2',pt:'Cellular energy nutrient test',fr:[0.4,1.5,0.8,1.5],spec:'blood',fast:false,time:'Any time',zones:['Z1','Z3'],prov:'Mitochondrial medicine literature',nhs:null,priv:75,func:90,traj:[3,3,4,4,4],dep:null,covers:null,season:null},
      {t:'Homocysteine',co:'GBP 30-50',ev:'Established',ph:'Phase 2',pt:'Heart and brain risk marker',fr:[5,15,5,8],spec:'blood',fast:true,time:'08:00-10:00',zones:['Z1','Z3','Z4'],prov:'AHA Cardiovascular Guidelines',nhs:0,priv:40,func:50,traj:[4,5,5,5,5],dep:null,covers:null,season:null},
      {t:'Iron studies (full panel)',co:'GBP 40-60',ev:'Established',ph:'Phase 2',pt:'Complete iron assessment',fr:null,spec:'blood',fast:true,time:'08:00-10:00',zones:['Z1'],prov:'NICE NG24 Blood Transfusion',nhs:0,priv:50,func:60,traj:[5,5,5,5,5],dep:'iron_full',covers:['ferritin'],season:null}
    ],
    tier3: [
      {t:'Mitochondrial function panel',co:'GBP 300-500',ev:'Emerging',ph:'Phase 3',pt:'Advanced cell energy test',fr:null,spec:'blood',fast:false,time:'Any time',zones:['Z1'],prov:'Emerging mitochondrial research',nhs:null,priv:null,func:400,traj:[2,2,3,3,4],dep:null,covers:null,season:null},
      {t:'Nutrigenomics panel',co:'GBP 250-400',ev:'Observed in Practice',ph:'Phase 3',pt:'Genetic nutrition test',fr:null,spec:'saliva',fast:false,time:'Any time',zones:['Z1','Z4','Z5'],prov:'Nutrigenomics clinical literature',nhs:null,priv:null,func:325,traj:[2,2,3,3,3],dep:null,covers:null,season:null},
      {t:'Advanced thyroid antibodies',co:'GBP 80-120',ev:'Established',ph:'Phase 3',pt:'Thyroid immune markers',fr:null,spec:'blood',fast:false,time:'08:00-10:00',zones:['Z1','Z2'],prov:'BTA/ETA autoimmune thyroid guidelines',nhs:0,priv:100,func:120,traj:[4,5,5,5,5],dep:null,covers:null,season:null}
    ]
  },
  Z2: {
    tier1: [
      {t:'Full blood count with differential',co:'GBP 10-20',ev:'Established',ph:'Phase 1',pt:'General blood health check',fr:null,spec:'blood',fast:false,time:'Any time',zones:['Z1','Z2','Z3'],prov:'NICE NG47 Haematological cancers',nhs:0,priv:15,func:20,traj:[5,5,5,5,5],dep:null,covers:null,season:null},
      {t:'CRP (high sensitivity)',co:'GBP 15-25',ev:'Established',ph:'Phase 1',pt:'Inflammation marker',fr:[0,10,0,1],spec:'blood',fast:false,time:'Any time',zones:['Z2','Z3'],prov:'ACC/AHA Cardiovascular Risk Guidelines',nhs:0,priv:20,func:25,traj:[4,5,5,5,5],dep:null,covers:null,season:null},
      {t:'IgA total',co:'GBP 20-35',ev:'Established',ph:'Phase 1',pt:'Immune protein level',fr:[0.7,4.0,0.7,4.0],spec:'blood',fast:false,time:'Any time',zones:['Z2'],prov:'BSI Immunology Guidelines',nhs:0,priv:28,func:35,traj:[5,5,5,5,5],dep:null,covers:null,season:null},
      {t:'Vitamin D (25-OH)',co:'GBP 30-40',ev:'Established',ph:'Phase 1',pt:'Vitamin D level',fr:[30,100,50,80],spec:'blood',fast:false,time:'Any time',zones:['Z1','Z2'],prov:'Endocrine Society Guidelines',nhs:0,priv:35,func:40,traj:[4,5,5,5,5],dep:null,covers:null,season:'Winter specimen preferred for baseline'},
      {t:'Zinc',co:'GBP 25-40',ev:'Emerging',ph:'Phase 1',pt:'Zinc mineral level',fr:[60,120,80,120],spec:'blood',fast:true,time:'08:00-10:00',zones:['Z2'],prov:'Emerging immune-nutrition evidence',nhs:null,priv:33,func:40,traj:[3,3,4,4,4],dep:null,covers:null,season:null}
    ],
    tier2: [
      {t:'Comprehensive stool analysis',co:'GBP 250-350',ev:'Emerging',ph:'Phase 2',pt:'Detailed gut health test',fr:null,spec:'stool',fast:false,time:'First morning',zones:['Z2'],prov:'GI-MAP validation studies',nhs:null,priv:null,func:300,traj:[2,3,3,4,4],dep:'stool_full',covers:['siga_stool'],season:null},
      {t:'Intestinal permeability (zonulin)',co:'GBP 80-120',ev:'Emerging',ph:'Phase 2',pt:'Gut barrier integrity test',fr:[0,50,0,30],spec:'blood',fast:false,time:'Any time',zones:['Z2'],prov:'Fasano A. zonulin research 2011-2023',nhs:null,priv:null,func:100,traj:[2,2,3,3,4],dep:null,covers:null,season:null},
      {t:'Food sensitivity panel (IgG)',co:'GBP 200-300',ev:'Observed in Practice',ph:'Phase 2',pt:'Food reaction screening',fr:null,spec:'blood',fast:false,time:'Any time',zones:['Z2'],prov:'Clinical practice observation, not consensus',nhs:null,priv:null,func:250,traj:[2,2,3,3,3],dep:null,covers:null,season:null},
      {t:'Secretory IgA (stool)',co:'GBP 40-60',ev:'Emerging',ph:'Phase 2',pt:'Gut immune defence marker',fr:[510,2040,510,2040],spec:'stool',fast:false,time:'First morning',zones:['Z2'],prov:'Mucosal immunology research',nhs:null,priv:null,func:50,traj:[3,3,4,4,4],dep:null,covers:null,season:null}
    ],
    tier3: [
      {t:'Advanced microbiome sequencing',co:'GBP 300-500',ev:'Emerging',ph:'Phase 3',pt:'Full gut bacteria mapping',fr:null,spec:'stool',fast:false,time:'First morning',zones:['Z2'],prov:'Human Microbiome Project data',nhs:null,priv:null,func:400,traj:[2,2,3,3,4],dep:null,covers:null,season:null},
      {t:'Cytokine panel',co:'GBP 200-350',ev:'Emerging',ph:'Phase 3',pt:'Immune signalling markers',fr:null,spec:'blood',fast:false,time:'08:00-10:00',zones:['Z2','Z3'],prov:'Immunology research, not routine clinical',nhs:null,priv:null,func:275,traj:[2,3,3,4,4],dep:null,covers:null,season:null},
      {t:'Lymphocyte subset analysis',co:'GBP 150-250',ev:'Established',ph:'Phase 3',pt:'Immune cell type breakdown',fr:null,spec:'blood',fast:false,time:'08:00-10:00',zones:['Z2'],prov:'BSI Clinical Immunology Standards',nhs:0,priv:200,func:250,traj:[4,5,5,5,5],dep:null,covers:null,season:null}
    ]
  },
  Z3: {
    tier1: [
      {t:'Lipid panel (full)',co:'GBP 20-35',ev:'Established',ph:'Phase 1',pt:'Cholesterol and fats check',fr:null,spec:'blood',fast:true,time:'08:00-10:00',zones:['Z3'],prov:'NICE CG181 Cardiovascular Disease',nhs:0,priv:28,func:35,traj:[5,5,5,5,5],dep:null,covers:null,season:null},
      {t:'HbA1c',co:'GBP 15-25',ev:'Established',ph:'Phase 1',pt:'Long-term blood sugar test',fr:[4.0,6.5,4.0,5.3],spec:'blood',fast:false,time:'Any time',zones:['Z1','Z3'],prov:'ADA/WHO Guidelines',nhs:0,priv:20,func:25,traj:[5,5,5,5,5],dep:null,covers:null,season:null},
      {t:'Blood pressure monitoring',co:'GBP 10-20',ev:'Established',ph:'Phase 1',pt:'Blood pressure check',fr:null,spec:'device',fast:false,time:'Morning and evening',zones:['Z3'],prov:'NICE NG136 Hypertension',nhs:0,priv:15,func:15,traj:[5,5,5,5,5],dep:null,covers:null,season:null},
      {t:'Magnesium (RBC)',co:'GBP 30-50',ev:'Emerging',ph:'Phase 1',pt:'Magnesium inside red blood cells',fr:[4.2,6.8,5.0,6.8],spec:'blood',fast:false,time:'Any time',zones:['Z1','Z3'],prov:'Emerging cardiovascular nutrition data',nhs:null,priv:40,func:50,traj:[3,3,4,4,4],dep:null,covers:null,season:null}
    ],
    tier2: [
      {t:'Advanced lipid panel (LDL-P, sdLDL)',co:'GBP 150-250',ev:'Established',ph:'Phase 2',pt:'Detailed cholesterol particle test',fr:null,spec:'blood',fast:true,time:'08:00-10:00',zones:['Z3'],prov:'NLA Expert Panel on LDL-P',nhs:null,priv:200,func:250,traj:[4,4,5,5,5],dep:null,covers:null,season:null},
      {t:'Homocysteine',co:'GBP 30-50',ev:'Established',ph:'Phase 2',pt:'Heart and brain risk marker',fr:[5,15,5,8],spec:'blood',fast:true,time:'08:00-10:00',zones:['Z1','Z3','Z4'],prov:'AHA Cardiovascular Guidelines',nhs:0,priv:40,func:50,traj:[4,5,5,5,5],dep:null,covers:null,season:null},
      {t:'Omega-3 index',co:'GBP 60-90',ev:'Established',ph:'Phase 2',pt:'Healthy fat level in blood',fr:[4,8,8,12],spec:'blood',fast:false,time:'Any time',zones:['Z3'],prov:'Harris WS Omega-3 Index research',nhs:null,priv:75,func:90,traj:[3,4,4,5,5],dep:null,covers:null,season:null},
      {t:'TMAO',co:'GBP 80-120',ev:'Emerging',ph:'Phase 2',pt:'Gut-heart connection marker',fr:null,spec:'blood',fast:true,time:'08:00-10:00',zones:['Z2','Z3'],prov:'Cleveland Clinic TMAO research',nhs:null,priv:null,func:100,traj:[2,3,3,4,4],dep:null,covers:null,season:null}
    ],
    tier3: [
      {t:'Coronary artery calcium score',co:'GBP 150-300',ev:'Established',ph:'Phase 3',pt:'Heart artery calcium scan',fr:null,spec:'imaging',fast:false,time:'Any time',zones:['Z3'],prov:'SCCT/AHA CAC Guidelines',nhs:0,priv:225,func:300,traj:[4,4,5,5,5],dep:null,covers:null,season:null},
      {t:'Carotid intima-media thickness',co:'GBP 200-350',ev:'Established',ph:'Phase 3',pt:'Neck artery thickness scan',fr:null,spec:'imaging',fast:false,time:'Any time',zones:['Z3'],prov:'ESC Cardiovascular Prevention',nhs:0,priv:275,func:350,traj:[4,5,5,5,5],dep:null,covers:null,season:null},
      {t:'Advanced cardiovascular panel',co:'GBP 300-450',ev:'Emerging',ph:'Phase 3',pt:'Full heart risk assessment',fr:null,spec:'blood',fast:true,time:'08:00-10:00',zones:['Z3'],prov:'Emerging CV biomarker literature',nhs:null,priv:null,func:375,traj:[2,3,3,4,4],dep:null,covers:null,season:null}
    ]
  },
  Z4: {
    tier1: [
      {t:'Liver function tests',co:'GBP 15-25',ev:'Established',ph:'Phase 1',pt:'Liver health check',fr:null,spec:'blood',fast:false,time:'Any time',zones:['Z4'],prov:'NICE NG50 Cirrhosis',nhs:0,priv:20,func:25,traj:[5,5,5,5,5],dep:null,covers:null,season:null},
      {t:'GGT',co:'GBP 10-20',ev:'Established',ph:'Phase 1',pt:'Liver enzyme level',fr:[5,40,5,25],spec:'blood',fast:false,time:'Any time',zones:['Z4'],prov:'NICE liver disease pathway',nhs:0,priv:15,func:20,traj:[5,5,5,5,5],dep:null,covers:null,season:null},
      {t:'Kidney function (eGFR, creatinine)',co:'GBP 15-25',ev:'Established',ph:'Phase 1',pt:'Kidney health check',fr:null,spec:'blood',fast:false,time:'Any time',zones:['Z4'],prov:'NICE NG203 Chronic Kidney Disease',nhs:0,priv:20,func:25,traj:[5,5,5,5,5],dep:null,covers:null,season:null},
      {t:'Uric acid',co:'GBP 10-20',ev:'Established',ph:'Phase 1',pt:'Uric acid level',fr:[2.4,7.0,2.4,5.5],spec:'blood',fast:false,time:'Any time',zones:['Z4'],prov:'BSR Gout Guidelines',nhs:0,priv:15,func:20,traj:[5,5,5,5,5],dep:null,covers:null,season:null}
    ],
    tier2: [
      {t:'Glutathione (reduced)',co:'GBP 60-90',ev:'Emerging',ph:'Phase 2',pt:'Master antioxidant level',fr:null,spec:'blood',fast:true,time:'08:00-10:00',zones:['Z4'],prov:'Oxidative stress research literature',nhs:null,priv:null,func:75,traj:[3,3,4,4,4],dep:null,covers:null,season:null},
      {t:'Urinary toxic metals',co:'GBP 150-250',ev:'Observed in Practice',ph:'Phase 2',pt:'Heavy metal exposure test',fr:null,spec:'urine',fast:false,time:'First morning void',zones:['Z4'],prov:'ATSDR toxicology profiles',nhs:null,priv:null,func:200,traj:[3,3,3,3,3],dep:null,covers:null,season:null},
      {t:'Organic acids (detox markers)',co:'GBP 200-300',ev:'Emerging',ph:'Phase 2',pt:'Detox pathway activity test',fr:null,spec:'urine',fast:false,time:'First morning void',zones:['Z1','Z4'],prov:'Functional medicine organic acid panels',nhs:null,priv:null,func:250,traj:[2,3,3,4,4],dep:null,covers:null,season:null}
    ],
    tier3: [
      {t:'Genetic SNP panel (Phase II detox)',co:'GBP 200-350',ev:'Emerging',ph:'Phase 3',pt:'Detoxification gene test',fr:null,spec:'saliva',fast:false,time:'Any time',zones:['Z4'],prov:'Pharmacogenomics literature',nhs:null,priv:null,func:275,traj:[2,3,3,4,4],dep:null,covers:null,season:null},
      {t:'Environmental toxin panel',co:'GBP 300-500',ev:'Observed in Practice',ph:'Phase 3',pt:'Chemical exposure screening',fr:null,spec:'blood',fast:false,time:'Any time',zones:['Z4'],prov:'Environmental health research',nhs:null,priv:null,func:400,traj:[2,2,3,3,3],dep:null,covers:null,season:null},
      {t:'Mycotoxin panel',co:'GBP 250-400',ev:'Observed in Practice',ph:'Phase 3',pt:'Mould toxin exposure test',fr:null,spec:'urine',fast:false,time:'First morning void',zones:['Z4'],prov:'ISEAI mould illness literature',nhs:null,priv:null,func:325,traj:[2,2,3,3,3],dep:null,covers:null,season:null}
    ]
  },
  Z5: {
    tier1: [
      {t:'4-point cortisol (salivary)',co:'GBP 80-120',ev:'Established',ph:'Phase 1',pt:'Stress hormone rhythm test',fr:null,spec:'saliva',fast:false,time:'Waking, +30min, noon, 10pm',zones:['Z5'],prov:'Endocrine Society adrenal guidelines',nhs:null,priv:null,func:100,traj:[4,4,5,5,5],dep:null,covers:null,season:null},
      {t:'DHEA-S',co:'GBP 25-40',ev:'Established',ph:'Phase 1',pt:'Adrenal reserve marker',fr:null,spec:'blood',fast:false,time:'08:00-10:00',zones:['Z5'],prov:'Endocrine Society androgen guidelines',nhs:0,priv:33,func:40,traj:[5,5,5,5,5],dep:null,covers:null,season:null},
      {t:'Testosterone (total and free)',co:'GBP 40-60',ev:'Established',ph:'Phase 1',pt:'Testosterone level check',fr:null,spec:'blood',fast:true,time:'08:00-10:00',zones:['Z5'],prov:'AUA/EAU testosterone guidelines',nhs:0,priv:50,func:60,traj:[5,5,5,5,5],dep:null,covers:null,season:null},
      {t:'Oestradiol',co:'GBP 25-40',ev:'Established',ph:'Phase 1',pt:'Oestrogen level check',fr:null,spec:'blood',fast:false,time:'Day 3 of cycle (pre-menopausal)',zones:['Z5'],prov:'RCOG/NICE menopause guidelines',nhs:0,priv:33,func:40,traj:[5,5,5,5,5],dep:null,covers:null,season:null},
      {t:'Thyroid panel (TSH, fT4, fT3)',co:'GBP 60-90',ev:'Established',ph:'Phase 1',pt:'Thyroid function check',fr:[0.5,4.5,1.0,2.5],spec:'blood',fast:false,time:'08:00-10:00',zones:['Z1','Z5'],prov:'BTA Guidelines 2022',nhs:0,priv:75,func:90,traj:[5,5,5,5,5],dep:'thyroid_full',covers:['tsh_solo'],season:null}
    ],
    tier2: [
      {t:'DUTCH complete hormone panel',co:'GBP 250-350',ev:'Emerging',ph:'Phase 2',pt:'Full hormone metabolism test',fr:null,spec:'urine',fast:false,time:'Specific collection protocol',zones:['Z5'],prov:'Precision Analytical validation data',nhs:null,priv:null,func:300,traj:[2,3,3,4,4],dep:'dutch_full',covers:['oestradiol','dheas'],season:null},
      {t:'Sex hormone binding globulin',co:'GBP 30-50',ev:'Established',ph:'Phase 2',pt:'Hormone carrier protein test',fr:null,spec:'blood',fast:true,time:'08:00-10:00',zones:['Z5'],prov:'Endocrine Society guidelines',nhs:0,priv:40,func:50,traj:[5,5,5,5,5],dep:null,covers:null,season:null},
      {t:'Progesterone',co:'GBP 25-40',ev:'Established',ph:'Phase 2',pt:'Progesterone level',fr:null,spec:'blood',fast:false,time:'Day 21 of cycle (pre-menopausal)',zones:['Z5'],prov:'RCOG progesterone guidelines',nhs:0,priv:33,func:40,traj:[5,5,5,5,5],dep:null,covers:null,season:null},
      {t:'Insulin-like growth factor 1',co:'GBP 40-60',ev:'Emerging',ph:'Phase 2',pt:'Growth and repair marker',fr:null,spec:'blood',fast:false,time:'Any time',zones:['Z1','Z5'],prov:'Emerging longevity research',nhs:0,priv:50,func:60,traj:[3,3,4,4,4],dep:null,covers:null,season:null}
    ],
    tier3: [
      {t:'Comprehensive hormone metabolite panel',co:'GBP 350-500',ev:'Emerging',ph:'Phase 3',pt:'Complete hormone breakdown test',fr:null,spec:'urine',fast:false,time:'Specific collection protocol',zones:['Z5'],prov:'Steroid metabolomics research',nhs:null,priv:null,func:425,traj:[2,2,3,3,4],dep:null,covers:null,season:null},
      {t:'Adrenal stress index (extended)',co:'GBP 200-300',ev:'Observed in Practice',ph:'Phase 3',pt:'Extended stress hormone profile',fr:null,spec:'saliva',fast:false,time:'Waking to bedtime (6 points)',zones:['Z5'],prov:'Clinical practice observation',nhs:null,priv:null,func:250,traj:[3,3,3,3,3],dep:null,covers:null,season:null},
      {t:'Thyroid antibodies (TPO, TgAb, TSI)',co:'GBP 80-120',ev:'Established',ph:'Phase 3',pt:'Thyroid immune markers',fr:null,spec:'blood',fast:false,time:'08:00-10:00',zones:['Z1','Z2','Z5'],prov:'BTA/ETA autoimmune thyroid guidelines',nhs:0,priv:100,func:120,traj:[4,5,5,5,5],dep:null,covers:null,season:null}
    ]
  }
};

/**
 * Get all tests for a zone across all tiers
 * @param {string} zoneId
 * @returns {Array} [{test: object, tier: string}]
 */
VM.getAllTests = function(zoneId) {
  var results = [];
  var z = VM.INVESTIGATIONS[zoneId];
  if (!z) return results;
  ['tier1','tier2','tier3'].forEach(function(k) {
    (z[k] || []).forEach(function(t) {
      results.push({ test: t, tier: k });
    });
  });
  return results;
};

/* ══════════════════════════════════════════════════════════════════
   MNEMONICS (29 active, VECTOR excluded)
   ══════════════════════════════════════════════════════════════════ */
VM.MNEMONICS = [
  'VitalMatrix','NCZ','DRD','APEX','TIQ','CIB','CascadeIQ','FLINT','CZR','TRACE',
  'DeltaScan','MedTerrain','TerrainLock','CascadeAtlas','PRISM','KINETICS',
  'COHERENCE','TerrainRoot','ORBIT','SPHERE','HERALD','BEACON','MAPS','RECON',
  'COMPASS','GENOME','ANCHOR','AXIS','INTAKE'
];

/* ══════════════════════════════════════════════════════════════════
   EXPOSE ON WINDOW
   ══════════════════════════════════════════════════════════════════ */
window.VM = VM;

})();
