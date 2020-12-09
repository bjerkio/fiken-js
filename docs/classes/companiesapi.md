[fiken](../README.md) › [CompaniesApi](companiesapi.md)

# Class: CompaniesApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **CompaniesApi**

## Index

### Constructors

* [constructor](companiesapi.md#constructor)

### Properties

* [configuration](companiesapi.md#protected-configuration)

### Methods

* [getCompanies](companiesapi.md#getcompanies)
* [getCompaniesRaw](companiesapi.md#getcompaniesraw)
* [getCompany](companiesapi.md#getcompany)
* [getCompanyRaw](companiesapi.md#getcompanyraw)
* [request](companiesapi.md#protected-request)
* [withMiddleware](companiesapi.md#withmiddleware)
* [withPostMiddleware](companiesapi.md#withpostmiddleware)
* [withPreMiddleware](companiesapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new CompaniesApi**(`configuration`: [Configuration](configuration.md)‹›): *[CompaniesApi](companiesapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](configuration.md)‹› | new Configuration() |

**Returns:** *[CompaniesApi](companiesapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)‹›*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

## Methods

###  getCompanies

▸ **getCompanies**(`requestParameters`: [GetCompaniesRequest](../interfaces/getcompaniesrequest.md)): *Promise‹Array‹[Company](../interfaces/company.md)››*

Returns all companies from the system that the user has access to

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetCompaniesRequest](../interfaces/getcompaniesrequest.md) |

**Returns:** *Promise‹Array‹[Company](../interfaces/company.md)››*

___

###  getCompaniesRaw

▸ **getCompaniesRaw**(`requestParameters`: [GetCompaniesRequest](../interfaces/getcompaniesrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Company](../interfaces/company.md)›››*

Returns all companies from the system that the user has access to

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetCompaniesRequest](../interfaces/getcompaniesrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Company](../interfaces/company.md)›››*

___

###  getCompany

▸ **getCompany**(`requestParameters`: [GetCompanyRequest](../interfaces/getcompanyrequest.md)): *Promise‹[Company](../interfaces/company.md)›*

Returns company associated with slug.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetCompanyRequest](../interfaces/getcompanyrequest.md) |

**Returns:** *Promise‹[Company](../interfaces/company.md)›*

___

###  getCompanyRaw

▸ **getCompanyRaw**(`requestParameters`: [GetCompanyRequest](../interfaces/getcompanyrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[Company](../interfaces/company.md)››*

Returns company associated with slug.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetCompanyRequest](../interfaces/getcompanyrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[Company](../interfaces/company.md)››*

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
