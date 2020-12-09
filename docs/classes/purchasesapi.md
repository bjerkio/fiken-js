[fiken](../README.md) › [PurchasesApi](purchasesapi.md)

# Class: PurchasesApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **PurchasesApi**

## Index

### Constructors

* [constructor](purchasesapi.md#constructor)

### Properties

* [configuration](purchasesapi.md#protected-configuration)

### Methods

* [addAttachmentToPurchase](purchasesapi.md#addattachmenttopurchase)
* [addAttachmentToPurchaseDraft](purchasesapi.md#addattachmenttopurchasedraft)
* [addAttachmentToPurchaseDraftRaw](purchasesapi.md#addattachmenttopurchasedraftraw)
* [addAttachmentToPurchaseRaw](purchasesapi.md#addattachmenttopurchaseraw)
* [createPurchase](purchasesapi.md#createpurchase)
* [createPurchaseDraft](purchasesapi.md#createpurchasedraft)
* [createPurchaseDraftRaw](purchasesapi.md#createpurchasedraftraw)
* [createPurchaseFromDraft](purchasesapi.md#createpurchasefromdraft)
* [createPurchaseFromDraftRaw](purchasesapi.md#createpurchasefromdraftraw)
* [createPurchasePayment](purchasesapi.md#createpurchasepayment)
* [createPurchasePaymentRaw](purchasesapi.md#createpurchasepaymentraw)
* [createPurchaseRaw](purchasesapi.md#createpurchaseraw)
* [deletePurchaseDraft](purchasesapi.md#deletepurchasedraft)
* [deletePurchaseDraftRaw](purchasesapi.md#deletepurchasedraftraw)
* [getPurchase](purchasesapi.md#getpurchase)
* [getPurchaseAttachments](purchasesapi.md#getpurchaseattachments)
* [getPurchaseAttachmentsRaw](purchasesapi.md#getpurchaseattachmentsraw)
* [getPurchaseDraft](purchasesapi.md#getpurchasedraft)
* [getPurchaseDraftAttachments](purchasesapi.md#getpurchasedraftattachments)
* [getPurchaseDraftAttachmentsRaw](purchasesapi.md#getpurchasedraftattachmentsraw)
* [getPurchaseDraftRaw](purchasesapi.md#getpurchasedraftraw)
* [getPurchaseDrafts](purchasesapi.md#getpurchasedrafts)
* [getPurchaseDraftsRaw](purchasesapi.md#getpurchasedraftsraw)
* [getPurchasePayment](purchasesapi.md#getpurchasepayment)
* [getPurchasePaymentRaw](purchasesapi.md#getpurchasepaymentraw)
* [getPurchasePayments](purchasesapi.md#getpurchasepayments)
* [getPurchasePaymentsRaw](purchasesapi.md#getpurchasepaymentsraw)
* [getPurchaseRaw](purchasesapi.md#getpurchaseraw)
* [getPurchases](purchasesapi.md#getpurchases)
* [getPurchasesRaw](purchasesapi.md#getpurchasesraw)
* [request](purchasesapi.md#protected-request)
* [updatePurchaseDraft](purchasesapi.md#updatepurchasedraft)
* [updatePurchaseDraftRaw](purchasesapi.md#updatepurchasedraftraw)
* [withMiddleware](purchasesapi.md#withmiddleware)
* [withPostMiddleware](purchasesapi.md#withpostmiddleware)
* [withPreMiddleware](purchasesapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new PurchasesApi**(`configuration`: [Configuration](configuration.md)‹›): *[PurchasesApi](purchasesapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](configuration.md)‹› | new Configuration() |

**Returns:** *[PurchasesApi](purchasesapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)‹›*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

## Methods

###  addAttachmentToPurchase

▸ **addAttachmentToPurchase**(`requestParameters`: [AddAttachmentToPurchaseRequest](../interfaces/addattachmenttopurchaserequest.md)): *Promise‹void›*

Creates and adds a new attachment to a Purchase

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddAttachmentToPurchaseRequest](../interfaces/addattachmenttopurchaserequest.md) |

**Returns:** *Promise‹void›*

___

###  addAttachmentToPurchaseDraft

▸ **addAttachmentToPurchaseDraft**(`requestParameters`: [AddAttachmentToPurchaseDraftRequest](../interfaces/addattachmenttopurchasedraftrequest.md)): *Promise‹void›*

Creates and adds a new attachment to a draft

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddAttachmentToPurchaseDraftRequest](../interfaces/addattachmenttopurchasedraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  addAttachmentToPurchaseDraftRaw

▸ **addAttachmentToPurchaseDraftRaw**(`requestParameters`: [AddAttachmentToPurchaseDraftRequest](../interfaces/addattachmenttopurchasedraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates and adds a new attachment to a draft

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddAttachmentToPurchaseDraftRequest](../interfaces/addattachmenttopurchasedraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  addAttachmentToPurchaseRaw

▸ **addAttachmentToPurchaseRaw**(`requestParameters`: [AddAttachmentToPurchaseRequest](../interfaces/addattachmenttopurchaserequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates and adds a new attachment to a Purchase

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddAttachmentToPurchaseRequest](../interfaces/addattachmenttopurchaserequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  createPurchase

▸ **createPurchase**(`requestParameters`: [CreatePurchaseRequest](../interfaces/createpurchaserequest.md)): *Promise‹void›*

Creates a new purchase.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreatePurchaseRequest](../interfaces/createpurchaserequest.md) |

**Returns:** *Promise‹void›*

___

###  createPurchaseDraft

▸ **createPurchaseDraft**(`requestParameters`: [CreatePurchaseDraftRequest](../interfaces/createpurchasedraftrequest.md)): *Promise‹void›*

Creates a purchase draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreatePurchaseDraftRequest](../interfaces/createpurchasedraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  createPurchaseDraftRaw

▸ **createPurchaseDraftRaw**(`requestParameters`: [CreatePurchaseDraftRequest](../interfaces/createpurchasedraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates a purchase draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreatePurchaseDraftRequest](../interfaces/createpurchasedraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  createPurchaseFromDraft

▸ **createPurchaseFromDraft**(`requestParameters`: [CreatePurchaseFromDraftRequest](../interfaces/createpurchasefromdraftrequest.md)): *Promise‹void›*

Creates a purchase from an already created draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreatePurchaseFromDraftRequest](../interfaces/createpurchasefromdraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  createPurchaseFromDraftRaw

▸ **createPurchaseFromDraftRaw**(`requestParameters`: [CreatePurchaseFromDraftRequest](../interfaces/createpurchasefromdraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates a purchase from an already created draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreatePurchaseFromDraftRequest](../interfaces/createpurchasefromdraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  createPurchasePayment

▸ **createPurchasePayment**(`requestParameters`: [CreatePurchasePaymentRequest](../interfaces/createpurchasepaymentrequest.md)): *Promise‹void›*

Creates a new payment for a purchase

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreatePurchasePaymentRequest](../interfaces/createpurchasepaymentrequest.md) |

**Returns:** *Promise‹void›*

___

###  createPurchasePaymentRaw

▸ **createPurchasePaymentRaw**(`requestParameters`: [CreatePurchasePaymentRequest](../interfaces/createpurchasepaymentrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates a new payment for a purchase

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreatePurchasePaymentRequest](../interfaces/createpurchasepaymentrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  createPurchaseRaw

▸ **createPurchaseRaw**(`requestParameters`: [CreatePurchaseRequest](../interfaces/createpurchaserequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates a new purchase.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreatePurchaseRequest](../interfaces/createpurchaserequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  deletePurchaseDraft

▸ **deletePurchaseDraft**(`requestParameters`: [DeletePurchaseDraftRequest](../interfaces/deletepurchasedraftrequest.md)): *Promise‹void›*

Delete draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeletePurchaseDraftRequest](../interfaces/deletepurchasedraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  deletePurchaseDraftRaw

▸ **deletePurchaseDraftRaw**(`requestParameters`: [DeletePurchaseDraftRequest](../interfaces/deletepurchasedraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Delete draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeletePurchaseDraftRequest](../interfaces/deletepurchasedraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  getPurchase

▸ **getPurchase**(`requestParameters`: [GetPurchaseRequest](../interfaces/getpurchaserequest.md)): *Promise‹[PurchaseResult](../interfaces/purchaseresult.md)›*

Returns purchase with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetPurchaseRequest](../interfaces/getpurchaserequest.md) |

**Returns:** *Promise‹[PurchaseResult](../interfaces/purchaseresult.md)›*

___

###  getPurchaseAttachments

▸ **getPurchaseAttachments**(`requestParameters`: [GetPurchaseAttachmentsRequest](../interfaces/getpurchaseattachmentsrequest.md)): *Promise‹Array‹[Attachment](../interfaces/attachment.md)››*

Returns all attachments for specified purchase.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetPurchaseAttachmentsRequest](../interfaces/getpurchaseattachmentsrequest.md) |

**Returns:** *Promise‹Array‹[Attachment](../interfaces/attachment.md)››*

___

###  getPurchaseAttachmentsRaw

▸ **getPurchaseAttachmentsRaw**(`requestParameters`: [GetPurchaseAttachmentsRequest](../interfaces/getpurchaseattachmentsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Attachment](../interfaces/attachment.md)›››*

Returns all attachments for specified purchase.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetPurchaseAttachmentsRequest](../interfaces/getpurchaseattachmentsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Attachment](../interfaces/attachment.md)›››*

___

###  getPurchaseDraft

▸ **getPurchaseDraft**(`requestParameters`: [GetPurchaseDraftRequest](../interfaces/getpurchasedraftrequest.md)): *Promise‹[DraftResult](../interfaces/draftresult.md)›*

Returns draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetPurchaseDraftRequest](../interfaces/getpurchasedraftrequest.md) |

**Returns:** *Promise‹[DraftResult](../interfaces/draftresult.md)›*

___

###  getPurchaseDraftAttachments

▸ **getPurchaseDraftAttachments**(`requestParameters`: [GetPurchaseDraftAttachmentsRequest](../interfaces/getpurchasedraftattachmentsrequest.md)): *Promise‹Array‹[Attachment](../interfaces/attachment.md)››*

Returns all attachments for specified draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetPurchaseDraftAttachmentsRequest](../interfaces/getpurchasedraftattachmentsrequest.md) |

**Returns:** *Promise‹Array‹[Attachment](../interfaces/attachment.md)››*

___

###  getPurchaseDraftAttachmentsRaw

▸ **getPurchaseDraftAttachmentsRaw**(`requestParameters`: [GetPurchaseDraftAttachmentsRequest](../interfaces/getpurchasedraftattachmentsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Attachment](../interfaces/attachment.md)›››*

Returns all attachments for specified draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetPurchaseDraftAttachmentsRequest](../interfaces/getpurchasedraftattachmentsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Attachment](../interfaces/attachment.md)›››*

___

###  getPurchaseDraftRaw

▸ **getPurchaseDraftRaw**(`requestParameters`: [GetPurchaseDraftRequest](../interfaces/getpurchasedraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[DraftResult](../interfaces/draftresult.md)››*

Returns draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetPurchaseDraftRequest](../interfaces/getpurchasedraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[DraftResult](../interfaces/draftresult.md)››*

___

###  getPurchaseDrafts

▸ **getPurchaseDrafts**(`requestParameters`: [GetPurchaseDraftsRequest](../interfaces/getpurchasedraftsrequest.md)): *Promise‹Array‹[DraftResult](../interfaces/draftresult.md)››*

Returns all purchase drafts for given company.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetPurchaseDraftsRequest](../interfaces/getpurchasedraftsrequest.md) |

**Returns:** *Promise‹Array‹[DraftResult](../interfaces/draftresult.md)››*

___

###  getPurchaseDraftsRaw

▸ **getPurchaseDraftsRaw**(`requestParameters`: [GetPurchaseDraftsRequest](../interfaces/getpurchasedraftsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[DraftResult](../interfaces/draftresult.md)›››*

Returns all purchase drafts for given company.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetPurchaseDraftsRequest](../interfaces/getpurchasedraftsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[DraftResult](../interfaces/draftresult.md)›››*

___

###  getPurchasePayment

▸ **getPurchasePayment**(`requestParameters`: [GetPurchasePaymentRequest](../interfaces/getpurchasepaymentrequest.md)): *Promise‹[Payment](../interfaces/payment.md)›*

Returns given payment for specified purchase

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetPurchasePaymentRequest](../interfaces/getpurchasepaymentrequest.md) |

**Returns:** *Promise‹[Payment](../interfaces/payment.md)›*

___

###  getPurchasePaymentRaw

▸ **getPurchasePaymentRaw**(`requestParameters`: [GetPurchasePaymentRequest](../interfaces/getpurchasepaymentrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[Payment](../interfaces/payment.md)››*

Returns given payment for specified purchase

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetPurchasePaymentRequest](../interfaces/getpurchasepaymentrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[Payment](../interfaces/payment.md)››*

___

###  getPurchasePayments

▸ **getPurchasePayments**(`requestParameters`: [GetPurchasePaymentsRequest](../interfaces/getpurchasepaymentsrequest.md)): *Promise‹Array‹[Payment](../interfaces/payment.md)››*

Returns all purchases for given company

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetPurchasePaymentsRequest](../interfaces/getpurchasepaymentsrequest.md) |

**Returns:** *Promise‹Array‹[Payment](../interfaces/payment.md)››*

___

###  getPurchasePaymentsRaw

▸ **getPurchasePaymentsRaw**(`requestParameters`: [GetPurchasePaymentsRequest](../interfaces/getpurchasepaymentsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Payment](../interfaces/payment.md)›››*

Returns all purchases for given company

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetPurchasePaymentsRequest](../interfaces/getpurchasepaymentsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Payment](../interfaces/payment.md)›››*

___

###  getPurchaseRaw

▸ **getPurchaseRaw**(`requestParameters`: [GetPurchaseRequest](../interfaces/getpurchaserequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[PurchaseResult](../interfaces/purchaseresult.md)››*

Returns purchase with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetPurchaseRequest](../interfaces/getpurchaserequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[PurchaseResult](../interfaces/purchaseresult.md)››*

___

###  getPurchases

▸ **getPurchases**(`requestParameters`: [GetPurchasesRequest](../interfaces/getpurchasesrequest.md)): *Promise‹Array‹[PurchaseResult](../interfaces/purchaseresult.md)››*

Returns all purchases for given company

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetPurchasesRequest](../interfaces/getpurchasesrequest.md) |

**Returns:** *Promise‹Array‹[PurchaseResult](../interfaces/purchaseresult.md)››*

___

###  getPurchasesRaw

▸ **getPurchasesRaw**(`requestParameters`: [GetPurchasesRequest](../interfaces/getpurchasesrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[PurchaseResult](../interfaces/purchaseresult.md)›››*

Returns all purchases for given company

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetPurchasesRequest](../interfaces/getpurchasesrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[PurchaseResult](../interfaces/purchaseresult.md)›››*

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

###  updatePurchaseDraft

▸ **updatePurchaseDraft**(`requestParameters`: [UpdatePurchaseDraftRequest](../interfaces/updatepurchasedraftrequest.md)): *Promise‹void›*

Updates draft with provided id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdatePurchaseDraftRequest](../interfaces/updatepurchasedraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  updatePurchaseDraftRaw

▸ **updatePurchaseDraftRaw**(`requestParameters`: [UpdatePurchaseDraftRequest](../interfaces/updatepurchasedraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Updates draft with provided id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdatePurchaseDraftRequest](../interfaces/updatepurchasedraftrequest.md) |

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
