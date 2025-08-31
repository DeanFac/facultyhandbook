---
layout: default
title:  Centre for Industrial Consultancy and Sponsored Research
nav_order:  7
parent:  Central Facilities
---



# Centre for Industrial Consultancy and Sponsored Research




## Staff


| Name | Post | Location | Phone | Email |
| --- | --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Facilities.icsr_staff["Centre for Industrial Consultancy and Sponsored Research"] -%}
| {{ contact.Name }} | {{ contact.Post }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Sections 


| Name | Location | Phone |
| --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Facilities.icsr_sections["Centre for Industrial Consultancy and Sponsored Research"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} |
{% endfor %}
