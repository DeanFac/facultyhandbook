---
layout: default
title:  Mechanical Engineering
nav_order:  15
parent:  Departments
---



# Mechanical Engineering




## Head of the Department


| Name | Cell_Phone | Location | Phone | Email |
| --- | --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Faculty.me_head["Head of the Department"] -%}
| {{ contact.Name }} | {{ contact.Cell_Phone }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Regular Faculty 


| Name | Location | Phone | Email |
| --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Faculty.me_faculty["Mechanical Engineering"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Visiting Faculty 


| Name | Location | Phone | Email |
| --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Visiting.me_vf["Mechanical Engineering"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Professor of Practise 


| Name | Location | Phone | Email |
| --- | --- | --- | --- |
{% for contact in site.data.yaml_files.POP.me_pop["Mechanical Engineering"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Officers 


| Name | Post | Location | Phone | Email |
| --- | --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Officers.me_officers["Mechanical Engineering"] -%}
| {{ contact.Name }} | {{ contact.Post }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Labs / Common Facility 


| Name | Location | Phone |
| --- | --- | --- |
{% for contact in site.data.yaml_files.Laboratories.me_labs["Mechanical Engineering"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} |
{% endfor %}
