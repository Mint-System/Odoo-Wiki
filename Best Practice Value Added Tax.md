---
title: Mehrwertsteuer
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
---

# Mehrwertsteuer

Bevor Sie im System die erste Rechnung erstellen sollten Sie die Abklärungen machen ob Sie überhaupt MWST-pflichtig sind oder nicht. Es gilt die Regel:

**Ab einem Jahresumsatz von CHF 100’000 sind Sie steuerpflichtig und müssen die MWST quartalsweise abrechnen. Sind Sie noch nicht steuerpflichtig, können Sie alle Rechnungen ohne Steuer erzeugen. Aufs neue Buchhaltungsjahr hin, schätzen Sie ihren Umsatz ein.**

Sind Sie noch nicht steuerpflichtig, können Sie direkt mit dem Verbuchen von Rechnungen beginnen und tragen bei der Steuer nichts ein. Sind Sie Steuerpflichtig, dann arbeiten Sie am besten nach der Methode Effektive
Steuerverrechnung und vereinbarten Entgelten. So ist auch die Buchhaltung eingestellt.
Weiterführende Informationen finden Sie unter <https://fedlex.data.admin.ch/eli/cc/2009/615>

## Abrechnung nach vereinbarten Entgelten

Die Abrechnung nach vereinbarten Entgelten ist das Standardverfahren der eidgenössischen Steuerverwaltung. Bei dieser Methode wird die MWST fällig, sobald die Rechnung dem Kunden gestellt ist. Bezahlt dieser die Rechnung erst in einem späteren Quartal, finanzieren Sie als Unternehmer die MWST vor.

::: tip
Beispiel: Sie haben ein Architekturbüro und haben Arbeiten im Wert von CHF 1’000 ausgeführt. Am 28. Juni stellen Sie dem Kunden eine Rechnung über CHF 1’077 aus (Rechnungsbetrag plus 8.1% MWST).
Der Kunde bezahlt die Rechnung in 30 Tagen nach Rechnungserhalt. Als Unternehmer müssen Sie die MWST von CHF 77 vorfinanzieren und nach Abschluss des laufenden Quartals, also Anfang Juli, der Steuerverwaltung abliefern.
:::

## Abrechnung nach vereinnahmten Entgelten

Die MWST-Abrechnung nach vereinnahmten Entgelten muss schriftlich bei der eidg. Steuerverwaltung beantragt werden. So ist die MWST erst fällig, nachdem Sie die Zahlung des Kunden erhalten haben.

::: tip
Beispiel: Wie im Beispiel oben stellen Sie dem Kunden eine Rechnung über CHF 1’077 aus (Rechnungsbetrag plus 8.1% MWST). Die MWST im Wert von CHF 77 bezahlen Sie der Steuerverwaltung erst in dem Quartal, in dem der Kunde die Rechnung bezahlt hat. Zahlt der Kunde die Rechnung erst im Juli, müssen Sie die MWST erst nach Ablauf dieses Quartals abliefern, d.h. Anfang Oktober.
:::

## Steuersätze

Im System sind die wichtigsten Steuersätze bereits erfasst. Sind Sie in der Schweiz MWST- pflichtig, arbeiten Sie mit 8.1%, wenn nicht dann lassen Sie die Steuer leer.

**Ausgangsrechnungen**

nicht MWST pflichtig: leer  
MWST-pflichtig: 8.1% MWST inkl. VK

**Eingangsrechnungen**

Eingangsrechnungen von Lieferanten haben in der Regel MWST drauf. Auf diesen Rechnungen prüfen Sie jeweils ob der Betrag inkl. oder exkl. angegeben ist und tragen einfach genau diese Regelung ein.  
nicht MWST pflichtig: leer  
MWST-pflichtig: 8.1% MWST. exkl. EK / 8.1% MWST inkl. EK

