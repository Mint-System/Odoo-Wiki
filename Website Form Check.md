---
title: Website Form Check
description: Überprüft Formulardaten und leitet Benutzer bei einem Treffer um.
kind: howto
partner: Mint System
prev: ./website
---

# Website Form Check

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `website_form_check`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Website/tree/18.0/website_form_check>

## Beschreibung

Mit dieser Erweiterung ist es möglich, Formulardaten eines Portalnutzers auf der Website (Name, E-Mail, Daten der Extra-Info-Seite) gegen ein festgelegtes Muster zu prüfen. Bei einer Übereinstimmung von Muster und Daten wird der Portalbenuzter vor Abschluss der Bestellung auf eine andere Seite umgeleitet.

## Konfiguration

### Form-Check anlegen

Unter Website > Konfiguration > Form checks kann ein neuer Check angelegt werden. Er besteht aus:

- Regex-Muster (Pattern)
- Link zu einer Website (default: aktuelle Website)
- Link zu einer Website-Umleitung (redirect)
- Aktivierung

Das Regex-Muster wird mit einem Daten-String verglichen, der aus den Formulardaten des Benutzers gebildet wird.  Beispiel:

Daten-String: `maxmuster---mustermax---max.muster@beispiel.com---date_from:27.04.2026region:galpbirthdate_date:20.02.1980liability_insurance:yescode_of_honour:yesstrahlner_ordinance:yesminimum_age:yes`

Regex-Muster: `max.*muster.*max\.muster@beispiel\.com.*20\.02\.1980`

Da dieses Regex-Muster im Daten-String gefunden wird, liefert in diesem Beispiel der Form-Check einen Treffer (Match) zurück und leitet den Portalbenutzer auf die gestgelegte Seite um.

![](attachments/Website%20Form%20Check%20Pattern.png)
![](attachments/Website%20Form%20Check%20Redirect.png)

::: tip
Bei der Website-Umleitung ist nur die URL, auf die umgeleitet wird, von Bedeutung. Die URL, von der umgeleitet wird, kann ein Dummy sein.
:::
