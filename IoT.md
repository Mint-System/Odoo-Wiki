---
tags:
- HowTo
---
# IoT
![icons_odoo_iot](assets/icons_odoo_iot.png)

Alles, was das "Internet der Dinge (IoT)" bietet.

| Bereich                                                         | Beschreibung               |
| --------------------------------------------------------------- | -------------------------- |
| [Etikettendrucker Zebra ZD410](Etikettendrucker-Zebra-ZD410.md) | Etikettendrucker für Odoo. |

| Erweiterung                               | Beschreibung                                                       |
| ----------------------------------------- | ------------------------------------------------------------------ |
| [Odoo Direct Print](Odoo-Direct-Print.md) | Jeder Odoo Bericht oder Etikette von überall nach überall drucken. |

## Raspberry Pi installieren

Unter <https://nightly.odoo.com/master/iotbox/iotbox-latest.zip> die Datei `iotboxv21_04.zip` (oder aktueller) herunterladen und entpacken.

[Raspberry Pi Imager](https://www.raspberrypi.org/software/) oder [Etcher](https://www.balena.io/etcher/) installieren und die Datei `iotbox.img` auf die SD-Karte laden.

![](assets/IoT%20Raspberry%20Pi%20Image.png)
 
 ## Verbindungs-Token abrufen
 
 Navigieren sie nach *IoT > IoT Boxen* und klicken sie auf *Connect*. Im Dialog werden Verbindungsinformationen zur Verfügung gestellt. Auf der Linie *Token* erhalten sie den Link um die IoT Box zu verbinden.
 
 ## Verbindung über WLAN herstellen
 
 Starten sie die IoT Box und warten sie ~5 Minuten. In den verfügbaren Netzwerken sollte ein Eintrag `IoTBox-XXXXXXXXXXXX` erscheinen. Verbinden sie ihren Computer damit.
 
 Öffnen sie den folgenden Link <http://10.11.12.1:8069/steps> und starten sie die Konfiguration der IoT Box.
 
![](assets/IoT%20Wifi%20Verbindung.png)

## IoT Box konfigurieren

Den *Raspberry Pi* starten und mit dem IoT Box Netzwerk verbinden. Man wird auf eine Startseite geführt und konfiguriert das System nach den unten stehenden Dialogen.

::: tip
Das zur Verfügung gestellte Token wird für die Identifikation benötigt
:::

![iot verbindung 1](assets/iot%20verbindung%201.png)

![iot verbindung 2](assets/iot%20verbindung%202.png)

::: warning
Die IoT Box prüft nicht, ob die Wifi-Verbindung aufgebaut werden kann.
:::

![iot verbindung 3](assets/iot%20verbindung%203.png)

![iot verbindung 4](assets/iot%20verbindung%204.png)

In Odoo wird die IoT-Box bei erfolgreicher Konfiguration aufgeführt.

![iot verbindung 5](assets/iot%20verbindung%205.png)

## Drucker mit IoT Box verbinden

Verbinden sie den Drucker über den USB-Anschluss mit der IoT Box. Öffnen sie die *IoT* App und zeigen sie *IoT Box* an. Wählen sie auf die IoT Box mit dem Drucker und klicken sie auf den Link *IoT Box Webseite*. Sie werden nun auf die Konfigurationsseite der IoT Box umgeleitet.

::: warning
Für diesen Vorgang muss ihr Computer und die IoT Box im selben Netzwerk sein.
:::

![](assets/IoT%20Box%20Konfigurationsseite.png)

Wählen sie *handlers list* und anschliessen *Load handlers*. Nun werden die verfügbaren Treiber geladen. Ist der Vorgang abgeschlossen, sollte der Drucker erkannt und verbunden werden.

![](assets/IoT%20Gerät%20Drucker.png)

## Bericht für direktes Drucken einrichten

::: warning
Der Drucker muss im selben Netzwerk wie der Client-Computer sein, damit ein direktes Drucken möglich ist.
:::

Öffnen sie den Drucker via *IoT > Geräte > Drucker auswählen > Bearbeiten*. Fügen sie der Liste *Printer Reports* einen Bericht hinzu und speichern sie den Vorgang.

![](assets/IoT%20Printer%20Reports.png)

Wenn sie in Odoo den gewählten Bericht drucken, sollte dieser direkt auf den Drucker via IoT Box umgeleitet werden.

![](assets/IoT%20Erfolgreich%20gesendet.png)