---
layout: default
title:  PG Senapathy Centre for Computing Resources
nav_order:  2
parent:  Central Facilities
---



# PG Senapathy Centre for Computing Resources




## Staff


| Name | Post | Location | Phone | Email |
| --- | --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Facilities.cc_staff["PG Senapathy Centre for Computing Resources"] -%}
| {{ contact.Name }} | {{ contact.Post }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Sections 


| Name | Location | Phone |
| --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Facilities.cc_sections["PG Senapathy Centre for Computing Resources"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} |
{% endfor %}
