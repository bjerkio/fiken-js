[fiken](../README.md) › [InvoiceishDraftResult](invoiceishdraftresult.md)

# Interface: InvoiceishDraftResult

**`export`** 

**`interface`** InvoiceishDraftResult

## Hierarchy

* **InvoiceishDraftResult**

## Index

### Properties

* [attachments](invoiceishdraftresult.md#optional-attachments)
* [bankAccountNumber](invoiceishdraftresult.md#optional-bankaccountnumber)
* [bic](invoiceishdraftresult.md#optional-bic)
* [createdFromInvoiceId](invoiceishdraftresult.md#optional-createdfrominvoiceid)
* [currency](invoiceishdraftresult.md#optional-currency)
* [customers](invoiceishdraftresult.md#optional-customers)
* [daysUntilDueDate](invoiceishdraftresult.md#optional-daysuntilduedate)
* [draftId](invoiceishdraftresult.md#optional-readonly-draftid)
* [iban](invoiceishdraftresult.md#optional-iban)
* [invoiceText](invoiceishdraftresult.md#optional-invoicetext)
* [issueDate](invoiceishdraftresult.md#optional-issuedate)
* [lines](invoiceishdraftresult.md#optional-lines)
* [orderReference](invoiceishdraftresult.md#optional-orderreference)
* [ourReference](invoiceishdraftresult.md#optional-ourreference)
* [paymentAccount](invoiceishdraftresult.md#optional-paymentaccount)
* [projectId](invoiceishdraftresult.md#optional-projectid)
* [type](invoiceishdraftresult.md#optional-type)
* [uuid](invoiceishdraftresult.md#optional-uuid)
* [yourReference](invoiceishdraftresult.md#optional-yourreference)

## Properties

### `Optional` attachments

• **attachments**? : *Array‹[Attachment](attachment.md)›*

**`memberof`** InvoiceishDraftResult

___

### `Optional` bankAccountNumber

• **bankAccountNumber**? : *string*

**`memberof`** InvoiceishDraftResult

___

### `Optional` bic

• **bic**? : *string*

**`memberof`** InvoiceishDraftResult

___

### `Optional` createdFromInvoiceId

• **createdFromInvoiceId**? : *number*

**`memberof`** InvoiceishDraftResult

___

### `Optional` currency

• **currency**? : *string*

ISO 4217 currency code

**`memberof`** InvoiceishDraftResult

___

### `Optional` customers

• **customers**? : *Array‹[Contact](contact.md)›*

Customer(s) to be invoiced.

**`memberof`** InvoiceishDraftResult

___

### `Optional` daysUntilDueDate

• **daysUntilDueDate**? : *number*

Days until due date of the invoice draft.

**`memberof`** InvoiceishDraftResult

___

### `Optional` `Readonly` draftId

• **draftId**? : *number*

Invoice draft ID

**`memberof`** InvoiceishDraftResult

___

### `Optional` iban

• **iban**? : *string*

**`memberof`** InvoiceishDraftResult

___

### `Optional` invoiceText

• **invoiceText**? : *string*

Comment/description printed above the invoice lines

**`memberof`** InvoiceishDraftResult

___

### `Optional` issueDate

• **issueDate**? : *Date*

Issue date of the invoice draft, format yyyy-mm-dd

**`memberof`** InvoiceishDraftResult

___

### `Optional` lines

• **lines**? : *Array‹[InvoiceishDraftLine](invoiceishdraftline.md)›*

**`memberof`** InvoiceishDraftResult

___

### `Optional` orderReference

• **orderReference**? : *string*

Reference if sending invoice via EHF.

**`memberof`** InvoiceishDraftResult

___

### `Optional` ourReference

• **ourReference**? : *string*

**`memberof`** InvoiceishDraftResult

___

### `Optional` paymentAccount

• **paymentAccount**? : *string*

**`memberof`** InvoiceishDraftResult

___

### `Optional` projectId

• **projectId**? : *number*

**`memberof`** InvoiceishDraftResult

___

### `Optional` type

• **type**? : *[InvoiceishDraftResultTypeEnum](../enums/invoiceishdraftresulttypeenum.md)*

Type of invoice draft.

**`memberof`** InvoiceishDraftResult

___

### `Optional` uuid

• **uuid**? : *string*

UUID are represented as 32 hexadecimal (base-16) digits, displayed in 5 groups separated by hyphens, in the form 8-4-4-4-12 for a total of 36 characters.

**`memberof`** InvoiceishDraftResult

___

### `Optional` yourReference

• **yourReference**? : *string*

**`memberof`** InvoiceishDraftResult
