[fiken](../README.md) › [OrderLine](orderline.md)

# Interface: OrderLine

**`export`** 

**`interface`** OrderLine

## Hierarchy

* **OrderLine**

## Index

### Properties

* [account](orderline.md#optional-account)
* [description](orderline.md#optional-description)
* [netPrice](orderline.md#optional-netprice)
* [netPriceInCurrency](orderline.md#optional-netpriceincurrency)
* [projectId](orderline.md#optional-projectid)
* [vat](orderline.md#optional-vat)
* [vatInCurrency](orderline.md#optional-vatincurrency)
* [vatType](orderline.md#vattype)

## Properties

### `Optional` account

• **account**? : *string*

Expense account (kostnadskonto) associated with payment.

**`memberof`** OrderLine

___

### `Optional` description

• **description**? : *string*

Description of the product or service.

**`memberof`** OrderLine

___

### `Optional` netPrice

• **netPrice**? : *number*

Net amount of order line in cents.

**`memberof`** OrderLine

___

### `Optional` netPriceInCurrency

• **netPriceInCurrency**? : *number*

Net amount in currency (in cents)

**`memberof`** OrderLine

___

### `Optional` projectId

• **projectId**? : *number*

If a purchase is split over several projects, project/line can be specified. This field is only to be used for purchases.

**`memberof`** OrderLine

___

### `Optional` vat

• **vat**? : *number*

VAT amount of order line in cents.

**`memberof`** OrderLine

___

### `Optional` vatInCurrency

• **vatInCurrency**? : *number*

VAT amount in currency (in cents)

**`memberof`** OrderLine

___

###  vatType

• **vatType**: *string*

Vat Types for SALES: [none, high, medium, raw_fish, low, exempt_import_export, exempt, outside, exempt_reverse]
Vat Types for PURCHASES: [none, high, medium, raw_fish, low, exempt_import_export, high_direct, high_basis, medium_direct, medium_basis, none_import_basis, high_import_deductible,
high_import_nondeductible, medium_import_deductible, medium_import_nondeductible, high_foreign_service_deductible, high_foreign_service_nondeductible, low_foreign_service_deductible,
low_foreign_service_nondeductible, high_purchase_of_emissionstrading_or_gold_deductible, high_purchase_of_emissionstrading_or_gold_nondeductible]

**`memberof`** OrderLine
