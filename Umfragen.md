---
tags:
- HowTo
prev: ./
---
# Umfragen
![icons_odoo_survey](assets/icons_odoo_survey.png)

Verbessern Sie mit Odoo Umfragen die Performance Ihrer Organisation.

Website: <https://www.odoo.com/de_DE/app/surveys>

## Verwendung

### Umfrage erstellen

Navigieren Sie nach *Umfragen* und wählen Sie *+ Anlegen*. Vergeben Sie eine passende Bezeichnung. Im Tab *Optionen* können Sie die Umfrage gemäss ihren Anforderungen anpassen.


Im Tab *Optionen*  unter *Access Mode* haben Sie diese Optionen:

* **Öffentlicher Link**: Die Umfrage wird mit einem Link geteilt, jeder mit diesem Link kann teilenehmen.
* **Nur eingeladene Personen**: Die Teilnahme ist nur für Kontakte möglich, die über [Umfrage teilen](#Umfrage%20teilen) eingeladen wurden und einen Portal-Zugriff haben.

::: tip
Teilnehmer müssen als Kontakt erfasst sein und müssen einen Portalzugriff haben: [Portalzugriff gewähren](Einstellungen%20Login.md#Portalzugriff%20gewähren).
:::

### Umfrage teilen

Umfrage-Teilnehmer können Sie mit der Aktion *Teilen* einladen. Navigieren Sie zu ihrer Umfrage und wählen Sie die Aktion. 

Erstellen Sie eine neue Mail-Vorlage mit diesen Angaben:

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