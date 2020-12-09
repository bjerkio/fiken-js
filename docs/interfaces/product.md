[fiken](../README.md) › [Product](product.md)

# Interface: Product

**`export`** 

**`interface`** Product

## Hierarchy

* **Product**

## Index

### Properties

* [active](product.md#active)
* [incomeAccount](product.md#optional-incomeaccount)
* [name](product.md#name)
* [note](product.md#optional-note)
* [productId](product.md#optional-readonly-productid)
* [productNumber](product.md#optional-productnumber)
* [stock](product.md#optional-stock)
* [unitPrice](product.md#optional-unitprice)
* [vatType](product.md#vattype)

## Properties

###  active

• **active**: *boolean*

If product is in use (True) or not (False).

**`memberof`** Product

___

### `Optional` incomeAccount

• **incomeAccount**? : *string*

The accounting account that will receive the payment.

**`memberof`** Product

___

###  name

• **name**: *string*

Product name.

**`memberof`** Product

___

### `Optional` note

• **note**? : *string*

Optional field for additional information.

**`memberof`** Product

___

### `Optional` `Readonly` productId

• **productId**? : *number*

Product Id.

**`memberof`** Product

___

### `Optional` productNumber

• **productNumber**? : *string*

**`memberof`** Product

___

### `Optional` stock

• **stock**? : *number*

Number of products available in stock. If not provided, stock value is set to null.

**`memberof`** Product

___

### `Optional` unitPrice

• **unitPrice**? : *number*

The net unit price in cents.

**`memberof`** Product

___

###  vatType

• **vatType**: *string*

One of {"HIGH", "MEDIUM", "LOW", "EXEMPT", "EXEMPT_IMPORT_EXPORT", "EXEMPT_REVERSE", "OUTSIDE", "NONE"}. "HIGH" is the most common.

**`memberof`** Product
