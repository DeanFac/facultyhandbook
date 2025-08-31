---
layout: default
title:  Academic Courses
nav_order:  3
parent:  Central Administration
---



## Academic Courses


| Name | Post | Cell_Phone | Location | Phone | Email |
| --- | --- | --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Administration.ac_staff["Academic Courses"] -%}
| {{ contact.Name }} | {{ contact.Post }} | {{ contact.Cell_Phone }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


 


| Name | Location | Phone |
| --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Administration.ac_office["Academic Courses"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} |
{% endfor %}
