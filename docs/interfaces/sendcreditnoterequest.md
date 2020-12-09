[fiken](../README.md) › [SendCreditNoteRequest](sendcreditnoterequest.md)

# Interface: SendCreditNoteRequest

**`export`** 

**`interface`** SendCreditNoteRequest

## Hierarchy

* **SendCreditNoteRequest**

## Index

### Properties

* [creditNoteId](sendcreditnoterequest.md#creditnoteid)
* [emailSendOption](sendcreditnoterequest.md#optional-emailsendoption)
* [includeDocumentAttachments](sendcreditnoterequest.md#includedocumentattachments)
* [message](sendcreditnoterequest.md#optional-message)
* [method](sendcreditnoterequest.md#method)
* [mobileNumber](sendcreditnoterequest.md#optional-mobilenumber)
* [organizationNumber](sendcreditnoterequest.md#optional-organizationnumber)
* [recipientEmail](sendcreditnoterequest.md#optional-recipientemail)
* [recipientName](sendcreditnoterequest.md#optional-recipientname)

## Properties

###  creditNoteId

• **creditNoteId**: *number*

Id of credit note to send.

**`memberof`** SendCreditNoteRequest

___

### `Optional` emailSendOption

• **emailSendOption**? : *[SendCreditNoteRequestEmailSendOptionEnum](../enums/sendcreditnoterequestemailsendoptionenum.md)*

document_link, attachment or auto. Defaults to auto which uses customer/company settings.

**`memberof`** SendCreditNoteRequest

___

###  includeDocumentAttachments

• **includeDocumentAttachments**: *boolean*

Whether the document's attachment should be included when sending (True) or not (False).

**`memberof`** SendCreditNoteRequest

___

### `Optional` message

• **message**? : *string*

Additional message to send with document.

**`memberof`** SendCreditNoteRequest

___

###  method

• **method**: *Array‹[SendCreditNoteRequestMethodEnum](../enums/sendcreditnoterequestmethodenum.md)›*

The method of sending. Has to be auto, email, ehf, vipps or sms.

**`memberof`** SendCreditNoteRequest

___

### `Optional` mobileNumber

• **mobileNumber**? : *string*

Defaults to the customers phone number. Format should include the country code. If a Norwegian phone number, the country code is not necessary.

**`memberof`** SendCreditNoteRequest

___

### `Optional` organizationNumber

• **organizationNumber**? : *string*

Brreg organiztion number. Defaults to the customers organization number if not provided.

**`memberof`** SendCreditNoteRequest

___

### `Optional` recipientEmail

• **recipientEmail**? : *string*

**`memberof`** SendCreditNoteRequest

___

### `Optional` recipientName

• **recipientName**? : *string*

**`memberof`** SendCreditNoteRequest
