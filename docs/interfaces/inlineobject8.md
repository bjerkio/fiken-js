[fiken](../README.md) › [InlineObject8](inlineobject8.md)

# Interface: InlineObject8

**`export`** 

**`interface`** InlineObject8

## Hierarchy

* **InlineObject8**

## Index

### Properties

* [attachToPayment](inlineobject8.md#optional-attachtopayment)
* [attachToSale](inlineobject8.md#optional-attachtosale)
* [file](inlineobject8.md#optional-file)
* [filename](inlineobject8.md#optional-filename)

## Properties

### `Optional` attachToPayment

• **attachToPayment**? : *boolean*

True if this attachment may document the payment (i.e. transaction receipt from credit card/payment company, export from bank, etc.). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true.

**`memberof`** InlineObject8

___

### `Optional` attachToSale

• **attachToSale**? : *boolean*

True if this attachment may document the sale (i.e. invoice, etc). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true.

**`memberof`** InlineObject8

___

### `Optional` file

• **file**? : *Blob*

**`memberof`** InlineObject8

___

### `Optional` filename

• **filename**? : *string*

The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf

**`memberof`** InlineObject8
