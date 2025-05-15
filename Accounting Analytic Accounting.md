---
title: Buchhaltung Kostenrechnung
description: Kosten analysieren und Budget planen.
kind: howto
prev: ./accounting
---
# Buchhaltung Kostenrechnung
![icons_odoo_account_accountant](attachments/icons_odoo_account_accountant.png)

{{ $frontmatter.description }}

## Kostenrechnung

### Zugriff Kostenrechnung erteilen

Damit ein Benutzer Zugriff auf die Kostenrechnung und die damit verbunden Felder (wie die Kostentelle) sehen kann, muss in *Einstellungen > Benutzer > Benutzer auswählen* die Berechtigung *Kostenrechnung* erteilt werden.

### Kostenstellenkonto erstellen

Öffnen Sie *Buchhaltung > Konfiguration > Kostenrechnung > Kostenstellenkonten* und erstellen Sie eine einen neuen Eintrag.

### Kostenstellengruppe erstellen

Öffnen Sie *Buchhaltung > Konfiguration > Kostenrechnung > Kostenstellengruppen* und erstellen Sie eine Gruppe.

### Kostenrechnung anzeigen

Zeigen Sie *Buchhaltung > Berichtswesen > Verwaltung > Kostenbericht* an. Wählen Sie *Optionen > Hierarchie und Zwischensummen*  sowie die gewünschte Periode. Es werden nun die saldierten Kostenstellen gruppiert aufgeführt.

### Kosten/Eröse anzeigen

Über den Smart-Link *Kosten/Erlöse* auf einer Kostenstelle *Buchhaltung > Kostenrechnung > Kostenstellen* sehen Sie alle analytischen Buchungen auf der Kostenstelle.

## Verrechnung

### Rechnung auf einer Kostenstelle belasten

Zeigen Sie eine Rechnung via *Buchhaltung > Kunden > Rechnungen* an. Auf der Rechnungszeile können Sie eine Kostenstelle in der entsprechenden Spalte festlegen.

## Budget

### Budgetposition erfassen

Navigieren Sie nach *Buchhaltung > Konfiguration > Budgetpositionen* und erstellen Sie einen neuen Eintrag. Vergeben Sie einen und fügen ein oder mehrere Konten hinzu.

### Budget anlegen

Navigieren Sie Nach *Buchhaltung > Buchhaltung > Budgets* und erstellen Sie einen neuen Eintrag. Legen Sie einen Namen und die Periode fest. Anschliessen können Sie [Budgezeile anlegen](#Budgezeile%20anlegen).

### Budgetzeile anlegen

Öffnen Sie ein Budget in der Formularansicht unter *Buchhaltung > Buchhaltung > Budgets* und wählen im Tab *Budgetposition* die Aktion *Eintrag Hinzufügen*. Wählen Sie eine bestehende Budgetposition aus oder [erfassen Sie eine neue Budgetpositoin](#Budgeposition%20erfassen).
