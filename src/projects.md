---
title: projects
layout: base.njk
permalink: /projects.html
---

<div class="content">
  <h1>{{ title }}</h1>

  <div class="content-section project-sec">
    {% for project in projects %}
      <div 
        class="project-card"
        onclick="window.open('https://github.com/shaaanuu/{{ project.name }}', '_blank')"
      >
        <h3>{{ project.name }}</h3>
        <p>{{ project.desc }}</p>
        <div class="card-footer">
          <div class="card-footer-content">
            <h4>{{ project.lang }}</h4>
            <img src="./code.png" alt="lang">
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
