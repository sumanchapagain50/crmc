// Data & Colors
const colors = {
    'A': { hex: '#00e676', darkScale: '#004d27' }, // Neon Green
    'B': { hex: '#ffeb3b', darkScale: '#665e18' }, // Neon Yellow
    'C': { hex: '#ff9800', darkScale: '#663d00' }, // Vibrant Orange
    'D': { hex: '#ff1744', darkScale: '#66091b' }  // Neon Red
};

const indicatorMetadata = {
    "F01": { label: "Household access to discretionary funds", capital: "Financial", hazard: "Generic" },
    "F02": { label: "Community financial health", capital: "Financial", hazard: "Generic" },
    "F03": { label: "Local government financial capacity", capital: "Financial", hazard: "Generic" },
    "F04": { label: "Public infrastructure maintenance budget", capital: "Financial", hazard: "Generic" },
    "F05": { label: "Climate change adaptation planning and investment", capital: "Financial", hazard: "Generic" },
    "F06": { label: "Business continuity during floods", capital: "Financial", hazard: "Flood" },
    "F07": { label: "Business continuity during heatwave", capital: "Financial", hazard: "Heatwave" },
    "F08": { label: "Household income continuity during flood", capital: "Financial", hazard: "Flood" },
    "F09": { label: "Household income continuity during heatwave", capital: "Financial", hazard: "Heatwave" },
    "F10": { label: "Flood risk reduction investment", capital: "Financial", hazard: "Flood" },
    "F11": { label: "Heatwave risk reduction investment", capital: "Financial", hazard: "Heatwave" },
    "F12": { label: "Disaster insurance", capital: "Financial", hazard: "Flood" },
    "F13": { label: "Disaster recovery budget", capital: "Financial", hazard: "Flood" },
    "F14": { label: "Energy affordibility", capital: "Financial", hazard: "Heatwave" },
    "F15": { label: "Heatwave action-plan budget", capital: "Financial", hazard: "Heatwave" },
    "H01": { label: "Secondary school attendance", capital: "Human", hazard: "Generic" },
    "H02": { label: "Food availability", capital: "Human", hazard: "Generic" },
    "H03": { label: "First aid knowledge", capital: "Human", hazard: "Generic" },
    "H04": { label: "Awareness of the need for climate change action", capital: "Human", hazard: "Generic" },
    "H05": { label: "Awarenss of climate change risk on floods", capital: "Human", hazard: "Flood" },
    "H06": { label: "Awarenss of climate change risk on heatwaves", capital: "Human", hazard: "Heatwave" },
    "H07": { label: "Awareness of how nature mitigates risk during floods", capital: "Human", hazard: "Flood" },
    "H08": { label: "Awareness of how nature mitigates risk during heatwaves", capital: "Human", hazard: "Heatwave" },
    "H09": { label: "Hazard exposure awareness", capital: "Human", hazard: "Flood" },
    "H10": { label: "Hazard vulnerability awareness", capital: "Human", hazard: "Heatwave" },
    "H11": { label: "Evacuation and safety knowledge", capital: "Human", hazard: "Flood" },
    "H12": { label: "Unsafe water awareness", capital: "Human", hazard: "Flood" },
    "H13": { label: "Heatwave protection knowledge", capital: "Human", hazard: "Heatwave" },
    "H14": { label: "Worker protection for heatwaves", capital: "Human", hazard: "Heatwave" },
    "N01": { label: "Tree cover", capital: "Natural", hazard: "Generic" },
    "N02": { label: "Permeable surfaces", capital: "Natural", hazard: "Generic" },
    "N03": { label: "Land use planning", capital: "Natural", hazard: "Generic" },
    "N04": { label: "Resource management", capital: "Natural", hazard: "Generic" },
    "N05": { label: "Land/water interface health", capital: "Natural", hazard: "Generic" },
    "N06": { label: "Ecological management for flood disaster risk reduction", capital: "Natural", hazard: "Flood" },
    "N07": { label: "Ecological management for heatwave disaster risk reduction", capital: "Natural", hazard: "Heatwave" },
    "P01": { label: "Energy supply continuity", capital: "Physical", hazard: "Generic" },
    "P02": { label: "Transportation system continuity", capital: "Physical", hazard: "Generic" },
    "P03": { label: "Communication systems continuity", capital: "Physical", hazard: "Generic" },
    "P04": { label: "Flood early warning", capital: "Physical", hazard: "Flood" },
    "P05": { label: "Heatwave early warning", capital: "Physical", hazard: "Heatwave" },
    "P06": { label: "Continuity of education during floods", capital: "Physical", hazard: "Flood" },
    "P07": { label: "Continuity of education during heatwaves", capital: "Physical", hazard: "Heatwave" },
    "P08": { label: "Emergency infrastructure and supplies during floods", capital: "Physical", hazard: "Flood" },
    "P09": { label: "Emergency infrastructure and supplies during heatwaves", capital: "Physical", hazard: "Heatwave" },
    "P10": { label: "Continuity of healthcare during disaster during floods", capital: "Physical", hazard: "Flood" },
    "P11": { label: "Continuity of healthcare during disaster during heatwaves", capital: "Physical", hazard: "Heatwave" },
    "P12": { label: "Forecasting for floods", capital: "Physical", hazard: "Flood" },
    "P13": { label: "Forecasting for heatwaves", capital: "Physical", hazard: "Heatwave" },
    "P14": { label: "Household protection and adaptation on floods", capital: "Physical", hazard: "Flood" },
    "P15": { label: "Household protection and adaptation on heatwaves", capital: "Physical", hazard: "Heatwave" },
    "P16": { label: "Availability of clean, safe water during floods", capital: "Physical", hazard: "Flood" },
    "P17": { label: "Availability of clean, safe water during heatwaves", capital: "Physical", hazard: "Heatwave" },
    "P18": { label: "Waste management and risk", capital: "Physical", hazard: "Flood" },
    "P19": { label: "Large scale flood protection", capital: "Physical", hazard: "Flood" },
    "S01": { label: "Mutual support", capital: "Social", hazard: "Generic" },
    "S02": { label: "Social inclusiveness of disaster risk management", capital: "Social", hazard: "Generic" },
    "S03": { label: "Community safety", capital: "Social", hazard: "Generic" },
    "S04": { label: "Local leadership", capital: "Social", hazard: "Generic" },
    "S05": { label: "Disaster response personnel", capital: "Social", hazard: "Generic" },
    "S06": { label: "Healthcare accessibility", capital: "Social", hazard: "Generic" },
    "S07": { label: "Trust in local authorities", capital: "Social", hazard: "Generic" },
    "S08": { label: "Intra-community equity", capital: "Social", hazard: "Generic" },
    "S09": { label: "Inter-community equity", capital: "Social", hazard: "Generic" },
    "S10": { label: "Risk reduction planning for floods", capital: "Social", hazard: "Flood" },
    "S11": { label: "Risk reduction planning for heatwaves", capital: "Social", hazard: "Heatwave" },
    "S12": { label: "Response planning for floods", capital: "Social", hazard: "Flood" },
    "S13": { label: "Response planning for heatwaves", capital: "Social", hazard: "Heatwave" },
    "S14": { label: "Family violence and response planning during floods", capital: "Social", hazard: "Flood" },
    "S15": { label: "Family violence and response planning during heatwaves", capital: "Social", hazard: "Heatwave" },
    "S16": { label: "Stakeholder engagement in risk management for floods", capital: "Social", hazard: "Flood" },
    "S17": { label: "Stakeholder engagement in risk management for heatwaves", capital: "Social", hazard: "Heatwave" },
    "S18": { label: "Flood risk mapping", capital: "Social", hazard: "Flood" },
    "S19": { label: "Heatwave risk mapping", capital: "Social", hazard: "Heatwave" },
    "S20": { label: "Flood disaster impact data collection and use", capital: "Social", hazard: "Flood" },
    "S21": { label: "Heatwave disaster impact data collection and use", capital: "Social", hazard: "Heatwave" }
};

