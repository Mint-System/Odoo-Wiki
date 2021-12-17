---
tags:
- HowTo
prev: ./personalabrechnung
---
# Personalabrechnung Eingaben
![icons_odoo_hr_payroll](assets/icons_odoo_hr_payroll.png)

Lohnabrechnungen mit variablen Eingaben.

## Variable Eingaben mit Lohnart verbuchen

Um variable Eingaben in der Lohnzahlungen abzurechnen, müssen sie diese Eingaben definieren und einer Lohnart hinterlegen. Bei der Abrechnung wird die Lohnart mitgerechnet.

Als erstes müssen sie für eine bestehende Lohnstruktur eine Eingabe definieren. Navigieren sie nach *Personalabrechnung > Konfiguration > Structure* und wählen sie die Lohnstruktur aus. Erstellen sie im Tab *Ohter Input* eine Eingabe. Hierzu ein Beispiel für einen zusätzlichen Quellensteuerabzug:

![](assets/Personalabrechnung%20Eingabe%20Quellensteuer.png)

Damit der Betrag in der Lohnabrechnung berücksichtigt wird, muss dieser als Lohnart definiert werden. Erstellen sie eine neue Lohnart in der bestehenden Lohnstruktur. Dazu ein Beispiel wie man diese für den Quellensteuerabzug definiert:

Name: `Quellensteuer Nachbelastung`\
Kategorie: `Abzüge`\
Code: `2280`\
Reihenfolge: `190`\
Vergütungsstruktur: `Lohnabrechnung`\
Bedinung basiert auf: `Python Ausdruck`
Python Bedinung: `result = inputs.QUELLEN.amount > 0.0 if inputs.QUELLEN else False`\
Berechnungsart: `Python Code`\
Python Code: `result = inputs.QUELLEN.amount if inputs.QUELLEN else 0`

![](assets/Personalabrechnung%20Lohnart%20von%20Inputs.png)

Beim Berechnen werden variable Eingaben in der Lohnabrechnung miteinbezogen.

## Lohnabzug Kurzarbeit konfigurieren

Im Falle von Kurzarbeit kann man die variablen Abzüge mit einer neuen Eingabe und Lohnart geltend machen.

Navigieren sie nach *Personalabrechnung > Konfiguration > Other Input Types*. Erstellen sie dort einen Eintrag mit *Beschreibung* `Lohnabzug Kurzarbeit` und *Code* `KURZ`.

Navigieren sie nach *Personalabrechnung > Konfiguration > Regeln* und wählen sie *Anlegen*. Erstellen sie eine Lohnart mit folgenden Definitionen:

Name: `Lohnabzug Kurzarbeit`\
Kategorie: `Freie Zuwendung`\
Code: `KURZ`\
Reihenfolge: `15`\
Vergütungsstruktur: `Lohnabrechnung`\
Bedinung basiert auf: `Python Ausdruck`
Python Bedinung: `result = inputs.KURZ.amount > 0.0 if inputs.KURZ else False`\
Berechnungsart: `Python Code`\
Python Code: `result = -inputs.KURZ.amount if inputs.KURZ else 0`

Im Tab *Finanzen* wählen sie:

Sollkonto: `1098 Durchlaufkonto Löhne`\
Habenkonto: `5000 Löhne`

Speichern sie die Lohnart,  fügen sie einer ausgewählte Lohnabrechnung mit der zugehörigen Lohnstruktur eine Spesen-Eingabe hinzu und berechnen die Abrechnung neu.

## Spesen als Zuwendung konfigurieren

Spesen können als variable Eingabe in der Lohnabrechnung hinzugefügt werden. Navigieren sie nach *Personalabrechnung > Konfiguration > Other Input Types*. Erstellen sie dort einen Eintrag mit *Beschreibung* `Spesen` und *Code* `SPESEN`.

