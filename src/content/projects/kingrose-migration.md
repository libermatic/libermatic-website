---
title: 'King Rose Migration'
featureOrder: 3
summary: 'Joomla to Astro 5. 65+ pages, 80+ employees. Fully static.'
client: 'KING ROSE CONSTRUCTION'
category: 'PERFORMANCE'
year: 2025
stack: 'Astro 5 / TypeScript / Tailwind CSS 4'
repo: '[PRIVATE]'
url: 'https://kingroseny.com'
stats:
  - label: 'Speed Index'
    value: '1.2s'
  - label: 'Bundle Size'
    value: '54kB'
  - label: 'Images Optimized'
    value: '1000+'
pubDate: 2026-11-12
---

King Rose of NY is a licensed general contractor and construction management firm operating from two New York offices (Bronx and Manhattan). The old Joomla site served as a static brochure with 65+ project listings, service pages, a team directory, and career openings - all of which needed modernisation.

The new site is a fully static Astro build with content collections powering the project catalog, services, client testimonials, about section, and career listings. Each project lives in a category-organised YAML structure with image galleries, location metadata, and
HTML-embedded descriptions migrated directly from the legacy Joomla database.

The migration preserved all existing content (project descriptions, testimonials, team bios, career listings) while replacing Joomla's PHP rendering pipeline with Astro's content loader and Zod schema validation. Images are served as WebP through Astro's assets module,
and the build produces a flat directory ready for Firebase hosting.
