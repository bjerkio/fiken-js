[fiken](../README.md) › [SaleResult](saleresult.md)

# Interface: SaleResult

**`export`** 

**`interface`** SaleResult

## Hierarchy

* **SaleResult**

## Index

### Properties

* [currency](saleresult.md#optional-currency)
* [customer](saleresult.md#optional-customer)
* [date](saleresult.md#optional-date)
* [dueDate](saleresult.md#optional-duedate)
* [kid](saleresult.md#optional-kid)
* [kind](saleresult.md#optional-kind)
* [lines](saleresult.md#optional-lines)
* [netAmount](saleresult.md#optional-netamount)
* [outstandingBalance](saleresult.md#optional-outstandingbalance)
* [paymentAccount](saleresult.md#optional-paymentaccount)
* [paymentDate](saleresult.md#optional-readonly-paymentdate)
* [project](saleresult.md#optional-project)
* [saleAttachments](saleresult.md#optional-saleattachments)
* [saleId](saleresult.md#optional-readonly-saleid)
* [saleNumber](saleresult.md#optional-salenumber)
* [salePayments](saleresult.md#optional-salepayments)
* [settled](saleresult.md#optional-settled)
* [totalPaid](saleresult.md#optional-readonly-totalpaid)
* [totalPaidInCurrency](saleresult.md#optional-readonly-totalpaidincurrency)
* [transactionId](saleresult.md#optional-transactionid)
* [vatAmount](saleresult.md#optional-vatamount)
* [writeOff](saleresult.md#optional-writeoff)

## Properties

### `Optional` currency

• **currency**? : *string*

ISO 4217 currency code

**`memberof`** SaleResult

___

### `Optional` customer

• **customer**? : *[Contact](contact.md)*

**`memberof`** SaleResult

___

### `Optional` date

• **date**? : *Date*

Due date of the invoice, format yyyy-mm-dd

**`memberof`** SaleResult

___

### `Optional` dueDate

• **dueDate**? : *Date*

Due date of the invoice, format yyyy-mm-dd

**`memberof`** SaleResult

___

### `Optional` kid

• **kid**? : *string*

Norwegian KID number. Number from 2 to 25 digits long.

**`memberof`** SaleResult

___

### `Optional` kind

• **kind**? : *[SaleResultKindEnum](../enums/saleresultkindenum.md)*

Either cash_sale, invoice, or external_invoice.

**`memberof`** SaleResult

___

### `Optional` lines

• **lines**? : *Array‹[OrderLine](orderline.md)›*

**`memberof`** SaleResult

___

### `Optional` netAmount

• **netAmount**? : *number*

Total net amount of the sale to be paid.

**`memberof`** SaleResult

___

### `Optional` outstandingBalance

• **outstandingBalance**? : *number*

**`memberof`** SaleResult

___

### `Optional` paymentAccount

• **paymentAccount**? : *string*

**`memberof`** SaleResult

___

### `Optional` `Readonly` paymentDate

• **paymentDate**? : *Date*

Payment date of the invoice, format yyyy-mm-dd

**`memberof`** SaleResult

___

### `Optional` project

• **project**? : *[ProjectResult](projectresult.md)*

**`memberof`** SaleResult

___

### `Optional` saleAttachments

• **saleAttachments**? : *Array‹[Attachment](attachment.md)›*

**`memberof`** SaleResult

___

### `Optional` `Readonly` saleId

• **saleId**? : *number*

Sale Id

**`memberof`** SaleResult

___

### `Optional` saleNumber

• **saleNumber**? : *string*

Identifier for sale.

**`memberof`** SaleResult

___

### `Optional` salePayments

• **salePayments**? : *Array‹[Payment](payment.md)›*

**`memberof`** SaleResult

___

### `Optional` settled

• **settled**? : *boolean*

If the sale as been marked as settled (True) or not (False).

**`memberof`** SaleResult

___

### `Optional` `Readonly` totalPaid

• **totalPaid**? : *number*

Total amount paid in NOK

**`memberof`** SaleResult

___

### `Optional` `Readonly` totalPaidInCurrency

• **totalPaidInCurrency**? : *number*

Total amount paid in other currency.

**`memberof`** SaleResult

___

### `Optional` transactionId

• **transactionId**? : *number*

**`memberof`** SaleResult

___

### `Optional` vatAmount

• **vatAmount**? : *number*

VAT amount on sale.

**`memberof`** SaleResult

___

### `Optional` writeOff

• **writeOff**? : *boolean*

If a loss has been registered for this sale (tapsføring av salg).

**`memberof`** SaleResult
