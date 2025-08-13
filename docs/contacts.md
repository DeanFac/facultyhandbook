---
layout: default
title: Contacts
nav_order: 10
---

# Contact Directory 

#### <button id="downloadExcel" class="btn-green">Download CSV</button> (The filtered search alone can be downloaded as a csv.)


Type to search the contact list instantly.
<input type="text" id="contactSearch" placeholder="Search contacts..." style="width:100%; padding:8px; font-size:12px; margin-bottom:12px;">

<div style="overflow: auto; max-height: 500px; border: 1px solid #ddd;">
<table id="contactsTable" style="width:100%; border-collapse:collapse">
  <thead style="position: sticky; top: 0; background: var(--body-background-color); z-index: 1;">
    <tr>
      <th style="text-align:left; padding:5px; border-bottom:1px solid #e5e5e5;">Name</th>
      <th style="text-align:left; padding:5px; border-bottom:1px solid #e5e5e5;">Email</th>
      <th style="text-align:left; padding:5px; border-bottom:1px solid #e5e5e5;">Department</th>
      <th style="text-align:left; padding:5px; border-bottom:1px solid #e5e5e5;">Phone</th>
    </tr>
  </thead>
  <tbody>
  {% for contact in site.data.contacts %}
    <tr>
      <td style="padding:5px; border-bottom:1px solid #f1f1f1;">{{ contact.name }}</td>
      <td style="padding:5px; border-bottom:1px solid #f1f1f1;"> <a href="mailto:{{ contact.email }}">{{ contact.email }}</a>
</td>
      <td style="padding:5px; border-bottom:1px solid #f1f1f1;">{{ contact.department }}</td>
      <td style="padding:5px; border-bottom:1px solid #f1f1f1;">{{ contact.phone }}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>
</div>
<script src="https://unpkg.com/tablesort@5.2.1/dist/tablesort.min.js"></script>
<script src="{{ '/assets/js/contact-search.js' | relative_url }}"></script>
