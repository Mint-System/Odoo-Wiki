---
title: CRM
description: Verfolgen Sie Leads, schließen Sie Verkaufschancen ab und erhalten Sie genaue Prognosen.
kind: howto
prev: ./
partner: Odoo S.A.
extensions: true
---

# CRM

![icons_odoo_crm](attachments/icons_odoo_crm.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/crm>

## Erweiterungen

| Erweiterung                                             | Beschreibung                            |
| ------------------------------------------------------- | --------------------------------------- |
| [CRM Lead Template](CRM%20Lead%20Template.md) | Lead Notizen von Vorlage aktualisieren. |
| [Sale CRM Note](Sale%20CRM%20Note.md)         | Notiz von Lead auf Angebot übertragen.  |

## Konfiguration

###  Interessenten aus eingehenden E-Mails erstellen

Gilt bis #Odoo15: 

Sie können für E-Mails, die an das Odoo-Postfach geschickt werden, Interessenten in der Kundenverwaltung generieren. Navigieren Sie nach _Kundenverwaltung > Konfiguration > Einstellungen_ und aktivieren Sie die Option _Eingehende E-Mails_. Tragen Sie im neuen Feld den E-Mail-Alias des Odoo-Postfach ein.

## Leads

### Leads erstellen

Navigieren Sie nach _Kundenverwaltung > Leads_ und erstellen Sie einen neuen Eintrag.

### Leads in Verkaufschance umwandeln

Wählen Sie einen Leads unter _CRM > Leads_ aus und klicken Sie auf _In Verkaufschance Umwandeln_.

## Verkaufschancen

### Verkaufschance erstellen

Öffnen Sie die App _CRM_ und klicken Sie auf _Neu_. Wählen Sie als erstes einen Kunden aus und geben Sie einen passenden Titel ein.

![](attachments/CRM.png)

Speichern Sie die Verkaufschance in ihrer Pipeline mit _Hinzufügen_.

### Verkaufschance anreichern

Odoo kann zum Kunden Unternehmensdaten finden und der Verkaufschance hinzufügen. Wählen Sie eine Verkaufschance auf der Übersicht von _CRM_ aus und klicken Sie auf _Aktionen > Anreichern_. Wenn Odoo Informationen zum Kunden findet, listet es diese auf der rechten Seite im Chatter auf.
