[fiken](../README.md) › [DraftLineRequest](draftlinerequest.md)

# Interface: DraftLineRequest

**`export`** 

**`interface`** DraftLineRequest

## Hierarchy

* **DraftLineRequest**

## Index

### Properties

* [gross](draftlinerequest.md#gross)
* [incomeAccount](draftlinerequest.md#incomeaccount)
* [net](draftlinerequest.md#net)
* [projectId](draftlinerequest.md#optional-projectid)
* [text](draftlinerequest.md#text)
* [vatType](draftlinerequest.md#vattype)

## Properties

###  gross

• **gross**: *number*

Gross amount (= net+VAT) (in creditNote currency) in cents.

**`memberof`** DraftLineRequest

___

###  incomeAccount

• **incomeAccount**: *string*

Field is similar to vatType, it defaults to the product's income account. Either the line or the product needs to have an income account set.

**`memberof`** DraftLineRequest

___

###  net

• **net**: *number*

Net amount (in creditNote currency) in cents.

**`memberof`** DraftLineRequest

___

### `Optional` projectId

• **projectId**? : *number*

**`memberof`** DraftLineRequest

___

###  text

• **text**: *string*

Description of the sale/purchase line.

**`memberof`** DraftLineRequest

___

###  vatType

• **vatType**: *string*

Vat Types for SALES: [none, high, medium, raw_fish, low, exempt_import_export, exempt, outside, exempt_reverse]
Vat Types for PURCHASES: [none, high, medium, raw_fish, low, exempt_import_export, high_direct, high_basis, medium_direct, medium_basis, none_import_basis, high_import_deductible,
high_import_nondeductible, medium_import_deductible, medium_import_nondeductible, high_foreign_service_deductible, high_foreign_service_nondeductible, low_foreign_service_deductible,
low_foreign_service_nondeductible, high_purchase_of_emissionstrading_or_gold_deductible, high_purchase_of_emissionstrading_or_gold_nondeductible]

**`memberof`** DraftLineRequest
