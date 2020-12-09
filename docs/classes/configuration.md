[fiken](../README.md) › [Configuration](configuration.md)

# Class: Configuration

## Hierarchy

* **Configuration**

## Index

### Constructors

* [constructor](configuration.md#constructor)

### Properties

* [configuration](configuration.md#private-configuration)

### Accessors

* [accessToken](configuration.md#accesstoken)
* [apiKey](configuration.md#apikey)
* [basePath](configuration.md#basepath)
* [credentials](configuration.md#credentials)
* [fetchApi](configuration.md#fetchapi)
* [headers](configuration.md#headers)
* [middleware](configuration.md#middleware)
* [password](configuration.md#password)
* [queryParamsStringify](configuration.md#queryparamsstringify)
* [username](configuration.md#username)

## Constructors

###  constructor

\+ **new Configuration**(`configuration`: [ConfigurationParameters](../interfaces/configurationparameters.md)): *[Configuration](configuration.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [ConfigurationParameters](../interfaces/configurationparameters.md) | {} |

**Returns:** *[Configuration](configuration.md)*

## Properties

### `Private` configuration

• **configuration**: *[ConfigurationParameters](../interfaces/configurationparameters.md)*

## Accessors

###  accessToken

• **get accessToken**(): *function | undefined*

**Returns:** *function | undefined*

___

###  apiKey

• **get apiKey**(): *function | undefined*

**Returns:** *function | undefined*

___

###  basePath

• **get basePath**(): *string*

**Returns:** *string*

___

###  credentials

• **get credentials**(): *RequestCredentials | undefined*

**Returns:** *RequestCredentials | undefined*

___

###  fetchApi

• **get fetchApi**(): *[FetchAPI](../README.md#fetchapi)*

**Returns:** *[FetchAPI](../README.md#fetchapi)*

___

###  headers

• **get headers**(): *[HTTPHeaders](../README.md#httpheaders) | undefined*

**Returns:** *[HTTPHeaders](../README.md#httpheaders) | undefined*

___

###  middleware

• **get middleware**(): *[Middleware](../interfaces/middleware.md)[]*

**Returns:** *[Middleware](../interfaces/middleware.md)[]*

___

###  password

• **get password**(): *string | undefined*

**Returns:** *string | undefined*

___

###  queryParamsStringify

• **get queryParamsStringify**(): *function*

**Returns:** *function*

▸ (`params`: [HTTPQuery](../README.md#httpquery)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [HTTPQuery](../README.md#httpquery) |

___

###  username

• **get username**(): *string | undefined*

**Returns:** *string | undefined*
