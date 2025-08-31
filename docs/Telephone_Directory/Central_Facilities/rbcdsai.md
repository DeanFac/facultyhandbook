---
layout: default
title:  Robert Bosch Centre for Data Sciences and Artificial Intelligence
nav_order:  13
parent:  Central Facilities
---



# Robert Bosch Centre for Data Sciences and Artificial Intelligence




## Staff


| Name | Post | Location | Phone | Email |
| --- | --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Facilities.rbcdsai_staff["Robert Bosch Centre for Data Sciences and Artificial Intelligence"] -%}
| {{ contact.Name }} | {{ contact.Post }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Sections 


| Name | Location | Phone |
| --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Facilities.rbcdsai_sections["Robert Bosch Centre for Data Sciences and Artificial Intelligence"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} |
{% endfor %}
