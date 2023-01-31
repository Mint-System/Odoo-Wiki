---
tags:
- Best-Practice
prev: ./best-practice
---

# Best Practice: Stundenlohn abrechnen

Wenn Sie die Erweiterung [Gio Payroll Custom](Gio%20Payroll%20Custom.md) für Schweizer Lohnabrechnung verwenden, können Sie damit auch Stundenlöhner abrechnen.

## Vorbereitung

Lohntyp auf Arbeitsvertrag auf Stundenlohn setzen.
Auf dem Arbeitsvertrag der Stundenlöhner, müssen Sie *Stundenlohn* als [Lohntyp festlegen](Gio%20Payroll%20Custom.md#Lohntyp%20festlegen)

Damit die gearbeiteten Stunden automatisch aus der Lohnabrechnung ausgelesen werden muss auf der Lohnstruktur *Monatslohn* der *Python Code* ersetzt werden. Sie können die [Lohnart anpassen](Personalabrechnung.md#Lohnart%20anpassen) und diesen Code verwenden:

```python
if contract.gio_wage_type == 'hourly':
    result = contract.gio_wage_hourly*payslip.sum_worked_hours
else:
    result = contract.gio_wage_monthly
```

Damit beim Erstellen der Abrechnung die korrekte Gehaltsstruktur geladen wird, müssen Sie auf dem Strukturtyp die entsprechende Gehaltsstruktur festlegen. Führen Sie dazu [Gehaltsstruktur auf Strukturtyp festlegen](Gio%20Payroll%20Custom.md#Gehaltsstruktur%20auf%20Strukturtyp%20festlegen) aus.

Auf den Verträgen der Mitarbeitenden muss der korrekte Strukturtyp erfasst sein: [Strukturtyp auf Arbeitsvertrag festlegen](Gio%20Payroll%20Custom.md#Strukturtyp%20auf%20Arbeitsvertrag%20festlegen).

## Abrechnung

Damit auf der Lohnabrechnung die gearbeiteten Stunden eingetragen werden, muss die Lohnabrechnung über die Arbeitseinträge erstellt werden. Führen Sie dazu die Aktion [Lohnabrechnungen mit Batch erstellen](Personalabrechnung.md#Lohnabrechnungen%20mit%20Batch%20erstellen) aus.

## Beispiel



![](assets/Pasted%20image%2020230131110332.png)

![](assets/Pasted%20image%2020230131110142.png)

