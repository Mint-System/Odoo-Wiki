---
title: Verkaufsgruppen und Baugruppen
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
---

# Verkaufsgruppen und Baugruppen

Odoo bildet die Produkte zur Fertigung in folgenden Schema ab:

![Theorie Verkaufsgruppen und Baugruppen](attachments/Best%20Practice%20Verkaufsgruppen%20und%20Baugruppen.svg)

Ein Produkt kann verschiedene Attribute wie Farbe, Grösse oder Dimension haben. Der Verkauf konfiguriert anhand der Attribute eine Produktvariante. Es muss nicht zwingend für jede mögliche Kombination eine Variante existieren. Für jede Produktvariante kann eine Stückliste und dazugehöriger Arbeitsplan definiert werden. Die Komponenten der Stücklisten können Produktvarianten sein.
