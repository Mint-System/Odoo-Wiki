---
title: EBICS banking protocol
description: Connect Odoo with bank account through EBICS.
kind: howto
partner: Thirdparty
prev: ./accounting
---
# EBICS banking protocol
![](attachments/icons_odoo_thirdparty.png)

{{ $frontmatter.description }}

Technischer Name: `account_ebics`\
Repository: <https://gitlab.com/Mint-System/Odoo-Apps-Thirdparty/tree/16.0/account_ebics>

## Konfiguration

Mit dem EBICS-Bankenprotokoll können Sie Zahlungsaufträge mitteilen und Bank-Transaktionen von ihrem Bankkonto abrufen.

Zur Einrichtiung der EBICS-Verbindung erhalten Sie ein Dokument mit einem Namen wie: *Bankparameterblatt für die Initalisierung des EBICS Teilnehmers in Ihrer Softwarelösung*

Sie werden dazu aufgefordert einen INI/HIA-Brief zu erstellen, zu unterzeichnen und an die Bank zu schicken.

### INI/HIA-Brief erstellen

Wählen Sie *Rechnungsstellung > Konfiguration > EBICS Configuration* und Erstellen Sie einen neuen Eintrag.

* **Name**: Name des Teilnehmer
* **EBICS HostID**: Bankenspezifische EBICS-Kennummer
* **EBICS Url**: Url der EBICS-Schnittstelle der Bank
* **EBICS PartnerID**: Parameter heisst Vertrags-ID/Contract ID
* **Bank Accounts**: Wählen Sie das Bank-Journal für die Verbindunga aus

Im Tab **EBICS UserID** erstellen Sie einen Eintrag mit diesen Angaben

* **EBICS UserID**: Parameter heisst Teilnehmer-ID/Partner ID
* **EBICS Passphrase**: Gib ein Password zur Verschlüsselung der Zertifikatsdaten ein

![](attachments/EBICS%20Configuration.png)

Wählen Sie die Aktion **EBICS Initialisation**. Laden Sie den Brief im Feld *EBICS INI Letter* herunter.

Unterschreiben und senden Sie den Brief an ihre Bank.

## Troubleshooting

### No bank defined

**Problem**

> No bank defined for the financial journal of the EBICS Config

**Lösung**

Auf den verknüpften Bank-Journal muss auf dem Bankkonto eine Bank festgelegt sein.

### Teilnehmer unbekannt

**Problem**

> EBICS Technical Error:
> \[EBICS_INVALID_USER_OR_USER_STATE\] Teilnehmer unbekannt oder Teilnehmerzustand unzulässig (code: 91002)


**Lösung**

Stellen Sie sicher, dass die korrektie Vertrags- und/oder Teilnehmer-ID eingtragen ist.