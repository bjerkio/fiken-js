[fiken](../README.md) › [ProductsApi](productsapi.md)

# Class: ProductsApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **ProductsApi**

## Index

### Constructors

* [constructor](productsapi.md#constructor)

### Properties

* [configuration](productsapi.md#protected-configuration)

### Methods

* [createProduct](productsapi.md#createproduct)
* [createProductRaw](productsapi.md#createproductraw)
* [createProductSalesReport](productsapi.md#createproductsalesreport)
* [createProductSalesReportRaw](productsapi.md#createproductsalesreportraw)
* [deleteProduct](productsapi.md#deleteproduct)
* [deleteProductRaw](productsapi.md#deleteproductraw)
* [getProduct](productsapi.md#getproduct)
* [getProductRaw](productsapi.md#getproductraw)
* [getProducts](productsapi.md#getproducts)
* [getProductsRaw](productsapi.md#getproductsraw)
* [request](productsapi.md#protected-request)
* [updateProduct](productsapi.md#updateproduct)
* [updateProductRaw](productsapi.md#updateproductraw)
* [withMiddleware](productsapi.md#withmiddleware)
* [withPostMiddleware](productsapi.md#withpostmiddleware)
* [withPreMiddleware](productsapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new ProductsApi**(`configuration`: [Configuration](configuration.md)‹›): *[ProductsApi](productsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](configuration.md)‹› | new Configuration() |

**Returns:** *[ProductsApi](productsapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)‹›*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

## Methods

###  createProduct

▸ **createProduct**(`requestParameters`: [CreateProductRequest](../interfaces/createproductrequest.md)): *Promise‹void›*

Creates a new product.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateProductRequest](../interfaces/createproductrequest.md) |

**Returns:** *Promise‹void›*

___

###  createProductRaw

▸ **createProductRaw**(`requestParameters`: [CreateProductRequest](../interfaces/createproductrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates a new product.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateProductRequest](../interfaces/createproductrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  createProductSalesReport

▸ **createProductSalesReport**(`requestParameters`: [CreateProductSalesReportRequest](../interfaces/createproductsalesreportrequest.md)): *Promise‹Array‹[ProductSalesReportResult](../interfaces/productsalesreportresult.md)››*

Creates a report based on provided specifications.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateProductSalesReportRequest](../interfaces/createproductsalesreportrequest.md) |

**Returns:** *Promise‹Array‹[ProductSalesReportResult](../interfaces/productsalesreportresult.md)››*

___

###  createProductSalesReportRaw

▸ **createProductSalesReportRaw**(`requestParameters`: [CreateProductSalesReportRequest](../interfaces/createproductsalesreportrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[ProductSalesReportResult](../interfaces/productsalesreportresult.md)›››*

Creates a report based on provided specifications.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateProductSalesReportRequest](../interfaces/createproductsalesreportrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[ProductSalesReportResult](../interfaces/productsalesreportresult.md)›››*

___

###  deleteProduct

▸ **deleteProduct**(`requestParameters`: [DeleteProductRequest](../interfaces/deleteproductrequest.md)): *Promise‹void›*

Delete product with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteProductRequest](../interfaces/deleteproductrequest.md) |

**Returns:** *Promise‹void›*

___

###  deleteProductRaw

▸ **deleteProductRaw**(`requestParameters`: [DeleteProductRequest](../interfaces/deleteproductrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Delete product with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteProductRequest](../interfaces/deleteproductrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  getProduct

▸ **getProduct**(`requestParameters`: [GetProductRequest](../interfaces/getproductrequest.md)): *Promise‹[Product](../interfaces/product.md)›*

Returns product with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetProductRequest](../interfaces/getproductrequest.md) |

**Returns:** *Promise‹[Product](../interfaces/product.md)›*

___

###  getProductRaw

▸ **getProductRaw**(`requestParameters`: [GetProductRequest](../interfaces/getproductrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[Product](../interfaces/product.md)››*

Returns product with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetProductRequest](../interfaces/getproductrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[Product](../interfaces/product.md)››*

___

###  getProducts

▸ **getProducts**(`requestParameters`: [GetProductsRequest](../interfaces/getproductsrequest.md)): *Promise‹Array‹[Product](../interfaces/product.md)››*

Returns all products for given company

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetProductsRequest](../interfaces/getproductsrequest.md) |

**Returns:** *Promise‹Array‹[Product](../interfaces/product.md)››*

___

###  getProductsRaw

▸ **getProductsRaw**(`requestParameters`: [GetProductsRequest](../interfaces/getproductsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Product](../interfaces/product.md)›››*

Returns all products for given company

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetProductsRequest](../interfaces/getproductsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[Product](../interfaces/product.md)›››*

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

###  updateProduct

▸ **updateProduct**(`requestParameters`: [UpdateProductRequest](../interfaces/updateproductrequest.md)): *Promise‹void›*

Updates an existing product.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdateProductRequest](../interfaces/updateproductrequest.md) |

**Returns:** *Promise‹void›*

___

###  updateProductRaw

▸ **updateProductRaw**(`requestParameters`: [UpdateProductRequest](../interfaces/updateproductrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Updates an existing product.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdateProductRequest](../interfaces/updateproductrequest.md) |

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
