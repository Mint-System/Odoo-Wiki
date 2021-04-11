# Zeiterfassung
![icons_odoo_hr_timesheet](assets/icons_odoo_hr_timesheet.png)

* [Zeiterfassung Terminal](Zeiterfassung-Terminal.md)

## Eintrag manuell erstellen

Damit ein Odoo Benutzer ein Zeiterfassungs-Eintrag machen kann, müssen die foglenden Bedingungen erfüllt sein:
* Dem Benutzer ist ein Mitarbeiter zugewiesen
* Der Benutzer hat Zugriff auf ein Projekt und auf eine Projektaufgabe

Zur manuellen Erfassung folgende Aktion ausführen *Zeiterfassung > + Anlegen*. Anschliessend die Beschreibung eingeben, Projekt wählen, Aufgabe wählen und die Zeitdauer eintragen.

## Verrechnungstyp anpassen

Jeder Zeiterfassungseintrag ist ein Verrechnungstyp zugeweisen. Dieser wird beim Erstellen des Eintrag abhängig von Konfiguration des Projekts und der Projektaufgabe festgelegt. In der Listenansicht des Stundenzettels kann nach dem Attribut *Abrechenbarer Typ* gruppiert werden. Falsche Einträge können so identifiziert werden.

Wenn sie den Abrechnungstyp von bestehenden Eintägen ändern möchten, müssen sie die verknüpfte Aufgaben ändern und wieder zuweisen.

![](assets/Zeiterfassung%20Verrechnungstyp%20%C3%A4ndern.gif)

## Awesome Timesheet installieren

Um die mobile App *Awesome Timesheet* in ihrem Browser oder auf dem Smartphone zu verwenden, müssen sie es zuerst über den jeweiligen App-Store installieren.

### Login
<!-- tabs:start -->
#### **Schritt 1**
Öffnen sie das Menu und wählen *Synchronize*.

![Awesome Timesheet Login 1](assets/Awesome%20Timesheet%20Login%201.png)

#### **Schritt 2**
Klick auf *Sign In*.

![[Awesome Timesheet Login 2.png]]

#### **Schritt 3**
*Https://* auswählen und die Odoo Domain eingeben.

![Awesome Timesheet Login 5](assets/Awesome%20Timesheet%20Login%205.png)

#### **Schritt 4**
Im Feld *Login* die Email und Feld *Password* das Passwort eingeben. Einloggen mit klick auf *Login*.

![Awesome Timesheet Login 4](assets/Awesome%20Timesheet%20Login%204.png)

#### **Schritt 5**
Erscheint ein Dialog, wählen sie *Discard Data*.

![Awesome Timesheet Login 3](assets/Awesome%20Timesheet%20Login%203.png)
<!-- tabs:end -->

Nun ist die App bereit zur mobilen Zeiterfassung.

### Aufgabe und Projekt zuweisen

Damit ein Projekt und eine Aufgabe in der Awesome Timesheet für die Zeiterfassung sichtbar wird müssen die folgenden Bedigungen erfüllt sein.

* Das Projekt muss als Favorit markiert sein
* Die Projektaufgabe ist dem Benutzer zugewiesen oder der Benutzer wurde als Abonement der Aufgabe hinzugefügt.
