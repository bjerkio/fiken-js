[fiken](../README.md) › [CreditNotesApi](creditnotesapi.md)

# Class: CreditNotesApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **CreditNotesApi**

## Index

### Constructors

* [constructor](creditnotesapi.md#constructor)

### Properties

* [configuration](creditnotesapi.md#protected-configuration)

### Methods

* [addAttachmentToCreditNoteDraft](creditnotesapi.md#addattachmenttocreditnotedraft)
* [addAttachmentToCreditNoteDraftRaw](creditnotesapi.md#addattachmenttocreditnotedraftraw)
* [createCreditNoteDraft](creditnotesapi.md#createcreditnotedraft)
* [createCreditNoteDraftRaw](creditnotesapi.md#createcreditnotedraftraw)
* [createCreditNoteFromDraft](creditnotesapi.md#createcreditnotefromdraft)
* [createCreditNoteFromDraftRaw](creditnotesapi.md#createcreditnotefromdraftraw)
* [createFullCreditNote](creditnotesapi.md#createfullcreditnote)
* [createFullCreditNoteRaw](creditnotesapi.md#createfullcreditnoteraw)
* [createPartialCreditNote](creditnotesapi.md#createpartialcreditnote)
* [createPartialCreditNoteRaw](creditnotesapi.md#createpartialcreditnoteraw)
* [deleteCreditNoteDraft](creditnotesapi.md#deletecreditnotedraft)
* [deleteCreditNoteDraftRaw](creditnotesapi.md#deletecreditnotedraftraw)
* [getCreditNote](creditnotesapi.md#getcreditnote)
* [getCreditNoteDraft](creditnotesapi.md#getcreditnotedraft)
* [getCreditNoteDraftAttachments](creditnotesapi.md#getcreditnotedraftattachments)
* [getCreditNoteDraftAttachmentsRaw](creditnotesapi.md#getcreditnotedraftattachmentsraw)
* [getCreditNoteDraftRaw](creditnotesapi.md#getcreditnotedraftraw)
* [getCreditNoteDrafts](creditnotesapi.md#getcreditnotedrafts)
* [getCreditNoteDraftsRaw](creditnotesapi.md#getcreditnotedraftsraw)
* [getCreditNoteRaw](creditnotesapi.md#getcreditnoteraw)
* [getCreditNotes](creditnotesapi.md#getcreditnotes)
* [getCreditNotesRaw](creditnotesapi.md#getcreditnotesraw)
* [request](creditnotesapi.md#protected-request)
* [sendCreditNote](creditnotesapi.md#sendcreditnote)
* [sendCreditNoteRaw](creditnotesapi.md#sendcreditnoteraw)
* [updateCreditNoteDraft](creditnotesapi.md#updatecreditnotedraft)
* [updateCreditNoteDraftRaw](creditnotesapi.md#updatecreditnotedraftraw)
* [withMiddleware](creditnotesapi.md#withmiddleware)
* [withPostMiddleware](creditnotesapi.md#withpostmiddleware)
* [withPreMiddleware](creditnotesapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new CreditNotesApi**(`configuration`: [Configuration](configuration.md)‹›): *[CreditNotesApi](creditnotesapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](configuration.md)‹› | new Configuration() |

**Returns:** *[CreditNotesApi](creditnotesapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)‹›*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

## Methods

###  addAttachmentToCreditNoteDraft

▸ **addAttachmentToCreditNoteDraft**(`requestParameters`: [AddAttachmentToCreditNoteDraftRequest](../interfaces/addattachmenttocreditnotedraftrequest.md)): *Promise‹void›*

Creates and adds a new attachment to a credit note draft

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddAttachmentToCreditNoteDraftRequest](../interfaces/addattachmenttocreditnotedraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  addAttachmentToCreditNoteDraftRaw

▸ **addAttachmentToCreditNoteDraftRaw**(`requestParameters`: [AddAttachmentToCreditNoteDraftRequest](../interfaces/addattachmenttocreditnotedraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates and adds a new attachment to a credit note draft

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddAttachmentToCreditNoteDraftRequest](../interfaces/addattachmenttocreditnotedraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  createCreditNoteDraft

▸ **createCreditNoteDraft**(`requestParameters`: [CreateCreditNoteDraftRequest](../interfaces/createcreditnotedraftrequest.md)): *Promise‹void›*

Creates a credit note draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateCreditNoteDraftRequest](../interfaces/createcreditnotedraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  createCreditNoteDraftRaw

▸ **createCreditNoteDraftRaw**(`requestParameters`: [CreateCreditNoteDraftRequest](../interfaces/createcreditnotedraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates a credit note draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateCreditNoteDraftRequest](../interfaces/createcreditnotedraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  createCreditNoteFromDraft

▸ **createCreditNoteFromDraft**(`requestParameters`: [CreateCreditNoteFromDraftRequest](../interfaces/createcreditnotefromdraftrequest.md)): *Promise‹void›*

Creates a credit note from an already created draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateCreditNoteFromDraftRequest](../interfaces/createcreditnotefromdraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  createCreditNoteFromDraftRaw

▸ **createCreditNoteFromDraftRaw**(`requestParameters`: [CreateCreditNoteFromDraftRequest](../interfaces/createcreditnotefromdraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates a credit note from an already created draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateCreditNoteFromDraftRequest](../interfaces/createcreditnotefromdraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  createFullCreditNote

▸ **createFullCreditNote**(`requestParameters`: [CreateFullCreditNoteRequest](../interfaces/createfullcreditnoterequest.md)): *Promise‹void›*

Creates a new credit note.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateFullCreditNoteRequest](../interfaces/createfullcreditnoterequest.md) |

**Returns:** *Promise‹void›*

___

###  createFullCreditNoteRaw

▸ **createFullCreditNoteRaw**(`requestParameters`: [CreateFullCreditNoteRequest](../interfaces/createfullcreditnoterequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates a new credit note.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateFullCreditNoteRequest](../interfaces/createfullcreditnoterequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  createPartialCreditNote

▸ **createPartialCreditNote**(`requestParameters`: [CreatePartialCreditNoteRequest](../interfaces/createpartialcreditnoterequest.md)): *Promise‹void›*

Creates a new credit note.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreatePartialCreditNoteRequest](../interfaces/createpartialcreditnoterequest.md) |

**Returns:** *Promise‹void›*

___

###  createPartialCreditNoteRaw

▸ **createPartialCreditNoteRaw**(`requestParameters`: [CreatePartialCreditNoteRequest](../interfaces/createpartialcreditnoterequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates a new credit note.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreatePartialCreditNoteRequest](../interfaces/createpartialcreditnoterequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  deleteCreditNoteDraft

▸ **deleteCreditNoteDraft**(`requestParameters`: [DeleteCreditNoteDraftRequest](../interfaces/deletecreditnotedraftrequest.md)): *Promise‹void›*

Delete credit note draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteCreditNoteDraftRequest](../interfaces/deletecreditnotedraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  deleteCreditNoteDraftRaw

▸ **deleteCreditNoteDraftRaw**(`requestParameters`: [DeleteCreditNoteDraftRequest](../interfaces/deletecreditnotedraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Delete credit note draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteCreditNoteDraftRequest](../interfaces/deletecreditnotedraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  getCreditNote

▸ **getCreditNote**(`requestParameters`: [GetCreditNoteRequest](../interfaces/getcreditnoterequest.md)): *Promise‹[CreditNoteResult](../interfaces/creditnoteresult.md)›*

Returns credit note with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetCreditNoteRequest](../interfaces/getcreditnoterequest.md) |

**Returns:** *Promise‹[CreditNoteResult](../interfaces/creditnoteresult.md)›*

___

###  getCreditNoteDraft

▸ **getCreditNoteDraft**(`requestParameters`: [GetCreditNoteDraftRequest](../interfaces/getcreditnotedraftrequest.md)): *Promise‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)›*

Returns credit note draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetCreditNoteDraftRequest](../interfaces/getcreditnotedraftrequest.md) |

**Returns:** *Promise‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)›*

___

###  getCreditNoteDraftAttachments

▸ **getCreditNoteDraftAttachments**(`requestParameters`: [GetCreditNoteDraftAttachmentsRequest](../interfaces/getcreditnotedraftattachmentsrequest.md)): *Promise‹Array‹[Attachment](../interfaces/attachment.md)››*

Returns all attachments for specified draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetCreditNoteDraftAttachmentsRequest](../interfaces/getcreditnotedraftattachmentsrequest.md) |

**Returns:** *Promise‹Array‹[Attachment](../interfaces/attachment.md)››*

___

###  getCreditNoteDraftAttachmentsRaw

▸ **getCreditNoteDraftAttachmentsRaw**(`requestParameters`: [GetCreditNoteDraftAttachmentsRequest](../interfaces/getcreditnotedraftattachmentsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Attachment](../interfaces/attachment.md)›››*

Returns all attachments for specified draft.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetCreditNoteDraftAttachmentsRequest](../interfaces/getcreditnotedraftattachmentsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Attachment](../interfaces/attachment.md)›››*

___

###  getCreditNoteDraftRaw

▸ **getCreditNoteDraftRaw**(`requestParameters`: [GetCreditNoteDraftRequest](../interfaces/getcreditnotedraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)››*

Returns credit note draft with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetCreditNoteDraftRequest](../interfaces/getcreditnotedraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)››*

___

###  getCreditNoteDrafts

▸ **getCreditNoteDrafts**(`requestParameters`: [GetCreditNoteDraftsRequest](../interfaces/getcreditnotedraftsrequest.md)): *Promise‹Array‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)››*

Returns all credit note drafts for given company.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetCreditNoteDraftsRequest](../interfaces/getcreditnotedraftsrequest.md) |

**Returns:** *Promise‹Array‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)››*

___

###  getCreditNoteDraftsRaw

▸ **getCreditNoteDraftsRaw**(`requestParameters`: [GetCreditNoteDraftsRequest](../interfaces/getcreditnotedraftsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)›››*

Returns all credit note drafts for given company.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetCreditNoteDraftsRequest](../interfaces/getcreditnotedraftsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[InvoiceishDraftResult](../interfaces/invoiceishdraftresult.md)›››*

___

###  getCreditNoteRaw

▸ **getCreditNoteRaw**(`requestParameters`: [GetCreditNoteRequest](../interfaces/getcreditnoterequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[CreditNoteResult](../interfaces/creditnoteresult.md)››*

Returns credit note with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetCreditNoteRequest](../interfaces/getcreditnoterequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[CreditNoteResult](../interfaces/creditnoteresult.md)››*

___

###  getCreditNotes

▸ **getCreditNotes**(`requestParameters`: [GetCreditNotesRequest](../interfaces/getcreditnotesrequest.md)): *Promise‹Array‹[CreditNoteResult](../interfaces/creditnoteresult.md)››*

Returns all credit notes for given company

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetCreditNotesRequest](../interfaces/getcreditnotesrequest.md) |

**Returns:** *Promise‹Array‹[CreditNoteResult](../interfaces/creditnoteresult.md)››*

___

###  getCreditNotesRaw

▸ **getCreditNotesRaw**(`requestParameters`: [GetCreditNotesRequest](../interfaces/getcreditnotesrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[CreditNoteResult](../interfaces/creditnoteresult.md)›››*

Returns all credit notes for given company

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetCreditNotesRequest](../interfaces/getcreditnotesrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[CreditNoteResult](../interfaces/creditnoteresult.md)›››*

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

###  sendCreditNote

▸ **sendCreditNote**(`requestParameters`: [SendCreditNoteOperationRequest](../interfaces/sendcreditnoteoperationrequest.md)): *Promise‹void›*

Sends the specified document

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [SendCreditNoteOperationRequest](../interfaces/sendcreditnoteoperationrequest.md) |

**Returns:** *Promise‹void›*

___

###  sendCreditNoteRaw

▸ **sendCreditNoteRaw**(`requestParameters`: [SendCreditNoteOperationRequest](../interfaces/sendcreditnoteoperationrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Sends the specified document

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [SendCreditNoteOperationRequest](../interfaces/sendcreditnoteoperationrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  updateCreditNoteDraft

▸ **updateCreditNoteDraft**(`requestParameters`: [UpdateCreditNoteDraftRequest](../interfaces/updatecreditnotedraftrequest.md)): *Promise‹void›*

Updates credit note draft with provided id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdateCreditNoteDraftRequest](../interfaces/updatecreditnotedraftrequest.md) |

**Returns:** *Promise‹void›*

___

###  updateCreditNoteDraftRaw

▸ **updateCreditNoteDraftRaw**(`requestParameters`: [UpdateCreditNoteDraftRequest](../interfaces/updatecreditnotedraftrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Updates credit note draft with provided id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdateCreditNoteDraftRequest](../interfaces/updatecreditnotedraftrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

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
