[fiken](../README.md) › [SalesApi](salesapi.md)

# Class: SalesApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **SalesApi**

## Index

### Constructors

* [constructor](salesapi.md#constructor)

### Properties

* [configuration](salesapi.md#protected-configuration)

### Methods

* [addAttachmentToSale](salesapi.md#addattachmenttosale)
* [addAttachmentToSaleDraft](salesapi.md#addattachmenttosaledraft)
* [addAttachmentToSaleDraftRaw](salesapi.md#addattachmenttosaledraftraw)
* [addAttachmentToSaleRaw](salesapi.md#addattachmenttosaleraw)
* [createSale](salesapi.md#createsale)
* [createSaleDraft](salesapi.md#createsaledraft)
* [createSaleDraftRaw](salesapi.md#createsaledraftraw)
* [createSaleFromDraft](salesapi.md#createsalefromdraft)
* [createSaleFromDraftRaw](salesapi.md#createsalefromdraftraw)
* [createSalePayment](salesapi.md#createsalepayment)
* [createSalePaymentRaw](salesapi.md#createsalepaymentraw)
* [createSaleRaw](salesapi.md#createsaleraw)
* [deleteSaleDraft](salesapi.md#deletesaledraft)
* [deleteSaleDraftRaw](salesapi.md#deletesaledraftraw)
* [getSale](salesapi.md#getsale)
* [getSaleAttachments](salesapi.md#getsaleattachments)
* [getSaleAttachmentsRaw](salesapi.md#getsaleattachmentsraw)
* [getSaleDraft](salesapi.md#getsaledraft)
* [getSaleDraftAttachments](salesapi.md#getsaledraftattachments)
* [getSaleDraftAttachmentsRaw](salesapi.md#getsaledraftattachmentsraw)
* [getSaleDraftRaw](salesapi.md#getsaledraftraw)
* [getSaleDrafts](salesapi.md#getsaledrafts)
* [getSaleDraftsRaw](salesapi.md#getsaledraftsraw)
* [getSalePayment](salesapi.md#getsalepayment)
* [getSalePaymentRaw](salesapi.md#getsalepaymentraw)
* [getSalePayments](salesapi.md#getsalepayments)
* [getSalePaymentsRaw](salesapi.md#getsalepaymentsraw)
* [getSaleRaw](salesapi.md#getsaleraw)
* [getSales](salesapi.md#getsales)
* [getSalesRaw](salesapi.md#getsalesraw)
* [request](salesapi.md#protected-request)
* [updateSaleDraft](salesapi.md#updatesaledraft)
* [updateSaleDraftRaw](salesapi.md#updatesaledraftraw)
* [withMiddleware](salesapi.md#withmiddleware)
* [withPostMiddleware](salesapi.md#withpostmiddleware)
* [withPreMiddleware](salesapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new SalesApi**(`configuration`: [Configuration](configuration.md)‹›): *[SalesApi](salesapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](configuration.md)‹› | new Configuration() |

**Returns:** *[SalesApi](salesapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)‹›*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

## Methods

###  addAttachmentToSale

▸ **addAttachmentToSale**(`requestParameters`: [AddAttachmentToSaleRequest](../interfaces/addattachmenttosalerequest.md)): *Promise‹void›*

Creates and adds a new attachment to a Sale

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddAttachmentToSaleRequest](../interfaces/addattachmenttosalerequest.md) |

**Returns:** *Promise‹void›*

___

###  addAttachmentToSaleDraft

▸ **addAttachmentToSaleDraft**(`requestParameters`: [AddAttachmentToSaleDraftRequest](../interfaces/addattachmenttosaledraftrequest.md)): *Promise‹void›*

Creates and adds a new attachment to a draft

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddAttachmentToSaleDraftRequest](../interfaces/addattachmenttosaledraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  addAttachmentToSaleDraftRaw

▸ **addAttachmentToSaleDraftRaw**(`requestParameters`: [AddAttachmentToSaleDraftRequest](../interfaces/addattachmenttosaledraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates and adds a new attachment to a draft

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddAttachmentToSaleDraftRequest](../interfaces/addattachmenttosaledraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  addAttachmentToSaleRaw

▸ **addAttachmentToSaleRaw**(`requestParameters`: [AddAttachmentToSaleRequest](../interfaces/addattachmenttosalerequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates and adds a new attachment to a Sale

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddAttachmentToSaleRequest](../interfaces/addattachmenttosalerequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  createSale

▸ **createSale**(`requestParameters`: [CreateSaleRequest](../interfaces/createsalerequest.md)): *Promise‹void›*

Creates a new sale.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateSaleRequest](../interfaces/createsalerequest.md) |

**Returns:** *Promise‹void›*

___

###  createSaleDraft

▸ **createSaleDraft**(`requestParameters`: [CreateSaleDraftRequest](../interfaces/createsaledraftrequest.md)): *Promise‹void›*

Creates a sale draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateSaleDraftRequest](../interfaces/createsaledraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  createSaleDraftRaw

▸ **createSaleDraftRaw**(`requestParameters`: [CreateSaleDraftRequest](../interfaces/createsaledraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates a sale draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateSaleDraftRequest](../interfaces/createsaledraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  createSaleFromDraft

▸ **createSaleFromDraft**(`requestParameters`: [CreateSaleFromDraftRequest](../interfaces/createsalefromdraftrequest.md)): *Promise‹void›*

Creates a sale from an already created draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateSaleFromDraftRequest](../interfaces/createsalefromdraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  createSaleFromDraftRaw

▸ **createSaleFromDraftRaw**(`requestParameters`: [CreateSaleFromDraftRequest](../interfaces/createsalefromdraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates a sale from an already created draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateSaleFromDraftRequest](../interfaces/createsalefromdraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  createSalePayment

▸ **createSalePayment**(`requestParameters`: [CreateSalePaymentRequest](../interfaces/createsalepaymentrequest.md)): *Promise‹void›*

Creates a new payment for a given sale.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateSalePaymentRequest](../interfaces/createsalepaymentrequest.md) |

**Returns:** *Promise‹void›*

___

###  createSalePaymentRaw

▸ **createSalePaymentRaw**(`requestParameters`: [CreateSalePaymentRequest](../interfaces/createsalepaymentrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates a new payment for a given sale.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateSalePaymentRequest](../interfaces/createsalepaymentrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  createSaleRaw

▸ **createSaleRaw**(`requestParameters`: [CreateSaleRequest](../interfaces/createsalerequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates a new sale.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateSaleRequest](../interfaces/createsalerequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  deleteSaleDraft

▸ **deleteSaleDraft**(`requestParameters`: [DeleteSaleDraftRequest](../interfaces/deletesaledraftrequest.md)): *Promise‹void›*

Delete draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteSaleDraftRequest](../interfaces/deletesaledraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  deleteSaleDraftRaw

▸ **deleteSaleDraftRaw**(`requestParameters`: [DeleteSaleDraftRequest](../interfaces/deletesaledraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Delete draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteSaleDraftRequest](../interfaces/deletesaledraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  getSale

▸ **getSale**(`requestParameters`: [GetSaleRequest](../interfaces/getsalerequest.md)): *Promise‹[SaleResult](../interfaces/saleresult.md)›*

Returns sale with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetSaleRequest](../interfaces/getsalerequest.md) |

**Returns:** *Promise‹[SaleResult](../interfaces/saleresult.md)›*

___

###  getSaleAttachments

▸ **getSaleAttachments**(`requestParameters`: [GetSaleAttachmentsRequest](../interfaces/getsaleattachmentsrequest.md)): *Promise‹Array‹[Attachment](../interfaces/attachment.md)››*

Returns all attachments for specified sale.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetSaleAttachmentsRequest](../interfaces/getsaleattachmentsrequest.md) |

**Returns:** *Promise‹Array‹[Attachment](../interfaces/attachment.md)››*

___

###  getSaleAttachmentsRaw

▸ **getSaleAttachmentsRaw**(`requestParameters`: [GetSaleAttachmentsRequest](../interfaces/getsaleattachmentsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Attachment](../interfaces/attachment.md)›››*

Returns all attachments for specified sale.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetSaleAttachmentsRequest](../interfaces/getsaleattachmentsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Attachment](../interfaces/attachment.md)›››*

___

###  getSaleDraft

▸ **getSaleDraft**(`requestParameters`: [GetSaleDraftRequest](../interfaces/getsaledraftrequest.md)): *Promise‹[DraftResult](../interfaces/draftresult.md)›*

Returns draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetSaleDraftRequest](../interfaces/getsaledraftrequest.md) |

**Returns:** *Promise‹[DraftResult](../interfaces/draftresult.md)›*

___

###  getSaleDraftAttachments

▸ **getSaleDraftAttachments**(`requestParameters`: [GetSaleDraftAttachmentsRequest](../interfaces/getsaledraftattachmentsrequest.md)): *Promise‹Array‹[Attachment](../interfaces/attachment.md)››*

Returns all attachments for specified draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetSaleDraftAttachmentsRequest](../interfaces/getsaledraftattachmentsrequest.md) |

**Returns:** *Promise‹Array‹[Attachment](../interfaces/attachment.md)››*

___

###  getSaleDraftAttachmentsRaw

▸ **getSaleDraftAttachmentsRaw**(`requestParameters`: [GetSaleDraftAttachmentsRequest](../interfaces/getsaledraftattachmentsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Attachment](../interfaces/attachment.md)›››*

Returns all attachments for specified draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetSaleDraftAttachmentsRequest](../interfaces/getsaledraftattachmentsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Attachment](../interfaces/attachment.md)›››*

___

###  getSaleDraftRaw

▸ **getSaleDraftRaw**(`requestParameters`: [GetSaleDraftRequest](../interfaces/getsaledraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[DraftResult](../interfaces/draftresult.md)››*

Returns draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetSaleDraftRequest](../interfaces/getsaledraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[DraftResult](../interfaces/draftresult.md)››*

___

###  getSaleDrafts

▸ **getSaleDrafts**(`requestParameters`: [GetSaleDraftsRequest](../interfaces/getsaledraftsrequest.md)): *Promise‹Array‹[DraftResult](../interfaces/draftresult.md)››*

Returns all sale drafts for given company.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetSaleDraftsRequest](../interfaces/getsaledraftsrequest.md) |

**Returns:** *Promise‹Array‹[DraftResult](../interfaces/draftresult.md)››*

___

###  getSaleDraftsRaw

▸ **getSaleDraftsRaw**(`requestParameters`: [GetSaleDraftsRequest](../interfaces/getsaledraftsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[DraftResult](../interfaces/draftresult.md)›››*

Returns all sale drafts for given company.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetSaleDraftsRequest](../interfaces/getsaledraftsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[DraftResult](../interfaces/draftresult.md)›››*

___

###  getSalePayment

▸ **getSalePayment**(`requestParameters`: [GetSalePaymentRequest](../interfaces/getsalepaymentrequest.md)): *Promise‹[Payment](../interfaces/payment.md)›*

Returns payment with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetSalePaymentRequest](../interfaces/getsalepaymentrequest.md) |

**Returns:** *Promise‹[Payment](../interfaces/payment.md)›*

___

###  getSalePaymentRaw

▸ **getSalePaymentRaw**(`requestParameters`: [GetSalePaymentRequest](../interfaces/getsalepaymentrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[Payment](../interfaces/payment.md)››*

Returns payment with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetSalePaymentRequest](../interfaces/getsalepaymentrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[Payment](../interfaces/payment.md)››*

___

###  getSalePayments

▸ **getSalePayments**(`requestParameters`: [GetSalePaymentsRequest](../interfaces/getsalepaymentsrequest.md)): *Promise‹Array‹[Payment](../interfaces/payment.md)››*

Returns all payments for given sale

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetSalePaymentsRequest](../interfaces/getsalepaymentsrequest.md) |

**Returns:** *Promise‹Array‹[Payment](../interfaces/payment.md)››*

___

###  getSalePaymentsRaw

▸ **getSalePaymentsRaw**(`requestParameters`: [GetSalePaymentsRequest](../interfaces/getsalepaymentsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Payment](../interfaces/payment.md)›››*

Returns all payments for given sale

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetSalePaymentsRequest](../interfaces/getsalepaymentsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Payment](../interfaces/payment.md)›››*

___

###  getSaleRaw

▸ **getSaleRaw**(`requestParameters`: [GetSaleRequest](../interfaces/getsalerequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[SaleResult](../interfaces/saleresult.md)››*

Returns sale with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetSaleRequest](../interfaces/getsalerequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[SaleResult](../interfaces/saleresult.md)››*

___

###  getSales

▸ **getSales**(`requestParameters`: [GetSalesRequest](../interfaces/getsalesrequest.md)): *Promise‹Array‹[SaleResult](../interfaces/saleresult.md)››*

Returns all sales for given company

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetSalesRequest](../interfaces/getsalesrequest.md) |

**Returns:** *Promise‹Array‹[SaleResult](../interfaces/saleresult.md)››*

___

###  getSalesRaw

▸ **getSalesRaw**(`requestParameters`: [GetSalesRequest](../interfaces/getsalesrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[SaleResult](../interfaces/saleresult.md)›››*

Returns all sales for given company

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetSalesRequest](../interfaces/getsalesrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[SaleResult](../interfaces/saleresult.md)›››*

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

###  updateSaleDraft

▸ **updateSaleDraft**(`requestParameters`: [UpdateSaleDraftRequest](../interfaces/updatesaledraftrequest.md)): *Promise‹void›*

Updates draft with provided id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdateSaleDraftRequest](../interfaces/updatesaledraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  updateSaleDraftRaw

▸ **updateSaleDraftRaw**(`requestParameters`: [UpdateSaleDraftRequest](../interfaces/updatesaledraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Updates draft with provided id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdateSaleDraftRequest](../interfaces/updatesaledraftrequest.md) |

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
