[fiken](../README.md) › [SendInvoiceRequest](sendinvoicerequest.md)

# Interface: SendInvoiceRequest

**`export`** 

**`interface`** SendInvoiceRequest

## Hierarchy

* **SendInvoiceRequest**

## Index

### Properties

* [emailSendOption](sendinvoicerequest.md#optional-emailsendoption)
* [includeDocumentAttachments](sendinvoicerequest.md#includedocumentattachments)
* [invoiceId](sendinvoicerequest.md#invoiceid)
* [message](sendinvoicerequest.md#optional-message)
* [method](sendinvoicerequest.md#method)
* [mobileNumber](sendinvoicerequest.md#optional-mobilenumber)
* [organizationNumber](sendinvoicerequest.md#optional-organizationnumber)
* [recipientEmail](sendinvoicerequest.md#optional-recipientemail)
* [recipientName](sendinvoicerequest.md#optional-recipientname)

## Properties

### `Optional` emailSendOption

• **emailSendOption**? : *[SendInvoiceRequestEmailSendOptionEnum](../enums/sendinvoicerequestemailsendoptionenum.md)*

document_link, attachment or auto. Defaults to auto which uses customer/company settings.

**`memberof`** SendInvoiceRequest

___

###  includeDocumentAttachments

• **includeDocumentAttachments**: *boolean*

Whether the document's attachment should be included when sending (True) or not (False).

**`memberof`** SendInvoiceRequest

___

###  invoiceId

• **invoiceId**: *number*

Id of invoice to send.

**`memberof`** SendInvoiceRequest

___

### `Optional` message

• **message**? : *string*

Additional message to send with document.

**`memberof`** SendInvoiceRequest

___

###  method

• **method**: *Array‹[SendInvoiceRequestMethodEnum](../enums/sendinvoicerequestmethodenum.md)›*

The method of sending. Has to be auto, email, ehf, vipps or sms.

**`memberof`** SendInvoiceRequest

___

### `Optional` mobileNumber

• **mobileNumber**? : *string*

Defaults to the customers phone number. Format should include the country code. If a Norwegian phone number, the country code is not necessary.

**`memberof`** SendInvoiceRequest

___

### `Optional` organizationNumber

• **organizationNumber**? : *string*

Brreg organiztion number. Defaults to the customers organization number if not provided.

**`memberof`** SendInvoiceRequest

___

### `Optional` recipientEmail

• **recipientEmail**? : *string*

**`memberof`** SendInvoiceRequest

___

### `Optional` recipientName

• **recipientName**? : *string*

**`memberof`** SendInvoiceRequest
