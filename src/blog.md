---
layout: blog.njk
title: "Blog"
---

<ul>
  {% for post in collections.blog %} {% if post.inputPath != page.inputPath %}
  <h3>
    <li>
      <a href="{{ post.url }}">{{ post.data.title }}</a> —
      <small>{{ post.date | date: "%B %-d, %Y" }}</small>
    </li>
  </h3>
  {% endif %} {% endfor %}
</ul>
