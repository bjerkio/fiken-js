[fiken](../README.md) › [ContactsApi](contactsapi.md)

# Class: ContactsApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **ContactsApi**

## Index

### Constructors

* [constructor](contactsapi.md#constructor)

### Properties

* [configuration](contactsapi.md#protected-configuration)

### Methods

* [addContactPersonToContact](contactsapi.md#addcontactpersontocontact)
* [addContactPersonToContactRaw](contactsapi.md#addcontactpersontocontactraw)
* [createContact](contactsapi.md#createcontact)
* [createContactRaw](contactsapi.md#createcontactraw)
* [deleteContactContactPerson](contactsapi.md#deletecontactcontactperson)
* [deleteContactContactPersonRaw](contactsapi.md#deletecontactcontactpersonraw)
* [getContact](contactsapi.md#getcontact)
* [getContactContactPerson](contactsapi.md#getcontactcontactperson)
* [getContactContactPersonRaw](contactsapi.md#getcontactcontactpersonraw)
* [getContactPerson](contactsapi.md#getcontactperson)
* [getContactPersonRaw](contactsapi.md#getcontactpersonraw)
* [getContactRaw](contactsapi.md#getcontactraw)
* [getContacts](contactsapi.md#getcontacts)
* [getContactsRaw](contactsapi.md#getcontactsraw)
* [request](contactsapi.md#protected-request)
* [updateContact](contactsapi.md#updatecontact)
* [updateContactContactPerson](contactsapi.md#updatecontactcontactperson)
* [updateContactContactPersonRaw](contactsapi.md#updatecontactcontactpersonraw)
* [updateContactRaw](contactsapi.md#updatecontactraw)
* [withMiddleware](contactsapi.md#withmiddleware)
* [withPostMiddleware](contactsapi.md#withpostmiddleware)
* [withPreMiddleware](contactsapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new ContactsApi**(`configuration`: [Configuration](configuration.md)‹›): *[ContactsApi](contactsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](configuration.md)‹› | new Configuration() |

**Returns:** *[ContactsApi](contactsapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)‹›*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

## Methods

###  addContactPersonToContact

▸ **addContactPersonToContact**(`requestParameters`: [AddContactPersonToContactRequest](../interfaces/addcontactpersontocontactrequest.md)): *Promise‹void›*

Adds a new contact person to a contact

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddContactPersonToContactRequest](../interfaces/addcontactpersontocontactrequest.md) |

**Returns:** *Promise‹void›*

___

###  addContactPersonToContactRaw

▸ **addContactPersonToContactRaw**(`requestParameters`: [AddContactPersonToContactRequest](../interfaces/addcontactpersontocontactrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Adds a new contact person to a contact

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddContactPersonToContactRequest](../interfaces/addcontactpersontocontactrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  createContact

▸ **createContact**(`requestParameters`: [CreateContactRequest](../interfaces/createcontactrequest.md)): *Promise‹void›*

Creates a new contact. The Location response header returns the URL of the newly created contact.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateContactRequest](../interfaces/createcontactrequest.md) |

**Returns:** *Promise‹void›*

___

###  createContactRaw

▸ **createContactRaw**(`requestParameters`: [CreateContactRequest](../interfaces/createcontactrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates a new contact. The Location response header returns the URL of the newly created contact.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateContactRequest](../interfaces/createcontactrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  deleteContactContactPerson

▸ **deleteContactContactPerson**(`requestParameters`: [DeleteContactContactPersonRequest](../interfaces/deletecontactcontactpersonrequest.md)): *Promise‹void›*

Delete a contact\'s contact person.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteContactContactPersonRequest](../interfaces/deletecontactcontactpersonrequest.md) |

**Returns:** *Promise‹void›*

___

###  deleteContactContactPersonRaw

▸ **deleteContactContactPersonRaw**(`requestParameters`: [DeleteContactContactPersonRequest](../interfaces/deletecontactcontactpersonrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Delete a contact\'s contact person.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteContactContactPersonRequest](../interfaces/deletecontactcontactpersonrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  getContact

▸ **getContact**(`requestParameters`: [GetContactRequest](../interfaces/getcontactrequest.md)): *Promise‹[Contact](../interfaces/contact.md)›*

Retrieves specified contact. ContactId is returned with a GET contacts call as the first returned field. ContactId is returned in the Location response header for POST contact.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetContactRequest](../interfaces/getcontactrequest.md) |

**Returns:** *Promise‹[Contact](../interfaces/contact.md)›*

___

###  getContactContactPerson

▸ **getContactContactPerson**(`requestParameters`: [GetContactContactPersonRequest](../interfaces/getcontactcontactpersonrequest.md)): *Promise‹Array‹[ContactPerson](../interfaces/contactperson.md)››*

Retrieves contact person(s) for a specified contact.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetContactContactPersonRequest](../interfaces/getcontactcontactpersonrequest.md) |

**Returns:** *Promise‹Array‹[ContactPerson](../interfaces/contactperson.md)››*

___

###  getContactContactPersonRaw

▸ **getContactContactPersonRaw**(`requestParameters`: [GetContactContactPersonRequest](../interfaces/getcontactcontactpersonrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[ContactPerson](../interfaces/contactperson.md)›››*

Retrieves contact person(s) for a specified contact.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetContactContactPersonRequest](../interfaces/getcontactcontactpersonrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[ContactPerson](../interfaces/contactperson.md)›››*

___

###  getContactPerson

▸ **getContactPerson**(`requestParameters`: [GetContactPersonRequest](../interfaces/getcontactpersonrequest.md)): *Promise‹[ContactPerson](../interfaces/contactperson.md)›*

Retrieves specified contact person

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetContactPersonRequest](../interfaces/getcontactpersonrequest.md) |

**Returns:** *Promise‹[ContactPerson](../interfaces/contactperson.md)›*

___

###  getContactPersonRaw

▸ **getContactPersonRaw**(`requestParameters`: [GetContactPersonRequest](../interfaces/getcontactpersonrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[ContactPerson](../interfaces/contactperson.md)››*

Retrieves specified contact person

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetContactPersonRequest](../interfaces/getcontactpersonrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[ContactPerson](../interfaces/contactperson.md)››*

___

###  getContactRaw

▸ **getContactRaw**(`requestParameters`: [GetContactRequest](../interfaces/getcontactrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[Contact](../interfaces/contact.md)››*

Retrieves specified contact. ContactId is returned with a GET contacts call as the first returned field. ContactId is returned in the Location response header for POST contact.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetContactRequest](../interfaces/getcontactrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[Contact](../interfaces/contact.md)››*

___

###  getContacts

▸ **getContacts**(`requestParameters`: [GetContactsRequest](../interfaces/getcontactsrequest.md)): *Promise‹Array‹[Contact](../interfaces/contact.md)››*

Retrieves all contacts for the specified company.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetContactsRequest](../interfaces/getcontactsrequest.md) |

**Returns:** *Promise‹Array‹[Contact](../interfaces/contact.md)››*

___

###  getContactsRaw

▸ **getContactsRaw**(`requestParameters`: [GetContactsRequest](../interfaces/getcontactsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Contact](../interfaces/contact.md)›››*

Retrieves all contacts for the specified company.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetContactsRequest](../interfaces/getcontactsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Contact](../interfaces/contact.md)›››*

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

###  updateContact

▸ **updateContact**(`requestParameters`: [UpdateContactRequest](../interfaces/updatecontactrequest.md)): *Promise‹void›*

Updates an existing contact.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdateContactRequest](../interfaces/updatecontactrequest.md) |

**Returns:** *Promise‹void›*

___

###  updateContactContactPerson

▸ **updateContactContactPerson**(`requestParameters`: [UpdateContactContactPersonRequest](../interfaces/updatecontactcontactpersonrequest.md)): *Promise‹void›*

Updates an existing contact person.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdateContactContactPersonRequest](../interfaces/updatecontactcontactpersonrequest.md) |

**Returns:** *Promise‹void›*

___

###  updateContactContactPersonRaw

▸ **updateContactContactPersonRaw**(`requestParameters`: [UpdateContactContactPersonRequest](../interfaces/updatecontactcontactpersonrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Updates an existing contact person.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdateContactContactPersonRequest](../interfaces/updatecontactcontactpersonrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  updateContactRaw

▸ **updateContactRaw**(`requestParameters`: [UpdateContactRequest](../interfaces/updatecontactrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Updates an existing contact.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdateContactRequest](../interfaces/updatecontactrequest.md) |

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
