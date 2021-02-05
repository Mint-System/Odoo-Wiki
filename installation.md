# Installation
![](././././././././icons_odoo_website_version.png)

## Mail-Account bereitstellen

Odoo benötigt zum Empfang und Versand von E-Mails einen exklusiven Mail-Account. Im  Normalfall lautet die Mail Adresse `odoo@example.com`, wobei `example.com` mit der Domain des Kunden zu ersetzen ist.

**Aliase**

Damit Antworten an E-Mails von Odoo korrekt verarbeitet werden können, müssen Mail-Aliase konfiguriert werden. Erstellen sie die folgenden Mail-Aliase für `odoo@example.com`:

* `catchall@example.com` Für allgemeine Antworten
* `eingangsrechnung@example.com` Zum Empfang von Rechnungen
* `support@example.com` Zum Empfang von Support-Anfragen

Wenn jemand eine Mail an eine dieser Adresse schickt, werden sie ans Postfach von `odoo@example.com` weitergeleitet und anschliessen von Odoo verarbeitet.

## DNS-Einträge erstellen

Odoo ist eine Webapplikation und muss über eine bestimmte Adresse im Browser aufgerufen werden. Wir empfehlen als Adresse für die produktive Umgebung `erp.example.com` festzulegen und für die Testumgebung `erp-dev.example.com`. `example.com` ist natürlich mit der Domain des Kunden zu ersetzen.

Damit die Adresse korrekt aufgelöst wird, müssen DNS-Einträge erstellt werden. Angenommen es wird ein Server unter der Adresse `server1.example.org` bereitgestellt, müssen diese DNS-Einträge erstellt werden:

```
erp.example.com ALIAS server1.example.org
erp-dev.example.com ALIAS server1.example.org
```

Alternativ können auch Einträge vom Typ CNAME statt ALIAS erstellt werden.


<hr>

[📝 Edit on GitHub](///////https://github.com/mint-system/odoo-handbuch/blob/master/installation.html.html.html.html.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](//////https://github.com/mint-system/odoo-handbuch/blob/master/installation.html.html.html.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](/////https://github.com/mint-system/odoo-handbuch/blob/master/installation.html.html.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](////https://github.com/mint-system/odoo-handbuch/blob/master/installation.html.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](///https://github.com/mint-system/odoo-handbuch/blob/master/installation.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](//https://github.com/mint-system/odoo-handbuch/blob/master/installation.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](/https://github.com/mint-system/odoo-handbuch/blob/master/installation.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](https://github.com/Mint-System/Odoo-Handbuch/blob/master/installation.md)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>