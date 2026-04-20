---
title: Vermietung
description: Vereint Lagerverwaltung, Terminplanung und Verträge damit Sie den Überblick behalten.
kind: howto
prev: ./
partner: Odoo S.A.
---

# Vermietung

![icons_odoo_sale](attachments/icons_odoo_sale.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/rental>

## Konfiguration

### Vermietung mit Transfers einrichten

Öffnen Sie _Einstellungen > Vermietung_ und aktivieren Sie die Option _Vermietungstransfers_.

### Vermietbares Produkt einrichten

Zeigen Sie die Produkte unter _Vermietung > Produkte_ an. Legen Sie ein neues Produkt an. Die Option _Vermietung_ wird auf dem Produkt aktiviert. Wählen Sie den Tab _Mietpreise_ und erstellen Sie einen Eintrag unter _Preiskalkulation_.

## Verwendung

### Mietauftrag anlegen

Rufen Sie _Vermietung > Aufträge_ auf und legen Sie einen neuen _Mietauftrag_ an. Wählen Sie einen Kunden aus und fügen Sie ein vermietbares Produkt hinzu. Im Feld _Mietzeitraum_ wählen Sie das Liefer- und Rückgabedatum aus.

Bestätigen Sie den Auftrag und Odoo legt einen Lieferauftrag an. Wenn der Auftrag abgewickelt ist, wird die Spalte _Geliefert_ mit der entsprechenden Menge aktualisiert. 

### Produkt abholen

Wenn ein Produkt abgeholt wird, rufen Sie unter _Vermietung > Aufträge_ den entsprechenden _Mietauftrag_ auf. Dann wählen Sie _Abholung_ und legen im Dialog die abgeholten Produkte fest.

### Produkt zurückgeben

Wenn ein Produkt zurückgegeben wird, rufen Sie unter _Vermietung > Aufträge_ den entpsrechenden _Mietauftrag_ auf. Dann wählen Sie _Rückgabe_ und legen im Dialog die zurückgegebenen Produkte fest.

## Lager

Wenn Sie [Vermietung mit Transfers einrichten](#Vermietung%20mit%20Transfers%20einrichten) dann werden Mietaufträger über das Lager abgewickelt.

### Produkt liefern

Wenn Sie ein vermietetes Produkt liefern, rufen Sie unter _Vermietung > Aufträge_ den entsprechenden _Mietauftrag_ auf. Klicken Sie auf _Abholung_ und Sie gelangen zum Lieferauftrag. Validieren Sie den Auftrag und kehren Sie zum Mietauftrag zurück.

::: tip
Die Lieferung kann auch über die Lager- oder Barcode-App ausgeführt werden.
:::

### Produkt erhalten

Wenn Sie ein vermietetes Produkt erhalten, rufen Sie unter _Vermietung > Aufträge_ den entsprechenden _Mietauftrag_ auf.  Klicken Sie auf _Rückgabe_ und Sie gelangen zur Anlieferung.

::: tip
Die Retoure kann auch über die Lager- oder Barcode-App ausgeführt werden.
:::