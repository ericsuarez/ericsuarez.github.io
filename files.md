---
layout: page
title: Files
---

<section>
  {% for file in site.static_files %}
    {% if file.extname == ".bat" -%}
      <ul>
        <li> {{ file.path }} <a href="https://raw.githubusercontent.com/ericsuarez/ericsuarez.github.io/main{ file.path }}">  [{{ file.path }}]({{ site.baseurl }}{{ file.path }}) </a></li>
      </ul>
    {%- endif %}
  {% endfor %}
</section>