Damit die Eingabe in der Lohnabrechnung berücksichtigt wird, muss eine neue Lohnart definiert werden. Navigieren sie nach *Personalabrechnung > Konfiguration > Regeln* und wählen sie *Anlegen*. Erstellen sie eine Lohnart mit folgenden Definitionen:

Name: `Spesen`\
Kategorie: `Freie Zuwendung`\
Code: `2000`\
Reihenfolge: `10`\
Vergütungsstruktur: `Lohnabrechnung`\
Bedinung basiert auf: `Python Ausdruck`
Python Bedinung: `result = inputs.SPESEN.amount > 0.0 if inputs.SPESEN else False`\
Berechnungsart: `Python Code`\
Python Code: `result = inputs.SPESEN.amount if inputs.SPESEN else 0`

Im Tab *Finanzen* wählen sie:

Sollkonto: `5082 Spesen`\
Habenkonto: `1098 Durchlaufkonto Löhne`

Speichern sie die Lohnart,  fügen sie einer ausgewählte Lohnabrechnung mit der zugehörigen Lohnstruktur eine Spesen-Eingabe hinzu und berechnen die Abrechnung neu.

## Lohnakonto mit Nachberechnung konfigurieren

Machen sie Lohnabzüge nach Berechnung des Nettolohn, muss die Lohnabrechnung etwas umstrukturiert werden. Einerseits muss wieder ein variabler Lohntyp konfiguriert werden und anderer

Navigieren sie nach *Personalabrechnung > Konfiguration > Other Input Types*. Erstellen sie dort einen Eintrag mit *Beschreibung* `Lohnakonto` und *Code* `LNKT`.

Damit die Eingabe in der Lohnabrechnung berücksichtigt wird, muss eine neue Lohnart definiert werden. Navigieren sie nach *Personalabrechnung > Konfiguration > Regeln* und wählen sie *Anlegen*. Erstellen sie eine Lohnart mit folgenden Definitionen:

Name: `Lohnakonto`\
Kategorie: `Nachberechnung`\
Code: `5800`\
Reihenfolge: `205`\
Vergütungsstruktur: `Lohnabrechnung`\
Berechnungsart: `Python Code`\
Bedinung basiert auf: `Python Ausdruck`
Python Bedinung: `result = inputs.LNKT.amount != 0.0 if inputs.LNKT else False`\
Berechnungsart: `Python Code`\
Python Code: `result = inputs.LNKT.amount if inputs.LNKT else 0`

Damit der Auszahlungsbetrag überschrieben werden kann, müssen sie eine neue Lohnart anlegen:

Name: `Auszahlung`\
Kategorie: `Auszahlung` (Anlegen mit Code `ASZ`)\
Code: `NET`\
Reihenfolge: `999`\
Vergütungsstruktur: `Lohnabrechnung`\
Berechnungsart: `Python Code`\
Python Code: `result = categories.NET + categories.NBR`

Und bei der Lohnart *Nettolohn* den Code auf `SUM` setzen (Code muss immer eindeutig sein).

## 13er Monatslohn konfiguerieren

Navigieren sie nach *Personalabrechnung > Konfiguration > Other Input Types*. Erstellen sie dort einen Eintrag mit *Beschreibung* `13er Monatslohn` und *Code* `BASIC13`.

Damit die Eingabe in der Lohnabrechnung berücksichtigt wird, muss eine bestehende Lohnart angepasst werden. Navigieren sie nach *Personalabrechnung > Konfiguration > Regeln* und wählen sie die Lohnart mit Code *BASIC*. Passen sie die Lohnart wie folgt an:

Python Code: `result = payslip.paid_amount + (inputs.BASIC13.amount if inputs.BASIC13 else 0)`

Speichern sie die Lohnart,  fügen sie einer ausgewählte Lohnabrechnung mit der zugehörigen Lohnstruktur eine Spesen-Eingabe hinzu und berechnen die Abrechnung neu.