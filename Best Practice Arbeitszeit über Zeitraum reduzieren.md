---
title: Arbeitszeit über Zeitraum reduzieren
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
  - Best-Practice
prev: ./best-practice
draft: false
---

# Arbeitszeit über Zeitraum reduzieren

In diesem Szenario hat ein Mitarbeitender ein reduziertes Pensum über einen bestimmten Zeitraum. Das reduzierte Pensum in diesem Fall 20% kann als Abwesenheit importiert und bestätigt werden.

## Demo-Daten

Speichern Sie die Inhalte der folgenden Tabellen als CSV-Datei und importieren Sie diese nach Odoo.

**hr_attendance_1.csv**

Anwesenheiten 100% von Montag 2024-09-30 bis Freitag 2024-10-25.

| id                           | check_in            | check_out           | employee_id    |
| ---------------------------- | ------------------- | ------------------- | -------------- |
| \_\_import\_\_.attendance_1  | 2024-09-30 08:00:00 | 2024-09-30 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_2  | 2024-09-30 13:00:00 | 2024-09-30 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_3  | 2024-10-01 08:00:00 | 2024-10-01 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_4  | 2024-10-01 13:00:00 | 2024-10-01 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_5  | 2024-10-02 08:00:00 | 2024-10-02 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_6  | 2024-10-02 13:00:00 | 2024-10-02 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_7  | 2024-10-03 08:00:00 | 2024-10-03 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_8  | 2024-10-03 13:00:00 | 2024-10-03 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_9  | 2024-10-04 08:00:00 | 2024-10-04 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_10 | 2024-10-04 13:00:00 | 2024-10-04 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_11 | 2024-10-07 08:00:00 | 2024-10-07 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_12 | 2024-10-07 13:00:00 | 2024-10-07 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_13 | 2024-10-08 08:00:00 | 2024-10-08 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_14 | 2024-10-08 13:00:00 | 2024-10-08 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_15 | 2024-10-09 08:00:00 | 2024-10-09 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_16 | 2024-10-09 13:00:00 | 2024-10-09 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_17 | 2024-10-10 08:00:00 | 2024-10-10 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_18 | 2024-10-10 13:00:00 | 2024-10-10 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_19 | 2024-10-11 08:00:00 | 2024-10-11 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_20 | 2024-10-11 13:00:00 | 2024-10-11 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_21 | 2024-10-14 08:00:00 | 2024-10-14 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_22 | 2024-10-14 13:00:00 | 2024-10-14 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_23 | 2024-10-15 08:00:00 | 2024-10-15 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_24 | 2024-10-15 13:00:00 | 2024-10-15 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_25 | 2024-10-16 08:00:00 | 2024-10-16 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_26 | 2024-10-16 13:00:00 | 2024-10-16 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_27 | 2024-10-17 08:00:00 | 2024-10-17 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_28 | 2024-10-17 13:00:00 | 2024-10-17 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_29 | 2024-10-18 08:00:00 | 2024-10-18 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_30 | 2024-10-18 13:00:00 | 2024-10-18 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_31 | 2024-10-21 08:00:00 | 2024-10-21 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_32 | 2024-10-21 13:00:00 | 2024-10-21 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_33 | 2024-10-22 08:00:00 | 2024-10-22 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_34 | 2024-10-22 13:00:00 | 2024-10-22 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_35 | 2024-10-23 08:00:00 | 2024-10-23 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_36 | 2024-10-23 13:00:00 | 2024-10-23 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_37 | 2024-10-24 08:00:00 | 2024-10-24 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_38 | 2024-10-24 13:00:00 | 2024-10-24 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_39 | 2024-10-25 08:00:00 | 2024-10-25 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_40 | 2024-10-25 13:00:00 | 2024-10-25 17:00:00 | Mitchell Admin |

**hr_leave1.csv**

Krankheit 20% von Montag 2024-10-28 bis Freitag 2024-11-22.

