---
layout: default
title:  Magnetic Resonance Imaging
nav_order:  10
parent:  Central Facilities
---



# Magnetic Resonance Imaging




## Staff


| Name | Post | Location | Phone | Email |
| --- | --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Facilities.mri_staff["Magnetic Resonance Imaging"] -%}
| {{ contact.Name }} | {{ contact.Post }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Sections 


| Name | Location | Phone |
| --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Facilities.mri_sections["Magnetic Resonance Imaging"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} |
{% endfor %}
