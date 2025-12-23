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
Repository: <https://github.com/Noviat/account_ebics/tree/17.0/account_ebics>

## Konfiguration

Mit dem EBICS-Bankenprotokoll können Sie Zahlungsaufträge mitteilen und Bank-Transaktionen von ihrem Bankkonto abrufen.

Zur Einrichtiung der EBICS-Verbindung erhalten Sie ein Dokument mit einem Namen wie: _Bankparameterblatt für die Initalisierung des EBICS Teilnehmers in Ihrer Softwarelösung_

Sie werden dazu aufgefordert einen INI/HIA-Brief zu erstellen, zu unterzeichnen und an die Bank zu schicken.

### EBICS Manager festlegen

Damit ein Benutzer Zugriff auf die EBICS-Konfigurationen erhält, muss dieser Mitglied in der Gruppe _EBICS Manager_ sein.

### EBICS-Konfiguration erstellen

Wählen Sie _Rechnungsstellung > Konfiguration > EBICS Configuration_ und Erstellen Sie einen neuen Eintrag.

- **Name**: Name des Teilnehmer
- **EBICS HostID**: Bankenspezifische EBICS-Kennummer
- **EBICS Url**: Url der EBICS-Schnittstelle der Bank
- **EBICS PartnerID**: Parameter heisst auch Vertrags-ID/Contract ID
- **Bank Accounts**: Wählen Sie das Bank-Journal für die Verbindunga aus

Im Tab _File Formats_ fügen Sie einen Eintrag hinzu. Wählen Sie die gewünschen Dateiformat aus der Liste aus.

::: tip
Im Normalfall benötigen Sie das Dateiformat _Z53_ für den Download und _XE2_ für den Download.
:::

Validieren Sie den Konfigurations-Eintrag mit _Confirm_.

### INI/HIA-Brief erstellen

Rufen Sie eine bestehende EBICS-Konfiguration auf. Im Tab EBICS UserID\* erstellen Sie einen Eintrag mit diesen Angaben

- **EBICS UserID**: Parameter heisst auch Teilnehmer-ID/Partner ID
- **EBICS Passphrase**: Gib ein Password zur Verschlüsselung der Zertifikatsdaten ein
- **USers**: Diese Odoo-Benutzer erhalten Zugriff auf den Teilnehmer

![](attachments/EBICS%20Configuration.png)

Wählen Sie die Aktion **EBICS Initialisation**. Laden Sie den Brief im Feld _EBICS INI Letter_ herunter.

Unterschreiben und senden Sie den Brief an ihre Bank.

### Banken-Schlüssel herunterladen und verifizieren

Wenn der EBICS-Teilnehmer aktiviert wurde können Sie die Banken-Schlüssel herunterladen. Rufen Sie den EBICS-Teilnehmer in der EBICS-Konfiugration auf. Lösen Sie die Aktion _Get Bank Keys_ aus.

::: tip
Wenn der Teilnehmer bereits aktiviert wurde, wählen Sie _Renew Bank Keys_.
:::

Nun erhalten Sie eine Datei _EBICS Public Bank Keys_. Öffnen Sie diese Datei und Vergleichen Sie Schlüssel-Informationen mit den Bankparameterblatt.

Bestätigen Sie die Schlüssel mit _Bank Keys Verified_.

## Verwendung

### EBICS-Download ausführen

Wählen Sie _Rechnungstellung > EBICS Processing > EBICS Download_. Wählen Sie eine EBICS-Konfiguration aus und geben Sie das EBICS-Passwort ein. Legen Sie einen Zeitraum für den Download fest und starten Sie den Vorgang mit _Download Files_.

Wenn der Download erfolgreich ist, erhalten Sie ein Aufstellung der heruntergeladenen Camt.053-Dateien.

```
EBICS File 'RAIFCHEC_3924015679_2025-08-26_Z53_CH4080808008919700926_CHF_024219.xml.c53.xml' is available for further processing.
```

Mit der Aktion _View EBICS File(s)_ gelangen zur Ansicht _Rechnungsstellung > EBICS Processing > EBICS Files > Download_.

::: warning
Der Download-Vorgang lädt die Dateien aller verfübaren Konten herunter.
:::

### EBICS-Download-Datei verarbeiten

Um die heruntergeladenen Camt.053-Dateien zu verarbeiten, rufen Sie _Rechnungsstellung > EBICS Processing > EBICS Files > Download_ auf und wählen einen Eintrag aus. Klicken Sie auf _Process_ um die Transaktions-Daten zu verabeiten.

Im Tab _Bank Statements_ sehen Sie den importierten Bankauszug. Klicken Sie auf den Bankauszug um die Abstimmung zu starten.

## Aktionen

### Zurücksetzen

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Zurücksetzen`\
Modell: `ebics.file`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python Code_:

```python
records.set_to_draft()
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und speichern.

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

Beim Verarbeiten der Download-Dateien erscheint diese Meldung:

```
Errors:
Currency CHF not found.
```

**Lösung**

Stellen Sie sicher, dass Währung im Bank-Journal aktiviert ist.

### Certificate has expired

**Problem**

Bei der Aktion [Banken-Schlüssel herunterladen und verifizieren](#Banken-Schlüssel%20herunterladen%20und%20verifizieren) wird dieser Fehler geworfen:

```
EBICS Initialisation Error:
<class 'ssl.SSLCertVerificationError'>
('[SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: certificate has expired (_ssl.c:1016)',)
```

**Lösung**

Kontaktieren Sie ihre Bank. Es ist vermutlich ein Zertifikat der Bank abgelaufen.