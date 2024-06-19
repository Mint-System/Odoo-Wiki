---
title: Reseller
description: Partnerschaften mit Wiederverkäufer pflegen.
tags:
- HowTo
prev: ./
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

Navigieren Sie nach *Kundenverwaltung > Konfiguration > Provisionspläne* und erstellen Sie einen neuen Eintrag. Tragen Sie einen passenden Namen ein, beispielsweise *20%* und wählen im Tab *Regeln* die Produktkategorien, Produkte, Angebotsvorlagen oder Preislisten aus, für welche der Provisionsplan aktiv sein soll. Im Feld *Wechselkurs* definieren Sie den Ansatz der Provision.

::: tip
Über das Feld *Purchase Default Product* können Sie das Produkt auswählen, welches auf Bestellung der Provision für den Reseller erscheinen soll.
:::

### Partnerlevels definieren

Navigieren Sie nach *Kundenverwaltung > Konfiguration > Partnerlevels*. Hier können Sie bestehende Partnerlevels bearbeiten und neue erfassen. Im Feld *Default Commission Plan* können Sie einen *Provisionsplan* auswählen.

### Zeitplan zur Bestätigung von Komissions-Bestellungen festlegen

Navigieren Sie nach *Einstellungen > Kundenverwaltung > Partner Provisionen*. Im Feld*Automatic PO frequency* können Sie festlegen in welchem Abstand die Komissions-Bestellungen bestätigt werden sollen.

## Verwendung

### Partnerschaft starten

Zeigen Sie einen Kontakt an und wählen Sie den Tab *Partner-Zurodnerung*, wählen Sie *Partner Level* und eine *Aktivierung* aus. Tragen Sie im Feld *Beginn Partnerschaft* ein Datum ein.

### Provisionsplan zuordnen

Zeigen Sie den Kontakt an und wählen Sie den Tab *Partner-Zuordnung* aus. Im Feld *Provisionsplan* können Sie einen Provisionsplan zuordnen.

### Partnerlevel zuordnen

Zeigen Sie den Kontakt an und wählen Sie den Tab *Partner-Zuordnung* aus. Im Feld *Partner Level* legen Sie das Partnerlevel fest.

### Reseller auf Verkaufsauftrag festlegen

Zeigen Sie einen Verkaufsauftrag unter *Verkauf* an und wählen Sie im Feld *Empfehler* einen Reseller aus.

### Reseller auf Rechnung festlegen

Zeigen Sie eine Rechnung unter *Buchhaltung > Kunden > Rechnung* an und navigieren Sie zum Tab *Weitere Informationen*. Wählen Sie im Feld *Empfehler* einen Reseller aus.

### Kommission aus Verkaufsauftrag generieren

Damit Sie eine Partner-Komission abrechnen können. Brauchen Sie einen Verkaufsauftrag mit einem Empfehler und einem Provisionsplan. 

![](attachments/Reseller%20Verkaufsauftrag.png)

Erstellen und versenden Sie die Rechnung. Sobald diese bezahlt wird, erstellt Odoo eine Komissions-Bestellung beim Reseller.

![](attachments/Reseller%20Bestellung.png)

### Komission aus Rechnung generieren

Wenn Sie eine unbezahlte Rechnung haben, können Sie einen [Reseller auf der Rechnung festlegen](#Reseller%20auf%20Rechnung%20festlegen). Wenn Sie Rechnung bezahlt wird, erstellt Odoo eine Komissions-Bestellung beim Reseller.

### Komissions-Bestellung anzeigen

Als Reseller sehen Sie die Komissions-Bestellung im Odoo-Portal.

Als Unternehmen sehen Sie ihre Komissionsbestellung unter *Einkauf*.

### Komissions-Bestellung versenden und bezahlen

Zeigen Sie die Komissions-Bestellungen unter *Einkauf* mit dem Filter *Einkaufstyp ist "comission"* an. Markieren Sie die Komissionen und versenden Sie diese mit der Aktion *Per E-Mail Versenden*

Sobald der Reseller eine Rechnung zu den Komissions-Bestellungen schickt, können Sie die [Lieferantenrechnung mit der Bestellung verknüpfen](Invoicing.md#Lieferantenrechnung%20mit%20Bestellung%20verknüpfen) und die Rechnung bezahlen.

::: tip
Eine automatische Bezahlung der Reseller ist möglich, wenn Sie das Bankkonto auf dem Kontakt hinterlegen.
:::