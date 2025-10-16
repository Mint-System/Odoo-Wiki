---
title: Rollen und Berechtigungen
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
---

# Rollen und Berechtigungen

Mit der Odoo App [User roles](Base%20User%20Role.md) können Sie Benutzer statt Gruppen mit bestimmten Rollen ausstatten. Die wichtigste Abgrenzung ist Buchhaltung und HR.

![Rollen](attachments/Rollen.svg)

**Mitarbeitende**

Alle internen Benutzer erhalten diese Rolle. Benutzer-Gruppen aus Apps werden standardmässig dieser Rolle hinzugefügt. Es wird ein _Access by Default_-Ansatz für neue Apps verfolgt.

**Buchhaltung**

Benutzer mit dieser Rolle erhalten Zugriff auf Finanzdaten.

**Personal**

Benutzer mit dieser Rolle erhalten Zugriff auf Personal- und Lohndaten.

**Administratoren**

Benutzer mit dieser Rolle können Apps installieren und Einstellungen verwalten. Sie verwalten die Benutzerberechtigungen und haben vollen Zugriff auf das System.

**Audit**

Wenn Änderungen in den Benutzerberechtigungen protokolliert werden, dann dürfen die Protokolle nur von einem Auditor eingesehen und verwaltet werden.
