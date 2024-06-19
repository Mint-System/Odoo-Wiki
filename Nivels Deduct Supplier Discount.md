---
title: Nivels Deduct Supplier Discount
description: Allow discount deduction on vendor bills.
tags:
- HowTo
- Drittanbieter
prev: ./accounting
---
# Nivels Deduct Supplier Discount
![](attachments/icon-nivels.png)

{{ $frontmatter.description }}

Technischer Name: `nivels_deduct_supplier_discount`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Account-Invoicing/tree/14.0/nivels_deduct_supplier_discount>

## Usage

### Setup discount product

After installing the user has to create a discount product (see **Inventory**, **Products**) with the following information:

- **Name**: Name of the product
- **Product Type**: Product type (must be **Service**)
- **Vendor Taxes**: Tax uses for the discount

![](attachments/Nivels%20Deduct%20Supplier%20Discount%20Product.png)

![](attachments/Nivels%20Deduct%20Supplier%20Discount%20Product%20Tax.png)

Finallly you can also configure the default accounts in the *Accounting* tab.

### Setup payment term

After installing the user has to create a new payment term (see **Accounting**, **Configuration**, **Payment Terms**).

![](attachments/Nivels%20Deduct%20Supplier%20Discount%20Term.png)

The user has to specify the following information:

1. Payment Term Name
2. Terms

![](attachments/Nivels%20Deduct%20Supplier%20Discount%20Term%20Name.png)

After pressing the **Add a line** link the user has to specify the following information:

1.  **Type**: (must be **Discount**)
2.  **Value**: (100 - the discount percentage)
3.  **Discount product**: Product to use for the discount line
4.  **Due** (in days)

The field **Value** will be used like specified by **Odoo**. For example if the discount should be 5% the value must be 95 (100 - discount percentage).

![](attachments/Nivels%20Deduct%20Supplier%20Discount%20Term%20Definition.png)

After adding all terms the user has to sort the lines by due date:

![](attachments/Nivels%20Deduct%20Supplier%20Discount%20Due%20Dates.png)

### Set default discount term for vendor

To set a default discount term on a vendor go to **Contacts** and selected the desired contact. In the **Sales & Purchase** tab the discount can be set.

![](attachments/Nivels%20Deduct%20Supplier%20Discount%20Partner%20Term.png)

### Create vendor invoice with discount

Go to **Accounting**, **Vendors**, **Bills** and create a new vendor bill.

![](attachments/Nivels%20Deduct%20Supplier%20Discount%20Create%20Invoice.png)

The following information are needed to deduct vendor discount:

- **Bill Date**: Date of the vendor bill
- **Vendor Discount Term**: Discount term to use (preset if the vendor has already set in partner form)

**Note:** To use the discount calculation the vendor bill needs to be in **Draft** state.

![](attachments/Nivels%20Deduct%20Supplier%20Discount%20Draft%20Invoice.png)

### Filter and update invoice with discount

Within the list of vendor bills the user has to choose **Filter** and then **Draft**.

![](attachments/Nivels%20Deduct%20Supplier%20Discount%20Filter%20Draft.png)

Select all filtered vendor bills and select **Action**, **Update Discount**.

![](attachments/Nivels%20Deduct%20Supplier%20Discount%20Update%20Discount.png)

To show all vendor bills with discount the user can select the filter **Has Discount**.

![](attachments/Nivels%20Deduct%20Supplier%20Discount%20Filter%20Has%20Discount.png)