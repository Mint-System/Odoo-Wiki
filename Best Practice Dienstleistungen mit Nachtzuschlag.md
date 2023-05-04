---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---
# Dienstleistungen mit Nachtzuschlag

Nachzuschläge sollen auf der finalen Rechnung separat ausgewiesen, bzw. mit einem anderen Stundensatz als die normale Dienstleistung abgerechnet werden. Dazu müssen Zuschlags-Varianten für die Dienstleistungen generiert werden. Als erstes erstellen Sie ein neues [Produktattributt](Verkauf%20Preise.md#Produktattributte%20erstellen) mit der folgenden Konfiguration:

![](assets/Best%20Practice%20Dienstleistungen%20mit%20Nachtzuschlag%20Zuschlag.png)

Konfigurieren Sie dieses Attribute für ihre Dienstleistungen: [Produktvarianten konfigurieren](Verkauf%20Preise.md#Produktvarianten%20konfigurieren). Legen Sie Preisaufschläge fest.

Auf dem Verkaufsangebot fügen Sie alle relevanten Varianten hinzu.

![](assets/Best%20Practice%20Dienstleistungen%20mit%20Nachtzuschlag%20Angebot.png)

Wenn Sie in der Zeiterfassung einen [Eintrag manuell erstellen](Zeiterfassung.md#Eintrag%20manuell%20erstellen) wählen Sie als *Aufgabe* die entsprechende Projekteaufgabe.

Haben Sie die Erweiterung [HR Timesheet From Until](HR%20Timesheet%20From%20Until.md) installiert, können Sie anhand Start- und Endzeit einfacher die Zuschlagsarten bestimmen.