| Bezeichnung auf Rechnungen | Steuerbezeichnung                                | Steuergültigkeit | Steuerkonto | Steuerkonto für Erstattungen / Gutschriften |
| -------------------------- | ------------------------------------------------ | ---------------- | ----------- | ------------------------------------------- |
| 0% MwSt. VK                | 0% MwSt. Verkauf von Gütern und Dienstleistungen | Verkauf          | 2200        | 2200                                        |
| 7.7% MwSt. inkl. EK        | 7.7% MwSt. inklusive auf Einkäufe                | Einkauf          | 1170        | 1170                                        |
| 7.7% MwSt. inkl. VK        | 7.7% MwSt. inklusive auf Verkäufe                | Verkauf          | 2200        | 2200                                        |
| 7.7% MwSt. exkl. EK        | 7.7% MwSt. exklusive auf Einkäufe                | Einkauf          | 1170        | 1170                                        |
| 7.7% MwSt. exkl. VK        | 7.7% MwSt. exklusive auf Verkäufe                | Verkauf          | 2200        | 2200                                        |
| 2.5% MwSt. inkl. EK        | 2,5 % MwSt. inklusive Einkauf                    | Einkauf          | 1170        | 1170                                        |
| 2.5% MwSt. exkl. EK        | 2,5 % MwSt. exklusiv auf Einkäufe                | Einkauf          | 1170        | 1170                                        |
| 2.5% MwSt. inkl. VK        | 2,5 % MwSt. inklusive auf Verkauf                | Verkauf          | 2200        | 2200                                        |
| 2.5% MwSt. exkl. VK        | 2,5 % MwSt. exklusiv auf Verkäufe                | Verkauf          | 2200        | 2200                                        |

## MWST-Abrechnung

Die MWST-Abrechnung wird je nach Vorgabe der Eidgenössischer Steuerverwaltung quartalsweise oder halbjährlich abgerechnet.

Für das Erstellen der Aberechung gehen Sie im App Buchhaltung im Menü Berichtswesen und rufen das Menü Berichtswesen auf. Hier wählen Sie die Aberechungsperiode ab. Zum Beispiel von 01.01 bis 31.03.
Lassen Sie sich nur die gebuchten Posten anzeigen und wählen bei _Tax report_ die Option _Global Summary_. Die mehrwertsteuerrelevante Umsätze werden angeziegt und können als PDF-Datei oder XLSX exportiert werden.

Die einzelenen Mehrwertsteuersätze können mittels _Prüfung_ einzeln kontrolliert werden. Beachten sie, das in dieser ansicht alle Rechnungen inkl. Gutschriften angezeigt werden. Die Summe kan somit zum effektiven MWST-Betrag differieren.

## Unterschiedliche MWST für In- und Ausland

Alle anwendbaren MWST-Sätze werden in der Liste _Rechnungsstellung > Konfiguration > Buchhaltung > Steuern_ eingetragen. Unterschieden werden die Einträge für _Verkauf_ und _Einkauf_.

Beispiel:

- _Zu zahlende MwSt. bei 7.7%_ mit Tax Type _Verkauf_
- _Zu zahlende MwSt. bei 7.7%_ mit Tax Type _Einkauf_

Auf den Produkten ist im Tab _Allgemeine Informationen_ im Feld _Steuern (Verkauf)_ der Standard MWST-Satz hinterlegt. Zum Beispiel _Zu zahlende MwSt. bei 7.7%_.

In der Liste _Rechnungsstellung > Konfiguration > Buchhaltung > Steuerzuordnung_ können Regeln hinterlegt werden.

Beispiel:

- Schweiz national
- Import/Export

In der Steuerzuordnung _Schweiz national_ kann im Feld _Land_ auf die _Schweiz eingegrenzt_ werden. Die Logik für die anwendbaren Steuern ergibt sich aus den Eintragungen in der Tabelle. Es wird der Inhalt der Spalte _Ursprüngliche Steuern beim Produkt_ auf den Inhalt der Spalte _Verfügbare Steuer_ transformiert. Soll also innerhalb der Schweiz der auf dem Produkt zugeordnete Standard-Steuersatz gelten, dann steht in beiden Spalten derselbe Inhalt.

Beispiel:

![Best Practice Mehrwertsteuer Beispiel 1](attachments/Best%20Practice%20Mehrwertsteuer%20Beispiel%201.png)

In der Steuerzuordnung _Import/Export_ kann nun eingestellt werden, dass auf einem Angebot für das Ausland keine Steuern enthalten sind. Der Inhalt in der Spalte _Verfügbare Steuer_ bleibt deshalb leer.

Beispiel:

![Best Practice Mehrwertsteuer Beispiel 2](attachments/Best%20Practice%20Mehrwertsteuer%20Beispiel%202.png)
