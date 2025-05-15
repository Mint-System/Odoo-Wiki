---
title: Portal und Backend
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
---

# Portal und Backend

Odoo verfügt über einen externen Bereich *Portal* und den internen Bereich *Backend*. Interne Benutzer haben Zugriff auf das Backend und externe Bentuzer Zugriff auf das Portal.

## Backend / Intern

Das Backend ist die Ansicht, welche Sie als Odoo-Benutzer nach dem Einloggen sehen. Die Standardanzeige von Odoo ist synonym als Backend zu verstehen. Nur Benutzer des Unternehmens haben Zugriff auf den internen Bereich von Odoo.

## Portal / Extern

Das Portal von Odoo kann auf verschiedenen Wegen von Kunden, Partnern und Lieferanten genutzt werden:

* **Projektmanagement**: Zugriff auf Projekt und Dokumente an Externe vergeben
* **Webshop**: Kunden können ihre Adressen, Bestellungen, Abonnements und Rechnungen einsehen
* **Verkauf**: Potenzielle Kunden sehen das Verkaufsangebot im Browser
* **Rechnungsstellung**: Kunden können ihre Rechnung mit verschiedenen Zahlungsanbietern über das Portal bezahlen

## Kontakte

Für interne und externe Benutzer wird in der App Kontakte ein Kontakt angelegt. Es erfolgt keine Trennung von externen und internen Kontakten in der Datenbank von Odoo. Über entsprechende Filter können externe und interne Kontakte separat angezeigt werden.

## Berechtigungen und Zugriff

Jedes Datenmodell in Odoo kann nebst einer internen Ansicht eine Portal-Ansicht haben. Die gleichen Daten werden so intern und extern unterschiedlich Dargestellt. Der Zugriff auf die Daten über die Portal-Ansicht muss explizit in der Berechtigungsstruktur von Odoo festgelegt sein.

> Standardmässig haben externe Benutzer im Portal auf explizit freigegebene Datensätze nur Lese-Zugriff.
