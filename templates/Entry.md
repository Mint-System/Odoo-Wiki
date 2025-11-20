---
title: {{VALUE:name}}
description: {{VALUE:description}}
kind: howto
tags:
  - {{VALUE:org_name}}
prev: {{VALUE:prev}}
---

# {{VALUE:name}}

{{VALUE:module_icon}}

{{ $frontmatter.description }}
```js quickadd
// Define available versions
const odoo_version = await this.quickAddApi.suggester(
  ['16.0', '17.0', '18.0'],
  ['16.0', '17.0', '18.0']
);
this.variables.odoo_version = odoo_version;

// Define organizations and their corresponding repos
const repoMap = {
  "OCA": [
    "account-invoicing",
    "bank-payment",
    "bank-statement-import",
    "connector",
    "e-commerce",
    "hr-attendance",
    "hr-holidays",
    "mail",
    "openupgrade",
    "partner-contact",
    "project",
    "queue",
    "rest-framework",
    "sale-workflow",
    "server-auth",
    "server-backend",
    "server-env",
    "server-tools",
    "social",
    "stock-logistics-workflow",
    "storage",
    "survey",
    "web",
    "web-api",
    "website"
  ],
  "Mint-System": [
    "Odoo-Apps-Account-Financial-Reporting",
    "Odoo-Apps-Account-Invoicing",
    "Odoo-Apps-Account-Reconcile",
    "Odoo-Apps-Connector",
    "Odoo-Apps-HR",
    "Odoo-Apps-Kubernetes",
    "Odoo-Apps-Management-System",
    "Odoo-Apps-Manufacture",
    "Odoo-Apps-Partner-Contact",
    "Odoo-Apps-Product-Attribute",
    "Odoo-Apps-Purchase-Workflow",
    "Odoo-Apps-Sale-Workflow",
    "Odoo-Apps-Server-Tools",
    "Odoo-Apps-Social",
    "Odoo-Apps-Spreadsheet",
    "Odoo-Apps-stock-logistics-workflow",
    "Odoo-Apps-Vertical-SaaS",
    "Odoo-Apps-Website"
  ],
  "Thirdparty": []
};

// Select organization
const org_name = await this.quickAddApi.suggester(
  ['OCA', 'Mint-System', 'Thirdparty'],
  ['OCA', 'Mint-System', 'Thirdparty']
);
this.variables.org_name = org_name;

// Set icon based on org
let module_icon = '';
if (org_name === 'OCA') {
  module_icon = '![icon_oca_app](../attachments/icon_oca_app.png)';
} else if (org_name === 'Mint-System') {
  module_icon = '![icon_oms_box](../attachments/icons_odoo_mint_system.png)';
} else {
  module_icon = '![icon_oca_app](../attachments/icons_odoo_thirdparty.png)';
}
this.variables.module_icon = module_icon;

// Choose repo name from list of known repos
let repo_name = "";
if (repoMap[org_name] && repoMap[org_name].length > 0) {
  repo_name = await this.quickAddApi.suggester(repoMap[org_name], repoMap[org_name]);
} else {
  repo_name = await this.quickAddApi.inputPrompt("Enter custom repository name:");
}
this.variables.repo_name = repo_name;
```
Technischer Name: `{{VALUE:module_name}}`\
Repository: <https://github.com/{{VALUE:org_name}}/{{VALUE:repo_name}}/tree/{{VALUE:odoo_version}}/{{VALUE:module_name}}>
