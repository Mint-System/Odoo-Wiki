---
title: Agreement Legal
description: Verträge und Vereinbarungen dokumentieren.
tags:
- HowTo
- OCA
prev: ./documents
---
# Agreement Legal

![](assets/icon_oca_agreement.png)

{{ $frontmatter.description }}

Technischer Name: `agreement_legal`\
Repository: <https://github.com/OCA/contract/tree/14.0/agreement_legal>

## Verwendung

### Vereinbarungstyp verwalten

Navigieren Sie nach *Agreements > Configuration > Agreement Types*. Hier können sie bestehende Vereinbarungstyp bearbeiten oder neue erstellen.

![](assets/Agreement%20Types.png)

### Unter-Vereinbarungstyp erstellen

Die Vereinbarungstypen können weiter in Untergruppen gegliedert werden. Navigieren Sie nach *Agreements > Configuration > Agreement Types*, wählen sie einen Eintrag aus und erfassen sie in der Tabelle *Sub-Type Name* die Untergruppen.

![](assets/Agreement%20Legal%20Subtypes.png)

### Vorlage für Vereinbarung erstellen

Navigieren Sie nach *Agreements > Configuration > Templates* und klicken sie auf *Anlegen*. Geben Sie Informationen zur Vereinbarungsvorlage ein und beenden sie den Vorgang mit Speichern.

![](assets/Agreement%20Legal%20Template.png)

### Vereinbarung erstellen

Basierend auf einer Vorlage können Sie eine Vereinbarung erstellen. Öffnen sie die *Agreements* App und klicken Sie auf *Anlegen*. Wählen Sie die Vorlage aus und geben sie einen Namen an. Anschliessen wählen Sie den Vertragspartner aus und geben ein Start- und Enddatum ein.

![Agreement Legal Vereinbarung erstellen](assets/Agreement%20Legal%20Vereinbarung%20erstellen.gif)

### Unterschiebene Vereinbarung hochladen

Öffnen sie die *Agreements* App und wählen Sie eine bestehende Vereinbarung. Bearbeiten Sie die Vereinbarung und laden sie das unterschriebene Dokument im Tab *Signatures* hoch.

![Agreement Legal Unterschriebene Vereinbarung hochladen](assets/Agreement%20Legal%20Unterschriebene%20Vereinbarung%20hochladen.gif)

### Aktive Vereinbarungen anzeigen und filtern

Über die Ansicht *Agreements > Operations > Agreements* sehen sie alle aktiven Vereinbarungen. Hier können Sie suchen und filtern.

![Agreement Legal anzeigen](assets/Agreement%20Legal%20anzeigen.gif)

### Neue Version von Vereinbarung erstellen

Öffnen sie die *Agreements* App und wählen Sie eine bestehende Vereinbarung. Klicken Sie auf *New Version*. Nun wird die bestehende Vereinbarung dupliziert und im Tab *Revisions* wird die alte Version verknüpft.

![](assets/Agreement%20Legal%20Revisions.png)

### Stufen der Vereinbarungen anpassen

Um die Stufen der Vereinbarungen anzupassen, wählen Sie *Agreements > Configuration > Stages*. Hier können sie bestehende Stufen anpassen, löschen oder neue erstellen.

### Berechtigungen anhand Agreement Type filtern

Im folgenden Beispiel werden die abrufbaren Verträge anhand des *Agreement Type* gefiltert. Für Mitglieder der Gruppe *Agreement IT* sind nur Verträge mit der Type Bezeichnung *IT* sichtbar. Die Gruppe erstellen Sie unter *Einstellungen > Benutzer und Unternehmen > Gruppen*.

![](assets/Agreement%20Legal%20Permission.png)

### Berechtigungen anhand Benutzer und Gruppen filtern

Haben Sie das Feld `x_user_ids` und `x_group_ids` auf dem Datenmodell *Agreement* zur Verfügung können Sie den Zugriff auf die Objekte damit filtern.

Legen Sie auf dem Datenmodell diese *Rechte für Daten* fest:

**Name**: Agreement Gruppen\
**Gruppen**: Interne Benutzer\
**Domain**: `[('x_group_ids', 'in', [g.id for g in user.groups_id])]`

**Name**: Agreement Benutzer\
**Gruppen**: Interne Benutzer\
**Domain**: `[('x_user_ids','=',user.id)]`

![](assets/Agreement%20Legal%20Berechtigungen.png)

Auf dem Agreement können Sie über die Felder *Benutzer* und *Gruppen* zusätzliche Zugriffe regeln.

![](assets/Agreement%20Legal%20Guppen%20und%20Benutzer.png)