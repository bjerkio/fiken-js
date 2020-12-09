[fiken](../README.md) › [TransactionsApi](transactionsapi.md)

# Class: TransactionsApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **TransactionsApi**

## Index

### Constructors

* [constructor](transactionsapi.md#constructor)

### Properties

* [configuration](transactionsapi.md#protected-configuration)

### Methods

* [getTransaction](transactionsapi.md#gettransaction)
* [getTransactionRaw](transactionsapi.md#gettransactionraw)
* [request](transactionsapi.md#protected-request)
* [withMiddleware](transactionsapi.md#withmiddleware)
* [withPostMiddleware](transactionsapi.md#withpostmiddleware)
* [withPreMiddleware](transactionsapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new TransactionsApi**(`configuration`: [Configuration](configuration.md)‹›): *[TransactionsApi](transactionsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](configuration.md)‹› | new Configuration() |

**Returns:** *[TransactionsApi](transactionsapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)‹›*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

## Methods

###  getTransaction

▸ **getTransaction**(`requestParameters`: [GetTransactionRequest](../interfaces/gettransactionrequest.md)): *Promise‹[Transaction](../interfaces/transaction.md)›*

Returns given transaction with associated id. Transaction id is returned in GET calls for sales, purchases, and journal entries.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetTransactionRequest](../interfaces/gettransactionrequest.md) |

**Returns:** *Promise‹[Transaction](../interfaces/transaction.md)›*

___

###  getTransactionRaw

▸ **getTransactionRaw**(`requestParameters`: [GetTransactionRequest](../interfaces/gettransactionrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[Transaction](../interfaces/transaction.md)››*

Returns given transaction with associated id. Transaction id is returned in GET calls for sales, purchases, and journal entries.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetTransactionRequest](../interfaces/gettransactionrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[Transaction](../interfaces/transaction.md)››*

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
