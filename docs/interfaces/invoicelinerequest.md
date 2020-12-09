[fiken](../README.md) › [InvoiceLineRequest](invoicelinerequest.md)

# Interface: InvoiceLineRequest

**`export`** 

**`interface`** InvoiceLineRequest

## Hierarchy

* **InvoiceLineRequest**

## Index

### Properties

* [comment](invoicelinerequest.md#optional-comment)
* [description](invoicelinerequest.md#optional-description)
* [discount](invoicelinerequest.md#optional-discount)
* [gross](invoicelinerequest.md#optional-gross)
* [incomeAccount](invoicelinerequest.md#optional-incomeaccount)
* [net](invoicelinerequest.md#optional-net)
* [productId](invoicelinerequest.md#optional-productid)
* [productName](invoicelinerequest.md#optional-productname)
* [quantity](invoicelinerequest.md#quantity)
* [unitPrice](invoicelinerequest.md#optional-unitprice)
* [vat](invoicelinerequest.md#optional-vat)
* [vatInPercent](invoicelinerequest.md#optional-vatinpercent)
* [vatType](invoicelinerequest.md#optional-vattype)

## Properties

### `Optional` comment

• **comment**? : *string*

Additional information to be printed on invoice.

**`memberof`** InvoiceLineRequest

___

### `Optional` description

• **description**? : *string*

Description of the invoiced product or service. WARNING - if specified here and different from description of the product, then thisoverwrites the product description on the invoice.

**`memberof`** InvoiceLineRequest

___

### `Optional` discount

• **discount**? : *number*

If field is set, all amounts must be given before the discount is applied. The API will calculate the new totals. Discount value should be a value between 0 and 100.

**`memberof`** InvoiceLineRequest

___

### `Optional` gross

• **gross**? : *number*

Gross amount of invoice line in cents.

**`memberof`** InvoiceLineRequest

___

### `Optional` incomeAccount

• **incomeAccount**? : *string*

Field is similar to vatType, it defaults to the product's income account. Either the line or the product needs to have an income account set.
WARNING - if specified here and different from income account of the product, then this account overwrites the product account on the invoice.

**`memberof`** InvoiceLineRequest

___

### `Optional` net

• **net**? : *number*

Net amount of invoice line in cents in original currency.

**`memberof`** InvoiceLineRequest

___

### `Optional` productId

• **productId**? : *number*

Product Id of product associated with invoice line.

**`memberof`** InvoiceLineRequest

___

### `Optional` productName

• **productName**? : *string*

Name of product to be printed on invoice line. WARNING - if specified here and different from name of the product, then this name overwrites the product name on the invoice.

**`memberof`** InvoiceLineRequest

___

###  quantity

• **quantity**: *number*

Number of units to be invoiced.

**`memberof`** InvoiceLineRequest

___

### `Optional` unitPrice

• **unitPrice**? : *number*

Net price per unit in invoice currency (in cents). WARNING - if specified here and different from unitPrice of the product, then this amount overwrites the product price on the invoice.

**`memberof`** InvoiceLineRequest

___

### `Optional` vat

• **vat**? : *number*

VAT amount of invoice line in cents in original currency.

**`memberof`** InvoiceLineRequest

___

### `Optional` vatInPercent

• **vatInPercent**? : *number*

Percentage value of VAT charged on invoice line. Should be a value between 0 and 100. Can be decimal values such as 25.5

**`memberof`** InvoiceLineRequest

___

### `Optional` vatType

• **vatType**? : *string*

Taken from either 1) the line or 2) the product. At least vatType or vatPercent has to be specified. If both are specified, Fiken will assert that the given vat type matches the given vat percent for the issue date.
One of: {"HIGH", "MEDIUM", "LOW", "EXEMPT", "EXEMPT_IMPORT_EXPORT", "EXEMPT_REVERSE", "OUTSIDE", "NONE"}. "HIGH" is the most common.
Example: High

**`memberof`** InvoiceLineRequest
