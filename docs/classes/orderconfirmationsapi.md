[fiken](../README.md) › [OrderConfirmationsApi](orderconfirmationsapi.md)

# Class: OrderConfirmationsApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **OrderConfirmationsApi**

## Index

### Constructors

* [constructor](orderconfirmationsapi.md#constructor)

### Properties

* [configuration](orderconfirmationsapi.md#protected-configuration)

### Methods

* [addAttachmentToOrderConfirmationDraft](orderconfirmationsapi.md#addattachmenttoorderconfirmationdraft)
* [addAttachmentToOrderConfirmationDraftRaw](orderconfirmationsapi.md#addattachmenttoorderconfirmationdraftraw)
* [createOrderConfirmationDraft](orderconfirmationsapi.md#createorderconfirmationdraft)
* [createOrderConfirmationDraftRaw](orderconfirmationsapi.md#createorderconfirmationdraftraw)
* [createOrderConfirmationFromDraft](orderconfirmationsapi.md#createorderconfirmationfromdraft)
* [createOrderConfirmationFromDraftRaw](orderconfirmationsapi.md#createorderconfirmationfromdraftraw)
* [deleteOrderConfirmationDraft](orderconfirmationsapi.md#deleteorderconfirmationdraft)
* [deleteOrderConfirmationDraftRaw](orderconfirmationsapi.md#deleteorderconfirmationdraftraw)
* [getOrderConfirmation](orderconfirmationsapi.md#getorderconfirmation)
* [getOrderConfirmationDraft](orderconfirmationsapi.md#getorderconfirmationdraft)
* [getOrderConfirmationDraftAttachments](orderconfirmationsapi.md#getorderconfirmationdraftattachments)
* [getOrderConfirmationDraftAttachmentsRaw](orderconfirmationsapi.md#getorderconfirmationdraftattachmentsraw)
* [getOrderConfirmationDraftRaw](orderconfirmationsapi.md#getorderconfirmationdraftraw)
* [getOrderConfirmationDrafts](orderconfirmationsapi.md#getorderconfirmationdrafts)
* [getOrderConfirmationDraftsRaw](orderconfirmationsapi.md#getorderconfirmationdraftsraw)
* [getOrderConfirmationRaw](orderconfirmationsapi.md#getorderconfirmationraw)
* [getOrderConfirmations](orderconfirmationsapi.md#getorderconfirmations)
* [getOrderConfirmationsRaw](orderconfirmationsapi.md#getorderconfirmationsraw)
* [request](orderconfirmationsapi.md#protected-request)
* [updateOrderConfirmationDraft](orderconfirmationsapi.md#updateorderconfirmationdraft)
* [updateOrderConfirmationDraftRaw](orderconfirmationsapi.md#updateorderconfirmationdraftraw)
* [withMiddleware](orderconfirmationsapi.md#withmiddleware)
* [withPostMiddleware](orderconfirmationsapi.md#withpostmiddleware)
* [withPreMiddleware](orderconfirmationsapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new OrderConfirmationsApi**(`configuration`: [Configuration](configuration.md)‹›): *[OrderConfirmationsApi](orderconfirmationsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](configuration.md)‹› | new Configuration() |

**Returns:** *[OrderConfirmationsApi](orderconfirmationsapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)‹›*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

## Methods

###  addAttachmentToOrderConfirmationDraft

▸ **addAttachmentToOrderConfirmationDraft**(`requestParameters`: [AddAttachmentToOrderConfirmationDraftRequest](../interfaces/addattachmenttoorderconfirmationdraftrequest.md)): *Promise‹void›*

Creates and adds a new attachment to an order confirmation draft

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddAttachmentToOrderConfirmationDraftRequest](../interfaces/addattachmenttoorderconfirmationdraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  addAttachmentToOrderConfirmationDraftRaw

▸ **addAttachmentToOrderConfirmationDraftRaw**(`requestParameters`: [AddAttachmentToOrderConfirmationDraftRequest](../interfaces/addattachmenttoorderconfirmationdraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates and adds a new attachment to an order confirmation draft

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddAttachmentToOrderConfirmationDraftRequest](../interfaces/addattachmenttoorderconfirmationdraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  createOrderConfirmationDraft

▸ **createOrderConfirmationDraft**(`requestParameters`: [CreateOrderConfirmationDraftRequest](../interfaces/createorderconfirmationdraftrequest.md)): *Promise‹void›*

Creates an order confirmation draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateOrderConfirmationDraftRequest](../interfaces/createorderconfirmationdraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  createOrderConfirmationDraftRaw

▸ **createOrderConfirmationDraftRaw**(`requestParameters`: [CreateOrderConfirmationDraftRequest](../interfaces/createorderconfirmationdraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates an order confirmation draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateOrderConfirmationDraftRequest](../interfaces/createorderconfirmationdraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  createOrderConfirmationFromDraft

▸ **createOrderConfirmationFromDraft**(`requestParameters`: [CreateOrderConfirmationFromDraftRequest](../interfaces/createorderconfirmationfromdraftrequest.md)): *Promise‹void›*

Creates an order confirmation from an already created draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateOrderConfirmationFromDraftRequest](../interfaces/createorderconfirmationfromdraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  createOrderConfirmationFromDraftRaw

▸ **createOrderConfirmationFromDraftRaw**(`requestParameters`: [CreateOrderConfirmationFromDraftRequest](../interfaces/createorderconfirmationfromdraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates an order confirmation from an already created draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateOrderConfirmationFromDraftRequest](../interfaces/createorderconfirmationfromdraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  deleteOrderConfirmationDraft

▸ **deleteOrderConfirmationDraft**(`requestParameters`: [DeleteOrderConfirmationDraftRequest](../interfaces/deleteorderconfirmationdraftrequest.md)): *Promise‹void›*

Delete order confirmation draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteOrderConfirmationDraftRequest](../interfaces/deleteorderconfirmationdraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  deleteOrderConfirmationDraftRaw

▸ **deleteOrderConfirmationDraftRaw**(`requestParameters`: [DeleteOrderConfirmationDraftRequest](../interfaces/deleteorderconfirmationdraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Delete order confirmation draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteOrderConfirmationDraftRequest](../interfaces/deleteorderconfirmationdraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  getOrderConfirmation

▸ **getOrderConfirmation**(`requestParameters`: [GetOrderConfirmationRequest](../interfaces/getorderconfirmationrequest.md)): *Promise‹[OrderConfirmation](../interfaces/orderconfirmation.md)›*

Returns order confirmation with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetOrderConfirmationRequest](../interfaces/getorderconfirmationrequest.md) |

**Returns:** *Promise‹[OrderConfirmation](../interfaces/orderconfirmation.md)›*

___

###  getOrderConfirmationDraft

▸ **getOrderConfirmationDraft**(`requestParameters`: [GetOrderConfirmationDraftRequest](../interfaces/getorderconfirmationdraftrequest.md)): *Promise‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)›*

Returns order confirmation draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetOrderConfirmationDraftRequest](../interfaces/getorderconfirmationdraftrequest.md) |

**Returns:** *Promise‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)›*

___

###  getOrderConfirmationDraftAttachments

▸ **getOrderConfirmationDraftAttachments**(`requestParameters`: [GetOrderConfirmationDraftAttachmentsRequest](../interfaces/getorderconfirmationdraftattachmentsrequest.md)): *Promise‹Array‹[Attachment](../interfaces/attachment.md)››*

Returns all attachments for specified draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetOrderConfirmationDraftAttachmentsRequest](../interfaces/getorderconfirmationdraftattachmentsrequest.md) |

**Returns:** *Promise‹Array‹[Attachment](../interfaces/attachment.md)››*

___

###  getOrderConfirmationDraftAttachmentsRaw

▸ **getOrderConfirmationDraftAttachmentsRaw**(`requestParameters`: [GetOrderConfirmationDraftAttachmentsRequest](../interfaces/getorderconfirmationdraftattachmentsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Attachment](../interfaces/attachment.md)›››*

Returns all attachments for specified draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetOrderConfirmationDraftAttachmentsRequest](../interfaces/getorderconfirmationdraftattachmentsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Attachment](../interfaces/attachment.md)›››*

___

###  getOrderConfirmationDraftRaw

▸ **getOrderConfirmationDraftRaw**(`requestParameters`: [GetOrderConfirmationDraftRequest](../interfaces/getorderconfirmationdraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)››*

Returns order confirmation draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetOrderConfirmationDraftRequest](../interfaces/getorderconfirmationdraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)››*

___

###  getOrderConfirmationDrafts

▸ **getOrderConfirmationDrafts**(`requestParameters`: [GetOrderConfirmationDraftsRequest](../interfaces/getorderconfirmationdraftsrequest.md)): *Promise‹Array‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)››*

Returns all order confirmation drafts for given company.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetOrderConfirmationDraftsRequest](../interfaces/getorderconfirmationdraftsrequest.md) |

**Returns:** *Promise‹Array‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)››*

___

###  getOrderConfirmationDraftsRaw

▸ **getOrderConfirmationDraftsRaw**(`requestParameters`: [GetOrderConfirmationDraftsRequest](../interfaces/getorderconfirmationdraftsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)›››*

Returns all order confirmation drafts for given company.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetOrderConfirmationDraftsRequest](../interfaces/getorderconfirmationdraftsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)›››*

___

###  getOrderConfirmationRaw

▸ **getOrderConfirmationRaw**(`requestParameters`: [GetOrderConfirmationRequest](../interfaces/getorderconfirmationrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[OrderConfirmation](../interfaces/orderconfirmation.md)››*

Returns order confirmation with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetOrderConfirmationRequest](../interfaces/getorderconfirmationrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[OrderConfirmation](../interfaces/orderconfirmation.md)››*

___

###  getOrderConfirmations

▸ **getOrderConfirmations**(`requestParameters`: [GetOrderConfirmationsRequest](../interfaces/getorderconfirmationsrequest.md)): *Promise‹Array‹[OrderConfirmation](../interfaces/orderconfirmation.md)››*

Returns all order confirmations for given company

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetOrderConfirmationsRequest](../interfaces/getorderconfirmationsrequest.md) |

**Returns:** *Promise‹Array‹[OrderConfirmation](../interfaces/orderconfirmation.md)››*

___

###  getOrderConfirmationsRaw

▸ **getOrderConfirmationsRaw**(`requestParameters`: [GetOrderConfirmationsRequest](../interfaces/getorderconfirmationsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[OrderConfirmation](../interfaces/orderconfirmation.md)›››*

Returns all order confirmations for given company

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetOrderConfirmationsRequest](../interfaces/getorderconfirmationsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[OrderConfirmation](../interfaces/orderconfirmation.md)›››*

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

###  updateOrderConfirmationDraft

▸ **updateOrderConfirmationDraft**(`requestParameters`: [UpdateOrderConfirmationDraftRequest](../interfaces/updateorderconfirmationdraftrequest.md)): *Promise‹void›*

Updates order confirmation draft with provided id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdateOrderConfirmationDraftRequest](../interfaces/updateorderconfirmationdraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  updateOrderConfirmationDraftRaw

▸ **updateOrderConfirmationDraftRaw**(`requestParameters`: [UpdateOrderConfirmationDraftRequest](../interfaces/updateorderconfirmationdraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Updates order confirmation draft with provided id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdateOrderConfirmationDraftRequest](../interfaces/updateorderconfirmationdraftrequest.md) |

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
