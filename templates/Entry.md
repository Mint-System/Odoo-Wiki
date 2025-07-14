---
title: {{VALUE:name}}
description: {{VALUE:description}}
kind: howto
tags:
- Drittanbieter
prev: {{VALUE:prev|./contacts}}
---
# {{VALUE:name}}
![icon_oms_box](../attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}
```js quickadd
const odoo_version = await this.quickAddApi.suggester(
    ["16.0", "17.0", "18.0"],
    ["16.0", "17.0", "18.0"]
);
this.variables.odoo_version = odoo_version;
````
Technischer Name: `{{VALUE:module_name}}`\
Repository: <https://github.com/Mint-System/Odoo-Apps-{{VALUE:repo_name}}/tree/{{VALUE:odoo_version}}/{{VALUE:module_name}}>
