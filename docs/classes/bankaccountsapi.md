[fiken](../README.md) › [BankAccountsApi](bankaccountsapi.md)

# Class: BankAccountsApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **BankAccountsApi**

## Index

### Constructors

* [constructor](bankaccountsapi.md#constructor)

### Properties

* [configuration](bankaccountsapi.md#protected-configuration)

### Methods

* [createBankAccount](bankaccountsapi.md#createbankaccount)
* [createBankAccountRaw](bankaccountsapi.md#createbankaccountraw)
* [getBankAccount](bankaccountsapi.md#getbankaccount)
* [getBankAccountRaw](bankaccountsapi.md#getbankaccountraw)
* [getBankAccounts](bankaccountsapi.md#getbankaccounts)
* [getBankAccountsRaw](bankaccountsapi.md#getbankaccountsraw)
* [request](bankaccountsapi.md#protected-request)
* [withMiddleware](bankaccountsapi.md#withmiddleware)
* [withPostMiddleware](bankaccountsapi.md#withpostmiddleware)
* [withPreMiddleware](bankaccountsapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new BankAccountsApi**(`configuration`: [Configuration](configuration.md)‹›): *[BankAccountsApi](bankaccountsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](configuration.md)‹› | new Configuration() |

**Returns:** *[BankAccountsApi](bankaccountsapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)‹›*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

## Methods

###  createBankAccount

▸ **createBankAccount**(`requestParameters`: [CreateBankAccountRequest](../interfaces/createbankaccountrequest.md)): *Promise‹void›*

Creates a new bank account. The Location response header returns the URL of the newly created bank account. Possible types of bank accounts are NORMAL, TAX_DEDUCTION, FOREIGN, and CREDIT_CARD. The field \"foreignService\" should only be filled out for accounts of type FOREIGN.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateBankAccountRequest](../interfaces/createbankaccountrequest.md) |

**Returns:** *Promise‹void›*

___

###  createBankAccountRaw

▸ **createBankAccountRaw**(`requestParameters`: [CreateBankAccountRequest](../interfaces/createbankaccountrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates a new bank account. The Location response header returns the URL of the newly created bank account. Possible types of bank accounts are NORMAL, TAX_DEDUCTION, FOREIGN, and CREDIT_CARD. The field \"foreignService\" should only be filled out for accounts of type FOREIGN.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateBankAccountRequest](../interfaces/createbankaccountrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  getBankAccount

▸ **getBankAccount**(`requestParameters`: [GetBankAccountRequest](../interfaces/getbankaccountrequest.md)): *Promise‹[BankAccountResult](../interfaces/bankaccountresult.md)›*

Retrieves specified bank account.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetBankAccountRequest](../interfaces/getbankaccountrequest.md) |

**Returns:** *Promise‹[BankAccountResult](../interfaces/bankaccountresult.md)›*

___

###  getBankAccountRaw

▸ **getBankAccountRaw**(`requestParameters`: [GetBankAccountRequest](../interfaces/getbankaccountrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[BankAccountResult](../interfaces/bankaccountresult.md)››*

Retrieves specified bank account.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetBankAccountRequest](../interfaces/getbankaccountrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[BankAccountResult](../interfaces/bankaccountresult.md)››*

___

###  getBankAccounts

▸ **getBankAccounts**(`requestParameters`: [GetBankAccountsRequest](../interfaces/getbankaccountsrequest.md)): *Promise‹Array‹[BankAccountResult](../interfaces/bankaccountresult.md)››*

Retrieves all bank accounts associated with the company.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetBankAccountsRequest](../interfaces/getbankaccountsrequest.md) |

**Returns:** *Promise‹Array‹[BankAccountResult](../interfaces/bankaccountresult.md)››*

___

###  getBankAccountsRaw

▸ **getBankAccountsRaw**(`requestParameters`: [GetBankAccountsRequest](../interfaces/getbankaccountsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[BankAccountResult](../interfaces/bankaccountresult.md)›››*

Retrieves all bank accounts associated with the company.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetBankAccountsRequest](../interfaces/getbankaccountsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[BankAccountResult](../interfaces/bankaccountresult.md)›››*

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
