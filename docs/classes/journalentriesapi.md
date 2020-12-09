[fiken](../README.md) › [JournalEntriesApi](journalentriesapi.md)

# Class: JournalEntriesApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **JournalEntriesApi**

## Index

### Constructors

* [constructor](journalentriesapi.md#constructor)

### Properties

* [configuration](journalentriesapi.md#protected-configuration)

### Methods

* [addAttachmentToJournalEntry](journalentriesapi.md#addattachmenttojournalentry)
* [addAttachmentToJournalEntryRaw](journalentriesapi.md#addattachmenttojournalentryraw)
* [createGeneralJournalEntry](journalentriesapi.md#creategeneraljournalentry)
* [createGeneralJournalEntryRaw](journalentriesapi.md#creategeneraljournalentryraw)
* [getJournalEntries](journalentriesapi.md#getjournalentries)
* [getJournalEntriesRaw](journalentriesapi.md#getjournalentriesraw)
* [getJournalEntry](journalentriesapi.md#getjournalentry)
* [getJournalEntryAttachments](journalentriesapi.md#getjournalentryattachments)
* [getJournalEntryAttachmentsRaw](journalentriesapi.md#getjournalentryattachmentsraw)
* [getJournalEntryRaw](journalentriesapi.md#getjournalentryraw)
* [request](journalentriesapi.md#protected-request)
* [withMiddleware](journalentriesapi.md#withmiddleware)
* [withPostMiddleware](journalentriesapi.md#withpostmiddleware)
* [withPreMiddleware](journalentriesapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new JournalEntriesApi**(`configuration`: [Configuration](configuration.md)‹›): *[JournalEntriesApi](journalentriesapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](configuration.md)‹› | new Configuration() |

**Returns:** *[JournalEntriesApi](journalentriesapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)‹›*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

## Methods

###  addAttachmentToJournalEntry

▸ **addAttachmentToJournalEntry**(`requestParameters`: [AddAttachmentToJournalEntryRequest](../interfaces/addattachmenttojournalentryrequest.md)): *Promise‹void›*

Creates and adds a new attachment to a Journal Entry

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddAttachmentToJournalEntryRequest](../interfaces/addattachmenttojournalentryrequest.md) |

**Returns:** *Promise‹void›*

___

###  addAttachmentToJournalEntryRaw

▸ **addAttachmentToJournalEntryRaw**(`requestParameters`: [AddAttachmentToJournalEntryRequest](../interfaces/addattachmenttojournalentryrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates and adds a new attachment to a Journal Entry

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddAttachmentToJournalEntryRequest](../interfaces/addattachmenttojournalentryrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  createGeneralJournalEntry

▸ **createGeneralJournalEntry**(`requestParameters`: [CreateGeneralJournalEntryRequest](../interfaces/creategeneraljournalentryrequest.md)): *Promise‹void›*

Creates a new general journal entry (fri postering).

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateGeneralJournalEntryRequest](../interfaces/creategeneraljournalentryrequest.md) |

**Returns:** *Promise‹void›*

___

###  createGeneralJournalEntryRaw

▸ **createGeneralJournalEntryRaw**(`requestParameters`: [CreateGeneralJournalEntryRequest](../interfaces/creategeneraljournalentryrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates a new general journal entry (fri postering).

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateGeneralJournalEntryRequest](../interfaces/creategeneraljournalentryrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  getJournalEntries

▸ **getJournalEntries**(`requestParameters`: [GetJournalEntriesRequest](../interfaces/getjournalentriesrequest.md)): *Promise‹Array‹[JournalEntry](../interfaces/journalentry.md)››*

Returns all general journal entries (posteringer) for the specified company.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetJournalEntriesRequest](../interfaces/getjournalentriesrequest.md) |

**Returns:** *Promise‹Array‹[JournalEntry](../interfaces/journalentry.md)››*

___

###  getJournalEntriesRaw

▸ **getJournalEntriesRaw**(`requestParameters`: [GetJournalEntriesRequest](../interfaces/getjournalentriesrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[JournalEntry](../interfaces/journalentry.md)›››*

Returns all general journal entries (posteringer) for the specified company.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetJournalEntriesRequest](../interfaces/getjournalentriesrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[JournalEntry](../interfaces/journalentry.md)›››*

___

###  getJournalEntry

▸ **getJournalEntry**(`requestParameters`: [GetJournalEntryRequest](../interfaces/getjournalentryrequest.md)): *Promise‹[JournalEntry](../interfaces/journalentry.md)›*

Returns all journal entries within a given company\'s Journal Entry Service

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetJournalEntryRequest](../interfaces/getjournalentryrequest.md) |

**Returns:** *Promise‹[JournalEntry](../interfaces/journalentry.md)›*

___

###  getJournalEntryAttachments

▸ **getJournalEntryAttachments**(`requestParameters`: [GetJournalEntryAttachmentsRequest](../interfaces/getjournalentryattachmentsrequest.md)): *Promise‹Array‹[Attachment](../interfaces/attachment.md)››*

Returns all attachments for a given Journal Entry

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetJournalEntryAttachmentsRequest](../interfaces/getjournalentryattachmentsrequest.md) |

**Returns:** *Promise‹Array‹[Attachment](../interfaces/attachment.md)››*

___

###  getJournalEntryAttachmentsRaw

▸ **getJournalEntryAttachmentsRaw**(`requestParameters`: [GetJournalEntryAttachmentsRequest](../interfaces/getjournalentryattachmentsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Attachment](../interfaces/attachment.md)›››*

Returns all attachments for a given Journal Entry

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetJournalEntryAttachmentsRequest](../interfaces/getjournalentryattachmentsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Attachment](../interfaces/attachment.md)›››*

___

###  getJournalEntryRaw

▸ **getJournalEntryRaw**(`requestParameters`: [GetJournalEntryRequest](../interfaces/getjournalentryrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[JournalEntry](../interfaces/journalentry.md)››*

Returns all journal entries within a given company\'s Journal Entry Service

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetJournalEntryRequest](../interfaces/getjournalentryrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[JournalEntry](../interfaces/journalentry.md)››*

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