// Load the explicitly parsed CSV data from gradingData.js
const communities = PREBUILT_COMMUNITIES;
const indicators = PREBUILT_INDICATORS;
let data = PREBUILT_DATA;
const NUM_INDICATORS = indicators.length;
const NUM_COMMUNITIES = communities.length;

// Initialize DOM Elements
const leftSidebar = document.getElementById('sidebar-left');
const rightSidebar = document.getElementById('sidebar-right');

communities.forEach((comm, i) => {
    let div = document.createElement('div');
    div.className = 'comm-item';
    div.id = 'comm-' + safeId(comm);
    
    let textSpan = document.createElement('span');
    textSpan.innerText = comm;
    
    let lockSpan = document.createElement('span');
    lockSpan.className = 'lock-icon';
    lockSpan.innerText = '🔒';
    lockSpan.title = 'Lock Highlight';
    lockSpan.onclick = (e) => toggleLock(e, 'community', comm);
    
    div.appendChild(textSpan);
    div.appendChild(lockSpan);

    div.onclick = () => selectItem('community', comm);
    div.onmouseenter = () => handleHover('community', comm);
    div.onmouseleave = () => handleHoverOut();
    
    if (i < 29) leftSidebar.appendChild(div);
    else rightSidebar.appendChild(div);
});

