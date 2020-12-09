[fiken](../README.md) › [Payment](payment.md)

# Interface: Payment

Returns a payment object with additional fields currrencyAmount, currency, and fee if it is a foreign currency payment

**`export`** 

**`interface`** Payment

## Hierarchy

* **Payment**

## Index

### Properties

* [account](payment.md#account)
* [amount](payment.md#amount)
* [amountInNok](payment.md#optional-readonly-amountinnok)
* [currency](payment.md#optional-currency)
* [date](payment.md#date)
* [fee](payment.md#optional-fee)
* [paymentId](payment.md#optional-readonly-paymentid)

## Properties

###  account

• **account**: *string*

Account associated with payment.

**`memberof`** Payment

___

###  amount

• **amount**: *number*

Amount paid in the specified currency. If no currency is provided then currency defaults to "NOK". Formatted in cents (34000 = 340.00)

**`memberof`** Payment

___

### `Optional` `Readonly` amountInNok

• **amountInNok**? : *number*

Attribute of a foreign payment only. Calculated by Fiken if amount is provided in currency other than NOK. Formatted in cents (500000 = 5000.00)

**`memberof`** Payment

___

### `Optional` currency

• **currency**? : *string*

Only specify the currency if other than "NOK", otherwise default currency is "NOK". ISO 4217 currency code

**`memberof`** Payment

___

###  date

• **date**: *Date*

Payment date, format yyyy-mm-dd

**`memberof`** Payment

___

### `Optional` fee

• **fee**? : *number*

Any fees additional to the amount paid in the specified currency ("NOK" default value).

**`memberof`** Payment

___

### `Optional` `Readonly` paymentId

• **paymentId**? : *number*

Id of given payment.

**`memberof`** Payment
