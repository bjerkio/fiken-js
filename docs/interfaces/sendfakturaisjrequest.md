[fiken](../README.md) › [SendFakturaisjRequest](sendfakturaisjrequest.md)

# Interface: SendFakturaisjRequest

**`export`** 

**`interface`** SendFakturaisjRequest

## Hierarchy

* **SendFakturaisjRequest**

## Index

### Properties

* [emailSendOption](sendfakturaisjrequest.md#optional-emailsendoption)
* [includeDocumentAttachments](sendfakturaisjrequest.md#includedocumentattachments)
* [message](sendfakturaisjrequest.md#optional-message)
* [method](sendfakturaisjrequest.md#method)
* [mobileNumber](sendfakturaisjrequest.md#optional-mobilenumber)
* [organizationNumber](sendfakturaisjrequest.md#optional-organizationnumber)
* [recipientEmail](sendfakturaisjrequest.md#optional-recipientemail)
* [recipientName](sendfakturaisjrequest.md#optional-recipientname)

## Properties

### `Optional` emailSendOption

• **emailSendOption**? : *[SendFakturaisjRequestEmailSendOptionEnum](../enums/sendfakturaisjrequestemailsendoptionenum.md)*

document_link, attachment or auto. Defaults to auto which uses customer/company settings.

**`memberof`** SendFakturaisjRequest

___

###  includeDocumentAttachments

• **includeDocumentAttachments**: *boolean*

Whether the document's attachment should be included when sending (True) or not (False).

**`memberof`** SendFakturaisjRequest

___

### `Optional` message

• **message**? : *string*

Additional message to send with document.

**`memberof`** SendFakturaisjRequest

___

###  method

• **method**: *Array‹[SendFakturaisjRequestMethodEnum](../enums/sendfakturaisjrequestmethodenum.md)›*

The method of sending. Has to be auto, email, ehf, vipps or sms.

**`memberof`** SendFakturaisjRequest

___

### `Optional` mobileNumber

• **mobileNumber**? : *string*

Defaults to the customers phone number. Format should include the country code. If a Norwegian phone number, the country code is not necessary.

**`memberof`** SendFakturaisjRequest

___

### `Optional` organizationNumber

• **organizationNumber**? : *string*

Brreg organiztion number. Defaults to the customers organization number if not provided.

**`memberof`** SendFakturaisjRequest

___

### `Optional` recipientEmail

• **recipientEmail**? : *string*

**`memberof`** SendFakturaisjRequest

___

### `Optional` recipientName

• **recipientName**? : *string*

**`memberof`** SendFakturaisjRequest
