---
title: Discuss E-Mail
description: E-Mail mit Odoo versenden.
kind: howto
section: true
prev: ./discuss
---

# Dialog E-Mail

![icons_odoo_mail](attachments/icons_odoo_mail.png)

{{ $frontmatter.description }}

## E-Mails

### Alle empfangenen E-Mails anzeigen

Wenn Sie alle von Odoo gesendeten E-Mails anzeigen möchten, navigieren Sie nach _Einstellungen > Technisch > Nachrichten_ und nehmen in der Suche diese Einstellung vor:

- Gruppiert: _Datum: Monat > Datum: Woche > Datum: Tag_
- Filter: Typ ist _E-Mail_

![](attachments/Discuss%20E-Mail%20Empfang.png)

### Alle versendeten E-Mails anzeigen

Wenn Sie alle von Odoo verarbeiteten E-Mails anzeigen möchten, navigieren Sie nach _Einstellungen > Technisch > Nachrichten_ und nehmen in der Suche diese Einstellung vor:

- Gruppiert: _Datum: Monat > Datum: Woche > Datum: Tag_
- Filter: Typ ist "Kommentar"
- Filter: Betreff ist gesetzt

![](attachments/Discuss%20E-Mail%20Gesendet.png)

## Vorlagen

### E-Mail-Vorlagen anzeigen

Odoo verwaltet alle E-Mail-Vorlagen unter _Einstellungen > Technisch > E-Mail > E-Mail-Vorlagen_.

### E-Mail-Vorlage duplieren

Navigieren Sie nach _Einstellungen > Technisch > Vorlagen_ und suchen Sie in der Liste nach der zu duplizierenden E-Mail-Vorlage. Öffnen Sie diese und wählen Sie _Aktionen > Duplizieren_.

### E-Mail-Vorlage erfassen

Navigieren Sie nach _Einstellungen > Technisch > Vorlagen_ und erstellen Sie einen neuen Eintrag. Im Feld _Gilt für_ wählen das Dokument, das mit der Vorlage verknüpft werden soll.

![](attachments/Discuss%20E-Mail%20Gilt%20für.png)

Im ersten Tab _Inhalt_ können Sie mit dem HTML-Editor den Vorlage-Text mit Platzhaltern definieren.

![](attachments/Discuss%20E-Mail%20HTML.png)

Im Tab _E-Mail-Konfiguration_ finden Sie diese Parameter:

- **Von**: ID des Absender-Kontakt. Standard: `${(object.user_id.email_formatted or user.email_formatted) | safe}`
- **Standardempfänger**: Wenn markiert wird Standardempfänge `partner_id` von Objekt verwendet.
  - **An (E-Mails)**: E-Mail-Adressen als Text. Standard: `${object.work_email | safe}`
  - **An (Partner)**: ID des Empfänger-Kontakt. Standard: `${object.partner_id.id}`
- **CC**: E-Mail-Adressen als CC.
- **Antwort an**: Überschreiben der Antworten-Adresse.
- **Geplantes Sendedatum**: Dynamisches Datum für das geplante Versenden.

### E-Mail-Vorlage testen

Rufe Sie eine E-Mail-Vorlage unter _Einstellungen > Technisch > Vorlagen_ auf und klicken Sie auf _Vorschau_. Wählen Sie einen Datensatz und prüfen Sie die generierte Vorschau.

![Mail-Vorlage Variablen testen](attachments/Mail-Vorlage%20Variablen%20testen.gif)

### Mehrsprachige E-Mail-Vorlagen aus Word kopieren

Erstellen Sie eine E-Mail-Vorlage unter _Einstellungen > Technisch > Vorlagen_. Fügen Sie die Text aus der Word-Datei mit <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>v</kbd> (Einfügen ohne Formatierungen) ein. Bearbeiten Sie im nächsten Schritt die Übersetzungen und kopieren Sie den generierten Code in das übersetzte Feld.

![Mail-Vorlage aus Word kopieren](attachments/Mail-Vorlage%20aus%20Word%20kopieren.gif)

### Dynamischer Platzhalter generieren

Rufe Sie eine importierte E-Mail-Vorlage unter _Einstellungen > Technisch > Vorlagen_ auf. Generieren Sie einen dynamischen Platzhalter und fügen Sie diesen in die Vorlage.

![Mail-Vorlage Platzhalter ersetzen](attachments/Mail-Vorlage%20Platzhalter%20ersetzen.gif)

### Bericht als Anhang hinzufügen

Wenn Sie beim Aufruf der Mail-Vorlage einen Bericht als Hinzufügen möchten, rufen Sie die Einstellungen der Mail-Vorlage unter _Einstellungen > Technisch > Vorlagen > Vorlage auswählen_ auf. Im Tab _Erweiterte Einstellungen_ wählen Sie im Feld _Optionaler zu druckender und anzuhängender Report_ den Bericht aus.

::: tip
Im Feld _Report Dateiname_ können Sie einen alternativen Dateinamen für den Anhang definieren.
:::

### Mail-Server auf E-Mail-Vorlage festlegen

