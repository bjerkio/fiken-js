[fiken](../README.md) › [AccountsApi](accountsapi.md)

# Class: AccountsApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **AccountsApi**

## Index

### Constructors

* [constructor](accountsapi.md#constructor)

### Properties

* [configuration](accountsapi.md#protected-configuration)

### Methods

* [getAccount](accountsapi.md#getaccount)
* [getAccountBalance](accountsapi.md#getaccountbalance)
* [getAccountBalanceRaw](accountsapi.md#getaccountbalanceraw)
* [getAccountBalances](accountsapi.md#getaccountbalances)
* [getAccountBalancesRaw](accountsapi.md#getaccountbalancesraw)
* [getAccountRaw](accountsapi.md#getaccountraw)
* [getAccounts](accountsapi.md#getaccounts)
* [getAccountsRaw](accountsapi.md#getaccountsraw)
* [request](accountsapi.md#protected-request)
* [withMiddleware](accountsapi.md#withmiddleware)
* [withPostMiddleware](accountsapi.md#withpostmiddleware)
* [withPreMiddleware](accountsapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new AccountsApi**(`configuration`: [Configuration](configuration.md)‹›): *[AccountsApi](accountsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](configuration.md)‹› | new Configuration() |

**Returns:** *[AccountsApi](accountsapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)‹›*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

## Methods

###  getAccount

▸ **getAccount**(`requestParameters`: [GetAccountRequest](../interfaces/getaccountrequest.md)): *Promise‹[Account](../interfaces/account.md)›*

Retrieves the specified bookkeping account. An account is a string with either four digits, or four digits, a colon and five digits (\"reskontro\").       Examples:       3020 and 1500:10001

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetAccountRequest](../interfaces/getaccountrequest.md) |

**Returns:** *Promise‹[Account](../interfaces/account.md)›*

___

###  getAccountBalance

▸ **getAccountBalance**(`requestParameters`: [GetAccountBalanceRequest](../interfaces/getaccountbalancerequest.md)): *Promise‹[AccountBalance](../interfaces/accountbalance.md)›*

Retrieves the specified bookkeping account and balance for a given date.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetAccountBalanceRequest](../interfaces/getaccountbalancerequest.md) |

**Returns:** *Promise‹[AccountBalance](../interfaces/accountbalance.md)›*

___

###  getAccountBalanceRaw

▸ **getAccountBalanceRaw**(`requestParameters`: [GetAccountBalanceRequest](../interfaces/getaccountbalancerequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[AccountBalance](../interfaces/accountbalance.md)››*

Retrieves the specified bookkeping account and balance for a given date.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetAccountBalanceRequest](../interfaces/getaccountbalancerequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[AccountBalance](../interfaces/accountbalance.md)››*

___

###  getAccountBalances

▸ **getAccountBalances**(`requestParameters`: [GetAccountBalancesRequest](../interfaces/getaccountbalancesrequest.md)): *Promise‹Array‹[AccountBalance](../interfaces/accountbalance.md)››*

Retrieves the bookkeeping accounts and balances for a given date. An account is a string with either four digits, or four digits, a colon and five digits (\"reskontro\"). Examples: 3020 and 1500:10001

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetAccountBalancesRequest](../interfaces/getaccountbalancesrequest.md) |

**Returns:** *Promise‹Array‹[AccountBalance](../interfaces/accountbalance.md)››*

___

###  getAccountBalancesRaw

▸ **getAccountBalancesRaw**(`requestParameters`: [GetAccountBalancesRequest](../interfaces/getaccountbalancesrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[AccountBalance](../interfaces/accountbalance.md)›››*

Retrieves the bookkeeping accounts and balances for a given date. An account is a string with either four digits, or four digits, a colon and five digits (\"reskontro\"). Examples: 3020 and 1500:10001

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetAccountBalancesRequest](../interfaces/getaccountbalancesrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[AccountBalance](../interfaces/accountbalance.md)›››*

___

###  getAccountRaw

▸ **getAccountRaw**(`requestParameters`: [GetAccountRequest](../interfaces/getaccountrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[Account](../interfaces/account.md)››*

Retrieves the specified bookkeping account. An account is a string with either four digits, or four digits, a colon and five digits (\"reskontro\").       Examples:       3020 and 1500:10001

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetAccountRequest](../interfaces/getaccountrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[Account](../interfaces/account.md)››*

___

###  getAccounts

▸ **getAccounts**(`requestParameters`: [GetAccountsRequest](../interfaces/getaccountsrequest.md)): *Promise‹Array‹[Account](../interfaces/account.md)››*

Retrieves the bookkeeping accounts for the current year

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetAccountsRequest](../interfaces/getaccountsrequest.md) |

**Returns:** *Promise‹Array‹[Account](../interfaces/account.md)››*

___

###  getAccountsRaw

▸ **getAccountsRaw**(`requestParameters`: [GetAccountsRequest](../interfaces/getaccountsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Account](../interfaces/account.md)›››*

Retrieves the bookkeeping accounts for the current year

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetAccountsRequest](../interfaces/getaccountsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Account](../interfaces/account.md)›››*

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
