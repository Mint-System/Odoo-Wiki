---
tags:
- Best-Practice
prev: ./best-practice
---
## Best Practice: Fertigungsauftrag

## Spezialfall Teilmenge einlagern

### Anforderung

Ein Fertigungsauftrag für eine bestimmte Menge N eines Produktes wird ausgelöst. Bevor der Auftrag abgeschlossen ist, soll eine Teilmenge B des fertiggestellten Produkts eingelagert werden. Der Auftrag soll offen bleiben, bis die restliche Menge A-B ebenfalls fertiggestellt ist.

### Beispiel

Der Fertigungsauftrag WH/MO/00001 für 16 Stk des Artikels *Speiche* wird auf folgender Basis geplant:

![Best Practice Speichen Lagerbestand Arbeitspläne](assets/Best%20Practice%20Speichen%20Lagerbestand%20Arbeitspl%C3%A4ne.svg)

Daraus entstehen vier Arbeitsaufträge:

![Best Practice Arbeitsaufträge 1](assets/Best%20Practice%20Arbeitsauftr%C3%A4ge%201.svg)

Die Arbeitsaufträge werden der Reihe nach bearbeitet  (*Prozess*) und mit der Teilmenge B abgeschlossen. Sie bleiben damit im Status *In Arbeit* und es zeigt sich folgende Situation:

![Best Practice Arbeitsaufträge 2](assets/Best%20Practice%20Arbeitsauftr%C3%A4ge%202.svg)

::: tip
Das sequenzielle Abarbeiten von nicht abgeschlossenen Arbeitsaufträgen funktioniert nur, wenn im entsprechenden Arbeitsplan folgende Option eingeschaltet ist: *Start Next Operation: Sobald einige Produkte verarbeitet sind*
:::

Im Fertigungsauftrag WH/MO/00001 erscheinen die abgeschlossenen Produkte der Menge B im Register Fertigprodukte. Mit der Funktion *Bestandänderung Buchen* werden die fertiggestellten Produkte ans Lager gebucht. Die noch offenen Arbeitsaufträge können mit der Menge A-B weiter bearbeitet und der Auftrag dann vollständig abgeschlossen werden.

::: tip
Die Funktion *Bestandänderung Buchen* erscheint nur, wenn der Entwicklermodus eingeschaltet ist.
:::
