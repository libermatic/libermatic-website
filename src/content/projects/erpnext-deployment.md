---
title: 'ERPNext Deployment'
featureOrder: 2
featureSummary: 'Containerized Cloud Build pipeline. ERPNext + Frappe apps, tagged production images.'
category: 'INFRASTRUCTURE'
client: 'LIBERMATIC'
year: 2025
stack: 'Docker / Google Cloud Build'
repo: 'https://github.com/libermatic/erpnext_deploy'
stats:
  - label: 'Apps'
    value: '12'
pubDate: 2025-07-01
---

A containerized build pipeline for ERPNext on Google Cloud Build. Image tags track upstream **frappe** major and minor versions, with patch-level bumps handled independently here. The final image is deployed on a Kubernetes cluster.

The pipeline installs Frappe core, ERPNext, and a mix of upstream apps (payments, hrms, india-compliance) alongside bespoke custom forks, then applies targeted patches before assembling the final image.
