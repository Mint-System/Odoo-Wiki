---
tags:
- Best-Practice
prev: ./best-practice
---

# Best Practice: E-Mail-Vorlagen

E-Mail-Vorlagen müssen bei jeder Odoo-Implementation angepasst werden. Die originale Vorlagen sind nur teilweise übersetzt und oftmals zu komplex aufgebaut. Für einen einfacheren Einstieg werden hier alternative E-Mail-Vorlagen angeboten.

## Invoice: Send by email

XML-ID: `account.email_template_edi_invoice`

```xml
<div style="margin: 0px; padding: 0px;">
    <p style="margin: 0px; padding: 0px; font-size: 13px;">
        Liebe Kundin, Lieber Kunde 
        <br><br>
        Herzlichen Dank für Ihren Einkauf.
        <br><br>
        In der Beilage erhalten Sie die Rechnung Nr. <strong>${object.name}</strong> in Höhe von <strong>${format_amount(object.amount_total, object.currency_id)}</strong>.
        <br><br>
        Für die fristgerechte Überweisung bedanken wir uns.
        <br><br>
	    Bei Fragen stehen wir Ihnen gerne zur Verfügung.
	    <br>
        % if user.signature:
            <br>
            ${user.signature | safe}
        % endif
    </p>
</div>
```

## Sales Order: Cart Recovery Email

XML-ID: `website_sale.mail_template_sale_cart_recovery`

```xml
<div style="margin: 0px; padding: 0px;">
    <p style="margin: 0px; padding: 0px; font-size: 13px;">
	    Liebe Kunden, Lieber Kunde
	    <br><br>
		Sie haben unseren Online-Shop besucht und einen Warenkorb erstellt. Jedoch wurden die Bestellung nicht abgeschlossen.
		<br><br>
		Möchten Sie die Bestellung wieder aufnehmen?<br><br>
    </p>
</div>

% if object.order_line:
	% for line in object.website_order_line:
		<hr>
		<table width="100%">
			<tbody><tr>
				<td style="padding:10px;width:150px;">
					<img src="/web/image/product.product/${line.product_id.id}/image_128" style="width:50px;height: 50px; object-fit: contain;" alt="Product image">
				</td>
				<td>
					<strong>${line.product_id.display_name}</strong><br>${line.name}
				</td>
				<td width="100px" align="right">
					${(line.product_uom_qty) | int} ${(line.product_uom.name)}
				</td>
			</tr>
		</tbody></table>
	% endfor
	<hr>
% endif

<div style="text-align:center;margin: 16px 0px 16px 0px; font-size: 14px;">
	<a href="${object.get_base_url()}/shop/cart?access_token=${object.access_token}" target="_blank" style="background-color:#875A7B;padding: 8px 16px 8px 16px; text-decoration: none; color: #fff; border-radius: 5px; font-size:13px;">
		Warenkorb anzeigen
	</a>
</div>
```