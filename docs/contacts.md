---
layout: default
title: Contacts Directory
---

# 📇 Contacts Directory

<p>Start typing in the search box to filter contacts. By default, only the first 50 are shown.</p>

<div style="margin-bottom: 1rem;">
  <input type="text" id="searchInput" placeholder="🔍 Search contacts..." style="width: 60%; padding: 0.5rem; font-size: 1rem;" />
  <button id="downloadBtn" style="padding: 0.5rem 1rem; margin-left: 1rem; background: #2d6cdf; color: white; border: none; border-radius: 5px; cursor: pointer;">
    ⬇ Download CSV
  </button>
</div>

<table id="resultsTable" class="table table-striped" style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th style="cursor:pointer;">Name</th>
      <th style="cursor:pointer;">Designation</th>
      <th style="cursor:pointer;">Extension</th>
      <th style="cursor:pointer;">Location</th>
      <th style="cursor:pointer;">Email</th>
      <th style="cursor:pointer;">Cell Phone</th>
      <th style="cursor:pointer;">Unit</th>
    </tr>
  </thead>
  <tbody id="resultsTableBody"></tbody>
</table>

<!-- Dependencies -->
<script src="https://unpkg.com/lunr/lunr.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tablesort/5.2.1/tablesort.min.js"></script>

<!-- Custom script -->
<script src="/assets/js/contact-search.js"></script>
