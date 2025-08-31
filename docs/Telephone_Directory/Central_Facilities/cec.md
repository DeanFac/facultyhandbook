---
layout: default
title:  Central Electronics Centre
nav_order:  4
parent:  Central Facilities
---



# Central Electronics Centre




## Staff


| Name | Post | Location | Phone | Email |
| --- | --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Facilities.cec_staff["Central Electronics Centre"] -%}
| {{ contact.Name }} | {{ contact.Post }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Sections 


| Name | Location | Phone |
| --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Facilities.cec_sections["Central Electronics Centre"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} |
{% endfor %}
