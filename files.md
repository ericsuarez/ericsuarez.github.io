---
layout: page
title: Files
---

<section>
  {% for file in site.static_files %}
    {% if file.extname == ".bat" -%}
      <ul>
        <li> {{ file.path }} <a href="https://github.com/ericsuarez/tree/main{{file.path}}">  [{{ file.path }}]({{ site.baseurl }}{{ file.path }}) </a></li>
      </ul>
    {%- endif %}
  {% endfor %}
</section>