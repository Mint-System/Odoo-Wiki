---
title: Reseller
description: Partnerschaften mit Wiederverkäufer pflegen.
kind: howto
prev: ./
partner: Odoo S.A.
---

# Reseller

![icons_odoo_website_crm_partner_assign](attachments/icons_odoo_website_crm_partner_assign.png)

{{ $frontmatter.description }}

Technischer Name: `partner_commission`

::: tip
Reseller und Partner werden in diesem HowTo synonym verwendet. Komissionen sind als Bestellungen bei Resellern zu verstehen.
:::

## Konfiguration

### Provisionsplan anlegen

Navigieren Sie nach _Kundenverwaltung > Konfiguration > Provisionspläne_ und erstellen Sie einen neuen Eintrag. Tragen Sie einen passenden Namen ein, beispielsweise _20%_ und wählen im Tab _Regeln_ die Produktkategorien, Produkte, Angebotsvorlagen oder Preislisten aus, für welche der Provisionsplan aktiv sein soll. Im Feld _Wechselkurs_ definieren Sie den Ansatz der Provision.

::: tip
Über das Feld _Purchase Default Product_ können Sie das Produkt auswählen, welches auf Bestellung der Provision für den Reseller erscheinen soll.
:::

### Partnerlevels definieren

Navigieren Sie nach _Kundenverwaltung > Konfiguration > Partnerlevels_. Hier können Sie bestehende Partnerlevels bearbeiten und neue erfassen. Im Feld _Default Commission Plan_ können Sie einen _Provisionsplan_ auswählen.

### Zeitplan zur Bestätigung von Komissions-Bestellungen festlegen

Navigieren Sie nach _Einstellungen > Kundenverwaltung > Partner Provisionen_. Im Feld*Automatic PO frequency* können Sie festlegen in welchem Abstand die Komissions-Bestellungen bestätigt werden sollen.

## Verwendung

### Partnerschaft starten

Zeigen Sie einen Kontakt an und wählen Sie den Tab _Partner-Zurodnerung_, wählen Sie _Partner Level_ und eine _Aktivierung_ aus. Tragen Sie im Feld _Beginn Partnerschaft_ ein Datum ein.

### Provisionsplan zuordnen

Zeigen Sie den Kontakt an und wählen Sie den Tab _Partner-Zuordnung_ aus. Im Feld _Provisionsplan_ können Sie einen Provisionsplan zuordnen.

### Partnerlevel zuordnen

Zeigen Sie den Kontakt an und wählen Sie den Tab _Partner-Zuordnung_ aus. Im Feld _Partner Level_ legen Sie das Partnerlevel fest.

### Reseller auf Verkaufsauftrag festlegen

Zeigen Sie einen Verkaufsauftrag unter _Verkauf_ an und wählen Sie im Feld _Empfehler_ einen Reseller aus.

### Reseller auf Rechnung festlegen

Zeigen Sie eine Rechnung unter _Buchhaltung > Kunden > Rechnung_ an und navigieren Sie zum Tab _Weitere Informationen_. Wählen Sie im Feld _Empfehler_ einen Reseller aus.

### Kommission aus Verkaufsauftrag generieren

Damit Sie eine Partner-Komission abrechnen können. Brauchen Sie einen Verkaufsauftrag mit einem Empfehler und einem Provisionsplan.

![](attachments/Reseller%20Verkaufsauftrag.png)

Erstellen und versenden Sie die Rechnung. Sobald diese bezahlt wird, erstellt Odoo eine Komissions-Bestellung beim Reseller.

![](attachments/Reseller%20Bestellung.png)

### Komission aus Rechnung generieren

Wenn Sie eine unbezahlte Rechnung haben, können Sie einen [Reseller auf der Rechnung festlegen](#Reseller%20auf%20Rechnung%20festlegen). Wenn Sie Rechnung bezahlt wird, erstellt Odoo eine Komissions-Bestellung beim Reseller.

### Komissions-Bestellung anzeigen

Als Reseller sehen Sie die Komissions-Bestellung im Odoo-Portal.

Als Unternehmen sehen Sie ihre Komissionsbestellung unter _Einkauf_.

### Komissions-Bestellung versenden und bezahlen

Zeigen Sie die Komissions-Bestellungen unter _Einkauf_ mit dem Filter _Einkaufstyp ist "comission"_ an. Markieren Sie die Komissionen und versenden Sie diese mit der Aktion _Per E-Mail Versenden_

Sobald der Reseller eine Rechnung zu den Komissions-Bestellungen schickt, können Sie die [Lieferantenrechnung mit der Bestellung verknüpfen](Invoicing.md#Lieferantenrechnung%20mit%20Bestellung%20verknüpfen) und die Rechnung bezahlen.

::: tip
Eine automatische Bezahlung der Reseller ist möglich, wenn Sie das Bankkonto auf dem Kontakt hinterlegen.
:::
