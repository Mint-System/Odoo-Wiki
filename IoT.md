---
title: IoT
description: Alles, was das "Internet der Dinge (IoT)" bietet.
kind: howto
prev: ./
partner: Odoo S.A.
---

# IoT

![icons_odoo_iot](attachments/icons_odoo_iot.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/iot>

## Bereiche

| Bereich                                                         | Beschreibung               |
| --------------------------------------------------------------- | -------------------------- |
| [Etikettendrucker Zebra ZD410](Labelprinter%20Zebra%20ZD410.md) | Etikettendrucker für Odoo. |

## Erweiterungen

| Erweiterung                           | Beschreibung                                                       |
| ------------------------------------- | ------------------------------------------------------------------ |
| [Printnode Base](Printnode%20Base.md) | Jeder Odoo Bericht oder Etikette von überall nach überall drucken. |

## Konfiguration

### Raspberry Pi installieren

Unter <https://nightly.odoo.com/master/iotbox/iotbox-latest.zip> die Datei `iotboxv21_04.zip` (oder aktueller) herunterladen und entpacken.

[Raspberry Pi Imager](https://www.raspberrypi.org/software/) oder [Etcher](https://www.balena.io/etcher/) installieren und die Datei `iotbox.img` auf die SD-Karte laden.

![](attachments/IoT%20Raspberry%20Pi%20Image.png)

**Verbindungs-Token abrufen**

Navigieren Sie nach _IoT > IoT Boxen_ und klicken Sie auf _Connect_. Im Dialog werden Verbindungsinformationen zur Verfügung gestellt. Auf der Linie _Token_ erhalten Sie den Link um die IoT Box zu verbinden.

**Verbindung über WLAN herstellen**

Starten Sie die IoT Box und warten Sie ~5 Minuten. In den verfügbaren Netzwerken sollte ein Eintrag `IoTBox-XXXXXXXXXXXX` erscheinen. Verbinden Sie ihren Computer damit.

Öffnen Sie den folgenden Link <http://10.11.12.1:8069/steps> und starten Sie die Konfiguration der IoT Box.

![](attachments/IoT%20Wifi%20Verbindung.png)

### IoT Box konfigurieren

Den _Raspberry Pi_ starten und mit dem IoT Box Netzwerk verbinden. Man wird auf eine Startseite geführt und konfiguriert das System nach den unten stehenden Dialogen.

::: tip
Das zur Verfügung gestellte Token wird für die Identifikation benötigt
:::

![iot verbindung 1](attachments/iot%20verbindung%201.png)

![iot verbindung 2](attachments/iot%20verbindung%202.png)

::: warning
Die IoT Box prüft nicht, ob die Wifi-Verbindung aufgebaut werden kann.
:::

![iot verbindung 3](attachments/iot%20verbindung%203.png)

![iot verbindung 4](attachments/iot%20verbindung%204.png)

In Odoo wird die IoT-Box bei erfolgreicher Konfiguration aufgeführt.

![iot verbindung 5](attachments/iot%20verbindung%205.png)

## Verknüpfung

### Drucker mit IoT Box verbinden

Verbinden Sie den Drucker über den USB-Anschluss mit der IoT Box. Öffnen Sie die _IoT_ App und zeigen Sie _IoT Box_ an. Wählen Sie auf die IoT Box mit dem Drucker und klicken Sie auf den Link _IoT Box Webseite_. Sie werden nun auf die Konfigurationsseite der IoT Box umgeleitet.

::: warning
Für diesen Vorgang muss ihr Computer und die IoT Box im selben Netzwerk sein.
:::

![](attachments/IoT%20Box%20Konfigurationsseite.png)

Wählen Sie _handlers list_ und anschliessen _Load handlers_. Nun werden die verfügbaren Treiber geladen. Ist der Vorgang abgeschlossen, sollte der Drucker erkannt und verbunden werden.

![](attachments/IoT%20Gerät%20Drucker.png)

### Bericht für direktes Drucken einrichten

::: warning
Der Drucker muss im selben Netzwerk wie der Client-Computer sein, damit ein direktes Drucken möglich ist.
:::

Öffnen Sie den Drucker via _IoT > Geräte > Drucker auswählen > Bearbeiten_. Fügen Sie der Liste _Printer Reports_ einen Bericht hinzu und speichern Sie den Vorgang.

![](attachments/IoT%20Printer%20Reports.png)

Wenn Sie in Odoo den gewählten Bericht drucken, sollte dieser direkt auf den Drucker via IoT Box umgeleitet werden.

![](attachments/IoT%20Erfolgreich%20gesendet.png)
