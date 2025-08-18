---
layout: default
title: Contacts
nav_order: 5
---

# Contact Directory

<div class="search-container" style="margin-bottom: 1rem;">
  <input 
    type="text" 
    id="contactSearch" 
    placeholder="Search contacts..." 
    style="width: 60%; padding: 8px; border-radius: 6px; border: 1px solid #ccc;"
  >
  <button id="downloadExcel" style="margin-left: 10px; padding: 8px 12px; border-radius: 6px; background-color: #2c7be5; color: white; border: none; cursor: pointer;">
    Download CSV
  </button>
</div>

<table id="contactsTable" class="table" style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th style="cursor: pointer;">Name</th>
      <th style="cursor: pointer;">Extension</th>
      <th style="cursor: pointer;">Email</th>
      <th style="cursor: pointer;">Unit/Department</th>
      <th style="cursor: pointer;">Designation/Misc.</th>
      <th style="cursor: pointer;">Location</th>
      <th style="cursor: pointer;">Cell Phone</th>
    </tr>
  </thead>
  <tbody>
    <!-- Filled dynamically by JS -->
  </tbody>
</table>

---

<!-- Dependencies -->
<script src="https://unpkg.com/lunr/lunr.js"></script>
<script src="https://unpkg.com/tablesort@5.2.1/dist/tablesort.min.js"></script>

<!-- Your custom JS -->
<script src="{{'/assets/js/contact-search.js'}}"></script>
