---
layout: default
title:  Central Skill Training and Fabrication Facility
nav_order:  9
parent:  Central Facilities
---



# Central Skill Training and Fabrication Facility




## Staff


| Name | Post | Location | Phone | Email |
| --- | --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Facilities.cstff_staff["Central Skill Training and Fabrication Facility"] -%}
| {{ contact.Name }} | {{ contact.Post }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Sections 


| Name | Location | Phone |
| --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Facilities.cstff_sections["Central Skill Training and Fabrication Facility"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} |
{% endfor %}
