---
title: Report to QZ Tray
description: Berichte und Etiketten aus Odoo direkt drucken.
kind: howto
partner: Mint System
prev: ./iot
---

# Report to QZ Tray

![](attachments/icons_qztray.png)

{{ $frontmatter.description }}

Technischer Name: `base_report_to_printer_qztray`\
OCA App Page: [https://apps.odoo.com/apps/modules/19.0/printnode_base](https://apps.odoo-community.org/modules/base_report_to_printer_qztray)

## Beschreibung

Mit Report to QZ Tray werden Druckaufträge aus Odoo via das Gerät des Benutzers direkt an lokale Drucker gesendet. Die App wird von der Odoo Community gepflegt.

Odoo sendet den Druckauftrag an QZ Tray auf dem Gerät des Benutzers und dieses wiederum direkt an den definierten Drucker. Dabei wird kein PDF geöffnet, kein Download angezeigt und kein Druckdialog geöffnet.

Die Anwendung eignet sich besonders für Druckerzeugnisse die im Arbeitsablauf automatisch und jedes Mal erzeugt werden müssen, wie Kassenzettel, Lieferscheine oder Losnummer-Etiketten.

**Vorteile:**
- DirectPrint funktioniert im geschlossenen Netzwerk ohne Zugriff auf einen Cloud-Dienst wie PrintNode.
- Keine Abhängigkeit von einem weiteren lokalen Gerät, für die Weiterleitung des Druckauftrags an den Drucker.
- Keine zusätzlichen Kosten für App oder Abo.

**Nachteile:**
- Drucker und QZ Tray müssen auf jedem Gerät eingerichtet sein, von dem aus ein Druck angestossen wird.
- Funktioniert nur im Firmennetz mit Zugriff auf den Drucker.

### Voraussetzungen

- Auf dem Gerät, mit dem auf Odoo zugegriffen wird, müssen die gewünschten Drucker sowie die App 'QZ Tray' eingerichtet und verfügbar sein. Die App kann kostenlos [heruntergeladen und installiert](https://qz.io/download/) werden.
- Die Drucker müssen in Odoo und auf dem Client gleich benannt sein.
- Odoo On Premise oder Odoo.sh

## Konfiguration

### Modul auf dem Server installieren

- Auf dem Server muss `pyOpenSSL` installiert sein, damit die Druckaufträge signiert und vertrauenswürdig übertragen werden können:
`sudo pip3 install pyOpenSSL`
- `base_report_to_printer_qz` deployen und in Odoo aktivieren

### Zertifikat erzeugen

Das Zertifikat können Sie lokal auf dem Nutzergerät erzeugen.

```
openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 3650 -nodes
```

Bei den Eingaben ist die Domain wichtig:

`Common Name (e.g. server FQDN or YOUR name) []:` hier tragen Sie die Domain ein, wobei eine Wildcard für Subdomains gültig ist (`*.odoo.mydomain.ch`). Das Ergebnis sind zwei Dateien:

- cert.pem: Das öffentliche Zertifikat
- key.pem: Der private Schlüssel

### Zertifikat in Odoo speichern

_Einstellungen > Technisch > Parameter > Systemparameter_ (Entwicklungsmodus aktiviert)

Hier tragen Sie folgenden beiden Parameter neu ein:


| Schlüssel      | Wert                |
| -------------- | ------------------- |
| qz.certificate | Inhalt von cert.pem |
| qz.key         | Inhalt von key.pem  |

::: warning
Kopieren Sie unbedingt den gesamten Textinhalt der Dateien inklusive die BEGIN- und die END-Zeile in den Wert.
:::

### Drucker definieren

1. In _Einstellungen > Drucke > Drucker >_ erstellen Sie einen neuen Drucker oder wählen einen bestehenden,
2. Diese Werte sind für die Funktion wichtig:
	- `Name`: Muss **exakt** übereinstimmen mit der Druckerbezeichnung auf den Clients, von denen gedruckt wird,
	- `Backend`: **QZ Tray** wählen.

Der Server ist für Drucker ein Pflichtfeld, welches für QZ Tray nicht relevant ist. Es reicht, einen Dummy-Server 'server-for-qztray' zu erstellen und hier einzutragen.

### Drucker zuweisen (optional aber empfohlen)

Standarddrucker können Sie auf verschiedenen Ebenen zugeordnet.

Per User
1. In _Einstellungen > Benutzer & Unternehmen > Benutzer >_ wählen Sie einen Benutzer
2. Im Tab 'Präferenzen'
	- Druckaktion: z.B. `Send to Printer`
	- Vorgabedrucker: Den gewünschten Drucker wählen
3. Speichern

Per Report (optional)
1. In _Einstellungen > Drucke > Berichte >_ wählen Sie einen Bericht
2. Im Tab 'Druck'
	- Vorgabeverhalten wählen
	- Vorgabedrucker wählen
3. Speichern

### QZ Tray auf dem Client installieren

Die App können Sie kostenlos [von qz.io herunterladen und installieren](https://qz.io/download/).

Unter Linux / Unix können Sie dies im Terminal mit dem folgenden Befehl durchgeführen:

```
wget -qO - qz.sh | bash
```

### Zertifikat in QZ Tray hinterlegen

1. _QZ Tray > Advanced > Site Manager..._ öffnen,
2. Per Drag&Drop die Datei cert.pem in den Site Manager legen,
3. Kontrollieren, dass das Zertifikat zur Domain der Odoo-Datenbank passt.

Mit diesem Schritt wird der Odoo-Server für vertrauenswürdig erklärt und kann signierte Druckaufträge an QZ Tray senden.

Für sämtliche Clients wird das gleiche Zertifikat verwendet.

### Drucker auf dem Client vorbereiten

- Die gewünschten Drucker auf dem Client funktionstüchtig konfigurieren (Probedruck vom Client aus durchführen),
- Drucker lokal und in Odoo gleich benennen.

### Kontrolle beim Client

Auf jedem Client-Arbeitsplatz, der DirectPrint nutzt muss folgendes sichergestellt sein:

- QZ Tray ist installiert, läuft und wird automatisch gestartet,
- Auf dem Client ist das in Odoo verwendete Zertifitkat hinterlegt,
- Der Drucker ist lokal installiert und der Name ist gleich wie der Druckername in Odoo.

## Verwendung

### Berichte direkt an Drucker senden

Einmal korrekt eingerichtet werden die entsprechenden Berichte ohne weitere Meldung aus Odoo an den Drucker gesendet.

- Um einen Bericht auf einem bestimmten Drucker oder in einem bestimmten Papierfach auszudrucken, können Sie diese Einstellungen unter _Einstellungen > Drucke > Berichte_ das gewünschte Standardverhalten festzulegen.
- Um einen Bericht für einen bestimmten Benutzer auf einem bestimmten Drucker und/oder in einem bestimmten Papierfach auszudrucken, können Sie diese Einstellungen unter _Einstellungen > Drucken > Berichte_ im Abschnitt „Anwenderspezifische Aktionen“ ändern.
- Benutzer können ausserdem in ihren Einstellungen eine Standardaktion und einen Standarddrucker auswählen.
