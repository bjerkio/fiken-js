[fiken](../README.md) › [InvoiceishDraftLine](invoiceishdraftline.md)

# Interface: InvoiceishDraftLine

**`export`** 

**`interface`** InvoiceishDraftLine

## Hierarchy

* **InvoiceishDraftLine**

## Index

### Properties

* [comment](invoiceishdraftline.md#optional-comment)
* [description](invoiceishdraftline.md#optional-description)
* [discount](invoiceishdraftline.md#optional-discount)
* [incomeAccount](invoiceishdraftline.md#optional-incomeaccount)
* [productId](invoiceishdraftline.md#optional-productid)
* [quantity](invoiceishdraftline.md#quantity)
* [unitPrice](invoiceishdraftline.md#optional-unitprice)
* [vatType](invoiceishdraftline.md#optional-vattype)

## Properties

### `Optional` comment

• **comment**? : *string*

Additional information to be printed on invoice.

**`memberof`** InvoiceishDraftLine

___

### `Optional` description

• **description**? : *string*

Description of the invoiced product or service.

**`memberof`** InvoiceishDraftLine

___

### `Optional` discount

• **discount**? : *number*

Percentage discount charged on invoice draft line. Should be a value between 0 and 100. Can be decimal values such as 25.5

**`memberof`** InvoiceishDraftLine

___

### `Optional` incomeAccount

• **incomeAccount**? : *string*

Field is similar to vatType, it defaults to the product's income account. Either the line or the product needs to have an income account set.

**`memberof`** InvoiceishDraftLine

___

### `Optional` productId

• **productId**? : *number*

Product to be credited/debited on invoice draft line.

**`memberof`** InvoiceishDraftLine

___

###  quantity

• **quantity**: *number*

Number of units to be invoiced.

**`memberof`** InvoiceishDraftLine

___

### `Optional` unitPrice

• **unitPrice**? : *number*

Net price per unit in invoice currency (in cents).

**`memberof`** InvoiceishDraftLine

___

### `Optional` vatType

• **vatType**? : *string*

Vat Types for SALES: [none, high, medium, raw_fish, low, exempt_import_export, exempt, outside, exempt_reverse]
Vat Types for PURCHASES: [none, high, medium, raw_fish, low, exempt_import_export, high_direct, high_basis, medium_direct, medium_basis, none_import_basis, high_import_deductible,
high_import_nondeductible, medium_import_deductible, medium_import_nondeductible, high_foreign_service_deductible, high_foreign_service_nondeductible, low_foreign_service_deductible,
low_foreign_service_nondeductible, high_purchase_of_emissionstrading_or_gold_deductible, high_purchase_of_emissionstrading_or_gold_nondeductible]

**`memberof`** InvoiceishDraftLine
