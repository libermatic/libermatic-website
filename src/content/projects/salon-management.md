---
title: 'Salon Management'
featureOrder: 1
featureSummary: 'Custom ERPNext app for salon operations - appointment scheduling, service line items, staff commissions, and business settings, all built on the Frappe framework.'
category: 'ERP SYSTEMS'
client: '[REDACTED]'
year: 2026
stack: 'Python / Frappe / ERPNext'
repo: 'https://github.com/libermatic/salon'
url: '[REDACTED]'
stats:
  - label: 'Modules'
    value: '3'
  - label: 'Doctypes'
    value: '6'
  - label: 'Custom Fields'
    value: '12+'
pubDate: 2026-11-12
---

Built as a bespoke ERPNext application for a multi-staff salon, replacing fragmented tools with a unified system for appointments, service billing, and staff commissions.

The app introduces a structured `Salon Appointment` doctype that captures service line items, assigns stylists, and tracks duration - each appointment can bundle multiple treatments with individual pricing. Commission rules are configurable per role or individual, with payout calculations driven directly from invoice totals.

All data flows through standard ERPNext document pipelines (Sales Invoice, Customer, Employee) with custom overrides ensuring the billing and reporting layers remain fully compatible with the parent system.
