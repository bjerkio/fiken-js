[fiken](../README.md) › [DraftLineResult](draftlineresult.md)

# Interface: DraftLineResult

**`export`** 

**`interface`** DraftLineResult

## Hierarchy

* **DraftLineResult**

## Index

### Properties

* [gross](draftlineresult.md#optional-gross)
* [incomeAccount](draftlineresult.md#optional-incomeaccount)
* [net](draftlineresult.md#optional-net)
* [project](draftlineresult.md#optional-project)
* [text](draftlineresult.md#optional-text)
* [vatType](draftlineresult.md#optional-vattype)

## Properties

### `Optional` gross

• **gross**? : *number*

Gross amount (= net+VAT) (in creditNote currency) in cents.

**`memberof`** DraftLineResult

___

### `Optional` incomeAccount

• **incomeAccount**? : *string*

Field is similar to vatType, it defaults to the product's income account. Either the line or the product needs to have an income account set.

**`memberof`** DraftLineResult

___

### `Optional` net

• **net**? : *number*

Net amount (in creditNote currency) in cents.

**`memberof`** DraftLineResult

___

### `Optional` project

• **project**? : *[ProjectResult](projectresult.md)*

**`memberof`** DraftLineResult

___

### `Optional` text

• **text**? : *string*

Description of the sale/purchase line.

**`memberof`** DraftLineResult

___

### `Optional` vatType

• **vatType**? : *string*

Vat Types for SALES: [none, high, medium, raw_fish, low, exempt_import_export, exempt, outside, exempt_reverse]
Vat Types for PURCHASES: [none, high, medium, raw_fish, low, exempt_import_export, high_direct, high_basis, medium_direct, medium_basis, none_import_basis, high_import_deductible,
high_import_nondeductible, medium_import_deductible, medium_import_nondeductible, high_foreign_service_deductible, high_foreign_service_nondeductible, low_foreign_service_deductible,
low_foreign_service_nondeductible, high_purchase_of_emissionstrading_or_gold_deductible, high_purchase_of_emissionstrading_or_gold_nondeductible]

**`memberof`** DraftLineResult
