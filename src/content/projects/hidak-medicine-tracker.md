---
title: 'Hidak'
featureOrder: 3
featureSummary: 'Medicine tracking PWA. Individual / shared management. Offline-first. RLS enforced.'
category: 'PWA'
client: '[PRIVATE]'
year: 2026
stack: 'SvelteKit 2 / Supabase / Tailwind CSS 4'
repo: '[PRIVATE]'
stats:
  - label: 'Lighthouse'
    value: '98'
  - label: 'LCP'
    value: '1.9s'
  - label: 'Bundle Size'
    value: '119kB'
pubDate: 2026-01-01
---

A medicine tracking progressive web app where each user manages their own medications and can invite others to help track and log doses. Add a medication with its daily schedule, see what's due grouped by time of day, and mark doses as taken or skipped. Logs are fully audited (who logged it and when) and history is preserved even when schedules change.

The app uses a thin-client / fat-database architecture — all permissions are enforced in Postgres via RLS policies, with SvelteKit serving as the UI shell and Supabase handling auth, data, and business logic through RPCs and edge functions.

Flexible scheduling supports four frequencies — **daily**, **weekly** (e.g. Mon/Wed/Fri), **interval** (every N days), and **as needed** (PRN) — with history-safe dose logging. The PWA is installable on desktop and mobile, with offline-first support.
