[fiken](../README.md) › [InvoiceishDraftRequest](invoiceishdraftrequest.md)

# Interface: InvoiceishDraftRequest

**`export`** 

**`interface`** InvoiceishDraftRequest

## Hierarchy

* **InvoiceishDraftRequest**

## Index

### Properties

* [bankAccountNumber](invoiceishdraftrequest.md#optional-bankaccountnumber)
* [bic](invoiceishdraftrequest.md#optional-bic)
* [contactPersonId](invoiceishdraftrequest.md#optional-contactpersonid)
* [currency](invoiceishdraftrequest.md#optional-currency)
* [customerId](invoiceishdraftrequest.md#customerid)
* [daysUntilDueDate](invoiceishdraftrequest.md#daysuntilduedate)
* [iban](invoiceishdraftrequest.md#optional-iban)
* [invoiceText](invoiceishdraftrequest.md#optional-invoicetext)
* [issueDate](invoiceishdraftrequest.md#optional-issuedate)
* [lines](invoiceishdraftrequest.md#optional-lines)
* [orderReference](invoiceishdraftrequest.md#optional-orderreference)
* [ourReference](invoiceishdraftrequest.md#optional-ourreference)
* [paymentAccount](invoiceishdraftrequest.md#optional-paymentaccount)
* [projectId](invoiceishdraftrequest.md#optional-projectid)
* [type](invoiceishdraftrequest.md#type)
* [uuid](invoiceishdraftrequest.md#optional-uuid)
* [yourReference](invoiceishdraftrequest.md#optional-yourreference)

## Properties

### `Optional` bankAccountNumber

• **bankAccountNumber**? : *string*

**`memberof`** InvoiceishDraftRequest

___

### `Optional` bic

• **bic**? : *string*

**`memberof`** InvoiceishDraftRequest

___

### `Optional` contactPersonId

• **contactPersonId**? : *number*

Id of the contact person. Must be associated with the provided customer.

**`memberof`** InvoiceishDraftRequest

___

### `Optional` currency

• **currency**? : *string*

ISO 4217 currency code

**`memberof`** InvoiceishDraftRequest

___

###  customerId

• **customerId**: *number*

**`memberof`** InvoiceishDraftRequest

___

###  daysUntilDueDate

• **daysUntilDueDate**: *number*

Days until due date of the invoice draft.

**`memberof`** InvoiceishDraftRequest

___

### `Optional` iban

• **iban**? : *string*

**`memberof`** InvoiceishDraftRequest

___

### `Optional` invoiceText

• **invoiceText**? : *string*

Comment/description printed above the invoice lines

**`memberof`** InvoiceishDraftRequest

___

### `Optional` issueDate

• **issueDate**? : *Date*

Issue date of the invoice draft, format yyyy-mm-dd

**`memberof`** InvoiceishDraftRequest

___

### `Optional` lines

• **lines**? : *Array‹[InvoiceishDraftLine](invoiceishdraftline.md)›*

**`memberof`** InvoiceishDraftRequest

___

### `Optional` orderReference

• **orderReference**? : *string*

Reference if sending invoice via EHF.

**`memberof`** InvoiceishDraftRequest

___

### `Optional` ourReference

• **ourReference**? : *string*

**`memberof`** InvoiceishDraftRequest

___

### `Optional` paymentAccount

• **paymentAccount**? : *string*

**`memberof`** InvoiceishDraftRequest

___

### `Optional` projectId

• **projectId**? : *number*

**`memberof`** InvoiceishDraftRequest

___

###  type

• **type**: *[InvoiceishDraftRequestTypeEnum](../enums/invoiceishdraftrequesttypeenum.md)*

Type of draft.

**`memberof`** InvoiceishDraftRequest

___

### `Optional` uuid

• **uuid**? : *string*

UUID are represented as 32 hexadecimal (base-16) digits, displayed in 5 groups separated by hyphens, in the form 8-4-4-4-12 for a total of 36 characters.

**`memberof`** InvoiceishDraftRequest

___

### `Optional` yourReference

• **yourReference**? : *string*

**`memberof`** InvoiceishDraftRequest
