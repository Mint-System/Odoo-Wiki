---
title: EBICS banking protocol
description: Connect Odoo with bank account through EBICS.
kind: howto
partner: Thirdparty
prev: ./accounting
---
# EBICS banking protocol
![](attachments/icons_odoo_ebics.png)

{{ $frontmatter.description }}

Technischer Name: `account_ebics`\
Website: <https://apps.odoo.com/apps/modules/18.0/account_ebics>\
Repository: <https://github.com/Noviat/account_ebics/tree/18.0/account_ebics>

## Konfiguration

Mit dem EBICS-Bankenprotokoll können Sie Zahlungsaufträge mitteilen und Bank-Transaktionen von ihrem Bankkonto abrufen.

Zur Einrichtiung der EBICS-Verbindung erhalten Sie ein Dokument mit einem Namen wie: *Bankparameterblatt für die Initalisierung des EBICS Teilnehmers in Ihrer Softwarelösung*

Sie werden dazu aufgefordert einen INI/HIA-Brief zu erstellen, zu unterzeichnen und an die Bank zu schicken.

### EBICS Manager festlegen

Damit ein Benutzer Zugriff auf die EBICS-Konfigurationen erhält, muss dieser Mitglied in der Gruppe *EBICS Manager* sein.

### EBICS-Konfiguration erstellen

Wählen Sie *Rechnungsstellung > Konfiguration > EBICS Configuration* und Erstellen Sie einen neuen Eintrag.

* **Name**: Name des Teilnehmer
* **EBICS HostID**: Bankenspezifische EBICS-Kennummer
* **EBICS Url**: Url der EBICS-Schnittstelle der Bank
* **EBICS PartnerID**: Parameter heisst auch Vertrags-ID/Contract ID
* **Bank Accounts**: Wählen Sie das Bank-Journal für die Verbindunga aus

Im Tab *File Formats* fügen Sie einen Eintrag hinzu. Wählen Sie die gewünschen Dateiformat aus der Liste aus.

::: tip
Im Normalfall benötigen Sie das Dateiformat *Z53* für den Download und *XE2* für den Download.
:::

Validieren Sie den Konfigurations-Eintrag mit *Confirm*.

### INI/HIA-Brief erstellen

Rufen Sie eine bestehende EBICS-Konfiguration auf. Im Tab EBICS UserID* erstellen Sie einen Eintrag mit diesen Angaben

* **EBICS UserID**: Parameter heisst auch Teilnehmer-ID/Partner ID
* **EBICS Passphrase**: Gib ein Password zur Verschlüsselung der Zertifikatsdaten ein
* **USers**: Diese Odoo-Benutzer erhalten Zugriff auf den Teilnehmer

![](attachments/EBICS%20Configuration.png)

Wählen Sie die Aktion **EBICS Initialisation**. Laden Sie den Brief im Feld *EBICS INI Letter* herunter.

Unterschreiben und senden Sie den Brief an ihre Bank.

### Banken-Schlüssel herunterladen und verifizieren

Wenn der EBICS-Teilnehmer aktiviert wurde können Sie die Banken-Schlüssel herunterladen. Rufen Sie den EBICS-Teilnehmer in der EBICS-Konfiugration auf. Lösen Sie die Aktion *Get Bank Keys* aus.

::: tip
Wenn der Teilnehmer bereits aktiviert wurde, wählen Sie *Renew Bank Keys*.
:::

Nun erhalten Sie eine Datei *EBICS Public Bank Keys*. Öffenen Sie diese Datei und Vergleichen Sie Schlüssel-Informationen mit den Bankparameterblatt.

Bestätigen Sie die Schlüssel mit *Bank Keys Verified*.

## Verwendung

### EBICS-Download ausführen

Wählen Sie *Rechnungstellung > EBICS Processing > EBICS Download*. Wählen Sie eine EBICS-Konfiguration aus und geben Sie das EBICS-Passwort ein. Legen Sie einen Zeitraum für den Download fest und starten Sie den Vorgang mit *Download Files*. 

Wenn der Download erfolgreich ist, erhalten Sie ein Aufstellung der heruntergeladenen Camt.053-Dateien.

```
EBICS File 'RAIFCHEC_3924015679_2025-08-26_Z53_CH4080808008919700926_CHF_024219.xml.c53.xml' is available for further processing.
```

Mit der Aktion *View EBICS File(s)* gelangen zur Ansicht *Rechnungsstellung > EBICS Processing > EBICS Files > Download*.

::: warning
Der Download-Vorgang lädt die Dateien aller verfübaren Konten herunter.
:::

### EBICS-Download-Datei verarbeiten

Um die heruntergeladenen Camt.053-Dateien zu verarbeiten, rufen Sie *Rechnungsstellung > EBICS Processing > EBICS Files > Download* auf und wählen einen Eintrag aus. Klicken Sie auf *Process* um die Transaktions-Daten zu verabeiten. 

Im Tab *Bank Statements* sehen Sie den importierten Bankauszug. Klicken Sie auf den Bankauszug um die Abstimmung zu starten.

## Aktionen

### Zurücksetzen

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Zurücksetzen`\
Modell: `ebics.file`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
records.set_to_draft()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und speichern.

## Troubleshooting

### No bank defined

**Problem**

Beim Bestätigen der EBICS-Konfiguration erscheint diese Meldung:

```
No bank defined for the financial journal of the EBICS Config
```

**Lösung**

Auf den verknüpften Bank-Journal muss auf dem Bankkonto eine Bank festgelegt sein.

### Teilnehmer unbekannt

**Problem**

Beim initialisieren des Teilnehmers erscheint diese Meldung:

```
EBICS Technical Error:
[EBICS_INVALID_USER_OR_USER_STATE] Teilnehmer unbekannt oder Teilnehmerzustand unzulässig (code: 91002)
```

**Lösung**

Stellen Sie sicher, dass die korrektie Vertrags- und/oder Teilnehmer-ID eingtragen ist.

### Bank public keys missing

**Problem**

Bei Ausführungd es EBICS-Download erscheint diese Meldung:

```
RuntimeError: Bank public keys missing (call HPB first)
```

**Lösung**

Führen Sie [Banken-Schlüssel herunterladen und verifizieren](#Banken-Schlüssel%20herunterladen%20und%20verifizieren) aus.

### No download data available

**Problem**

Bei Ausführungd es EBICS-Download erscheint diese Meldung:

```
EBICS Functional Error during download of File Format camt.053 (Z53):
EBICS_NO_DOWNLOAD_DATA_AVAILABLE (code: 90005)
```

**Lösung**

Korrigieren Sie den Abfrage-Zeitraum.

### Currency not found

**Problem**

Beim Verabeiten der Download-Dateien erscheint diese Meldung:


```
Errors:
Currency CHF not found.
```

**Lösung**

Stellen Sie sicher, dass Währung im Bank-Journal aktiviert ist.