---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 1


venues:
  - { key: icra,    label: ICRA,    type: conference }
  - { key: iros,    label: IROS,    type: conference }
  - { key: rss,     label: RSS,     type: conference }
  - { key: corl,    label: CoRL,    type: conference }
  - { key: cvpr,    label: CVPR,    type: conference }
  - { key: icml,    label: ICML,    type: conference }
  - { key: tro,     label: TRO,     type: journal }
  - { key: ram,     label: RAM,     type: journal }
  - { key: ral,     label: RAL,     type: journal }
  - { key: ijrr,    label: IJRR,    type: journal }
  - { key: auro,    label: AuRo,    type: journal }
  - { key: tfr,     label: TFR,     type: journal }

topics:
  - { key: nav,        label: Navigation }
  - { key: learning,   label: Learning }
  - { key: loc,        label: Locomotion }
  - { key: perception, label: Perception }
---


<style>
.pub-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6em 0.9em;
  align-items: center;
  justify-content: center;
  margin: 1.25em 0 1.5em;
  padding: 0.75em 1em;
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 12px;
}
.pub-controls .workshop-toggle {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  font-size: 0.85em;
  color: var(--global-text-color);
  cursor: pointer;
  user-select: none;
}
.pub-controls .workshop-toggle input {
  accent-color: var(--global-theme-color);
  cursor: pointer;
}
.pub-controls .sort-label {
  font-size: 0.85em;
  font-weight: 600;
  color: var(--global-text-color);
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
.pub-controls select {
  background: var(--global-bg-color);
  color: var(--global-text-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 18px;
  padding: 0.3em 2em 0.3em 0.9em;
  font-size: 0.88em;
  cursor: pointer;
  transition: border-color 0.15s, box-shadow 0.15s;
  appearance: none;
  -webkit-appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, var(--global-theme-color) 50%),
                    linear-gradient(135deg, var(--global-theme-color) 50%, transparent 50%);
  background-position: calc(100% - 14px) 50%, calc(100% - 9px) 50%;
  background-size: 5px 5px, 5px 5px;
  background-repeat: no-repeat;
}
.pub-controls select:hover,
.pub-controls select:focus {
  border-color: var(--global-theme-color);
  box-shadow: 0 0 0 2px rgba(0,0,0,0.04);
  outline: none;
}
.sort-btn {
  background: transparent;
  color: var(--global-text-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 18px;
  padding: 0.3em 0.95em;
  font-size: 0.85em;
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s, box-shadow 0.15s;
}
.sort-btn:hover {
  border-color: var(--global-theme-color);
  color: var(--global-theme-color);
}
.sort-btn.active {
  background: var(--global-theme-color);
  color: var(--global-hover-text-color);
  border-color: var(--global-theme-color);
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
}

/* Publication entries */
#all-publications ol.bibliography > li {
  padding: 0.9rem 0.75rem;
  border-radius: 10px;
  transition: background 0.15s;
}
#all-publications ol.bibliography > li:hover {
  background: var(--global-card-bg-color);
}
#all-publications ol.bibliography > li + li {
  border-top: 1px solid var(--global-divider-color);
}
#all-publications .publication-entry .title {
  font-weight: 600;
}
</style>

<div id="publications-container">
  <div class="publications" id="all-publications">
    {% bibliography --group_by none %}
  </div>
</div>
