---
layout: default
title:  Hospital
nav_order:  12
parent:  Central Administration
---



## Hospital


| Name | Post | Cell_Phone | Location | Phone | Email |
| --- | --- | --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Administration.hosp_staff["Hospital"] -%}
| {{ contact.Name }} | {{ contact.Post }} | {{ contact.Cell_Phone }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


 


| Name | Location | Phone |
| --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Administration.hosp_office["Hospital"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} |
{% endfor %}
