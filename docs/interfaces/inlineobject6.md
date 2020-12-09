[fiken](../README.md) › [InlineObject6](inlineobject6.md)

# Interface: InlineObject6

**`export`** 

**`interface`** InlineObject6

## Hierarchy

* **InlineObject6**

## Index

### Properties

* [attachToPayment](inlineobject6.md#optional-attachtopayment)
* [attachToSale](inlineobject6.md#optional-attachtosale)
* [file](inlineobject6.md#optional-file)
* [filename](inlineobject6.md#optional-filename)

## Properties

### `Optional` attachToPayment

• **attachToPayment**? : *boolean*

True if this attachment may document the payment (i.e. transaction receipt from credit card/payment company, export from bank, etc.). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true.

**`memberof`** InlineObject6

___

### `Optional` attachToSale

• **attachToSale**? : *boolean*

True if this attachment may document the sale (i.e. invoice, etc). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true.

**`memberof`** InlineObject6

___

### `Optional` file

• **file**? : *Blob*

**`memberof`** InlineObject6

___

### `Optional` filename

• **filename**? : *string*

The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf

**`memberof`** InlineObject6
