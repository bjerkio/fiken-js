[fiken](../README.md) › [UserApi](userapi.md)

# Class: UserApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **UserApi**

## Index

### Constructors

* [constructor](userapi.md#constructor)

### Properties

* [configuration](userapi.md#protected-configuration)

### Methods

* [getUser](userapi.md#getuser)
* [getUserRaw](userapi.md#getuserraw)
* [request](userapi.md#protected-request)
* [withMiddleware](userapi.md#withmiddleware)
* [withPostMiddleware](userapi.md#withpostmiddleware)
* [withPreMiddleware](userapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new UserApi**(`configuration`: [Configuration](configuration.md)‹›): *[UserApi](userapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](configuration.md)‹› | new Configuration() |

**Returns:** *[UserApi](userapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)‹›*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

## Methods

###  getUser

▸ **getUser**(): *Promise‹[Userinfo](../interfaces/userinfo.md)›*

Returns information about the user

**Returns:** *Promise‹[Userinfo](../interfaces/userinfo.md)›*

___

###  getUserRaw

▸ **getUserRaw**(): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[Userinfo](../interfaces/userinfo.md)››*

Returns information about the user

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[Userinfo](../interfaces/userinfo.md)››*

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
