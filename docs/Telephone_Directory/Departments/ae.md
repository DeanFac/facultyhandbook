---
layout: default
title:  Aerospace Engineering
nav_order:  3
parent:  Departments
---



# Aerospace Engineering




## Head of the Department


| Name | Cell_Phone | Location | Phone | Email |
| --- | --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Faculty.ae_head["Head of the Department"] -%}
| {{ contact.Name }} | {{ contact.Cell_Phone }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Regular Faculty 


| Name | Location | Phone | Email |
| --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Faculty.ae_faculty["Aerospace Engineering"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Visiting Faculty 


| Name | Location | Phone | Email |
| --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Visiting.ae_vf["Aerospace Engineering"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Professor of Practise 


| Name | Location | Phone | Email |
| --- | --- | --- | --- |
{% for contact in site.data.yaml_files.POP.ae_pop["Aerospace Engineering"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Officers 


| Name | Post | Location | Phone | Email |
| --- | --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Officers.ae_officers["Aerospace Engineering"] -%}
| {{ contact.Name }} | {{ contact.Post }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Labs / Common Facility 


| Name | Location | Phone |
| --- | --- | --- |
{% for contact in site.data.yaml_files.Laboratories.ae_labs["Aerospace Engineering"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} |
{% endfor %}
