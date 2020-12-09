[fiken](../README.md) › [ConfigurationParameters](configurationparameters.md)

# Interface: ConfigurationParameters

## Hierarchy

* **ConfigurationParameters**

## Index

### Properties

* [accessToken](configurationparameters.md#optional-accesstoken)
* [apiKey](configurationparameters.md#optional-apikey)
* [basePath](configurationparameters.md#optional-basepath)
* [credentials](configurationparameters.md#optional-credentials)
* [fetchApi](configurationparameters.md#optional-fetchapi)
* [headers](configurationparameters.md#optional-headers)
* [middleware](configurationparameters.md#optional-middleware)
* [password](configurationparameters.md#optional-password)
* [queryParamsStringify](configurationparameters.md#optional-queryparamsstringify)
* [username](configurationparameters.md#optional-username)

## Properties

### `Optional` accessToken

• **accessToken**? : *string | function*

___

### `Optional` apiKey

• **apiKey**? : *string | function*

___

### `Optional` basePath

• **basePath**? : *string*

___

### `Optional` credentials

• **credentials**? : *RequestCredentials*

___

### `Optional` fetchApi

• **fetchApi**? : *[FetchAPI](../README.md#fetchapi)*

___

### `Optional` headers

• **headers**? : *[HTTPHeaders](../README.md#httpheaders)*

___

### `Optional` middleware

• **middleware**? : *[Middleware](middleware.md)[]*

___

### `Optional` password

• **password**? : *string*

___

### `Optional` queryParamsStringify

• **queryParamsStringify**? : *function*

#### Type declaration:

▸ (`params`: [HTTPQuery](../README.md#httpquery)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [HTTPQuery](../README.md#httpquery) |

___

### `Optional` username

• **username**? : *string*
