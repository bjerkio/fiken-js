[fiken](../README.md) › [InvoiceRequest](invoicerequest.md)

# Interface: InvoiceRequest

**`export`** 

**`interface`** InvoiceRequest

## Hierarchy

* **InvoiceRequest**

## Index

### Properties

* [bankAccountCode](invoicerequest.md#bankaccountcode)
* [cash](invoicerequest.md#cash)
* [contactPersonId](invoicerequest.md#optional-contactpersonid)
* [currency](invoicerequest.md#optional-currency)
* [customerId](invoicerequest.md#customerid)
* [dueDate](invoicerequest.md#duedate)
* [invoiceText](invoicerequest.md#optional-invoicetext)
* [issueDate](invoicerequest.md#issuedate)
* [lines](invoicerequest.md#lines)
* [orderReference](invoicerequest.md#optional-orderreference)
* [ourReference](invoicerequest.md#optional-ourreference)
* [paymentAccount](invoicerequest.md#optional-paymentaccount)
* [projectId](invoicerequest.md#optional-projectid)
* [uuid](invoicerequest.md#optional-uuid)
* [yourReference](invoicerequest.md#optional-yourreference)

## Properties

###  bankAccountCode

• **bankAccountCode**: *string*

Bank account code associated with invoice, format 1920:XXXXX

**`memberof`** InvoiceRequest

___

###  cash

• **cash**: *boolean*

Payment taken in cash (True) or not (False).

**`memberof`** InvoiceRequest

___

### `Optional` contactPersonId

• **contactPersonId**? : *number*

Id of the contact person. Must be associated with the provided customer.

**`memberof`** InvoiceRequest

___

### `Optional` currency

• **currency**? : *string*

ISO 4217 currency code. Defaults to "NOK" if unspecified.

**`memberof`** InvoiceRequest

___

###  customerId

• **customerId**: *number*

**`memberof`** InvoiceRequest

___

###  dueDate

• **dueDate**: *Date*

Due date of invoice, format yyyy-mm-dd

**`memberof`** InvoiceRequest

___

### `Optional` invoiceText

• **invoiceText**? : *string*

**`memberof`** InvoiceRequest

___

###  issueDate

• **issueDate**: *Date*

Date that the invoice was issued, format yyyy-mm-dd

**`memberof`** InvoiceRequest

___

###  lines

• **lines**: *Array‹[InvoiceLineRequest](invoicelinerequest.md)›*

**`memberof`** InvoiceRequest

___

### `Optional` orderReference

• **orderReference**? : *string*

Reference if sending via EHF.

**`memberof`** InvoiceRequest

___

### `Optional` ourReference

• **ourReference**? : *string*

**`memberof`** InvoiceRequest

___

### `Optional` paymentAccount

• **paymentAccount**? : *string*

For Cash Invoices only. For instance "1920:10001".

**`memberof`** InvoiceRequest

___

### `Optional` projectId

• **projectId**? : *number*

Optional - Associated project for the invoice to be created.

**`memberof`** InvoiceRequest

___

### `Optional` uuid

• **uuid**? : *string*

UUID are represented as 32 hexadecimal (base-16) digits, displayed in 5 groups separated by hyphens, in the form 8-4-4-4-12 for a total of 36 characters. If not provided, API will generate a UUID.

**`memberof`** InvoiceRequest

___

### `Optional` yourReference

• **yourReference**? : *string*

Your reference for invoice, free string format

**`memberof`** InvoiceRequest
