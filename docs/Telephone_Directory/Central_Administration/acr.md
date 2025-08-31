---
layout: default
title:  Alumni  & Corporate Relations
nav_order:  6
parent:  Central Administration
---



## Alumni & Corporate Relations


| Name | Post | Cell_Phone | Location | Phone | Email |
| --- | --- | --- | --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Administration.acr_staff["Alumni \& Corporate Relations"] -%}
| {{ contact.Name }} | {{ contact.Post }} | {{ contact.Cell_Phone }} | {{ contact.Location }} | {{ contact.Phone }} | {{ contact.Email }} |
{% endfor %}


 


| Name | Location | Phone |
| --- | --- | --- |
{% for contact in site.data.yaml_files.Central_Administration.acr_office["Alumni \& Corporate Relations"] -%}
| {{ contact.Name }} | {{ contact.Location }} | {{ contact.Phone }} |
{% endfor %}
