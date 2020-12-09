[fiken](../README.md) › [BaseAPI](baseapi.md)

# Class: BaseAPI

This is the base class for all generated API classes.

## Hierarchy

* **BaseAPI**

  ↳ [AccountsApi](accountsapi.md)

  ↳ [BankAccountsApi](bankaccountsapi.md)

  ↳ [CompaniesApi](companiesapi.md)

  ↳ [ContactsApi](contactsapi.md)

  ↳ [CreditNotesApi](creditnotesapi.md)

  ↳ [InboxApi](inboxapi.md)

  ↳ [InvoicesApi](invoicesapi.md)

  ↳ [JournalEntriesApi](journalentriesapi.md)

  ↳ [OffersApi](offersapi.md)

  ↳ [OrderConfirmationsApi](orderconfirmationsapi.md)

  ↳ [ProductsApi](productsapi.md)

  ↳ [ProjectsApi](projectsapi.md)

  ↳ [PurchasesApi](purchasesapi.md)

  ↳ [SalesApi](salesapi.md)

  ↳ [TransactionsApi](transactionsapi.md)

  ↳ [UserApi](userapi.md)

## Index

### Constructors

* [constructor](baseapi.md#constructor)

### Properties

* [configuration](baseapi.md#protected-configuration)
* [middleware](baseapi.md#private-middleware)

### Methods

* [clone](baseapi.md#private-clone)
* [createFetchParams](baseapi.md#private-createfetchparams)
* [fetchApi](baseapi.md#private-fetchapi)
* [request](baseapi.md#protected-request)
* [withMiddleware](baseapi.md#withmiddleware)
* [withPostMiddleware](baseapi.md#withpostmiddleware)
* [withPreMiddleware](baseapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new BaseAPI**(`configuration`: [Configuration](configuration.md)‹›): *[BaseAPI](baseapi.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](configuration.md)‹› | new Configuration() |

**Returns:** *[BaseAPI](baseapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)‹›*

___

### `Private` middleware

• **middleware**: *[Middleware](../interfaces/middleware.md)[]*

## Methods

### `Private` clone

▸ **clone**‹**T**›(`this`: T): *T*

Create a shallow clone of `this` by constructing a new instance
and then shallow cloning data members.

**Type parameters:**

▪ **T**: *[BaseAPI](baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |

**Returns:** *T*

___

### `Private` createFetchParams

▸ **createFetchParams**(`context`: [RequestOpts](../interfaces/requestopts.md)): *object*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [RequestOpts](../interfaces/requestopts.md) |

**Returns:** *object*

* **init**(): *object*

  * **body**: *any*

  * **credentials**: *RequestCredentials* = this.configuration.credentials

  * **headers**: *[HTTPHeaders](../README.md#httpheaders)* = headers

  * **method**: *[HTTPMethod](../README.md#httpmethod)* = context.method

* **url**: *string*

___

### `Private` fetchApi

▸ **fetchApi**(`url`: string, `init`: RequestInit): *Promise‹Response›*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`init` | RequestInit |

**Returns:** *Promise‹Response›*

___

### `Protected` request

▸ **request**(`context`: [RequestOpts](../interfaces/requestopts.md)): *Promise‹Response›*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [RequestOpts](../interfaces/requestopts.md) |

**Returns:** *Promise‹Response›*

___

###  withMiddleware

▸ **withMiddleware**‹**T**›(`this`: T, ...`middlewares`: [Middleware](../interfaces/middleware.md)[]): *T*

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

**Type parameters:**

▪ **T**: *[BaseAPI](baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...preMiddlewares` | Array‹Middleware["pre"]› |

**Returns:** *T*
