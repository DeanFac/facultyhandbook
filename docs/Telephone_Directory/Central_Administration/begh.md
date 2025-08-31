---
layout: default
title:  Bose Einstein Guest House
nav_order:  18
parent:  Central Administration
---



## Bose Einstein Guest House


| Name | Post | Cell_Phone | Location | Phone | Email |
| --- | --- | --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Administration.begh_staff["Bose Einstein Guest House"] -%}
| {{ contact.Name }} | {{ contact.Post }} | {{ contact.Cell_Phone }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


 


| Name | Location | Phone |
| --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Administration.begh_office["Bose Einstein Guest House"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} |
{% endfor %}