const indRing = document.getElementById('indicator-ring');

function getPos(d, w, h) {
    if (d <= w) return { x: d, y: 0 }; // Top
    if (d <= w + h) return { x: w, y: d - w }; // Right
    if (d <= 2 * w + h) return { x: w - (d - (w + h)), y: h }; // Bottom
    return { x: 0, y: h - (d - (2 * w + h)) }; // Left
}

// Render dynamic indicators
window.renderIndicators = function() {
    const showGeneric = document.getElementById('chk-generic')?.checked ?? true;
    const showFlood = document.getElementById('chk-flood')?.checked ?? true;
    const showHeat = document.getElementById('chk-heat')?.checked ?? true;

    const activeIndicators = indicators.filter(ind => {
        const meta = indicatorMetadata[ind];
        if (!meta) return true; // Show unmapped indicators just in case
        if (meta.hazard === 'Generic' && !showGeneric) return false;
        if (meta.hazard === 'Flood' && !showFlood) return false;
        if (meta.hazard === 'Heatwave' && !showHeat) return false;
        return true;
    });

    // Safely calculate dynamic sizes, falling back to viewport derivatives to prevent NaN crashes
    const currentRect = indRing.getBoundingClientRect();
    const rectW = currentRect.width || window.innerWidth * 0.7;
    const rectH = currentRect.height || window.innerHeight * 0.7;
    const perim = 2 * rectW + 2 * rectH;

    // Clean current rings dots before making new ones
    indRing.querySelectorAll('.indicator-item').forEach(el => el.remove());

    const numActive = activeIndicators.length;
    const currentSpacing = numActive > 0 ? perim / numActive : perim;

    activeIndicators.forEach((ind, i) => {
        let d = i * currentSpacing;
        let pos = getPos(d, rectW, rectH);
        let div = document.createElement('div');
        div.className = 'indicator-item';
        div.id = 'ind-' + safeId(ind);
        
        let textSpan = document.createElement('span');
        textSpan.innerText = ind;
        
        let lockSpan = document.createElement('span');
        lockSpan.className = 'lock-icon';
        lockSpan.innerText = '🔒';
        lockSpan.title = 'Lock Highlight';
        lockSpan.onclick = (e) => toggleLock(e, 'indicator', ind);
        
        div.appendChild(textSpan);
        div.appendChild(lockSpan);
        
        // Show full name on hover from metadata
        const label = indicatorMetadata[ind]?.label || ind;
        const hazard = indicatorMetadata[ind]?.hazard || "Unknown";
        div.title = `${ind}: ${label} (${hazard})`;
        
        div.style.left = (pos.x / rectW * 100) + '%';
        div.style.top = (pos.y / rectH * 100) + '%';
        div.onclick = () => selectItem('indicator', ind);
        div.onmouseenter = () => handleHover('indicator', ind);
        div.onmouseleave = () => handleHoverOut();
        
        // Restore active state seamlessly
        if (mode === 'indicator' && selectedId === ind) {
            div.classList.add('active');
        }

        indRing.appendChild(div);
    });

    // Refresh display
    if (mode === 'grade' || mode === 'community') {
        updateView();
    }
};