| id                         | holiday_status_id | name           | date_to             | date_from           | state     | holiday_type     | employee_id    |
| -------------------------- | ----------------- | -------------- | ------------------- | ------------------- | --------- | ---------------- | -------------- |
| \_\_import\_\_.hr_leave_1  | Krankheit         | 20% Sick Leave | 2024-10-28 10:00:00 | 2024-10-28 08:00:00 | Genehmigt | Nach Mitarbeiter | Mitchell Admin |
| \_\_import\_\_.hr_leave_2  | Krankheit         | 20% Sick Leave | 2024-10-29 10:00:00 | 2024-10-29 08:00:00 | Genehmigt | Nach Mitarbeiter | Mitchell Admin |
| \_\_import\_\_.hr_leave_3  | Krankheit         | 20% Sick Leave | 2024-10-30 10:00:00 | 2024-10-30 08:00:00 | Genehmigt | Nach Mitarbeiter | Mitchell Admin |
| \_\_import\_\_.hr_leave_4  | Krankheit         | 20% Sick Leave | 2024-10-31 10:00:00 | 2024-10-31 08:00:00 | Genehmigt | Nach Mitarbeiter | Mitchell Admin |
| \_\_import\_\_.hr_leave_5  | Krankheit         | 20% Sick Leave | 2024-11-01 10:00:00 | 2024-11-01 08:00:00 | Genehmigt | Nach Mitarbeiter | Mitchell Admin |
| \_\_import\_\_.hr_leave_6  | Krankheit         | 20% Sick Leave | 2024-11-04 10:00:00 | 2024-11-04 08:00:00 | Genehmigt | Nach Mitarbeiter | Mitchell Admin |
| \_\_import\_\_.hr_leave_7  | Krankheit         | 20% Sick Leave | 2024-11-05 10:00:00 | 2024-11-05 08:00:00 | Genehmigt | Nach Mitarbeiter | Mitchell Admin |
| \_\_import\_\_.hr_leave_8  | Krankheit         | 20% Sick Leave | 2024-11-06 10:00:00 | 2024-11-06 08:00:00 | Genehmigt | Nach Mitarbeiter | Mitchell Admin |
| \_\_import\_\_.hr_leave_9  | Krankheit         | 20% Sick Leave | 2024-11-07 10:00:00 | 2024-11-07 08:00:00 | Genehmigt | Nach Mitarbeiter | Mitchell Admin |
| \_\_import\_\_.hr_leave_10 | Krankheit         | 20% Sick Leave | 2024-11-08 10:00:00 | 2024-11-08 08:00:00 | Genehmigt | Nach Mitarbeiter | Mitchell Admin |
| \_\_import\_\_.hr_leave_11 | Krankheit         | 20% Sick Leave | 2024-11-11 10:00:00 | 2024-11-11 08:00:00 | Genehmigt | Nach Mitarbeiter | Mitchell Admin |
| \_\_import\_\_.hr_leave_12 | Krankheit         | 20% Sick Leave | 2024-11-12 10:00:00 | 2024-11-12 08:00:00 | Genehmigt | Nach Mitarbeiter | Mitchell Admin |
| \_\_import\_\_.hr_leave_13 | Krankheit         | 20% Sick Leave | 2024-11-13 10:00:00 | 2024-11-13 08:00:00 | Genehmigt | Nach Mitarbeiter | Mitchell Admin |
| \_\_import\_\_.hr_leave_14 | Krankheit         | 20% Sick Leave | 2024-11-14 10:00:00 | 2024-11-14 08:00:00 | Genehmigt | Nach Mitarbeiter | Mitchell Admin |
| \_\_import\_\_.hr_leave_15 | Krankheit         | 20% Sick Leave | 2024-11-15 10:00:00 | 2024-11-15 08:00:00 | Genehmigt | Nach Mitarbeiter | Mitchell Admin |
| \_\_import\_\_.hr_leave_16 | Krankheit         | 20% Sick Leave | 2024-11-18 10:00:00 | 2024-11-18 08:00:00 | Genehmigt | Nach Mitarbeiter | Mitchell Admin |
| \_\_import\_\_.hr_leave_17 | Krankheit         | 20% Sick Leave | 2024-11-19 10:00:00 | 2024-11-19 08:00:00 | Genehmigt | Nach Mitarbeiter | Mitchell Admin |
| \_\_import\_\_.hr_leave_18 | Krankheit         | 20% Sick Leave | 2024-11-20 10:00:00 | 2024-11-20 08:00:00 | Genehmigt | Nach Mitarbeiter | Mitchell Admin |
| \_\_import\_\_.hr_leave_19 | Krankheit         | 20% Sick Leave | 2024-11-21 10:00:00 | 2024-11-21 08:00:00 | Genehmigt | Nach Mitarbeiter | Mitchell Admin |
| \_\_import\_\_.hr_leave_20 | Krankheit         | 20% Sick Leave | 2024-11-22 10:00:00 | 2024-11-22 08:00:00 | Genehmigt | Nach Mitarbeiter | Mitchell Admin |

