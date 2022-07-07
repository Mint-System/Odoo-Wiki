---
tags:
- HowTo
prev: ./diskussion
---
# Diskussion E-Mail
![icons_odoo_mail](assets/icons_odoo_mail.png)

E-Mail mit Odoo versenden.

## E-Mail-Vorlage erfassen

Navigieren Sie nach *Einstellungen > Technisch > Volagen* und erstellen Sie einen neuen Eintrag. Im Feld *Gilt für* wählen das Geschäftsobjekt, das mit der Voralge verknüpft werden soll.

![](assets/Diskussion%20E-Mail%20Gilt%20für.png)

Im ersten Tab *Inhalt* können Sie mit dem HTML-Editor den Vorlage-Text mit Platzhaltern definieren. 

![](assets/Diskussion%20E-Mail%20HTML.png)

Im Tab *E-Mail-Konfiguration* finden Sie diese Parameter:

* **Von**: ID des Absender-Kontakt. Standard: `${(object.user_id.email_formatted or user.email_formatted) | safe}`
* **Standardempfänger**: Wenn markiert wird Standardempfänge `partner_id` von Objekt verwendet.
	* **An (E-Mails)**: E-Mail-Adressen als Text. Standard: `${object.work_email | safe}`
	* **An (Partner)**: ID des Empfänger-Kontakt. Standard: `${object.partner_id.id}`
* **CC**: E-Mail-Adressen als CC.
* **Antwort an**: Überschreiben der Antworten-Adresse.
* **Geplantes Sendedatum**: Dynamisches Datum für das geplante Versenden.

## Testnachrichten verschicken
Aufgabenträger: [Administrator](Rollen.md#Administrator)

Um sicherzustellen, dass Odoo Nachrichten am richtigen Ort platziert, kann man als Administrator des Systems Testnachrichten erstellen und verschicken.

Öffnen Sie *Einstellungen > Diskussion > Externe E-Mail-Server > Eintrag auswählen > Aktion > Nachrichten*. Mit *Anlegen* könne Sie nun ein Nachricht erfassen und verschicken.

## Mail an Kontakt senden

Mit dem Odoo-Chatter können auf jedem Geschäftsobjekt interne Notizen hinzugefügt werden, aber auch Mails für Externe.

Zum versenden einer Nachricht an einen Kontakt wählen Sie *Kontakte > Kontakte* und navigieren zum *Chatter*. Wählen Sie *Sende Nachricht* und vergrössern Sie das Eingabefeld. Wählen Sie die Empfänger, den Betreff, geben Sie ihre Nachricht ein und klicken Sie auf *Senden.*

![Diskussion Nachricht versenden](assets/Diskussion%20Nachricht%20versenden.gif)

## Mail-Versand prüfen

Wenn man eine Odoo-Nachricht als E-Mail versendet, wird die Nachricht im Chatter geloggt. Man findet dort das Mail-Icon.

![](assets/Diskussion%20Mail%20Fehlschlag.png)

Ist das Mail-Icon rot markiert (und nicht weiss), konnte die E-Mail nicht versendet werden. Klickt man auf das Icon erfährt wieso der Mail-Versand nicht funktioniert hat.

![Diskussion Mail Fehlschlag Beispiel](assets/Diskussion%20Mail%20Fehlschlag%20Beispiel.png)

## Nicht versende E-Mails anzeigen

Wenn Sie den Entwicklermodus eingeschaltet haben, finden Sie unter *Einstellungen > Technisch > E-Mails* eine Liste der nicht versendeten E-Mails. Odoo registiert wenn die E-Mail-Zustellung nicht erfolgreich war.

![](assets/Diskussion%20nicht%20versendete%20E-Mails.png)

## Mail-Vorlagen verwalten

Zu jedem Geschäftsobjekt können E-Mail-Vorlagen mit Parameter angelegt werden. Navigieren Sie nach *Einstellungen > Technisch > Volagen* um die bestehenden E-Mail-Vorlagen anzuzeigen.

## Mehrsprachige E-Mail-Vorlagen  aus Word kopieren

Erstellen Sie eine E-Mail-Vorlage unter *Einstellungen > Technisch > Volagen*. Fügen Sie die Text aus der Word-Datei mit <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>v</kbd> (Einfügen ohne Formatierungen) ein. Bearbeiten Sie  im nächsten Schritt die Übersetzungen und kopieren Sie den generierten Code in das übersetzte Feld.

![Mail-Vorlage aus Word kopieren](assets/Mail-Vorlage%20aus%20Word%20kopieren.gif)

## Dynamischer Platzhalter generieren

Rufe Sie eine importierte E-Mail-Vorlage unter *Einstellungen > Technisch > Volagen* auf. Generieren Sie einen dynamischen Platzhalter und fügen Sie diesen in die Vorlage.

![Mail-Vorlage Platzhalter ersetzen](assets/Mail-Vorlage%20Platzhalter%20ersetzen.gif)

## E-Mail-Vorlage testen

Rufe Sie eine E-Mail-Vorlage unter *Einstellungen > Technisch > Volagen* auf und klicken Sie auf *Vorschau*. Wählen Sie einen Datensatz und prüfen Sie die generierte Vorschau.

![Mail-Vorlage Variablen testen](assets/Mail-Vorlage%20Variablen%20testen.gif)