// Initial draw with a tiny delay to ensure the browser has painted CSS layouts first
setTimeout(renderIndicators, 100);

// Interactive Logic
let mode = null; 
let selectedId = null; 

// Make selectItem available globally for onclick from HTML
window.selectItem = function(type, id) {
    // Toggle off if clicking the same item twice
    if (mode === type && selectedId === id) {
        mode = null;
        selectedId = null;
    } else {
        mode = type;
        selectedId = id;
    }
    updateView();
}

// Global hover interactions
let lockedHoverId = null;
let lockedHoverType = null;

window.updateHoverLabel = function(type, id) {
    const labelDisplay = document.getElementById('hover-label-display');
    if (!labelDisplay) return;
    
    if (!id || type !== 'indicator') {
        labelDisplay.classList.remove('visible');
        return;
    }
    
    const title = indicatorMetadata[id]?.label || id;
    const hazard = indicatorMetadata[id]?.hazard || '';
    labelDisplay.innerHTML = `<b>${id}</b>: ${title} ${hazard ? `<span style="opacity:0.7;font-size:13px;margin-left:8px;">(${hazard})</span>` : ''}`;
    labelDisplay.classList.add('visible');
};

window.toggleLock = function(event, type, id) {
    event.stopPropagation(); // Prevents normal selectItem click handler
    
    if (lockedHoverId === id) {
        lockedHoverId = null; // Turn off lock
        lockedHoverType = null;
        document.querySelectorAll('.locked').forEach(el => el.classList.remove('locked'));
        handleHoverOut(true); 
    } else {
        document.querySelectorAll('.locked').forEach(el => el.classList.remove('locked'));
        lockedHoverId = id; // Turn on lock for this item
        lockedHoverType = type;
        let el = document.getElementById((type === 'community' ? 'comm-' : 'ind-') + safeId(id));
        if (el) el.classList.add('locked');
        
        handleHover(type, id, true); // Force highlight to target
    }
};

window.handleHover = function(type, id, force = false) {
    // Always dynamically update text natively on any hover, regardless of pin locks!
    updateHoverLabel(type, id);

    if (mode !== 'grade') return;
    if (lockedHoverId && !force) return;

    const grade = selectedId;
    const sId = safeId(id);

    if (type === 'community') {
        const commEl = document.getElementById('comm-' + sId);
        if (commEl) commEl.classList.add('hover-highlight');

        indicators.forEach(ind => {
            if (data[id] && data[id][ind] === grade) {
                let indEl = document.getElementById('ind-' + safeId(ind));
                if (indEl) indEl.classList.add('hover-highlight');
                
                let path = document.querySelector(`.path-${sId}-${safeId(ind)}`);
                if (path) {
                    path.classList.add('highlight-line');
                }
            }
        });
    } else if (type === 'indicator') {
        const indEl = document.getElementById('ind-' + sId);
        if (indEl) indEl.classList.add('hover-highlight');

        communities.forEach(comm => {
            if (data[comm] && data[comm][id] === grade) {
                let commEl = document.getElementById('comm-' + safeId(comm));
                if (commEl) commEl.classList.add('hover-highlight');

                let path = document.querySelector(`.path-${safeId(comm)}-${sId}`);
                if (path) {
                    path.classList.add('highlight-line');
                }
            }
        });
    }
};

window.handleHoverOut = function(force = false) {
    // Revert or clear the hover label
    if (lockedHoverId && !force) {
        updateHoverLabel(lockedHoverType, lockedHoverId);
    } else {
        updateHoverLabel(null, null);
    }

    if (mode !== 'grade') return;
    if (lockedHoverId && !force) return; // Keep highlights alive if locked!
    
    document.querySelectorAll('.hover-highlight').forEach(el => el.classList.remove('hover-highlight'));
    document.querySelectorAll('.highlight-line').forEach(el => el.classList.remove('highlight-line'));
};

