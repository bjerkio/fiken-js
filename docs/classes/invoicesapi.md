[fiken](../README.md) › [InvoicesApi](invoicesapi.md)

# Class: InvoicesApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **InvoicesApi**

## Index

### Constructors

* [constructor](invoicesapi.md#constructor)

### Properties

* [configuration](invoicesapi.md#protected-configuration)

### Methods

* [addAttachmentToInvoice](invoicesapi.md#addattachmenttoinvoice)
* [addAttachmentToInvoiceDraft](invoicesapi.md#addattachmenttoinvoicedraft)
* [addAttachmentToInvoiceDraftRaw](invoicesapi.md#addattachmenttoinvoicedraftraw)
* [addAttachmentToInvoiceRaw](invoicesapi.md#addattachmenttoinvoiceraw)
* [createInvoice](invoicesapi.md#createinvoice)
* [createInvoiceDraft](invoicesapi.md#createinvoicedraft)
* [createInvoiceDraftRaw](invoicesapi.md#createinvoicedraftraw)
* [createInvoiceFromDraft](invoicesapi.md#createinvoicefromdraft)
* [createInvoiceFromDraftRaw](invoicesapi.md#createinvoicefromdraftraw)
* [createInvoiceRaw](invoicesapi.md#createinvoiceraw)
* [deleteInvoiceDraft](invoicesapi.md#deleteinvoicedraft)
* [deleteInvoiceDraftRaw](invoicesapi.md#deleteinvoicedraftraw)
* [getInvoice](invoicesapi.md#getinvoice)
* [getInvoiceAttachments](invoicesapi.md#getinvoiceattachments)
* [getInvoiceAttachmentsRaw](invoicesapi.md#getinvoiceattachmentsraw)
* [getInvoiceDraft](invoicesapi.md#getinvoicedraft)
* [getInvoiceDraftAttachments](invoicesapi.md#getinvoicedraftattachments)
* [getInvoiceDraftAttachmentsRaw](invoicesapi.md#getinvoicedraftattachmentsraw)
* [getInvoiceDraftRaw](invoicesapi.md#getinvoicedraftraw)
* [getInvoiceDrafts](invoicesapi.md#getinvoicedrafts)
* [getInvoiceDraftsRaw](invoicesapi.md#getinvoicedraftsraw)
* [getInvoiceRaw](invoicesapi.md#getinvoiceraw)
* [getInvoices](invoicesapi.md#getinvoices)
* [getInvoicesRaw](invoicesapi.md#getinvoicesraw)
* [request](invoicesapi.md#protected-request)
* [sendInvoice](invoicesapi.md#sendinvoice)
* [sendInvoiceRaw](invoicesapi.md#sendinvoiceraw)
* [updateInvoice](invoicesapi.md#updateinvoice)
* [updateInvoiceDraft](invoicesapi.md#updateinvoicedraft)
* [updateInvoiceDraftRaw](invoicesapi.md#updateinvoicedraftraw)
* [updateInvoiceRaw](invoicesapi.md#updateinvoiceraw)
* [withMiddleware](invoicesapi.md#withmiddleware)
* [withPostMiddleware](invoicesapi.md#withpostmiddleware)
* [withPreMiddleware](invoicesapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new InvoicesApi**(`configuration`: [Configuration](configuration.md)‹›): *[InvoicesApi](invoicesapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](configuration.md)‹› | new Configuration() |

**Returns:** *[InvoicesApi](invoicesapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)‹›*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

## Methods

###  addAttachmentToInvoice

▸ **addAttachmentToInvoice**(`requestParameters`: [AddAttachmentToInvoiceRequest](../interfaces/addattachmenttoinvoicerequest.md)): *Promise‹void›*

Creates and adds a new attachment to an Invoice

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddAttachmentToInvoiceRequest](../interfaces/addattachmenttoinvoicerequest.md) |

**Returns:** *Promise‹void›*

___

###  addAttachmentToInvoiceDraft

▸ **addAttachmentToInvoiceDraft**(`requestParameters`: [AddAttachmentToInvoiceDraftRequest](../interfaces/addattachmenttoinvoicedraftrequest.md)): *Promise‹void›*

Creates and adds a new attachment to an invoice draft

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddAttachmentToInvoiceDraftRequest](../interfaces/addattachmenttoinvoicedraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  addAttachmentToInvoiceDraftRaw

▸ **addAttachmentToInvoiceDraftRaw**(`requestParameters`: [AddAttachmentToInvoiceDraftRequest](../interfaces/addattachmenttoinvoicedraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates and adds a new attachment to an invoice draft

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddAttachmentToInvoiceDraftRequest](../interfaces/addattachmenttoinvoicedraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  addAttachmentToInvoiceRaw

▸ **addAttachmentToInvoiceRaw**(`requestParameters`: [AddAttachmentToInvoiceRequest](../interfaces/addattachmenttoinvoicerequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates and adds a new attachment to an Invoice

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddAttachmentToInvoiceRequest](../interfaces/addattachmenttoinvoicerequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  createInvoice

▸ **createInvoice**(`requestParameters`: [CreateInvoiceRequest](../interfaces/createinvoicerequest.md)): *Promise‹void›*

Creates an invoice. There are two types of invoice lines that can be added to an invoice line: product line or free text line. Provide a product Id if you are invoicing a product. All information regarding the price and VAT for this product will be added to the invoice. It is however also possible to override the unit amount by sending information in both fields \"productId\" and \"unitAmount\". An invoice line can also be a free text line meaning that no existing product will be associated with the invoiced line. In this case all information regarding the price and VAT of the product or service to be invoiced must be provided.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateInvoiceRequest](../interfaces/createinvoicerequest.md) |

**Returns:** *Promise‹void›*

___

###  createInvoiceDraft

▸ **createInvoiceDraft**(`requestParameters`: [CreateInvoiceDraftRequest](../interfaces/createinvoicedraftrequest.md)): *Promise‹void›*

Creates an invoice draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateInvoiceDraftRequest](../interfaces/createinvoicedraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  createInvoiceDraftRaw

▸ **createInvoiceDraftRaw**(`requestParameters`: [CreateInvoiceDraftRequest](../interfaces/createinvoicedraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates an invoice draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateInvoiceDraftRequest](../interfaces/createinvoicedraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  createInvoiceFromDraft

▸ **createInvoiceFromDraft**(`requestParameters`: [CreateInvoiceFromDraftRequest](../interfaces/createinvoicefromdraftrequest.md)): *Promise‹void›*

Creates an invoice from an already created draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateInvoiceFromDraftRequest](../interfaces/createinvoicefromdraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  createInvoiceFromDraftRaw

▸ **createInvoiceFromDraftRaw**(`requestParameters`: [CreateInvoiceFromDraftRequest](../interfaces/createinvoicefromdraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates an invoice from an already created draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateInvoiceFromDraftRequest](../interfaces/createinvoicefromdraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  createInvoiceRaw

▸ **createInvoiceRaw**(`requestParameters`: [CreateInvoiceRequest](../interfaces/createinvoicerequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates an invoice. There are two types of invoice lines that can be added to an invoice line: product line or free text line. Provide a product Id if you are invoicing a product. All information regarding the price and VAT for this product will be added to the invoice. It is however also possible to override the unit amount by sending information in both fields \"productId\" and \"unitAmount\". An invoice line can also be a free text line meaning that no existing product will be associated with the invoiced line. In this case all information regarding the price and VAT of the product or service to be invoiced must be provided.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateInvoiceRequest](../interfaces/createinvoicerequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  deleteInvoiceDraft

▸ **deleteInvoiceDraft**(`requestParameters`: [DeleteInvoiceDraftRequest](../interfaces/deleteinvoicedraftrequest.md)): *Promise‹void›*

Delete invoice draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteInvoiceDraftRequest](../interfaces/deleteinvoicedraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  deleteInvoiceDraftRaw

▸ **deleteInvoiceDraftRaw**(`requestParameters`: [DeleteInvoiceDraftRequest](../interfaces/deleteinvoicedraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Delete invoice draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteInvoiceDraftRequest](../interfaces/deleteinvoicedraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  getInvoice

▸ **getInvoice**(`requestParameters`: [GetInvoiceRequest](../interfaces/getinvoicerequest.md)): *Promise‹[InvoiceResult](../interfaces/invoiceresult.md)›*

Returns invoice with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetInvoiceRequest](../interfaces/getinvoicerequest.md) |

**Returns:** *Promise‹[InvoiceResult](../interfaces/invoiceresult.md)›*

___

###  getInvoiceAttachments

▸ **getInvoiceAttachments**(`requestParameters`: [GetInvoiceAttachmentsRequest](../interfaces/getinvoiceattachmentsrequest.md)): *Promise‹Array‹[Attachment](../interfaces/attachment.md)››*

Returns all attachments for a given Invoice

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetInvoiceAttachmentsRequest](../interfaces/getinvoiceattachmentsrequest.md) |

**Returns:** *Promise‹Array‹[Attachment](../interfaces/attachment.md)››*

___

###  getInvoiceAttachmentsRaw

▸ **getInvoiceAttachmentsRaw**(`requestParameters`: [GetInvoiceAttachmentsRequest](../interfaces/getinvoiceattachmentsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Attachment](../interfaces/attachment.md)›››*

Returns all attachments for a given Invoice

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetInvoiceAttachmentsRequest](../interfaces/getinvoiceattachmentsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Attachment](../interfaces/attachment.md)›››*

___

###  getInvoiceDraft

▸ **getInvoiceDraft**(`requestParameters`: [GetInvoiceDraftRequest](../interfaces/getinvoicedraftrequest.md)): *Promise‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)›*

Returns invoice draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetInvoiceDraftRequest](../interfaces/getinvoicedraftrequest.md) |

**Returns:** *Promise‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)›*

___

###  getInvoiceDraftAttachments

▸ **getInvoiceDraftAttachments**(`requestParameters`: [GetInvoiceDraftAttachmentsRequest](../interfaces/getinvoicedraftattachmentsrequest.md)): *Promise‹Array‹[Attachment](../interfaces/attachment.md)››*

Returns all attachments for specified draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetInvoiceDraftAttachmentsRequest](../interfaces/getinvoicedraftattachmentsrequest.md) |

**Returns:** *Promise‹Array‹[Attachment](../interfaces/attachment.md)››*

___

###  getInvoiceDraftAttachmentsRaw

▸ **getInvoiceDraftAttachmentsRaw**(`requestParameters`: [GetInvoiceDraftAttachmentsRequest](../interfaces/getinvoicedraftattachmentsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Attachment](../interfaces/attachment.md)›››*

Returns all attachments for specified draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetInvoiceDraftAttachmentsRequest](../interfaces/getinvoicedraftattachmentsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Attachment](../interfaces/attachment.md)›››*

___

###  getInvoiceDraftRaw

▸ **getInvoiceDraftRaw**(`requestParameters`: [GetInvoiceDraftRequest](../interfaces/getinvoicedraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)››*

Returns invoice draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetInvoiceDraftRequest](../interfaces/getinvoicedraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)››*

___

###  getInvoiceDrafts

▸ **getInvoiceDrafts**(`requestParameters`: [GetInvoiceDraftsRequest](../interfaces/getinvoicedraftsrequest.md)): *Promise‹Array‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)››*

Returns all invoice drafts for given company.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetInvoiceDraftsRequest](../interfaces/getinvoicedraftsrequest.md) |

**Returns:** *Promise‹Array‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)››*

___

###  getInvoiceDraftsRaw

▸ **getInvoiceDraftsRaw**(`requestParameters`: [GetInvoiceDraftsRequest](../interfaces/getinvoicedraftsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)›››*

Returns all invoice drafts for given company.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetInvoiceDraftsRequest](../interfaces/getinvoicedraftsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)›››*

___

###  getInvoiceRaw

▸ **getInvoiceRaw**(`requestParameters`: [GetInvoiceRequest](../interfaces/getinvoicerequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[InvoiceResult](../interfaces/invoiceresult.md)››*

Returns invoice with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetInvoiceRequest](../interfaces/getinvoicerequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[InvoiceResult](../interfaces/invoiceresult.md)››*

___

###  getInvoices

▸ **getInvoices**(`requestParameters`: [GetInvoicesRequest](../interfaces/getinvoicesrequest.md)): *Promise‹Array‹[InvoiceResult](../interfaces/invoiceresult.md)››*

Returns all invoices for given company. You can filter based on issue date, last modified date, customer ID, and if the invoice is settled or not.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetInvoicesRequest](../interfaces/getinvoicesrequest.md) |

**Returns:** *Promise‹Array‹[InvoiceResult](../interfaces/invoiceresult.md)››*

___

###  getInvoicesRaw

▸ **getInvoicesRaw**(`requestParameters`: [GetInvoicesRequest](../interfaces/getinvoicesrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[InvoiceResult](../interfaces/invoiceresult.md)›››*

Returns all invoices for given company. You can filter based on issue date, last modified date, customer ID, and if the invoice is settled or not.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetInvoicesRequest](../interfaces/getinvoicesrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[InvoiceResult](../interfaces/invoiceresult.md)›››*

___

### `Protected` request

▸ **request**(`context`: [RequestOpts](../interfaces/requestopts.md)): *Promise‹Response›*

*Inherited from [BaseAPI](baseapi.md).[request](baseapi.md#protected-request)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [RequestOpts](../interfaces/requestopts.md) |

**Returns:** *Promise‹Response›*

___

###  sendInvoice

▸ **sendInvoice**(`requestParameters`: [SendInvoiceOperationRequest](../interfaces/sendinvoiceoperationrequest.md)): *Promise‹void›*

Sends the specified document

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [SendInvoiceOperationRequest](../interfaces/sendinvoiceoperationrequest.md) |

**Returns:** *Promise‹void›*

___

###  sendInvoiceRaw

▸ **sendInvoiceRaw**(`requestParameters`: [SendInvoiceOperationRequest](../interfaces/sendinvoiceoperationrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Sends the specified document

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [SendInvoiceOperationRequest](../interfaces/sendinvoiceoperationrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  updateInvoice

▸ **updateInvoice**(`requestParameters`: [UpdateInvoiceOperationRequest](../interfaces/updateinvoiceoperationrequest.md)): *Promise‹void›*

Updates invoice with provided id. It is possible to update the due date of an invoice as well as if the invoice was sent manually, outside of Fiken.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdateInvoiceOperationRequest](../interfaces/updateinvoiceoperationrequest.md) |

**Returns:** *Promise‹void›*

___

###  updateInvoiceDraft

▸ **updateInvoiceDraft**(`requestParameters`: [UpdateInvoiceDraftRequest](../interfaces/updateinvoicedraftrequest.md)): *Promise‹void›*

Updates invoice draft with provided id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdateInvoiceDraftRequest](../interfaces/updateinvoicedraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  updateInvoiceDraftRaw

▸ **updateInvoiceDraftRaw**(`requestParameters`: [UpdateInvoiceDraftRequest](../interfaces/updateinvoicedraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Updates invoice draft with provided id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdateInvoiceDraftRequest](../interfaces/updateinvoicedraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  updateInvoiceRaw

▸ **updateInvoiceRaw**(`requestParameters`: [UpdateInvoiceOperationRequest](../interfaces/updateinvoiceoperationrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Updates invoice with provided id. It is possible to update the due date of an invoice as well as if the invoice was sent manually, outside of Fiken.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdateInvoiceOperationRequest](../interfaces/updateinvoiceoperationrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  withMiddleware

▸ **withMiddleware**‹**T**›(`this`: T, ...`middlewares`: [Middleware](../interfaces/middleware.md)[]): *T*

*Inherited from [BaseAPI](baseapi.md).[withMiddleware](baseapi.md#withmiddleware)*

**Type parameters:**

▪ **T**: *[BaseAPI](baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...middlewares` | [Middleware](../interfaces/middleware.md)[] |

**Returns:** *T*

___

###  withPostMiddleware

▸ **withPostMiddleware**‹**T**›(`this`: T, ...`postMiddlewares`: Array‹Middleware["post"]›): *T*

*Inherited from [BaseAPI](baseapi.md).[withPostMiddleware](baseapi.md#withpostmiddleware)*

**Type parameters:**

▪ **T**: *[BaseAPI](baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...postMiddlewares` | Array‹Middleware["post"]› |

**Returns:** *T*

___

###  withPreMiddleware

▸ **withPreMiddleware**‹**T**›(`this`: T, ...`preMiddlewares`: Array‹Middleware["pre"]›): *T*

*Inherited from [BaseAPI](baseapi.md).[withPreMiddleware](baseapi.md#withpremiddleware)*

**Type parameters:**

▪ **T**: *[BaseAPI](baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...preMiddlewares` | Array‹Middleware["pre"]› |

**Returns:** *T*
