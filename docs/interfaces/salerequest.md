[fiken](../README.md) › [SaleRequest](salerequest.md)

# Interface: SaleRequest

**`export`** 

**`interface`** SaleRequest

## Hierarchy

* **SaleRequest**

## Index

### Properties

* [currency](salerequest.md#currency)
* [customerId](salerequest.md#optional-customerid)
* [date](salerequest.md#date)
* [dueDate](salerequest.md#optional-duedate)
* [kid](salerequest.md#optional-kid)
* [kind](salerequest.md#kind)
* [lines](salerequest.md#lines)
* [outstandingBalance](salerequest.md#optional-outstandingbalance)
* [paymentAccount](salerequest.md#optional-paymentaccount)
* [paymentDate](salerequest.md#optional-readonly-paymentdate)
* [paymentFee](salerequest.md#optional-paymentfee)
* [projectId](salerequest.md#optional-projectid)
* [saleNumber](salerequest.md#optional-salenumber)
* [settled](salerequest.md#optional-settled)
* [totalPaid](salerequest.md#optional-totalpaid)
* [totalPaidInCurrency](salerequest.md#optional-totalpaidincurrency)

## Properties

###  currency

• **currency**: *string*

ISO 4217 currency code

**`memberof`** SaleRequest

___

### `Optional` customerId

• **customerId**? : *number*

Customer id

**`memberof`** SaleRequest

___

###  date

• **date**: *Date*

Due date of the invoice, format yyyy-mm-dd

**`memberof`** SaleRequest

___

### `Optional` dueDate

• **dueDate**? : *Date*

Due date of the invoice, format yyyy-mm-dd

**`memberof`** SaleRequest

___

### `Optional` kid

• **kid**? : *string*

Norwegian KID number. Number from 2 to 25 digits long.

**`memberof`** SaleRequest

___

###  kind

• **kind**: *[SaleRequestKindEnum](../enums/salerequestkindenum.md)*

Either cash_sale, invoice, or external_invoice.

**`memberof`** SaleRequest

___

###  lines

• **lines**: *Array‹[OrderLine](orderline.md)›*

**`memberof`** SaleRequest

___

### `Optional` outstandingBalance

• **outstandingBalance**? : *number*

**`memberof`** SaleRequest

___

### `Optional` paymentAccount

• **paymentAccount**? : *string*

**`memberof`** SaleRequest

___

### `Optional` `Readonly` paymentDate

• **paymentDate**? : *Date*

Payment date of the invoice, format yyyy-mm-dd

**`memberof`** SaleRequest

___

### `Optional` paymentFee

• **paymentFee**? : *number*

Fee associated with payment of sale.

**`memberof`** SaleRequest

___

### `Optional` projectId

• **projectId**? : *number*

Id of given project.

**`memberof`** SaleRequest

___

### `Optional` saleNumber

• **saleNumber**? : *string*

Identifier for sale.

**`memberof`** SaleRequest

___

### `Optional` settled

• **settled**? : *boolean*

If the sale as been marked as settled (True) or not (False).

**`memberof`** SaleRequest

___

### `Optional` totalPaid

• **totalPaid**? : *number*

Total amount paid in NOK

**`memberof`** SaleRequest

___

### `Optional` totalPaidInCurrency

• **totalPaidInCurrency**? : *number*

Total amount paid in other currency.

**`memberof`** SaleRequest
