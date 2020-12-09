[fiken](../README.md) › [InvoiceLineResult](invoicelineresult.md)

# Interface: InvoiceLineResult

**`export`** 

**`interface`** InvoiceLineResult

## Hierarchy

* **InvoiceLineResult**

## Index

### Properties

* [comment](invoicelineresult.md#optional-comment)
* [description](invoicelineresult.md#optional-description)
* [discount](invoicelineresult.md#optional-discount)
* [gross](invoicelineresult.md#optional-gross)
* [grossInNok](invoicelineresult.md#optional-grossinnok)
* [incomeAccount](invoicelineresult.md#optional-incomeaccount)
* [net](invoicelineresult.md#optional-net)
* [netInNok](invoicelineresult.md#optional-netinnok)
* [productId](invoicelineresult.md#optional-productid)
* [productName](invoicelineresult.md#optional-productname)
* [quantity](invoicelineresult.md#optional-quantity)
* [unitPrice](invoicelineresult.md#optional-unitprice)
* [vat](invoicelineresult.md#optional-vat)
* [vatInNok](invoicelineresult.md#optional-vatinnok)
* [vatInPercent](invoicelineresult.md#optional-vatinpercent)
* [vatType](invoicelineresult.md#optional-vattype)

## Properties

### `Optional` comment

• **comment**? : *string*

Additional information to be printed on invoice.

**`memberof`** InvoiceLineResult

___

### `Optional` description

• **description**? : *string*

Description of the invoiced product or service.

**`memberof`** InvoiceLineResult

___

### `Optional` discount

• **discount**? : *number*

If field is set, all amounts must be given before the discount is applied. The API will calculate the new totals. Discount value should be a value between 0 and 100.

**`memberof`** InvoiceLineResult

___

### `Optional` gross

• **gross**? : *number*

Gross amount of invoice line in cents.

**`memberof`** InvoiceLineResult

___

### `Optional` grossInNok

• **grossInNok**? : *number*

Gross amount of invoice line in cents in NOK if currency and amounts provided are in foreign currency. This is calculated by Fiken.

**`memberof`** InvoiceLineResult

___

### `Optional` incomeAccount

• **incomeAccount**? : *string*

Field is similar to vatType, it defaults to the product's income account. Either the line or the product needs to have an income account set.

**`memberof`** InvoiceLineResult

___

### `Optional` net

• **net**? : *number*

Net amount of invoice line in cents in original currency.

**`memberof`** InvoiceLineResult

___

### `Optional` netInNok

• **netInNok**? : *number*

Net amount of invoice line in cents in NOK if currency and amounts provided are in foreign currency. This is calculated by Fiken.

**`memberof`** InvoiceLineResult

___

### `Optional` productId

• **productId**? : *number*

Product Id of product associated with invoice line.

**`memberof`** InvoiceLineResult

___

### `Optional` productName

• **productName**? : *string*

Name of product to be printed on invoice line.

**`memberof`** InvoiceLineResult

___

### `Optional` quantity

• **quantity**? : *number*

Number of units to be invoiced.

**`memberof`** InvoiceLineResult

___

### `Optional` unitPrice

• **unitPrice**? : *number*

Net price per unit in invoice currency (in cents).

**`memberof`** InvoiceLineResult

___

### `Optional` vat

• **vat**? : *number*

VAT amount of invoice line in cents in original currency.

**`memberof`** InvoiceLineResult

___

### `Optional` vatInNok

• **vatInNok**? : *number*

VAT amount of invoice line in cents in NOK if currency and amounts provided are in foreign currency. This is calculated by Fiken.

**`memberof`** InvoiceLineResult

___

### `Optional` vatInPercent

• **vatInPercent**? : *number*

Percentage value of VAT charged on invoice line. Should be a value between 0 and 100. Can be decimal values such as 25.5

**`memberof`** InvoiceLineResult

___

### `Optional` vatType

• **vatType**? : *string*

Taken from either 1) the line or 2) the product. At least vatType or vatPercent has to be specified. If both are specified, Fiken will assert that the given vat type matches the given vat percent for the issue date.
One of: {"HIGH", "MEDIUM", "LOW", "EXEMPT", "EXEMPT_IMPORT_EXPORT", "EXEMPT_REVERSE", "OUTSIDE", "NONE"}. "HIGH" is the most common.
Example: High

**`memberof`** InvoiceLineResult
