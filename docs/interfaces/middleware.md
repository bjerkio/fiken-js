[fiken](../README.md) › [Middleware](middleware.md)

# Interface: Middleware

## Hierarchy

* **Middleware**

## Index

### Methods

* [post](middleware.md#optional-post)
* [pre](middleware.md#optional-pre)

## Methods

### `Optional` post

▸ **post**(`context`: [ResponseContext](responsecontext.md)): *Promise‹Response | void›*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [ResponseContext](responsecontext.md) |

**Returns:** *Promise‹Response | void›*

___

### `Optional` pre

▸ **pre**(`context`: [RequestContext](requestcontext.md)): *Promise‹[FetchParams](fetchparams.md) | void›*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [RequestContext](requestcontext.md) |

**Returns:** *Promise‹[FetchParams](fetchparams.md) | void›*
