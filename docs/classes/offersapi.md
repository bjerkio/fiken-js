[fiken](../README.md) › [OffersApi](offersapi.md)

# Class: OffersApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **OffersApi**

## Index

### Constructors

* [constructor](offersapi.md#constructor)

### Properties

* [configuration](offersapi.md#protected-configuration)

### Methods

* [addAttachmentToOfferDraft](offersapi.md#addattachmenttoofferdraft)
* [addAttachmentToOfferDraftRaw](offersapi.md#addattachmenttoofferdraftraw)
* [createOfferDraft](offersapi.md#createofferdraft)
* [createOfferDraftRaw](offersapi.md#createofferdraftraw)
* [createOfferFromDraft](offersapi.md#createofferfromdraft)
* [createOfferFromDraftRaw](offersapi.md#createofferfromdraftraw)
* [deleteOfferDraft](offersapi.md#deleteofferdraft)
* [deleteOfferDraftRaw](offersapi.md#deleteofferdraftraw)
* [getOffer](offersapi.md#getoffer)
* [getOfferDraft](offersapi.md#getofferdraft)
* [getOfferDraftAttachments](offersapi.md#getofferdraftattachments)
* [getOfferDraftAttachmentsRaw](offersapi.md#getofferdraftattachmentsraw)
* [getOfferDraftRaw](offersapi.md#getofferdraftraw)
* [getOfferDrafts](offersapi.md#getofferdrafts)
* [getOfferDraftsRaw](offersapi.md#getofferdraftsraw)
* [getOfferRaw](offersapi.md#getofferraw)
* [getOffers](offersapi.md#getoffers)
* [getOffersRaw](offersapi.md#getoffersraw)
* [request](offersapi.md#protected-request)
* [updateOfferDraft](offersapi.md#updateofferdraft)
* [updateOfferDraftRaw](offersapi.md#updateofferdraftraw)
* [withMiddleware](offersapi.md#withmiddleware)
* [withPostMiddleware](offersapi.md#withpostmiddleware)
* [withPreMiddleware](offersapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new OffersApi**(`configuration`: [Configuration](configuration.md)‹›): *[OffersApi](offersapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](configuration.md)‹› | new Configuration() |

**Returns:** *[OffersApi](offersapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)‹›*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

## Methods

###  addAttachmentToOfferDraft

▸ **addAttachmentToOfferDraft**(`requestParameters`: [AddAttachmentToOfferDraftRequest](../interfaces/addattachmenttoofferdraftrequest.md)): *Promise‹void›*

Creates and adds a new attachment to an offer draft

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddAttachmentToOfferDraftRequest](../interfaces/addattachmenttoofferdraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  addAttachmentToOfferDraftRaw

▸ **addAttachmentToOfferDraftRaw**(`requestParameters`: [AddAttachmentToOfferDraftRequest](../interfaces/addattachmenttoofferdraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates and adds a new attachment to an offer draft

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddAttachmentToOfferDraftRequest](../interfaces/addattachmenttoofferdraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  createOfferDraft

▸ **createOfferDraft**(`requestParameters`: [CreateOfferDraftRequest](../interfaces/createofferdraftrequest.md)): *Promise‹void›*

Creates an offer draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateOfferDraftRequest](../interfaces/createofferdraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  createOfferDraftRaw

▸ **createOfferDraftRaw**(`requestParameters`: [CreateOfferDraftRequest](../interfaces/createofferdraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates an offer draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateOfferDraftRequest](../interfaces/createofferdraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  createOfferFromDraft

▸ **createOfferFromDraft**(`requestParameters`: [CreateOfferFromDraftRequest](../interfaces/createofferfromdraftrequest.md)): *Promise‹void›*

Creates an offer from an already created draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateOfferFromDraftRequest](../interfaces/createofferfromdraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  createOfferFromDraftRaw

▸ **createOfferFromDraftRaw**(`requestParameters`: [CreateOfferFromDraftRequest](../interfaces/createofferfromdraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates an offer from an already created draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateOfferFromDraftRequest](../interfaces/createofferfromdraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  deleteOfferDraft

▸ **deleteOfferDraft**(`requestParameters`: [DeleteOfferDraftRequest](../interfaces/deleteofferdraftrequest.md)): *Promise‹void›*

Delete offer draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteOfferDraftRequest](../interfaces/deleteofferdraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  deleteOfferDraftRaw

▸ **deleteOfferDraftRaw**(`requestParameters`: [DeleteOfferDraftRequest](../interfaces/deleteofferdraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Delete offer draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteOfferDraftRequest](../interfaces/deleteofferdraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  getOffer

▸ **getOffer**(`requestParameters`: [GetOfferRequest](../interfaces/getofferrequest.md)): *Promise‹[Offer](../interfaces/offer.md)›*

Returns offer with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetOfferRequest](../interfaces/getofferrequest.md) |

**Returns:** *Promise‹[Offer](../interfaces/offer.md)›*

___

###  getOfferDraft

▸ **getOfferDraft**(`requestParameters`: [GetOfferDraftRequest](../interfaces/getofferdraftrequest.md)): *Promise‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)›*

Returns offer draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetOfferDraftRequest](../interfaces/getofferdraftrequest.md) |

**Returns:** *Promise‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)›*

___

###  getOfferDraftAttachments

▸ **getOfferDraftAttachments**(`requestParameters`: [GetOfferDraftAttachmentsRequest](../interfaces/getofferdraftattachmentsrequest.md)): *Promise‹Array‹[Attachment](../interfaces/attachment.md)››*

Returns all attachments for specified draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetOfferDraftAttachmentsRequest](../interfaces/getofferdraftattachmentsrequest.md) |

**Returns:** *Promise‹Array‹[Attachment](../interfaces/attachment.md)››*

___

###  getOfferDraftAttachmentsRaw

▸ **getOfferDraftAttachmentsRaw**(`requestParameters`: [GetOfferDraftAttachmentsRequest](../interfaces/getofferdraftattachmentsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Attachment](../interfaces/attachment.md)›››*

Returns all attachments for specified draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetOfferDraftAttachmentsRequest](../interfaces/getofferdraftattachmentsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Attachment](../interfaces/attachment.md)›››*

___

###  getOfferDraftRaw

▸ **getOfferDraftRaw**(`requestParameters`: [GetOfferDraftRequest](../interfaces/getofferdraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)››*

Returns offer draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetOfferDraftRequest](../interfaces/getofferdraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)››*

___

###  getOfferDrafts

▸ **getOfferDrafts**(`requestParameters`: [GetOfferDraftsRequest](../interfaces/getofferdraftsrequest.md)): *Promise‹Array‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)››*

Returns all offer drafts for given company.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetOfferDraftsRequest](../interfaces/getofferdraftsrequest.md) |

**Returns:** *Promise‹Array‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)››*

___

###  getOfferDraftsRaw

▸ **getOfferDraftsRaw**(`requestParameters`: [GetOfferDraftsRequest](../interfaces/getofferdraftsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)›››*

Returns all offer drafts for given company.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetOfferDraftsRequest](../interfaces/getofferdraftsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)›››*

___

###  getOfferRaw

▸ **getOfferRaw**(`requestParameters`: [GetOfferRequest](../interfaces/getofferrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[Offer](../interfaces/offer.md)››*

Returns offer with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetOfferRequest](../interfaces/getofferrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[Offer](../interfaces/offer.md)››*

___

###  getOffers

▸ **getOffers**(`requestParameters`: [GetOffersRequest](../interfaces/getoffersrequest.md)): *Promise‹Array‹[Offer](../interfaces/offer.md)››*

Returns all offers for given company

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetOffersRequest](../interfaces/getoffersrequest.md) |

**Returns:** *Promise‹Array‹[Offer](../interfaces/offer.md)››*

___

###  getOffersRaw

▸ **getOffersRaw**(`requestParameters`: [GetOffersRequest](../interfaces/getoffersrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Offer](../interfaces/offer.md)›››*

Returns all offers for given company

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetOffersRequest](../interfaces/getoffersrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Offer](../interfaces/offer.md)›››*

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

###  updateOfferDraft

▸ **updateOfferDraft**(`requestParameters`: [UpdateOfferDraftRequest](../interfaces/updateofferdraftrequest.md)): *Promise‹void›*

Updates offer draft with provided id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdateOfferDraftRequest](../interfaces/updateofferdraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  updateOfferDraftRaw

▸ **updateOfferDraftRaw**(`requestParameters`: [UpdateOfferDraftRequest](../interfaces/updateofferdraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Updates offer draft with provided id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdateOfferDraftRequest](../interfaces/updateofferdraftrequest.md) |

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