function safeId(str) { return str.replace(/[^a-zA-Z0-9_-]/g, ''); }

function updateView() {
    // 1. Reset everything
    lockedHoverId = null; // Clear lock across main state shifts
    lockedHoverType = null;
    updateHoverLabel(null, null);
    
    document.body.classList.remove('mode-grade');
    if (mode === 'grade') document.body.classList.add('mode-grade');
    
    document.querySelectorAll('.locked').forEach(el => el.classList.remove('locked'));
    document.querySelectorAll('.comm-item').forEach(el => { 
        el.className = 'comm-item'; 
        el.style.backgroundColor = ''; 
        el.style.color = ''; 
        el.style.borderColor = '';
    });
    document.querySelectorAll('.indicator-item').forEach(el => { 
        el.className = 'indicator-item'; 
        el.style.backgroundColor = ''; 
        el.style.color = '';
        el.style.borderColor = '';
    });
    document.querySelectorAll('.grade-box').forEach(el => el.classList.remove('active'));
    const overlay = document.getElementById('lines-group');
    overlay.innerHTML = '';

    // 2. Apply rules based on selected mode
    if (mode === 'indicator') {
        let indEl = document.getElementById('ind-' + safeId(selectedId));
        if (indEl) indEl.classList.add('active');

        communities.forEach(comm => {
            let grade = data[comm][selectedId];
            let commEl = document.getElementById('comm-' + safeId(comm));
            if (grade && colors[grade]) {
                commEl.style.backgroundColor = colors[grade].darkScale;
                commEl.style.borderColor = colors[grade].hex;
                commEl.style.color = '#fff';
            }
        });

    } else if (mode === 'community') {
        let commEl = document.getElementById('comm-' + safeId(selectedId));
        commEl.classList.add('active');

        indicators.forEach(ind => {
            let grade = data[selectedId][ind];
            let indEl = document.getElementById('ind-' + safeId(ind));
            if (indEl) {
                if (grade && colors[grade]) {
                    indEl.style.backgroundColor = colors[grade].hex;
                    indEl.style.color = '#121212';
                    indEl.style.borderColor = colors[grade].hex;
                }
            }
        });

    } else if (mode === 'grade') {
        let gradeBox = document.getElementById('grade-' + selectedId);
        gradeBox.classList.add('active');
        
        let linesHTML = '';
        let colorHex = colors[selectedId].hex;

        communities.forEach(comm => {
            let commEl = document.getElementById('comm-' + safeId(comm));
            let hasAtLeastOne = false;
            
            indicators.forEach(ind => {
                if(data[comm][ind] === selectedId) {
                    hasAtLeastOne = true;
                    let indEl = document.getElementById('ind-' + safeId(ind));
                    if(indEl) {
                        // Highlight the indicator in the ring
                        indEl.style.backgroundColor = colorHex;
                        indEl.style.color = '#121212';
                        indEl.style.borderColor = colorHex;

                        // Calculate path for SVG line
                        let r1 = commEl.getBoundingClientRect();
                        let r2 = indEl.getBoundingClientRect();
                        
                        // Attach to the inner side of the Sidebar Community Box
                        let x1 = (r1.left < window.innerWidth / 2) ? r1.right : r1.left;
                        let y1 = r1.top + r1.height / 2;
                        
                        // Attach to the precise center of the Indicator Ring point
                        let x2 = r2.left + r2.width / 2;
                        let y2 = r2.top + r2.height / 2;
                        
                        // Smooth connection (bezier curve)
                        let dStr = `M ${x1},${y1} C ${(x1+x2)/2},${y1} ${(x1+x2)/2},${y2} ${x2},${y2}`;
                        
                        // Note: we accumulate string and inject at once for high performance
                        let lineClass = `path-${safeId(comm)}-${safeId(ind)}`;
                        linesHTML += `<path class="${lineClass}" d="${dStr}" stroke="${colorHex}" fill="none" stroke-width="1" opacity="0.15" />`;
                    }
                }
            });

            // Highlight the community box in the sidebar if it has a match
            if(hasAtLeastOne) {
                commEl.style.borderColor = colorHex;
                commEl.style.backgroundColor = colors[selectedId].darkScale;
            }
        });
        
        overlay.innerHTML = linesHTML;
    }
}

