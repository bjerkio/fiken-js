[fiken](../README.md) › [BankAccountResult](bankaccountresult.md)

# Interface: BankAccountResult

**`export`** 

**`interface`** BankAccountResult

## Hierarchy

* **BankAccountResult**

## Index

### Properties

* [accountCode](bankaccountresult.md#optional-accountcode)
* [bankAccountNumber](bankaccountresult.md#optional-bankaccountnumber)
* [bic](bankaccountresult.md#optional-bic)
* [foreignService](bankaccountresult.md#optional-foreignservice)
* [iban](bankaccountresult.md#optional-iban)
* [name](bankaccountresult.md#optional-name)
* [reconciledBalance](bankaccountresult.md#optional-reconciledbalance)
* [reconciledDate](bankaccountresult.md#optional-reconcileddate)
* [type](bankaccountresult.md#optional-type)

## Properties

### `Optional` accountCode

• **accountCode**? : *string*

**`memberof`** BankAccountResult

___

### `Optional` bankAccountNumber

• **bankAccountNumber**? : *string*

**`memberof`** BankAccountResult

___

### `Optional` bic

• **bic**? : *string*

**`memberof`** BankAccountResult

___

### `Optional` foreignService

• **foreignService**? : *string*

**`memberof`** BankAccountResult

___

### `Optional` iban

• **iban**? : *string*

**`memberof`** BankAccountResult

___

### `Optional` name

• **name**? : *string*

**`memberof`** BankAccountResult

___

### `Optional` reconciledBalance

• **reconciledBalance**? : *number*

Amounts are always represented as a number, and specifies the number of cents in the amount. Fractions will be ignored. ie. 10050 = 100.50

**`memberof`** BankAccountResult

___

### `Optional` reconciledDate

• **reconciledDate**? : *Date*

**`memberof`** BankAccountResult

___

### `Optional` type

• **type**? : *[BankAccountResultTypeEnum](../enums/bankaccountresulttypeenum.md)*

**`memberof`** BankAccountResult
