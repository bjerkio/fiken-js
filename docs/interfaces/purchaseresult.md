[fiken](../README.md) › [PurchaseResult](purchaseresult.md)

# Interface: PurchaseResult

**`export`** 

**`interface`** PurchaseResult

## Hierarchy

* **PurchaseResult**

## Index

### Properties

* [currency](purchaseresult.md#currency)
* [date](purchaseresult.md#date)
* [dueDate](purchaseresult.md#optional-duedate)
* [identifier](purchaseresult.md#optional-identifier)
* [kid](purchaseresult.md#optional-kid)
* [kind](purchaseresult.md#kind)
* [lines](purchaseresult.md#lines)
* [paid](purchaseresult.md#paid)
* [paymentAccount](purchaseresult.md#optional-paymentaccount)
* [paymentDate](purchaseresult.md#optional-paymentdate)
* [payments](purchaseresult.md#optional-payments)
* [project](purchaseresult.md#optional-project)
* [purchaseAttachments](purchaseresult.md#optional-purchaseattachments)
* [purchaseId](purchaseresult.md#optional-readonly-purchaseid)
* [supplier](purchaseresult.md#optional-supplier)
* [transactionId](purchaseresult.md#optional-readonly-transactionid)

## Properties

###  currency

• **currency**: *string*

ISO 4217 currency code

**`memberof`** PurchaseResult

___

###  date

• **date**: *Date*

Payment date, format yyyy-mm-dd

**`memberof`** PurchaseResult

___

### `Optional` dueDate

• **dueDate**? : *Date*

Due date of the invoice, format yyyy-mm-dd

**`memberof`** PurchaseResult

___

### `Optional` identifier

• **identifier**? : *string*

Invoice/sale number or similar.

**`memberof`** PurchaseResult

___

### `Optional` kid

• **kid**? : *string*

Norwegian KID number. Number from 2 to 25 digits long.

**`memberof`** PurchaseResult

___

###  kind

• **kind**: *[PurchaseResultKindEnum](../enums/purchaseresultkindenum.md)*

Purchased with cash or through a supplier.

**`memberof`** PurchaseResult

___

###  lines

• **lines**: *Array‹[OrderLine](orderline.md)›*

**`memberof`** PurchaseResult

___

###  paid

• **paid**: *boolean*

**`memberof`** PurchaseResult

___

### `Optional` paymentAccount

• **paymentAccount**? : *string*

**`memberof`** PurchaseResult

___

### `Optional` paymentDate

• **paymentDate**? : *Date*

Payment date, format yyyy-mm-dd

**`memberof`** PurchaseResult

___

### `Optional` payments

• **payments**? : *Array‹[Payment](payment.md)›*

**`memberof`** PurchaseResult

___

### `Optional` project

• **project**? : *Array‹[ProjectResult](projectresult.md)›*

**`memberof`** PurchaseResult

___

### `Optional` purchaseAttachments

• **purchaseAttachments**? : *Array‹[Attachment](attachment.md)›*

**`memberof`** PurchaseResult

___

### `Optional` `Readonly` purchaseId

• **purchaseId**? : *number*

Id of given purchase.

**`memberof`** PurchaseResult

___

### `Optional` supplier

• **supplier**? : *[Contact](contact.md)*

**`memberof`** PurchaseResult

___

### `Optional` `Readonly` transactionId

• **transactionId**? : *number*

**`memberof`** PurchaseResult
