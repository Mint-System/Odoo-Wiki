---
title: Umfragen
description: Verbessern Sie mit Odoo Umfragen die Performance Ihrer Organisation.
tags:
- HowTo
prev: ./
---
# Umfragen
![icons_odoo_survey](attachments/icons_odoo_survey.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/surveys>\
Odoo documentation: <https://www.odoo.com/documentation/16.0/applications/marketing/surveys/create.html>

## Bereiche

| Bereich                                                | Beschreibung                                   |
| ------------------------------------------------------ | ---------------------------------------------- |
| [Umfragen Datenmanagement](Survey%20Datamanagement.md) | Daten zu Umfragen exportieren und importieren. |

## Erweiterungen

| Erweiterung                                                   | Beschreibung                        |
| ------------------------------------------------------------- | ----------------------------------- |
| [Survey Question Type NPS](Survey%20Question%20Type%20NPS.md) | Zusätzlicher Feldtyp für NPS-Score. |

## Verwendung

### Umfrage erstellen

Navigieren Sie nach *Umfragen* und wählen Sie *+ Anlegen*. Vergeben Sie eine passende Bezeichnung. Im Tab *Optionen* können Sie die Umfrage gemäss ihren Anforderungen anpassen.


Im Tab *Optionen*  unter *Access Mode* haben Sie diese Optionen:

* **Öffentlicher Link**: Die Umfrage wird mit einem Link geteilt, jeder mit diesem Link kann teilenehmen.
* **Nur eingeladene Personen**: Die Teilnahme ist nur für Kontakte möglich, die über [Umfrage teilen](#Umfrage%20teilen) eingeladen wurden und einen Portal-Zugriff haben.

::: tip
Teilnehmer müssen als Kontakt erfasst sein und müssen einen Portalzugriff haben: [Portalzugriff gewähren](Settings%20Login.md#Portalzugriff%20gewähren).
:::

### Umfrage teilen

Umfrage-Teilnehmer können Sie mit der Aktion *Teilen* einladen. Navigieren Sie zu ihrer Umfrage und wählen Sie die Aktion. 

### Mail-Vorlage für Einladung erstellen

Führen Sie [E-Mail-Vorlage erfassen](Discuss%20E-Mail.md#E-Mail-Vorlage%20erfassen) mit diesen Angaben aus:

* **Name**: Umfrage: Einladung\
* **Gilt für**: Benutzereingaben\
* **Betreff**: `Einladung zur Umfrage ${object.survey_id.title}`\
* **Nachricht**:

```html
<div style="margin:0px;padding:0px; ">

    <p style="padding:0px; ">
        Guten Tag ${object.partner_id.name or 'participant'}<br><br>
        % if object.survey_id.certificate:
            Sie wurden eingeladen eine Zertifizierung durchzuführen.
        % else:
            Wir machen eine Umfrage und ihre Teilnahme ist Willkommen.
        % endif
	</p>
	
	<div style="margin:16px 0px 16px 0px">
		<a href="${('%s?answer_token=%s' % (object.survey_id.public_url, object.token)) | safe}" style="background-color:#875A7B;padding:8px 16px 8px 16px; text-decoration:none; color:#fff; border-radius:5px; font-size:13px">
			% if object.survey_id.certificate:
				Zertifizierung starten
			% else:
				Umfrage starten
			% endif
		</a>
	</div>
	
	% if object.deadline:
		Beantworten Sie die Umfrage bis ${format_date(object.deadline)}.<br><br>
	% endif
	Vielen Danke für ihre Teilnahme.
    
</div>
```

## Berechtigung

### Bearbeitung für alle Benutzer erlauben

Wenn Sie möchten, dass Benutzer andere Umfragen bearbeiten können, müssten Sie diese [Rechte für Daten deaktivieren](Settings%20Permissions.md#Rechte%20für%20Daten%20deaktivieren):

* Survey: officer: create/write/unlink own only
* Survey question: officer: create/write/unlink linked to own survey only
* Survey question answer: officer: create/write/unlink linked to own survey only

