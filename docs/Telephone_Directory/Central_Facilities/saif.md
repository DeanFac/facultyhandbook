---
layout: default
title:  Sophisticated Analytical Instrumentation Facility
nav_order:  6
parent:  Central Facilities
---



# Sophisticated Analytical Instrumentation Facility




## Staff


| Name | Post | Location | Phone | Email |
| --- | --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Facilities.saif_staff["Sophisticated Analytical Instrumentation Facility"] -%}
| {{ contact.Name }} | {{ contact.Post }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Sections 


| Name | Location | Phone |
| --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Facilities.saif_sections["Sophisticated Analytical Instrumentation Facility"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} |
{% endfor %}