// Redraw lines smoothly on resize
window.addEventListener('resize', renderIndicators);

// ── View Switching ─────────────────────────────────────
let currentView = 'diagram';

window.switchView = function(view) {
    currentView = view;
    const diagramEl = document.getElementById('diagram-view');
    const tableEl   = document.getElementById('table-view');
    const linesEl   = document.getElementById('lines');
    const btnDiagram = document.getElementById('btn-diagram');
    const btnTable   = document.getElementById('btn-table');

    if (view === 'table') {
        diagramEl.style.display = 'none';
        linesEl.style.display   = 'none';
        tableEl.style.display   = 'flex';
        btnDiagram.classList.remove('active');
        btnTable.classList.add('active');
        renderTable();
    } else {
        tableEl.style.display   = 'none';
        diagramEl.style.display = 'flex';
        linesEl.style.display   = '';
        btnTable.classList.remove('active');
        btnDiagram.classList.add('active');
    }
};

// ── Table Rendering ────────────────────────────────────
// Sort state: { ind: string|null, dir: 'asc'|'desc'|null }
let tableSort = { ind: null, dir: null };
// Grade order for sorting: A=0 (best), D=3 (worst), null=4 (NA, always last)
const gradeOrder = { 'A': 0, 'B': 1, 'C': 2, 'D': 3 };

window.sortTable = function(ind) {
    if (tableSort.ind === ind) {
        // Cycle: asc → desc → reset
        if (tableSort.dir === 'asc')  tableSort.dir = 'desc';
        else if (tableSort.dir === 'desc') { tableSort.ind = null; tableSort.dir = null; }
    } else {
        tableSort.ind = ind;
        tableSort.dir = 'asc';
    }
    renderTable();
};

// Helper to update the toolbar label panel
function updateTblLabel(ind) {
    const codeEl = document.getElementById('tbl-hover-code');
    const textEl = document.getElementById('tbl-hover-text');
    const panel  = document.getElementById('tbl-hover-label');
    if (!codeEl || !textEl || !panel) return;

    if (!ind || !indicatorMetadata[ind]) {
        codeEl.textContent = '';
        textEl.textContent = 'Hover over an indicator column to see its label';
        panel.classList.remove('active');
        return;
    }
    const meta = indicatorMetadata[ind];
    codeEl.textContent = ind;
    const hazardIcon = meta.hazard === 'Flood' ? '🌊' : meta.hazard === 'Heatwave' ? '🔥' : '⚙';
    textEl.textContent = `${meta.label}  ${hazardIcon} ${meta.hazard}  ·  ${meta.capital}`;
    panel.classList.add('active');
}

