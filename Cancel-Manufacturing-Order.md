---
tags:
- HowTo
- Drittanbieter
---
# Cancel Manufacturing Order
![icons_odoo_modules](assets/icons_odoo_modules.png)

Fertigungsauftrag rückgängig machen.

Technischer Name: `eq_cancel_mrp_orders`\
Repository: <https://gitlab.com/mint-system/odoo-app-cancel-manufacturing-order>

## Berechtigung festlegen

 From Users Menu, there is access rights called *Cancel Manufacturing Orders*. User who have access rights can cancel manufacturing orders.

![](assets/Odoo%20App%20Fertigung%20Fertigungsauftrag%20Abbrechen%20Berechtigung.png)

## Fertigungsauftrag zurücksetzen

 Before process manufacturing order as per below image product have some quantity.

![](assets/Odoo%20App%20Fertigung%20Fertigungsauftrag%20Abbrechen%20Menge.png)

Once manufacturing order done inventory moves moved to done state.

 User who have cancel manufacturing orders access rights can see *Cancel* button. 

![](assets/Odoo%20App%20Fertigung%20Fertigungsauftrag%20Abbrechen%20Knopf.png)

 After done manufacturing order consumed material quantity decreased.

![](assets/Odoo%20App%20Fertigung%20Fertigungsauftrag%20Abbrechen%20Menge%20aktuaisiert.png)

When user click on cancel button it cancel inventory moves, cancel work orders and reverse inventory in system and moved manufacturing order to *Cancelled* state. 

 After cancel manufacturing order reset to draft button appeared.
 
![](assets/Odoo%20App%20Fertigung%20Fertigungsauftrag%20Abbrechen%20Zur%C3%BCcksetzen.png)

After cancel manufacturing order consumed material quantity increased.

![](assets/Fertigung%20Fertigungsauftrag%20Abbrechen%20Menge%20konsumiert.png)

Click on reset to draft button it will delete cancelled inventory moves, delete cancelled finished workorders and make order in confirm state.

![](assets/Odoo%20App%20Fertigung%20Fertigungsauftrag%20Abbrechen%20Entwurf%20erstellen.png)

![](assets/Odoo%20App%20Fertigung%20Fertigungsauftrag%20Abbrechen%20Bereit.png)