[fiken](../README.md) › [ProjectsApi](projectsapi.md)

# Class: ProjectsApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **ProjectsApi**

## Index

### Constructors

* [constructor](projectsapi.md#constructor)

### Properties

* [configuration](projectsapi.md#protected-configuration)

### Methods

* [createProject](projectsapi.md#createproject)
* [createProjectRaw](projectsapi.md#createprojectraw)
* [deleteProject](projectsapi.md#deleteproject)
* [deleteProjectRaw](projectsapi.md#deleteprojectraw)
* [getProject](projectsapi.md#getproject)
* [getProjectRaw](projectsapi.md#getprojectraw)
* [getProjects](projectsapi.md#getprojects)
* [getProjectsRaw](projectsapi.md#getprojectsraw)
* [request](projectsapi.md#protected-request)
* [updateProject](projectsapi.md#updateproject)
* [updateProjectRaw](projectsapi.md#updateprojectraw)
* [withMiddleware](projectsapi.md#withmiddleware)
* [withPostMiddleware](projectsapi.md#withpostmiddleware)
* [withPreMiddleware](projectsapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new ProjectsApi**(`configuration`: [Configuration](configuration.md)‹›): *[ProjectsApi](projectsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](configuration.md)‹› | new Configuration() |

**Returns:** *[ProjectsApi](projectsapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)‹›*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

## Methods

###  createProject

▸ **createProject**(`requestParameters`: [CreateProjectRequest](../interfaces/createprojectrequest.md)): *Promise‹void›*

Creates a new project

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateProjectRequest](../interfaces/createprojectrequest.md) |

**Returns:** *Promise‹void›*

___

###  createProjectRaw

▸ **createProjectRaw**(`requestParameters`: [CreateProjectRequest](../interfaces/createprojectrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Creates a new project

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateProjectRequest](../interfaces/createprojectrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  deleteProject

▸ **deleteProject**(`requestParameters`: [DeleteProjectRequest](../interfaces/deleteprojectrequest.md)): *Promise‹void›*

Delete project with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteProjectRequest](../interfaces/deleteprojectrequest.md) |

**Returns:** *Promise‹void›*

___

###  deleteProjectRaw

▸ **deleteProjectRaw**(`requestParameters`: [DeleteProjectRequest](../interfaces/deleteprojectrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Delete project with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteProjectRequest](../interfaces/deleteprojectrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

___

###  getProject

▸ **getProject**(`requestParameters`: [GetProjectRequest](../interfaces/getprojectrequest.md)): *Promise‹[ProjectResult](../interfaces/projectresult.md)›*

Returns project with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetProjectRequest](../interfaces/getprojectrequest.md) |

**Returns:** *Promise‹[ProjectResult](../interfaces/projectresult.md)›*

___

###  getProjectRaw

▸ **getProjectRaw**(`requestParameters`: [GetProjectRequest](../interfaces/getprojectrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[ProjectResult](../interfaces/projectresult.md)››*

Returns project with specified id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetProjectRequest](../interfaces/getprojectrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹[ProjectResult](../interfaces/projectresult.md)››*

___

###  getProjects

▸ **getProjects**(`requestParameters`: [GetProjectsRequest](../interfaces/getprojectsrequest.md)): *Promise‹Array‹[ProjectResult](../interfaces/projectresult.md)››*

Returns all projects for given company

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetProjectsRequest](../interfaces/getprojectsrequest.md) |

**Returns:** *Promise‹Array‹[ProjectResult](../interfaces/projectresult.md)››*

___

###  getProjectsRaw

▸ **getProjectsRaw**(`requestParameters`: [GetProjectsRequest](../interfaces/getprojectsrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[ProjectResult](../interfaces/projectresult.md)›››*

Returns all projects for given company

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetProjectsRequest](../interfaces/getprojectsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹Array‹[ProjectResult](../interfaces/projectresult.md)›››*

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

###  updateProject

▸ **updateProject**(`requestParameters`: [UpdateProjectOperationRequest](../interfaces/updateprojectoperationrequest.md)): *Promise‹void›*

Updates project with provided id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdateProjectOperationRequest](../interfaces/updateprojectoperationrequest.md) |

**Returns:** *Promise‹void›*

___

###  updateProjectRaw

▸ **updateProjectRaw**(`requestParameters`: [UpdateProjectOperationRequest](../interfaces/updateprojectoperationrequest.md)): *Promise‹[ApiResponse](../interfaces/apiresponse.md)‹void››*

Updates project with provided id.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdateProjectOperationRequest](../interfaces/updateprojectoperationrequest.md) |

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