Zeigen Sie eine E-Mail-Vorlage unter _Einstellungen > Technisch > E-Mail > E-Mail-Vorlagen_ an und öffnen Sie den Tab _Einstellungen_. Im Feld _Postausgangsserver_ wählen Sie den entsprechenden Mail-Server aus.

### Absender-Adresse auf E-Mail-Vorlage festlegen

Zeigen Sie eine E-Mail-Vorlage unter _Einstellungen > Technisch > E-Mail > E-Mail-Vorlagen_ an und öffnen Sie den Tab _E-Mail-Konfiguration_. Im Feld _Von_ geben Sie den Namen und die E-Mail-Adresse im Format `Name <alias@example.com>` ein.

::: warning
Stellen Sie sicher, dass der Postausgangsserver die _VON-Filterung_ zulässt.
:::

## Testen

### Testnachrichten verschicken

Um sicherzustellen, dass Odoo Nachrichten am richtigen Ort platziert, kann man als Administrator des Systems Testnachrichten erstellen und verschicken.

Öffnen Sie _Einstellungen > Dialog > Externe E-Mail-Server > Eintrag auswählen > Aktion > Nachrichten_. Mit _Neu_ könne Sie nun ein Nachricht erfassen und verschicken.

### E-Mail an Kontakt senden

Mit dem Odoo-Chatter können auf jedem Dokument interne Notizen hinzugefügt werden, aber auch Mails für Externe.

Zum versenden einer Nachricht an einen Kontakt wählen Sie _Kontakte > Kontakte_ und navigieren zum _Chatter_. Wählen Sie _Sende Nachricht_ und vergrössern Sie das Eingabefeld. Wählen Sie die Empfänger, den Betreff, geben Sie ihre Nachricht ein und klicken Sie auf _Senden._

![Dialog Nachricht versenden](attachments/Dialog%20Nachricht%20versenden.gif)

## Versand

### E-Mail-Versand prüfen

Wenn man eine Odoo-Nachricht als E-Mail versendet, wird die Nachricht im Chatter geloggt. Man findet dort das Mail-Icon.

![](attachments/Dialog%20Mail%20Fehlschlag.png)

Ist das Mail-Icon rot markiert (und nicht weiss), konnte die E-Mail nicht versendet werden. Wenn Sie auf Icon klicken werden Details zum fehlerhaften Mail-Versand angezeigt.

![](attachments/Dialog%20Mail%20Fehlschlag%20Beispiel.png)

Ein weiteres Bespiel:

![](attachments/Dialog%20E-Mail%20Fehler%20Single%20Domains.png)

### Alle E-Mails anzeigen

Odoo speichert E-Mails in der Datenbank. Sie können diese im Entwicklermodus unter _Einstellungen > Technisch > E-Mails_ anzeigen.

### Nicht versendete E-Mails anzeigen

Wenn Sie den Entwicklermodus eingeschaltet haben, finden Sie unter _Einstellungen > Technisch > E-Mails_ eine Liste der nicht versendeten E-Mails. Odoo registiert wenn die E-Mail-Zustellung nicht erfolgreich war.

![](attachments/Discuss%20nicht%20versendete%20E-Mails.png)

### E-Mail erneut versenden

Wenn [Nicht versendete E-Mails anzeigen](#Nicht%20versendete%20E-Mails%20anzeigen) und dort Einträge finden, können Sie der Aktion _Wiederholen_ den Versand erneut starten. Um die E-Mail direkt zu versenden, wählen Sie _Sofort senden_.

::: warning
Auf bestimmte Nachrichten habe nur der Author Zugriff. Kontaktieren Sie den Author über den Chatter und teilen Sie mit, dass die Nachricht erneut versendet werden soll.
:::

### Löschung von E-Mails nach Versand verhindern

Abhängig von der Konfiguration der E-Mail-Vorlage löscht Odoo versendete E-Mails um Speicherplatz zu sparen. Um die Löschung zu verhindern, navigieren Sie nach _Einstellungen > Technisch > E-Mail-Vorlage_. Zeigen Sie eine Vorlage an und navigieren Sie zum Tab _Einstellungen_. Entfernen Sie die Option _Autom. Löschen_.

## Empfang

### Verarbeiten von eingehenden E-Mails ausführen

Odoo prüft regelmässig die Postfächer der konfigurierten eingehenden E-Mail-Server. Den Vorgang können Sie manuell ausführen. Navigieren Sie nach _Einstellungen > Technisch > E-Mail > Eingehende Mail-Server_ und wählen Sie einen Eintrag aus. Klicken Sie auf _Nachrichten Abrufen_

::: tip
Odoo verarbeitet in diesem Vorgang ungelesene E-Mails im Postfach. Anhand eines E-Mail-Headers fügt Odoo die Nachricht an das dazugehörige Dokument.
:::

### Eingehende E-Mails erneut empfangen

Odoo markiert empfangene und verarbeitete E-Mails im Postfach als gelesen. Markieren Sie die E-Mails im Postfach als ungelesen damit Odoo beim der nächsten Ausführung zur Verarbeitung der eingehenden E-Mails die markierten E-Mails erneut verarbeitet.