**hr_attendance_2.csv**

Anwesenheiten 80% von Montag 2024-10-28 bis Freitag 2024-11-22.

| id                           | check_in            | check_out           | employee_id    |
| ---------------------------- | ------------------- | ------------------- | -------------- |
| \_\_import\_\_.attendance_41 | 2024-10-28 10:00:00 | 2024-10-28 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_42 | 2024-10-28 13:00:00 | 2024-10-28 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_43 | 2024-10-29 10:00:00 | 2024-10-29 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_44 | 2024-10-29 13:00:00 | 2024-10-29 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_45 | 2024-10-30 10:00:00 | 2024-10-30 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_46 | 2024-10-30 13:00:00 | 2024-10-30 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_47 | 2024-10-31 10:00:00 | 2024-10-31 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_48 | 2024-10-31 13:00:00 | 2024-10-31 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_49 | 2024-11-01 10:00:00 | 2024-11-01 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_50 | 2024-11-01 13:00:00 | 2024-11-01 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_51 | 2024-11-04 10:00:00 | 2024-11-04 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_52 | 2024-11-04 13:00:00 | 2024-11-04 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_53 | 2024-11-05 10:00:00 | 2024-11-05 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_54 | 2024-11-05 13:00:00 | 2024-11-05 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_55 | 2024-11-06 10:00:00 | 2024-11-06 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_56 | 2024-11-06 13:00:00 | 2024-11-06 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_57 | 2024-11-07 10:00:00 | 2024-11-07 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_58 | 2024-11-07 13:00:00 | 2024-11-07 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_59 | 2024-11-08 10:00:00 | 2024-11-08 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_60 | 2024-11-08 13:00:00 | 2024-11-08 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_61 | 2024-11-11 10:00:00 | 2024-11-11 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_62 | 2024-11-11 13:00:00 | 2024-11-11 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_63 | 2024-11-12 10:00:00 | 2024-11-12 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_64 | 2024-11-12 13:00:00 | 2024-11-12 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_65 | 2024-11-13 10:00:00 | 2024-11-13 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_66 | 2024-11-13 13:00:00 | 2024-11-13 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_67 | 2024-11-14 10:00:00 | 2024-11-14 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_68 | 2024-11-14 13:00:00 | 2024-11-14 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_69 | 2024-11-15 10:00:00 | 2024-11-15 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_70 | 2024-11-15 13:00:00 | 2024-11-15 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_71 | 2024-11-18 10:00:00 | 2024-11-18 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_72 | 2024-11-18 13:00:00 | 2024-11-18 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_73 | 2024-11-19 10:00:00 | 2024-11-19 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_74 | 2024-11-19 13:00:00 | 2024-11-19 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_75 | 2024-11-20 10:00:00 | 2024-11-20 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_76 | 2024-11-20 13:00:00 | 2024-11-20 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_77 | 2024-11-21 10:00:00 | 2024-11-21 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_78 | 2024-11-21 13:00:00 | 2024-11-21 17:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_79 | 2024-11-22 10:00:00 | 2024-11-22 12:00:00 | Mitchell Admin |
| \_\_import\_\_.attendance_80 | 2024-11-22 13:00:00 | 2024-11-22 17:00:00 | Mitchell Admin |

Die daraus resultierenden Überstunden werden 0.0 ergeben. Passen Sie die Wert gemäss ihrem Szenario an.
