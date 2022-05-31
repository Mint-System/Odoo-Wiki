---
tags:
- Best-Practice
prev: ./best-practice
---
## Best Practice: Kontakte

Odoo unterscheidet *Einzelperson* und *Unternehmen*. Eine Person kann einem Unternehmen zugeordnet werden. Einem Unternehmen können mehrere Personen zugeordnet werden.

## Felder Kontakt

Eine Übersicht zu den Felder eines Kontakts:

![Kontakte Felder](assets/Best%20Practice%20Kontakte%20Felder.svg)

## Anzeigenamen

In einigen Darstellungen erscheinen Einzelpersonen ergänzt mit dem zugeordneten Unternehmen. Dieses (berechnete) Feld nennt sich *Anzeigename*.

Beispiel Ausschnitt *Liste aller Kontakte*:

![Kontakte Anzeigename](assets/Best%20Practice%20Kontakte%20Anzeigename.png)

## Adressart

![Kontakte Adressart](assets/Best%20Practice%20Kontakte%20Adressart.png)

Die Adressart kann wie folgt eingestellt werden:
- Kontakt
- Rechnungsadresse
- Lieferadresse
- Andere Adresse
- Privatadresse

## Eingabeprüfungen

Das System warnt falls die Gefahr besteht, dass zweimal dieselbe Steuer-ID angelegt wird.

![Kontakte Warnung doppelte Steuer-ID](assets/Best%20Practice%20Kontakte%20Warnung%20doppelte%20Steuer-ID.png)