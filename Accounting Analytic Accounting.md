---
title: Buchhaltung Kostenrechnung
description: Kosten analysieren und Budget planen.
kind: howto
section: true
prev: ./accounting
---

# Buchhaltung Kostenrechnung

![icons_odoo_account_accountant](attachments/icons_odoo_account_accountant.png)

{{ $frontmatter.description }}

## Kostenrechnung

### Zugriff Kostenrechnung erteilen

Damit ein Benutzer Zugriff auf die Kostenrechnung und die damit verbunden Felder (wie die Kostentelle) sehen kann, muss in _Einstellungen > Benutzer > Benutzer auswählen_ die Berechtigung _Kostenrechnung_ erteilt werden.

### Kostenstellenkonto erstellen

Öffnen Sie _Buchhaltung > Konfiguration > Kostenrechnung > Kostenstellenkonten_ und erstellen Sie eine einen neuen Eintrag.

### Kostenstellengruppe erstellen

Öffnen Sie _Buchhaltung > Konfiguration > Kostenrechnung > Kostenstellengruppen_ und erstellen Sie eine Gruppe.

### Kostenrechnung anzeigen

Zeigen Sie _Buchhaltung > Berichtswesen > Verwaltung > Kostenbericht_ an. Wählen Sie _Optionen > Hierarchie und Zwischensummen_ sowie die gewünschte Periode. Es werden nun die saldierten Kostenstellen gruppiert aufgeführt.

### Kosten/Eröse anzeigen

Über den Smart-Link _Kosten/Erlöse_ auf einer Kostenstelle _Buchhaltung > Kostenrechnung > Kostenstellen_ sehen Sie alle analytischen Buchungen auf der Kostenstelle.

## Verrechnung

### Rechnung auf einer Kostenstelle belasten

Zeigen Sie eine Rechnung via _Buchhaltung > Kunden > Rechnungen_ an. Auf der Rechnungszeile können Sie eine Kostenstelle in der entsprechenden Spalte festlegen.

## Budget

### Budgetposition erfassen

Navigieren Sie nach _Buchhaltung > Konfiguration > Budgetpositionen_ und erstellen Sie einen neuen Eintrag. Vergeben Sie einen und fügen ein oder mehrere Konten hinzu.

### Budget anlegen

Navigieren Sie Nach _Buchhaltung > Buchhaltung > Budgets_ und erstellen Sie einen neuen Eintrag. Legen Sie einen Namen und die Periode fest. Anschliessen können Sie [Budgezeile anlegen](#Budgezeile%20anlegen).

### Budgetzeile anlegen

Öffnen Sie ein Budget in der Formularansicht unter _Buchhaltung > Buchhaltung > Budgets_ und wählen im Tab _Budgetposition_ die Aktion _Eintrag Hinzufügen_. Wählen Sie eine bestehende Budgetposition aus oder [erfassen Sie eine neue Budgetpositoin](#Budgeposition%20erfassen).
