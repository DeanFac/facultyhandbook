---
layout: default
title:  Data Science and Artificial Intelligence
nav_order:  10
parent:  Departments
---



# Data Science and Artificial Intelligence




## Head of the Department


| Name | Cell_Phone | Location | Phone | Email |
| --- | --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Faculty.ds_head["Head of the Department"] -%}
| {{ contact.Name }} | {{ contact.Cell_Phone }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Regular Faculty 


| Name | Location | Phone | Email |
| --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Faculty.ds_faculty["Data Science and Artificial Intelligence"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


## Labs / Common Facility 


| Name | Location | Phone |
| --- | --- | --- |
{% for contact in site.data.yaml_files.Laboratories.ds_labs["Data Science and Artificial Intelligence"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} |
{% endfor %}
