---
title: Datenbereinigung Aktionen
description: Aktionen in der Datenbereinigung automatisieren.
kind: howto
section: true
prev: ./data-cleaning
---

# Datenbereinigung Aktionen

![icons_odoo_data_cleaning](attachments/icons_odoo_data_cleaning.png)

{{ $frontmatter.description }}

## Aktionen

### Notizen zusammenführen

Mithilfe dieser Aktionen können Sie das Notiz-Feld auf Duplikats-Einträgen zusammenführen.

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Notizen zusammenführen`
Modell: `data_merge.record`\
Typ: `Code ausführen`

```python
# Get all unique groups associated with these records
group_ids = records.group_id

for group_id in group_ids:

    # Get all duplication records belonging to this specific group
    duplication_ids = records.filtered(lambda r: r.group_id == group_id)

    # Identify the master record
    master_id = duplication_ids.filtered("is_master")

    # Safety check: If no master exists, skip this group
    if not master_id:
        continue

    # Get master record
    master_record_id = env[group_id.res_model_name].browse(master_id.res_id)

    # Get all records
    record_ids = env[group_id.res_model_name].browse(duplication_ids.mapped("res_id"))

    # Get child records
    child_records_ids = record_ids - master_record_id

    # Initialize merged comment with the current master comment
    merged_comment = master_record_id.comment or ""

    for child_id in child_records_ids:
        # Add separator for readability (Optional)
        separator = "\n\n=== NOTE FROM DUPLICATE CONTACT: {} ===\n\n".format(child_id.ref or "Unknown")

        # Append child comment
        child_comment = child_id.comment or ""
        if child_comment:
            merged_comment += separator + child_comment

    # Write the merged comment back to the master record
    master_record_id.write({
        'comment': merged_comment
    })
    child_records_ids.write({
        'comment': False
    })
```


### Adresse übertragen

Mit dieser Aktion können Sie die Adresse von einem Duplikat mit Adresse auf das dazugehörige Duplikat ohne Adresse übertragen. Damit bleiben Adressinformationen vor der Zusammenführung der Duplikate erhalten.

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Adresse übertragen`
Modell: `data_merge.record`\
Typ: `Code ausführen`

```python
# Define address fields
address_fields = ['street', 'street2', 'zip', 'city', 'state_id', 'country_id']

# Get all unique groups associated with these records
group_ids = records.group_id

for group_id in group_ids:

    # Get all duplication records belonging to this specific group
    duplication_ids = records.filtered(lambda r: r.group_id == group_id)

    # Get all records
    record_ids = env[group_id.res_model_name].browse(duplication_ids.mapped("res_id"))

    # Get record without street
    no_street_ids = record_ids.filtered(lambda r: not r.street)

    # Get reocrd with street
    with_street_ids = record_ids.filtered(lambda r: r.street)

    # Transfer address if one records with address and one without address exists
    if len(no_street_ids) == 1 and len(with_street_ids) == 1:
        
        # Prepare values to copy
        vals = {field: with_street_ids[field] for field in address_fields}
        
        # Write the address fields to records
        no_street_ids.write(vals)
        
        message = "Copied address for partner '%s' record %s to %s." % (with_street_ids.name, with_street_ids.id, no_street_ids.id)
        log(message)
```
