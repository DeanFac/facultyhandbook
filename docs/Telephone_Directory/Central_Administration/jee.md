---
layout: default
title:  JEE
nav_order:  15
parent:  Central Administration
---



## JEE


| Name | Post | Cell_Phone | Location | Phone | Email |
| --- | --- | --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Administration.jee_staff["JEE"] -%}
| {{ contact.Name }} | {{ contact.Post }} | {{ contact.Cell_Phone }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


 


| Name | Location | Phone |
| --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Administration.jee_office["JEE"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} |
{% endfor %}
