---
layout: page
title: Files
---

<section>
  {% for file in site.static_files %}
    {% if file.extname == ".bat"-%}
      <ul> Bat Scripts
        <li> {{ file.path }} <a href="https://raw.githubusercontent.com/ericsuarez/ericsuarez.github.io/main{{file.path}}">  [{{ file.path }}]({{ site.baseurl }}{{ file.path }}) </a></li>
      </ul>
    {%- endif %}
  {% endfor %}


  {% for file in site.static_files %}
    {% if file.extname == ".ps1"-%}
      <ul> PS Scripts
        <li> {{ file.path }} <a href="https://raw.githubusercontent.com/ericsuarez/ericsuarez.github.io/main{{file.path}}">  [{{ file.path }}]({{ site.baseurl }}{{ file.path }}) </a></li>
      </ul>
    {%- endif %}
  {% endfor %}


  {% for file in site.static_files %}
    {% if file.extname == ".ws"-%}
      <ul> WScripts
        <li> {{ file.path }} <a href="https://raw.githubusercontent.com/ericsuarez/ericsuarez.github.io/main{{file.path}}">  [{{ file.path }}]({{ site.baseurl }}{{ file.path }}) </a></li>
      </ul>
    {%- endif %}
  {% endfor %}

  {% for file in site.static_files %}
    {% if file.extname == ".vba"-%}
      <ul> VBA Scripts
        <li> {{ file.path }} <a href="https://raw.githubusercontent.com/ericsuarez/ericsuarez.github.io/main{{file.path}}">  [{{ file.path }}]({{ site.baseurl }}{{ file.path }}) </a></li>
      </ul>
    {%- endif %}
  {% endfor %}
</section>