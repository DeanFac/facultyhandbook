---
layout: default
title: Contacts Directory
nav_order: 1
---

# 📇 Contacts Directory

Use the search box below to filter contacts. The table updates **live** as you type.  
Click on a column header to sort. You can also download the filtered results as a CSV.

<div style="margin: 1em 0;">
  <input type="text" id="searchBox" placeholder="Search contacts..." style="width: 60%; padding: 8px; font-size: 1rem;" />
  <button id="downloadBtn" style="padding: 8px 12px; margin-left: 10px;">Download CSV</button>
</div>

<table id="resultsTable" class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Designation</th>
      <th>Extension</th>
      <th>Location</th>
      <th>Email</th>
      <th>Cell Phone</th>
      <th>Unit</th>
    </tr>
  </thead>
  <tbody>
    <!-- Results will be injected here -->
  </tbody>
</table>


<!-- Lunr.js (search engine) -->
<script src="https://unpkg.com/lunr/lunr.js"></script>

<!-- Tablesort (for column sorting) -->
<script src="https://unpkg.com/tablesort@5.2.1/dist/tablesort.min.js"></script>

<!-- Your search logic -->
<script src="/assets/js/contact-search.js"></script>
