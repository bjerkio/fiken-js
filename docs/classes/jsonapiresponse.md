[fiken](../README.md) › [JSONApiResponse](jsonapiresponse.md)

# Class: JSONApiResponse ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **JSONApiResponse**

## Index

### Constructors

* [constructor](jsonapiresponse.md#constructor)

### Properties

* [raw](jsonapiresponse.md#raw)
* [transformer](jsonapiresponse.md#private-transformer)

### Methods

* [value](jsonapiresponse.md#value)

## Constructors

###  constructor

\+ **new JSONApiResponse**(`raw`: Response, `transformer`: [ResponseTransformer](../interfaces/responsetransformer.md)‹T›): *[JSONApiResponse](jsonapiresponse.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`raw` | Response | - |
`transformer` | [ResponseTransformer](../interfaces/responsetransformer.md)‹T› | (jsonValue: any) => jsonValue |

**Returns:** *[JSONApiResponse](jsonapiresponse.md)*

## Properties

###  raw

• **raw**: *Response*

___

### `Private` transformer

• **transformer**: *[ResponseTransformer](../interfaces/responsetransformer.md)‹T›*

## Methods

###  value

▸ **value**(): *Promise‹T›*

**Returns:** *Promise‹T›*
