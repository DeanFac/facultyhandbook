---
layout: default
title:  Indo-German Centre for Sustainability
nav_order:  12
parent:  Central Facilities
---



# Indo-German Centre for Sustainability




## Staff


| Name | Post | Location | Phone | Email |
| --- | --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Facilities.igcs_staff["Indo-German Centre for Sustainability"] -%}
| {{ contact.Name }} | {{ contact.Post }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Sections 


| Name | Location | Phone |
| --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Facilities.igcs_sections["Indo-German Centre for Sustainability"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} |
{% endfor %}
