---
title: Entwicklung Runboat
description: Odoo Community Association Testumgebungen.
tags:
- HowTo
prev: ./development
---
# Entwicklung Runboat
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Repository: <https://github.com/sbidoul/runboat>

## Beschreibung

::: warning
Nicht zu verwechseln mit [Entwicklung Runbot](Development%20Runboat.md).
:::

Auf Runboat stehen die Testumgebungen der Odoo Community Association (OCA) zur Verfügung. Für jeden Commit auf einem Branch (15.0, 16.0, 17.0, ...) eines OCA-Repository wird eine Testumgebung gestartet.

## Verwendung

### Auf einer Odoo Runboat Datenbank einloggen

Für jedes OCA-Repository und jede Odoo Version gibt es eine Runboat-Ansicht. Wählen Sie ein Repository unter <https://github.com/OCA/> aus und klicken sie auf den entsprechenden Branch. Als Beispiel verwenden wir <https://github.com/OCA/sale-workflow/tree/17.0>.

In der README-Datei des Repository klicken Sie auf *runboat Try me*. Sie gelangen auf die Übersicht aller Builds.

![](attachments/Odoo%20Runbot%20Build.png)

Wählen Sie einen Build aus und klicken Sie auf *Start*. Laden Sie die Seite neu und sobald die Instanz aktiv ist, klicken Sie auf *live*. Wählen Sie die Datenbank aus und loggen Sie mit `admin:admin` ein.