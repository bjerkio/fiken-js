[fiken](../README.md) › [CreditNoteLineResult](creditnotelineresult.md)

# Interface: CreditNoteLineResult

**`export`** 

**`interface`** CreditNoteLineResult

## Hierarchy

* **CreditNoteLineResult**

## Index

### Properties

* [comment](creditnotelineresult.md#optional-comment)
* [description](creditnotelineresult.md#optional-description)
* [discount](creditnotelineresult.md#optional-discount)
* [incomeAccount](creditnotelineresult.md#optional-incomeaccount)
* [productId](creditnotelineresult.md#optional-productid)
* [quantity](creditnotelineresult.md#quantity)
* [unitPrice](creditnotelineresult.md#unitprice)
* [vatType](creditnotelineresult.md#optional-vattype)

## Properties

### `Optional` comment

• **comment**? : *string*

Additional information to be printed on invoice.

**`memberof`** CreditNoteLineResult

___

### `Optional` description

• **description**? : *string*

Description of the invoiced product or service.

**`memberof`** CreditNoteLineResult

___

### `Optional` discount

• **discount**? : *number*

If field is set, all amounts must be given before the discount is applied. The API will calculate the new totals. Discount value should be a percent with a value between 0 and 100. Decimal values such as 25.5 are also allowed.

**`memberof`** CreditNoteLineResult

___

### `Optional` incomeAccount

• **incomeAccount**? : *string*

Field is similar to vatType, it defaults to the product's income account. Either the line or the product needs to have an income account set.

**`memberof`** CreditNoteLineResult

___

### `Optional` productId

• **productId**? : *number*

Product Id of product associated with invoice line.

**`memberof`** CreditNoteLineResult

___

###  quantity

• **quantity**: *number*

Number of units to be invoiced.

**`memberof`** CreditNoteLineResult

___

###  unitPrice

• **unitPrice**: *number*

Net price per unit in invoice currency (in cents).

**`memberof`** CreditNoteLineResult

___

### `Optional` vatType

• **vatType**? : *string*

One of: {"HIGH", "MEDIUM", "LOW", "EXEMPT", "EXEMPT_IMPORT_EXPORT", "EXEMPT_REVERSE", "OUTSIDE", "NONE"}. "HIGH" is the most common.
Example: High

**`memberof`** CreditNoteLineResult
