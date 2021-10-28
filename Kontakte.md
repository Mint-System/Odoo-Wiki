---
tags:
- HowTo
---
# Kontakte
![icons_odoo_contacts](assets/icons_odoo_contacts.png)

Alle Kontaktdaten an einem Ort.

Erweiterungen:
* [Partner first name and last name](Partner-first-name-and-last-name.md)
* [Partner Secondary Name](Partner-Secondary-Name.md)
* [Partner Secondary Email](Partner-Secondary-Email.md)
* [Contact's birthdate](Contact-Birthdate.md)
* [Partner Ref Sequence](Partner-Ref-Sequence.md)

## Portal-Zugriff gewähren

Wählen sie einen Kontakt mit Mail-Adresse aus. Klicken sie auf *Aktion > Grant portal access*. Im folgenden Dialog das Kächstchen *Portal* anklicken und bestätigen. Nun erhält der Benutzer eine Einladungs-Email, sofern der Benutzer eine gültige Mail-Adresse hinterlegt hat.

## Kontakte anlegen

Ein neuer Eintrag im Adressbuch können sie über *Kontakte > Anliegen* erstellen.

![Kontakte anlegen](assets/Kontakte%20anlegen.png)

Odoo verwendet Kontakte als zentrales Adressbuch. Verschiedene Module wie Verkäufe, CRM oder Finanzen greifen auf das Adressbuch zu.

### Details Felder

**Kopfdaten**

![Kontakte Felder Kopfdaten](assets/Kontakte%20Felder%20Kopfdaten.svg)

**Kontakte & Adressen**

Individuen die als Einzelperson erfasst und einem Unternehmen zugeordnet sind erscheinen in diesem Abschnitt.

**Verkauf**

![Kontakte Felder Verkauf](assets/Kontakte%20Felder%20Verkauf.svg)

## Bezeichnung Umsatzsteuer festlegen

Wenn keine Bezeichnung für die Umsatzsteuer festgelegt ist, verwendet Odoo *Tax ID*. Das ist beispielsweise im Footer eines Dokuments ersichtlich.

Wenn sie die Bezeichnung ändern wollen, gehen sie folgt vor. Öffnen sie die Ansicht *Kontakte > Konfiguration > Lokalisierung > Länder* und wählen sie ihr Land aus. Nun können sie die Bezeichnung im Feld *USt.-Bezeichnung* festlegen.

![](assets/Kontakte%20Bezeichnung%20Umsatzsteuer.png)

## Adressformat ändern

Standardmässig druckt Odoo die Adresse mit dem jeweiligen Land des Kontakts ab.

![](assets/Einstellungen%20Adressformat.png)

Damit das Land nicht abgedruckt wird, öffnen sie die Ansicht *Kontakte > Konfiguration > Lokalisierung > Länder* und wählen ihr Land aus. Nun können sie das *Layout in Berichten* festlegen.

![](assets/Kontakte%20Layout%20in%20Berichten.png)