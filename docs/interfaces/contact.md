[fiken](../README.md) › [Contact](contact.md)

# Interface: Contact

**`export`** 

**`interface`** Contact

## Hierarchy

* **Contact**

## Index

### Properties

* [address](contact.md#optional-address)
* [contactId](contact.md#optional-readonly-contactid)
* [contactPerson](contact.md#optional-contactperson)
* [currency](contact.md#optional-currency)
* [customer](contact.md#optional-customer)
* [customerAccountCode](contact.md#optional-readonly-customeraccountcode)
* [customerNumber](contact.md#optional-readonly-customernumber)
* [email](contact.md#optional-email)
* [groups](contact.md#optional-groups)
* [inactive](contact.md#optional-inactive)
* [language](contact.md#optional-language)
* [memberNumber](contact.md#optional-membernumber)
* [name](contact.md#name)
* [organizationNumber](contact.md#optional-organizationnumber)
* [phoneNumber](contact.md#optional-phonenumber)
* [supplier](contact.md#optional-supplier)
* [supplierAccountCode](contact.md#optional-readonly-supplieraccountcode)
* [supplierNumber](contact.md#optional-readonly-suppliernumber)

## Properties

### `Optional` address

• **address**? : *[Address](address.md)*

**`memberof`** Contact

___

### `Optional` `Readonly` contactId

• **contactId**? : *number*

**`memberof`** Contact

___

### `Optional` contactPerson

• **contactPerson**? : *Array‹[ContactPerson](contactperson.md)›*

**`memberof`** Contact

___

### `Optional` currency

• **currency**? : *string*

ISO 4217 currency code. Default foreign currency to use when creating invoice to this contact (USD, EUR, SEK etc)

**`memberof`** Contact

___

### `Optional` customer

• **customer**? : *boolean*

True if the contact is a customer. It is possible for a contact to be both customer and supplier.

**`memberof`** Contact

___

### `Optional` `Readonly` customerAccountCode

• **customerAccountCode**? : *string*

Format 1500:XXXXX

**`memberof`** Contact

___

### `Optional` `Readonly` customerNumber

• **customerNumber**? : *number*

**`memberof`** Contact

___

### `Optional` email

• **email**? : *string*

**`memberof`** Contact

___

### `Optional` groups

• **groups**? : *Array‹string›*

**`memberof`** Contact

___

### `Optional` inactive

• **inactive**? : *boolean*

Whether the contact has been deactivated (true) or is active (false)

**`memberof`** Contact

___

### `Optional` language

• **language**? : *string | null*

The language to use when sending documents to this contact. NORWEGIAN or ENGLISH. Defaults to NORWEGIAN.

**`memberof`** Contact

___

### `Optional` memberNumber

• **memberNumber**? : *number*

A number that can be used to connect a contact to your own data.

**`memberof`** Contact

___

###  name

• **name**: *string*

**`memberof`** Contact

___

### `Optional` organizationNumber

• **organizationNumber**? : *string*

Brreg organiztion number.

**`memberof`** Contact

___

### `Optional` phoneNumber

• **phoneNumber**? : *string*

**`memberof`** Contact

___

### `Optional` supplier

• **supplier**? : *boolean*

True if the contact is a supplier. It is possible for a contact to be both supplier and customer.

**`memberof`** Contact

___

### `Optional` `Readonly` supplierAccountCode

• **supplierAccountCode**? : *string*

Format 2400:XXXXX

**`memberof`** Contact

___

### `Optional` `Readonly` supplierNumber

• **supplierNumber**? : *number*

**`memberof`** Contact