window.renderTable = function() {
    const showGeneric = document.getElementById('tbl-generic')?.checked ?? true;
    const showFlood   = document.getElementById('tbl-flood')?.checked   ?? true;
    const showHeat    = document.getElementById('tbl-heat')?.checked    ?? true;

    // Filter active indicators matching current checkboxes
    const activeInds = indicators.filter(ind => {
        const meta = indicatorMetadata[ind];
        if (!meta) return true;
        if (meta.hazard === 'Generic'  && !showGeneric) return false;
        if (meta.hazard === 'Flood'    && !showFlood)   return false;
        if (meta.hazard === 'Heatwave' && !showHeat)    return false;
        return true;
    });

    // If the sorted indicator is no longer visible, reset sort
    if (tableSort.ind && !activeInds.includes(tableSort.ind)) {
        tableSort = { ind: null, dir: null };
    }

    const capitalOf = ind => indicatorMetadata[ind]?.capital?.[0] || '';

    const table = document.getElementById('data-table');
    const thead = table.querySelector('thead');
    const tbody = table.querySelector('tbody');

    // ── Sort communities ──
    let sortedComms = [...communities];
    if (tableSort.ind && tableSort.dir) {
        sortedComms.sort((a, b) => {
            const ga = gradeOrder[data[a]?.[tableSort.ind]] ?? 4;
            const gb = gradeOrder[data[b]?.[tableSort.ind]] ?? 4;
            return tableSort.dir === 'asc' ? ga - gb : gb - ga;
        });
    }

    // ── Build header ──
    let headHTML = '<tr><th style="cursor:default;">Community</th>';
    activeInds.forEach(ind => {
        const cap   = capitalOf(ind);
        const label = indicatorMetadata[ind]?.label || ind;
        let arrow = '';
        if (tableSort.ind === ind) arrow = tableSort.dir === 'asc' ? ' ▲' : ' ▼';
        const sortedClass = tableSort.ind === ind ? ' th-sorted' : '';
        headHTML += `<th class="cap-${cap}${sortedClass}" title="${ind}: ${label}" onclick="sortTable('${ind}')">${ind}${arrow}</th>`;
    });
    headHTML += '</tr>';
    thead.innerHTML = headHTML;

    // ── Build body rows ──
    let bodyHTML = '';
    sortedComms.forEach(comm => {
        bodyHTML += `<tr><td title="${comm}">${comm}</td>`;
        activeInds.forEach(ind => {
            const grade = data[comm]?.[ind];
            if (grade && colors[grade]) {
                bodyHTML += `<td class="grade-${grade}" title="${comm} – ${ind}: ${grade}">${grade}</td>`;
            } else {
                bodyHTML += `<td class="grade-na"></td>`;
            }
        });
        bodyHTML += '</tr>';
    });
    tbody.innerHTML = bodyHTML;

    // ── Wire hover events via delegation ──────────────────
    // Detach old listener by cloning the table node
    const newTable = table.cloneNode(false);
    newTable.appendChild(thead);
    newTable.appendChild(tbody);
    table.parentNode.replaceChild(newTable, table);

    newTable.addEventListener('mouseover', e => {
        const td = e.target.closest('td, th');
        if (!td) return;
        // Determine column index
        const colIdx = td.cellIndex;
        if (colIdx === 0) { updateTblLabel(null); return; } // community col
        const ind = activeInds[colIdx - 1];
        updateTblLabel(ind);
    });
    newTable.addEventListener('mouseleave', () => updateTblLabel(null));
};

// ── Edge Auto-Scroll for Table ─────────────────────────
(function setupTableAutoScroll() {
    const EDGE_ZONE = 0.10;   // 10% of screen width on each side
    const MAX_SPEED = 18;     // max pixels per frame
    let rafId = null;
    let mouseX = -1;

    function getScrollEl() {
        return document.querySelector('.table-scroll-wrapper');
    }

    function scrollStep() {
        const scrollEl = getScrollEl();
        if (!scrollEl || mouseX < 0) { rafId = null; return; }

        const W = window.innerWidth;
        const edgePx = W * EDGE_ZONE;
        let speed = 0;

        if (mouseX > W - edgePx) {
            // Right zone — scroll right
            const ratio = (mouseX - (W - edgePx)) / edgePx; // 0→1
            speed = Math.round(ratio * ratio * MAX_SPEED);   // ease-in curve
        } else if (mouseX < edgePx) {
            // Left zone — scroll left
            const ratio = (edgePx - mouseX) / edgePx;       // 0→1
            speed = -Math.round(ratio * ratio * MAX_SPEED);
        }

        if (speed !== 0) {
            scrollEl.scrollLeft += speed;
            rafId = requestAnimationFrame(scrollStep);
        } else {
            rafId = null;
        }
    }

    function onMouseMove(e) {
        mouseX = e.clientX;
        const scrollEl = getScrollEl();
        // Only auto-scroll when the table-view is actually visible
        if (!scrollEl || document.getElementById('table-view')?.style.display === 'none') return;
        if (!rafId) rafId = requestAnimationFrame(scrollStep);
    }

    function onMouseLeave() {
        mouseX = -1;
        if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    }

    // Attach to the whole window so the mouse position is always tracked
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
})();

