[fiken](../README.md) › [DraftResult](draftresult.md)

# Interface: DraftResult

**`export`** 

**`interface`** DraftResult

## Hierarchy

* **DraftResult**

## Index

### Properties

* [attachments](draftresult.md#optional-attachments)
* [cash](draftresult.md#optional-cash)
* [contact](draftresult.md#optional-contact)
* [currency](draftresult.md#optional-currency)
* [draftId](draftresult.md#optional-draftid)
* [dueDate](draftresult.md#optional-duedate)
* [invoiceIssueDate](draftresult.md#optional-invoiceissuedate)
* [invoiceNumber](draftresult.md#optional-invoicenumber)
* [kid](draftresult.md#optional-kid)
* [lines](draftresult.md#optional-lines)
* [paid](draftresult.md#optional-paid)
* [payments](draftresult.md#optional-payments)
* [project](draftresult.md#optional-project)
* [uuid](draftresult.md#optional-uuid)

## Properties

### `Optional` attachments

• **attachments**? : *Array‹[Attachment](attachment.md)›*

**`memberof`** DraftResult

___

### `Optional` cash

• **cash**? : *boolean*

If a cash sale/purchase (true) or otherwise (false)

**`memberof`** DraftResult

___

### `Optional` contact

• **contact**? : *[Contact](contact.md)*

**`memberof`** DraftResult

___

### `Optional` currency

• **currency**? : *string*

ISO 4217 currency code

**`memberof`** DraftResult

___

### `Optional` draftId

• **draftId**? : *number*

Draft ID

**`memberof`** DraftResult

___

### `Optional` dueDate

• **dueDate**? : *Date*

Due date of draft, format yyyy-mm-dd

**`memberof`** DraftResult

___

### `Optional` invoiceIssueDate

• **invoiceIssueDate**? : *Date*

Issue date of the draft, format yyyy-mm-dd

**`memberof`** DraftResult

___

### `Optional` invoiceNumber

• **invoiceNumber**? : *string*

If invoice associated with draft, this is the invoice number (not to be confused with the invoiceId of an invoice issued from Fiken)

**`memberof`** DraftResult

___

### `Optional` kid

• **kid**? : *string*

Norwegian KID number. Number from 2 to 25 digits long.

**`memberof`** DraftResult

___

### `Optional` lines

• **lines**? : *Array‹[DraftLineResult](draftlineresult.md)›*

**`memberof`** DraftResult

___

### `Optional` paid

• **paid**? : *boolean*

Whether the sale/purchase has been paid (true) or not (false)

**`memberof`** DraftResult

___

### `Optional` payments

• **payments**? : *Array‹[Payment](payment.md)›*

**`memberof`** DraftResult

___

### `Optional` project

• **project**? : *[ProjectResult](projectresult.md)*

**`memberof`** DraftResult

___

### `Optional` uuid

• **uuid**? : *string*

UUID are represented as 32 hexadecimal (base-16) digits, displayed in 5 groups separated by hyphens, in the form 8-4-4-4-12 for a total of 36 characters.

**`memberof`** DraftResult
