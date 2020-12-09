[fiken](../README.md) › [DraftRequest](draftrequest.md)

# Interface: DraftRequest

**`export`** 

**`interface`** DraftRequest

## Hierarchy

* **DraftRequest**

## Index

### Properties

* [cash](draftrequest.md#cash)
* [contactId](draftrequest.md#optional-contactid)
* [currency](draftrequest.md#optional-currency)
* [dueDate](draftrequest.md#optional-duedate)
* [invoiceIssueDate](draftrequest.md#optional-invoiceissuedate)
* [invoiceNumber](draftrequest.md#optional-invoicenumber)
* [kid](draftrequest.md#optional-kid)
* [lines](draftrequest.md#lines)
* [paid](draftrequest.md#optional-paid)
* [payments](draftrequest.md#optional-payments)
* [projectId](draftrequest.md#optional-projectid)

## Properties

###  cash

• **cash**: *boolean*

If a cash sale/purchase (true) or otherwise (false)

**`memberof`** DraftRequest

___

### `Optional` contactId

• **contactId**? : *number*

Contact Id

**`memberof`** DraftRequest

___

### `Optional` currency

• **currency**? : *string*

ISO 4217 currency code

**`memberof`** DraftRequest

___

### `Optional` dueDate

• **dueDate**? : *Date*

Due date of draft, format yyyy-mm-dd

**`memberof`** DraftRequest

___

### `Optional` invoiceIssueDate

• **invoiceIssueDate**? : *Date*

Issue date of the draft, format yyyy-mm-dd

**`memberof`** DraftRequest

___

### `Optional` invoiceNumber

• **invoiceNumber**? : *string*

If invoice associated with draft, this is the invoice number (not to be confused with the invoiceId of an invoice issued from Fiken)

**`memberof`** DraftRequest

___

### `Optional` kid

• **kid**? : *string*

Norwegian KID number. Number from 2 to 25 digits long.

**`memberof`** DraftRequest

___

###  lines

• **lines**: *Array‹[DraftLineRequest](draftlinerequest.md)›*

**`memberof`** DraftRequest

___

### `Optional` paid

• **paid**? : *boolean*

Whether the sale/purchase has been paid (true) or not (false)

**`memberof`** DraftRequest

___

### `Optional` payments

• **payments**? : *Array‹[Payment](payment.md)›*

**`memberof`** DraftRequest

___

### `Optional` projectId

• **projectId**? : *number*

Project ID if only 1 project associated with entire draft. It is also possible to specify the project on individual draft lines

**`memberof`** DraftRequest
