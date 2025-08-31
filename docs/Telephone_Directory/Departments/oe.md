---
layout: default
title:  Ocean Engineering
nav_order:  19
parent:  Departments
---



# Ocean Engineering




## Head of the Department


| Name | Cell_Phone | Location | Phone | Email |
| --- | --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Faculty.oe_head["Head of the Department"] -%}
| {{ contact.Name }} | {{ contact.Cell_Phone }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Regular Faculty 


| Name | Location | Phone | Email |
| --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Faculty.oe_faculty["Ocean Engineering"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Emeritus Faculty 


| Name | Location | Phone | Email |
| --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Emeritus.oe_ef["Ocean Engineering"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Labs / Common Facility 


| Name | Location | Phone |
| --- | --- | --- |
{% for contact in site.data.yaml_files.Laboratories.oe_labs["Ocean Engineering"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} |
{% endfor %}
