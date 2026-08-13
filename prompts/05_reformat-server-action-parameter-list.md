---
title: "Reformat server action parameter list"
state: draft
model: 
input_tokens: 
---

# Run 05

Note: @Clanker refers to the "ai agent" (you) who is working on this task.

@Clanker when working on this task, make sure to:

- Read context and task section first
- Prepare a list of todos
- Update the todo list while working on the task

## Context

@Clanker Read the `AGENTS.md` and `README.md` to get an understanding of the project.

## Task

There are markdown files that end with `Actions.md` such as `Accounting%20Actions.md`. The definition of server action in these files follows a pattern. Here is an example:

````markdown
### Zahlung auf nicht gesendet setzen

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Zahlung auf nicht gesendet setzen`\
Modell: `account.payment`\
Typ: `Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python-Code_:

```python
for record in records:
  record.write({'is_move_sent': False})
```
````

I want you to reformat the list of parameters. Here is what it should look like

````markdown
### Zahlung auf nicht gesendet setzen

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

- **Name**: `Zahlung auf nicht gesendet setzen`
- **Modell**: `account.payment`
- **Typ**: `Code ausführen`
- **Code**: 

```python
for record in records:
  record.write({'is_move_sent': False})
```
````

I want to you to update all definitions in all `*_Actions.md` files. Just to be clear here are the replacements:

`Name der Aktion:` -> `- **Name:`
`Modell:` -> `- **Modell:`
`Typ:` -> `- **Typ:`
`Kopieren Sie die folgenden Zeilen in das Feld _Python-Code_:` -> `- **Code**: `
`Python-Code:` -> `- **Code**: `
`Ausführen alle` -> `- **Ausführen alle**:`
`Nächstes Ausführungsdatum` -> `- **Nächstes Ausführungsdatum**:`
`Anzahl der Anrufe` -> `- **Anzahl der Anrufe**:`
`Anzuwenden auf:` -> `- **Anzuwenden auf**:`
`Auslöser:` -> `- **Auslöser**:`
`Trigger-Felder::` -> `- **Trigger-Felder:**:`
`Domain vor Aktualisierung:` -> `- **Domain vor Aktualisierung**:`

And of course remove the trailing slashes.

Let me know if you find a parameter that is not on my replacement list.

## Worklog

@Clanker Add a summary here once the task has been completed.

@Clanker Set frontmatter state to completed and update info about model and token usage.
