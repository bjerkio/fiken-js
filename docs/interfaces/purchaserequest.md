[fiken](../README.md) › [PurchaseRequest](purchaserequest.md)

# Interface: PurchaseRequest

**`export`** 

**`interface`** PurchaseRequest

## Hierarchy

* **PurchaseRequest**

## Index

### Properties

* [currency](purchaserequest.md#currency)
* [date](purchaserequest.md#date)
* [dueDate](purchaserequest.md#optional-duedate)
* [identifier](purchaserequest.md#optional-identifier)
* [kid](purchaserequest.md#optional-kid)
* [kind](purchaserequest.md#kind)
* [lines](purchaserequest.md#lines)
* [paymentAccount](purchaserequest.md#optional-paymentaccount)
* [paymentDate](purchaserequest.md#optional-paymentdate)
* [projectId](purchaserequest.md#optional-projectid)
* [supplierId](purchaserequest.md#optional-supplierid)
* [transactionId](purchaserequest.md#optional-readonly-transactionid)

## Properties

###  currency

• **currency**: *string*

ISO 4217 currency code

**`memberof`** PurchaseRequest

___

###  date

• **date**: *Date*

Payment date, format yyyy-mm-dd

**`memberof`** PurchaseRequest

___

### `Optional` dueDate

• **dueDate**? : *Date*

Due date of the invoice, format yyyy-mm-dd

**`memberof`** PurchaseRequest

___

### `Optional` identifier

• **identifier**? : *string*

Invoice/sale number or similar.

**`memberof`** PurchaseRequest

___

### `Optional` kid

• **kid**? : *string*

Norwegian KID number. Number from 2 to 25 digits long.

**`memberof`** PurchaseRequest

___

###  kind

• **kind**: *[PurchaseRequestKindEnum](../enums/purchaserequestkindenum.md)*

Purchased with cash or through a supplier.

**`memberof`** PurchaseRequest

___

###  lines

• **lines**: *Array‹[OrderLine](orderline.md)›*

**`memberof`** PurchaseRequest

___

### `Optional` paymentAccount

• **paymentAccount**? : *string*

**`memberof`** PurchaseRequest

___

### `Optional` paymentDate

• **paymentDate**? : *Date*

Payment date, format yyyy-mm-dd

**`memberof`** PurchaseRequest

___

### `Optional` projectId

• **projectId**? : *number*

Id of given project.

**`memberof`** PurchaseRequest

___

### `Optional` supplierId

• **supplierId**? : *number*

Id of supplier if not a cash purchase.

**`memberof`** PurchaseRequest

___

### `Optional` `Readonly` transactionId

• **transactionId**? : *number*

**`memberof`** PurchaseRequest
