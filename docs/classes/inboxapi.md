[fiken](../README.md) › [InboxApi](inboxapi.md)

# Class: InboxApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **InboxApi**

## Index

### Constructors

* [constructor](inboxapi.md#constructor)

### Properties

* [configuration](inboxapi.md#protected-configuration)

### Methods

* [createInboxDocument](inboxapi.md#createinboxdocument)
* [createInboxDocumentRaw](inboxapi.md#createinboxdocumentraw)
* [getInbox](inboxapi.md#getinbox)
* [getInboxDocument](inboxapi.md#getinboxdocument)
* [getInboxDocumentRaw](inboxapi.md#getinboxdocumentraw)
* [getInboxRaw](inboxapi.md#getinboxraw)
* [request](inboxapi.md#protected-request)
* [withMiddleware](inboxapi.md#withmiddleware)
* [withPostMiddleware](inboxapi.md#withpostmiddleware)
* [withPreMiddleware](inboxapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new InboxApi**(`configuration`: [Configuration](configuration.md)‹›): *[InboxApi](inboxapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](configuration.md)‹› | new Configuration() |

**Returns:** *[InboxApi](inboxapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)‹›*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

## Methods

###  createInboxDocument

▸ **createInboxDocument**(`requestParameters`: [CreateInboxDocumentRequest](../interfaces/createinboxdocumentrequest.md)): *Promise‹void›*

Upload a document to the inbox

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateInboxDocumentRequest](../interfaces/createinboxdocumentrequest.md) |

**Returns:** *Promise‹void›*

___

###  createInboxDocumentRaw

▸ **createInboxDocumentRaw**(`requestParameters`: [CreateInboxDocumentRequest](../interfaces/createinboxdocumentrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Upload a document to the inbox

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateInboxDocumentRequest](../interfaces/createinboxdocumentrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  getInbox

▸ **getInbox**(`requestParameters`: [GetInboxRequest](../interfaces/getinboxrequest.md)): *Promise‹Array‹[InboxResult](../interfaces/inboxresult.md)››*

Returns the contents of the inbox for given company.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetInboxRequest](../interfaces/getinboxrequest.md) |

**Returns:** *Promise‹Array‹[InboxResult](../interfaces/inboxresult.md)››*

___

###  getInboxDocument

▸ **getInboxDocument**(`requestParameters`: [GetInboxDocumentRequest](../interfaces/getinboxdocumentrequest.md)): *Promise‹[InboxResult](../interfaces/inboxresult.md)›*

Returns the inbox document with specified id

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetInboxDocumentRequest](../interfaces/getinboxdocumentrequest.md) |

**Returns:** *Promise‹[InboxResult](../interfaces/inboxresult.md)›*

___

###  getInboxDocumentRaw

▸ **getInboxDocumentRaw**(`requestParameters`: [GetInboxDocumentRequest](../interfaces/getinboxdocumentrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[InboxResult](../interfaces/inboxresult.md)››*

Returns the inbox document with specified id

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetInboxDocumentRequest](../interfaces/getinboxdocumentrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[InboxResult](../interfaces/inboxresult.md)››*

___

###  getInboxRaw

▸ **getInboxRaw**(`requestParameters`: [GetInboxRequest](../interfaces/getinboxrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[InboxResult](../interfaces/inboxresult.md)›››*

Returns the contents of the inbox for given company.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetInboxRequest](../interfaces/getinboxrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[InboxResult](../interfaces/inboxresult.md)›››*

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
