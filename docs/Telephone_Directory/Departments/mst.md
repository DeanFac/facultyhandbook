---
layout: default
title:  Medical Science and Technology
nav_order:  18
parent:  Departments
---



# Medical Science and Technology




## Head of the Department


| Name | Cell_Phone | Location | Phone | Email |
| --- | --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Faculty.mst_head["Head of the Department"] -%}
| {{ contact.Name }} | {{ contact.Cell_Phone }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Regular Faculty 


| Name | Location | Phone | Email |
| --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Faculty.mst_faculty["Medical Science and Technology"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Adjunct Faculty 


| Name | Location | Phone | Email |
| --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Adjunct.mst_af["Medical Science and Technology"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Professor of Practise 


| Name | Location | Phone | Email |
| --- | --- | --- | --- |
{% for contact in site.data.yaml_files.POP.mst_pop["Medical Science and Technology"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Labs / Common Facility 


| Name | Location | Phone |
| --- | --- | --- |
{% for contact in site.data.yaml_files.Laboratories.mst_labs["Medical Science and Technology"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} |
{% endfor %}
