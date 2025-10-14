---
title: { { VALUE:name } }
description: { { VALUE:description } }
kind: howto
tags:
    - { { VALUE:org_name } }
prev: { { VALUE:prev } }
---

# {{VALUE:name}}

{{VALUE:module_icon}}

{{ $frontmatter.description }}

```js quickadd
const odoo_version = await this.quickAddApi.suggester(
    ['16.0', '17.0', '18.0'],
    ['16.0', '17.0', '18.0']
)
this.variables.odoo_version = odoo_version

const org_name = await this.quickAddApi.suggester(
    ['OCA', 'Mint-System', 'Thirdparty'],
    ['OCA', 'Mint-System', 'Thirdparty']
)
this.variables.org_name = org_name

module_icon = '![icon_oms_box](../attachments/icons_odoo_mint_system.png)'
if (org_name == 'OCA') {
    module_icon = '![icon_oca_app](../attachments/icon_oca_app.png)'
}
if (org_name == 'Thirdparty') {
    module_icon = '![icon_oca_app](../attachments/icons_odoo_thirdparty.png)'
}

this.variables.module_icon = module_icon
```

Technischer Name: `{{VALUE:module_name}}`\
Repository: <https://github.com/{{VALUE:org_name}}/{{VALUE:repo_name}}/tree/{{VALUE:odoo_version}}/{{VALUE:module_name}}>
