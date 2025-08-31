---
layout: default
title: Links
nav_order: 11
---

# Important Links 

Type to search
<input type="text" id="contactSearch" placeholder="Search links..." style="width:100%; padding:8px; font-size:12px; margin-bottom:12px;">

<div style="overflow: auto; max-height: 500px; border: 1px solid #ddd;">
<table id="contactsTable" style="width:100%; border-collapse:collapse">
  <thead style="position: sticky; top: 0; background: var(--body-background-color); z-index: 1;">
    <tr>
      <th style="text-align:left; padding:5px; border-bottom:1px solid #e5e5e5;">Name</th>
      <th style="text-align:left; padding:5px; border-bottom:1px solid #e5e5e5;">Description</th>
    </tr>
  </thead>
  <tbody>
  {% for link in site.data.links %}
    <tr>
      <td style="padding:5px; border-bottom:1px solid #f1f1f1;"><a href="{{ link.URL}}">{{ link.Name }}</a></td>
      <td style="padding:5px; border-bottom:1px solid #f1f1f1;">{{ link.Description }}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>
</div>
<script src="https://unpkg.com/tablesort@5.2.1/dist/tablesort.min.js"></script>
<script src="{{ '/assets/js/contact-search.js' | relative_url }}"></script>
