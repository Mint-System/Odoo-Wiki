---
tags:
- Best-Practice
prev: ./best-practice
---

# Best Practice: E-Mail-Vorlagen

E-Mail-Vorlagen müssen bei jeder Odoo-Implementation angepasst werden. Die originale Vorlagen sind nur teilweise übersetzt und oftmals zu komplex aufgebaut. Für einen einfacheren Einstieg werden hier alternative E-Mail-Vorlagen angeboten.

## Invoice: Send by email

XML-ID: `account.email_template_edi_invoice`

Inhalt:

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

```xml
Guten Tag
% if object.partner_id.parent_id:
    ${object.partner_id.name}
% else:
    ${object.partner_id.name}
% endif
<br><br>
Gerne möchten wir unsere Aufwände von <b>MM</b> bis <b>MM</b> verrechnen.
<br><br>
Anbei finden Sie die 
% if object.name:
    Rechnung <strong>${object.name}</strong>
% else:
    Rechnung
%endif
% if object.invoice_origin:
    (mit Referenz: ${object.invoice_origin})
% endif
im Betrag von <strong>${format_amount(object.amount_total, object.currency_id)}</strong>
von der ${object.company_id.name}.
% if object.invoice_payment_state == 'paid':
    Diese Rechnung wurde bereits bezahlt.
% else:
    Wir danken für eine fristgerechte Bezahlung.
% endif
<br><br>
Zögern Sie nicht uns bei Fragen zu kontaktieren.
<br>
```

## Sales Order: Cart Recovery Email

XML-ID: `website_sale.mail_template_sale_cart_recovery`

Inhalt:

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

## Purchase Order: Send RFQ

XML-ID: `purchase.email_template_edi_purchase`

Betreff: `Anfrage ${object.partner_ref + ' / ' if object.partner_ref else ''}${object.name}`

## Gutschrift

Domain: `[["move_type","=","out_refund"]]`

Betreff: `Gutschrift (${object.name or 'n/a'})`

Inhalt:

```xml
<div style="margin: 0px; padding: 0px;">
    <p style="margin: 0px; padding: 0px; font-size: 13px;">
        Liebe Kundin, Lieber Kunde 
        <br><br>
        Anbei erhalten Sie ihre Gutschrift.
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