[fiken](../README.md) › [PartialCreditNoteRequest](partialcreditnoterequest.md)

# Interface: PartialCreditNoteRequest

**`export`** 

**`interface`** PartialCreditNoteRequest

## Hierarchy

* **PartialCreditNoteRequest**

## Index

### Properties

* [contactId](partialcreditnoterequest.md#optional-contactid)
* [contactPersonId](partialcreditnoterequest.md#optional-contactpersonid)
* [creditNoteText](partialcreditnoterequest.md#optional-creditnotetext)
* [currency](partialcreditnoterequest.md#optional-currency)
* [invoiceId](partialcreditnoterequest.md#optional-invoiceid)
* [issueDate](partialcreditnoterequest.md#issuedate)
* [lines](partialcreditnoterequest.md#lines)
* [orderReference](partialcreditnoterequest.md#optional-orderreference)
* [ourReference](partialcreditnoterequest.md#optional-ourreference)
* [project](partialcreditnoterequest.md#optional-project)
* [yourReference](partialcreditnoterequest.md#optional-yourreference)

## Properties

### `Optional` contactId

• **contactId**? : *number*

Id of contact that the credit note is associated with.

**`memberof`** PartialCreditNoteRequest

___

### `Optional` contactPersonId

• **contactPersonId**? : *number*

Id of contact person that the credit note is associated with (Credit person must belong to the provided contact).

**`memberof`** PartialCreditNoteRequest

___

### `Optional` creditNoteText

• **creditNoteText**? : *string*

**`memberof`** PartialCreditNoteRequest

___

### `Optional` currency

• **currency**? : *string*

ISO 4217 currency code

**`memberof`** PartialCreditNoteRequest

___

### `Optional` invoiceId

• **invoiceId**? : *number*

Optional - Id of invoice that the credit note is associated with.

**`memberof`** PartialCreditNoteRequest

___

###  issueDate

• **issueDate**: *Date*

Date that the credit note is issued, format yyyy-mm-dd

**`memberof`** PartialCreditNoteRequest

___

###  lines

• **lines**: *Array‹[CreditNoteLineResult](creditnotelineresult.md)›*

**`memberof`** PartialCreditNoteRequest

___

### `Optional` orderReference

• **orderReference**? : *string*

Reference if sending via EHF.

**`memberof`** PartialCreditNoteRequest

___

### `Optional` ourReference

• **ourReference**? : *string*

Optional

**`memberof`** PartialCreditNoteRequest

___

### `Optional` project

• **project**? : *number*

Optional - Project associated with the credit note.

**`memberof`** PartialCreditNoteRequest

___

### `Optional` yourReference

• **yourReference**? : *string*

Optional - Your reference for invoice, free string format.

**`memberof`** PartialCreditNoteRequest
