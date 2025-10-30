---
title: Abonnemente
description: Wiederkehrende Rechnungsstellung und Management von Abonnenten auf einfache Art und Weise.
kind: howto
prev: ./
partner: Odoo S.A.
---

# Abonnemente

![icons_odoo_account_invoicing](attachments/icons_odoo_account_invoicing.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/subscriptions>

## Bereiche

| Bereich                                          | Beschreibung                                  |
| ------------------------------------------------ | --------------------------------------------- |
| [Abonnemente Aktionen](Subsciption%20Actions.md) | Arbeitsflüsse für Abonnemente automatisieren. |

## Erweiterungen

| Erweiterung                                                                               | Beschreibung                                                         |
| ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [Sale Subscription Disable Tokenization](Sale%20Subscription%20Disable%20Tokenization.md) | Abonnements mit Zahlungsanbieter ohne wiederkehrende Zahlung kaufen. |
| [Sale Subscription Partner Pricelist](Sale%20Subscription%20Partner%20Pricelist.md)       | Preislisten-Zugriff mit Abonnements erteilen.                        |
| [Sale Subscription Period Discount](Sale%20Subscription%20Period%20Discount.md)           | Erste Abonnementrechnung mit zeitbasiertem Rabatt.                   |

## Verwendung

### Abonnement-Vorlage erstellen

Rufen Sie die Ansicht _Abonnements > Konfiguration > Vorlage für Abonnements_ auf. Erstellen Sie einen neuen Eintrag. Geben Sie einen Namen beispielsweise _Jahresabonnement_ ein. Legen Sie den _Abrechnungszeitraum_ und einen _Code_ fest.

![](attachments/Abonnements%20Vorlage.png)

### Abonnement erstellen

Im Normalfall wird beim [Angebot bestätigen](Sale.md#Angebot%20bestätigen) ein Abonnement generiert. Wenn Sie ein Abonnement ohne Verkaufsauftrag erstellen möchten, navigieren Sie nach _Abonnement_ und klicken auf _Neu_.

### Abonnement-Laufzeit mit Produktvariante verknüpfen

Öffnen Sie ein Abonnent-Produkt unter _Abonnements > Abonnements > Produkte_. Zeigen Sie den Tab _Preis_ an. Legen Sie in der Spalte _Produktvarianten_ fest, welche Laufzeit zu welcher Variante gehört. Dazu ein Beispiel.

![](attachments/Abonnements%20Produktvarainten.png)

### Abonnement-Laufzeit mit Produktvariante und Preisliste verknüpfen

Wenn Sie [Preislisten aktivieren](Sale%20Price.md#Preislisten%20aktivieren) und eine [Abonnement-Laufzeit mit ein Produktvariante verknüpfen](#Abonnement-Laufzeit%20mit%20Produktvariante%20verknüpfen), können Sie zusätzlich eine Preisliste auswählen.

Wenn Sie die ausgewählte [Preisliste anzeigen](Sale%20Price.md#Preisliste%20anzeigen) sehen Sie im Tab _Zeitbasierte Regel_ die erstellten Verknüpfungen.

## Filter

#### Filter Erneuerungsangebote einrichten

Mit dem Filter _Erneuerungsangebote_ können Sie alle Abonnemente, die aus der Aktion _Erneuern_ entstanden und im Zustand _Angebot_ sind, anzeigen.

Führen Sie [Filter manuell anlegen](Development%20Views.md#Filter%20manuell%20anlegen) mit diesen Angaben aus:

| Feld              | Wert                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| Filterbezeichnung | Erneuerungsangebote                                                                                                |
| Modell            | Bestellungen                                                                                                       |
| Aktion            | Abonnements                                                                                                        |
| Domain            | `["&", ("renew_state", "=", "renewing"), "&", ("state", "=", "draft"), ("subscription_management", "=", "renew")]` |
| Kontext           | `{'group_by': []}`                                                                                                 |

## Auswertung

### Wiederkehrende Buchungszeilen anzeigen

Gilt bis #Odoo15.

Damit Sie eine Übersicht der wiederkehrenden Buchungszeilen erhalten, folgen Sie dem HowTo [Neue Ansicht mit Aktion hinzufügen](Development%20Actions.md#Neue%20Ansicht%20mit%20Aktion%20hinzufügen) und verwenden diese Werte:

Name der Aktion: `Wiederkehrende Buchungszeilen`\
Objekt: `sale.subscription.line`\
Ansichtsmodus: `tree,form`\
Menü: `Wiederkehrende Buchungszeilen`\
Obermenü: `Abonnements/Abonnements`\
Aktion: `ir.actions.act_window` `Wiederkehrende Buchungszeilen`\
Nummernfolge: `50`
