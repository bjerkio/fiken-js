/* tslint:disable */
/* eslint-disable */
/**
 * Fiken API
 *  ## Introduction [Fiken.no](https://fiken.no) is an online accounting system aimed at making accounting easy for small businesses. The API Module allows other systems to integrate with Fiken. This document describes Fiken\'s API.  ## Using the API Use of this API in production environments on live data is normally associated with a fee for the end user (company). API access costs 99kr per month and can be ordered through the Module access page under Settings in your Fiken account. If you have any questions regarding the API pricing, contact us at <api@fiken.no>.  The API provides two different ways of authorizing requests.    1. OAuth2   2. Personal API tokens  Third parties that wish to integrate with Fiken on behalf of their customers should use the OAuth2 authorization method. In order to develop OAuth2 applications that integrate with this API you must log into your Fiken account and check the box saying that you are a developer (**Rediger konto → Profil → Andre innstillinger**). This will allow you to create an App by clicking on the \"API\" tab under Brukerinnstillinger.  Upon creation of the new App you will be provided a Client ID and Client Secret that are needed for the OAuth2 authorization flow.  This will allow you to use the API during development with up to 5 users. If you would like to use the API with more than 5 users and gain production status, you will need to send an email to <api@fiken.no> to gain full access to the API module.  Fiken customers that wish to integrate their own solutions with this API can use personal API tokens. Personal API tokens can be created in Rediger konto -> Sikkerhet -> Personlige API-nøkler. Note that personal API tokens do not expire.  ## Base URL All URLs start with https://api.fiken.no/api/v2. Note that TLS is required, unencrypted HTTP is not supported. Although we currently redirect HTTP requests to HTTPS, you are not allowed to this with your application as using HTTP is a security risk. In the future we might respond with 403 Forbidden instead.  ## Concurrent requests / rate limiting You are only allowed to make a single concurrent API-request. This is currently not automatically enforced, but it might be in the future. If you break this rule you might be banned. In case of a ban please contact us to be unbanned.  ## Personal API tokens  Personal API tokens can be created in Rediger konto -> Sikkerhet. Personal API tokens never expire and can be revoked from the same place.  To use a personal API token simply send it as a bearer token in the `Authorization` header:      GET https://api.fiken.no/api/v2/companies     Authorization: Bearer <api token>  ## Authorization with OAuth2 Fiken API V2 uses OAuth 2.0 for authorizing API requests. Authorized requests to the API should use an `Authorization` header with the value `Bearer <TOKEN>` where `<TOKEN>` is an access token obtained through the OAuth flow.  ### Authorize Endpoint  To start the OAuth flow in order to obtain an access token for a user, you will first have to get consent from the user. To do this, direct your user to the authorization endpoint:      GET https://fiken.no/oauth/authorize?response_type=code&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&state=STATE  If the user is logged in and accepts your request, the user is redirected back to your redirect url. If the user is not logged in, the regular Fiken.no login form is presented first, requiring the user to authenticate before accepting or rejecting your request.  If the user rejects the request or if there is an error in your request, the user is redirected back to your redirect url with the parameters `error` and `error_description`. If the user rejected the request the error code will be `access_denied`.  #### Parameters  | Name          | Description                                                                                                      | | :------------ | :--------------------------------------------------------------------------------------------------------------- | | response_type | **Required** Should always be the value `code`                                                     | | client_id     | **Required** The client id you received from Fiken when you registered your application                          | | redirect_uri  | **Required** The URL in your application where users will be sent with an authorization code after authorization | | state         | **Required** An unguessable random string, used to protect against CSRF attacks                                  |   ### Token Endpoint  If the user accepts your request, Fiken redirects the user back to your `redirect_uri` with a parameter named `code` as well as the state you provided in the previous step in the `state` parameter. This temporary code will expire after a short while.  The temporary authorization code can be exchanged for an access token at the token endpoint.  The token endpoint is protected with Http Basic Authentication and you should use your application client id and client secret as credentials to authenticate.      POST https://fiken.no/oauth/token     Content-Type: application/x-www-form-urlencoded     Authorization: Basic dXNlIHlvdXIgY2xpZW50IGlkOmFuZCBjbGllbnQgc2VjcmV0      grant_type=authorization_code&code=AUTHCODE&redirect_uri=REDIRECT_URI&state=STATE  The response will contain the access token, a refresh token (see below) as well as information about the expiry time for the token and its scope.      {       \"access_token\": \"K2QwoFp4ZfugWLWk7Ipu9kni5cyv3luXKQ-GDShvV2g=\",       \"refresh_token\": \"naFOD_j8m6PFGcP0pfImVZlSxKklHLbgj9Hzao4rhg8=\",       \"token_type\": \"bearer\",       \"expires_in\": 86157,       \"scope\": \"read write\"     }  If an error occurs during the token exchange request, an error object is returned with an error and an error description.      {         \"error\": \"invalid_grant\",         \"error_description\": \"The authorization code is invalid or expired.\"     }  #### Parameters  | Name         | Description                                                                                                      | | :----------- | :--------------------------------------------------------------------------------------------------------------- | | grant_type   | **Required** Should be the value `authorization_code`                                                            | | code         | **Required** The authorization code that was received in the redirect from the authorize endpoint                | | redirect_uri | **Required** The URL in your application where users will be sent with an authorization code after authorization | | state        | **Required** An unguessable random string, used to protect against CSRF attacks                                  |  ### Refresh Tokens  If an access token has expired you can use the refresh token that was sent in the response from the token endpoint to get a new access token.  Note that if the user has revoked the consent to your app, the refresh token will no longer be valid.  To get a new access token from the refresh token, use the token endpoint with the grant type `refresh_token`:      POST https://fiken.no/oauth/token     Content-Type: application/x-www-form-urlencoded     Authorization: Basic dXNlIHlvdXIgY2xpZW50IGlkOmFuZCBjbGllbnQgc2VjcmV0      grant_type=refresh_token&refresh_token=REFRESH_TOKEN  The response contains a fresh access token along with a possibly updated refresh token:      {       \"access_token\": \"K2QwoFp4ZfugWLWk7Ipu9kni5cyv3luXKQ-GDShvV2g=\",       \"refresh_token\": \"naFOD_j8m6PFGcP0pfImVZlSxKklHLbgj9Hzao4rhg8=\",       \"token_type\": \"bearer\",       \"expires_in\": 86157,       \"scope\": \"read write\"     }  #### Parameters  | Name         | Description                                                                                                      | | :----------- | :--------------------------------------------------------------------------------------------------------------- | | grant_type   | **Required** Should be the value `refresh_token`                                                                 | | refresh_token| **Required** The refresh token last returned for this user from the token endpoint                               |  ### Using Access Tokens in API Requests  To execute API requests on behalf of the end user, send the access token obtained at the token endpoint as a bearer token, as in this example:      GET https://api.fiken.no/api/v2/companies     Authorization: Bearer <access_token_value>   ## Try It Out  For each endpoint in the documentation below there is a button *Try It Out*. To invoke the API from this documentation you need an app and you need to authorize usage for you Fiken.no user.  Your app needs to be configured with a redirect URL for this documentation, add `https://api.fiken.no/api/v2/docs/oauth2-redirect.html` to the list of redirect URLs for your app.  Click the padlock symbol on any of the endpoints and enter your `client_id` and `client_secret` and then press *Authorize* to start the OAuth2 authorization flow, then click *Close*.  Enter the required parameters for the endpoint, such as `company_slug`, and then press *Execute* to test.  ## Request  We recommend sending the `Fiken-Request-Id` header with all requests.  ### Request Headers | Request  Header           | Format   | Description                                                       | | ----------------          | -------- | -----------------------------                                     | | `Fiken-Request-Id`        | UUID     | UUID used to identify the request                                 |   ## Response ### Response code All HTTP codes should be expected with their normal semantics. These are some of the common ones:  * **200** for successful GET * **201** for successful POST where you get a Location-header for the created content * **400** when invalid content has be sent (for instance a required field is missing, unexpected fields, wrong format, etc) * **401** when the user is not authenticated * **403** when the user does not have the proper authorization * **404** when the requested content is not found * **405** When you are trying a method to a resource which doesn\'t support it (i.e. DELETE on an account). * **415** Wrong media type. we accept application/json only.  ### Response Content The default content type on the result of GET requests is application/json. On successful POSTs/PUTs/PATCHs and DELETEs an empty body is returned.  For successful POSTs/PUTs/PATCHs a Location header is given in all cases.  ## Pagination, Sorting & Filtering Pagination, sorting and filtering query parameters are all optional.   | URI                                                                     | Pagination? | Sortable? | Sortable Fields                       | Filterable? | Filtered Fields                                                                                   | | :---------                                                              |:----------- | :-------- | :-------------                        | :---        | :---                                                                                              | | https://api.fiken.no/api/v2/companies                                  | Yes         | Yes       | createdDate, name, organizationNumber | No          |                                                                                                   | | https://api.fiken.no/api/v2/companies/{companySlug}/accounts           | No          | No        |                                       | Yes         | fromAccount, toAccount                                                                            | | https://api.fiken.no/api/v2/companies/{companySlug}/accountBalances    | Yes         | No        |                                       | Yes         | fromAccount, toAccount                                                                            | | https://api.fiken.no/api/v2/companies/{companySlug}/bankAccounts       | Yes         | No        |                                       | No          |                                                                                                   | | https://api.fiken.no/api/v2/companies/{companySlug}/contacts           | Yes         | No        |                                       | Yes         | supplierNumber, customerNumber, memberNumber, name, organizationNumber, email, group, lastModified| | https://api.fiken.no/api/v2/companies/{companySlug}/creditNotes        | Yes         | No        |                                       | Yes         | issueDate, settled, customerId                                                                    | | https://api.fiken.no/api/v2/companies/{companySlug}/inbox              | Yes         | Yes       | createdDate, name                     | Yes         | status, name                                                                                      | | https://api.fiken.no/api/v2/companies/{companySlug}/invoices           | Yes         | No        |                                       | Yes         | issueDate, lastModified, settled, customerId                                                      | | https://api.fiken.no/api/v2/companies/{companySlug}/invoices/drafts    | Yes         | No        |                                       | No          |                                                                                                   | | https://api.fiken.no/api/v2/companies/{companySlug}/journalEntries     | Yes         | No        |                                       | Yes         | date                                                                                              | | https://api.fiken.no/api/v2/companies/{companySlug}/offers             | Yes         | No        |                                       | No          |                                                                                                   | | https://api.fiken.no/api/v2/companies/{companySlug}/orderConfirmations | Yes         | No        |                                       | No          |                                                                                                   | | https://api.fiken.no/api/v2/companies/{companySlug}/products           | Yes         | No        |                                       | Yes         | name, productNumber, active                                                                       | | https://api.fiken.no/api/v2/companies/{companySlug}/projects           | Yes         | No        |                                       | Yes         | completed                                                                                         | | https://api.fiken.no/api/v2/companies/{companySlug}/purchases          | Yes         | Yes       | createdDate                           | No          |                                                                                                   | | https://api.fiken.no/api/v2/companies/{companySlug}/purchases/drafts   | Yes         | No        |                                       | No          |                                                                                                   | | https://api.fiken.no/api/v2/companies/{companySlug}/sales              | Yes         | No        |                                       | Yes         | saleNumber, lastModified                                                                          | | https://api.fiken.no/api/v2/companies/{companySlug}/sales/drafts       | Yes         | No        |                                       | No          |                                                                                                   | | https://api.fiken.no/api/v2/companies/{companySlug}/transactions       | No          | No        |                                       | No          |                                                                                                   |  ### Pagination By default the API sets `page=0` and `pageSize=25` and returns the first 25 elements in a collection resource, if nothing else is specified. PageSize has a maximum value of 100 meaning that you can only access at most 100 elements at once.  To request a collection resource with pagination, query the resource with the query filters page and pageSize, note that both query parameters need to be set to enable pagination. The page counter starts at 0. The response will contain up to Fiken-Api-Page-Size elements and the response headers below, detailing how many elements the resource has in total and the total number of pages as well.  By default the API returns the resources in the order they were created, if nothing else is specified in the documentation.  #### Pagination Response Headers | Response Header           | Format   | Description                                                       | | ----------------          | -------- | -----------------------------                                     | | `Fiken-Api-Page`          | integer  | From the request header                                           | | `Fiken-Api-Page-Size`     | integer  | From the request header                                           | | `Fiken-Api-Page-Count`    | integer  | The total number of pages in this resource with this page size    | | `Fiken-Api-Result-Count`  | integer  | The total number of elements in this resource                     |  ### Sorting To change the sort order for a resource, set the sortBy query parameter to a sort field in either ascending or descending order. Ex: `https://api.fiken.no/api/v2/companies?sortBy=name%20asc`  ### Filtering Some collections support filtering, and depending on the type of field, different filters can be used. Dates are the most complex, and allow you do apply different filters with different parameter names. For instance, for a field called date, the following mutations are available:  | Parameter | Field | Format    | Description                                   | | ---       |---    | ---       |---                                            | |  `date`   |date |yyyy-MM-dd |date equal to parameter value                  | |  `dateLe` |date |yyyy-MM-dd |date less than or equal to parameter value     | |  `dateLt` |date |yyyy-MM-dd |date less than parameter value                 | |  `dateGe` |date |yyyy-MM-dd |date greater than or equal to parameter value  | |  `dateGt` |date |yyyy-MM-dd |date greater than parameter value              |  All date-fields will have these mutations of parameter name that applies  ## Data Types These are simple data-types that are used in several of our objects.  ### Date Dates are represented as strings formatted as yyyy-MM-dd.  ##### Examples: January 2nd, 1970: \"1970-01-02\"  ### Amount Amounts are always represented as a number, and specifies the number of cents in the amount. Fractions will be ignored.  ##### Examples: One thousand: 100000  One hundred and twelve cents: 10012  ### Account An account is a string with either four digits, or four digits, a colon and five digits (\"reskontro\").  ##### Examples: 3020  1500:10001  ### VatCode Fiken\'s VAT codes are based upon Sticos mvakoder. To see all VAT codes go to Fiken support, check the \"Mva kode\"-selector in the Fiken web interface while creating a genereal ledger item (\"Fri postering\"). 
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as FormData from 'form-data';
import * as runtime from '../runtime';
import {
    Attachment,
    AttachmentFromJSON,
    AttachmentToJSON,
    DraftRequest,
    DraftRequestFromJSON,
    DraftRequestToJSON,
    DraftResult,
    DraftResultFromJSON,
    DraftResultToJSON,
    Payment,
    PaymentFromJSON,
    PaymentToJSON,
    PurchaseRequest,
    PurchaseRequestFromJSON,
    PurchaseRequestToJSON,
    PurchaseResult,
    PurchaseResultFromJSON,
    PurchaseResultToJSON,
} from '../models';

export interface AddAttachmentToPurchaseRequest {
    companySlug: string;
    purchaseId: number;
    filename?: string;
    attachToPayment?: boolean;
    attachToSale?: boolean;
    file?: Blob;
}

export interface AddAttachmentToPurchaseDraftRequest {
    companySlug: string;
    draftId: number;
    filename?: string;
    file?: Blob;
}

export interface CreatePurchaseRequest {
    companySlug: string;
    purchaseRequest: PurchaseRequest;
}

export interface CreatePurchaseDraftRequest {
    companySlug: string;
    draftRequest: DraftRequest;
}

export interface CreatePurchaseFromDraftRequest {
    companySlug: string;
    draftId: number;
}

export interface CreatePurchasePaymentRequest {
    companySlug: string;
    purchaseId: number;
    payment: Payment;
}

export interface DeletePurchaseDraftRequest {
    companySlug: string;
    draftId: number;
}

export interface GetPurchaseRequest {
    companySlug: string;
    purchaseId: number;
}

export interface GetPurchaseAttachmentsRequest {
    companySlug: string;
    purchaseId: number;
}

export interface GetPurchaseDraftRequest {
    companySlug: string;
    draftId: number;
}

export interface GetPurchaseDraftAttachmentsRequest {
    companySlug: string;
    draftId: number;
}

export interface GetPurchaseDraftsRequest {
    companySlug: string;
    page?: number;
    pageSize?: number;
}

export interface GetPurchasePaymentRequest {
    companySlug: string;
    purchaseId: number;
    paymentId: number;
}

export interface GetPurchasePaymentsRequest {
    companySlug: string;
    purchaseId: number;
}

export interface GetPurchasesRequest {
    companySlug: string;
    page?: number;
    pageSize?: number;
    sortBy?: GetPurchasesSortByEnum;
}

export interface UpdatePurchaseDraftRequest {
    companySlug: string;
    draftId: number;
    draftRequest: DraftRequest;
}

/**
 * 
 */
export class PurchasesApi extends runtime.BaseAPI {

    /**
     * Creates and adds a new attachment to a Purchase
     */
    async addAttachmentToPurchaseRaw(requestParameters: AddAttachmentToPurchaseRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling addAttachmentToPurchase.');
        }

        if (requestParameters.purchaseId === null || requestParameters.purchaseId === undefined) {
            throw new runtime.RequiredError('purchaseId','Required parameter requestParameters.purchaseId was null or undefined when calling addAttachmentToPurchase.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("fiken_api_oauth", ["read", "write"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.filename !== undefined) {
            formParams.append('filename', requestParameters.filename as any);
        }

        if (requestParameters.attachToPayment !== undefined) {
            formParams.append('attachToPayment', requestParameters.attachToPayment as any);
        }

        if (requestParameters.attachToSale !== undefined) {
            formParams.append('attachToSale', requestParameters.attachToSale as any);
        }

        if (requestParameters.file !== undefined) {
            formParams.append('file', requestParameters.file as any);
        }

        const response = await this.request({
            path: `/companies/{companySlug}/purchases/{purchaseId}/attachments`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))).replace(`{${"purchaseId"}}`, encodeURIComponent(String(requestParameters.purchaseId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates and adds a new attachment to a Purchase
     */
    async addAttachmentToPurchase(requestParameters: AddAttachmentToPurchaseRequest): Promise<void> {
        await this.addAttachmentToPurchaseRaw(requestParameters);
    }

    /**
     * Creates and adds a new attachment to a draft
     */
    async addAttachmentToPurchaseDraftRaw(requestParameters: AddAttachmentToPurchaseDraftRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling addAttachmentToPurchaseDraft.');
        }

        if (requestParameters.draftId === null || requestParameters.draftId === undefined) {
            throw new runtime.RequiredError('draftId','Required parameter requestParameters.draftId was null or undefined when calling addAttachmentToPurchaseDraft.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("fiken_api_oauth", ["read", "write"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.filename !== undefined) {
            formParams.append('filename', requestParameters.filename as any);
        }

        if (requestParameters.file !== undefined) {
            formParams.append('file', requestParameters.file as any);
        }

        const response = await this.request({
            path: `/companies/{companySlug}/purchases/drafts/{draftId}/attachments`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))).replace(`{${"draftId"}}`, encodeURIComponent(String(requestParameters.draftId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates and adds a new attachment to a draft
     */
    async addAttachmentToPurchaseDraft(requestParameters: AddAttachmentToPurchaseDraftRequest): Promise<void> {
        await this.addAttachmentToPurchaseDraftRaw(requestParameters);
    }

    /**
     * Creates a new purchase.
     */
    async createPurchaseRaw(requestParameters: CreatePurchaseRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling createPurchase.');
        }

        if (requestParameters.purchaseRequest === null || requestParameters.purchaseRequest === undefined) {
            throw new runtime.RequiredError('purchaseRequest','Required parameter requestParameters.purchaseRequest was null or undefined when calling createPurchase.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("fiken_api_oauth", ["read", "write"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/companies/{companySlug}/purchases`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PurchaseRequestToJSON(requestParameters.purchaseRequest),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates a new purchase.
     */
    async createPurchase(requestParameters: CreatePurchaseRequest): Promise<void> {
        await this.createPurchaseRaw(requestParameters);
    }

    /**
     * Creates a purchase draft.
     */
    async createPurchaseDraftRaw(requestParameters: CreatePurchaseDraftRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling createPurchaseDraft.');
        }

        if (requestParameters.draftRequest === null || requestParameters.draftRequest === undefined) {
            throw new runtime.RequiredError('draftRequest','Required parameter requestParameters.draftRequest was null or undefined when calling createPurchaseDraft.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("fiken_api_oauth", ["read", "write"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/companies/{companySlug}/purchases/drafts`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DraftRequestToJSON(requestParameters.draftRequest),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates a purchase draft.
     */
    async createPurchaseDraft(requestParameters: CreatePurchaseDraftRequest): Promise<void> {
        await this.createPurchaseDraftRaw(requestParameters);
    }

    /**
     * Creates a purchase from an already created draft.
     */
    async createPurchaseFromDraftRaw(requestParameters: CreatePurchaseFromDraftRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling createPurchaseFromDraft.');
        }

        if (requestParameters.draftId === null || requestParameters.draftId === undefined) {
            throw new runtime.RequiredError('draftId','Required parameter requestParameters.draftId was null or undefined when calling createPurchaseFromDraft.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("fiken_api_oauth", ["read", "write"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/companies/{companySlug}/purchases/drafts/{draftId}/createPurchase`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))).replace(`{${"draftId"}}`, encodeURIComponent(String(requestParameters.draftId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates a purchase from an already created draft.
     */
    async createPurchaseFromDraft(requestParameters: CreatePurchaseFromDraftRequest): Promise<void> {
        await this.createPurchaseFromDraftRaw(requestParameters);
    }

    /**
     * Creates a new payment for a purchase
     */
    async createPurchasePaymentRaw(requestParameters: CreatePurchasePaymentRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling createPurchasePayment.');
        }

        if (requestParameters.purchaseId === null || requestParameters.purchaseId === undefined) {
            throw new runtime.RequiredError('purchaseId','Required parameter requestParameters.purchaseId was null or undefined when calling createPurchasePayment.');
        }

        if (requestParameters.payment === null || requestParameters.payment === undefined) {
            throw new runtime.RequiredError('payment','Required parameter requestParameters.payment was null or undefined when calling createPurchasePayment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("fiken_api_oauth", ["read", "write"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/companies/{companySlug}/purchases/{purchaseId}/payments`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))).replace(`{${"purchaseId"}}`, encodeURIComponent(String(requestParameters.purchaseId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentToJSON(requestParameters.payment),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates a new payment for a purchase
     */
    async createPurchasePayment(requestParameters: CreatePurchasePaymentRequest): Promise<void> {
        await this.createPurchasePaymentRaw(requestParameters);
    }

    /**
     * Delete draft with specified id.
     */
    async deletePurchaseDraftRaw(requestParameters: DeletePurchaseDraftRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling deletePurchaseDraft.');
        }

        if (requestParameters.draftId === null || requestParameters.draftId === undefined) {
            throw new runtime.RequiredError('draftId','Required parameter requestParameters.draftId was null or undefined when calling deletePurchaseDraft.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("fiken_api_oauth", ["read", "write"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/companies/{companySlug}/purchases/drafts/{draftId}`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))).replace(`{${"draftId"}}`, encodeURIComponent(String(requestParameters.draftId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete draft with specified id.
     */
    async deletePurchaseDraft(requestParameters: DeletePurchaseDraftRequest): Promise<void> {
        await this.deletePurchaseDraftRaw(requestParameters);
    }

    /**
     * Returns purchase with specified id.
     */
    async getPurchaseRaw(requestParameters: GetPurchaseRequest): Promise<runtime.ApiResponse<PurchaseResult>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling getPurchase.');
        }

        if (requestParameters.purchaseId === null || requestParameters.purchaseId === undefined) {
            throw new runtime.RequiredError('purchaseId','Required parameter requestParameters.purchaseId was null or undefined when calling getPurchase.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("fiken_api_oauth", ["read", "write"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/companies/{companySlug}/purchases/{purchaseId}`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))).replace(`{${"purchaseId"}}`, encodeURIComponent(String(requestParameters.purchaseId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PurchaseResultFromJSON(jsonValue));
    }

    /**
     * Returns purchase with specified id.
     */
    async getPurchase(requestParameters: GetPurchaseRequest): Promise<PurchaseResult> {
        const response = await this.getPurchaseRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns all attachments for specified purchase.
     */
    async getPurchaseAttachmentsRaw(requestParameters: GetPurchaseAttachmentsRequest): Promise<runtime.ApiResponse<Array<Attachment>>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling getPurchaseAttachments.');
        }

        if (requestParameters.purchaseId === null || requestParameters.purchaseId === undefined) {
            throw new runtime.RequiredError('purchaseId','Required parameter requestParameters.purchaseId was null or undefined when calling getPurchaseAttachments.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("fiken_api_oauth", ["read", "write"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/companies/{companySlug}/purchases/{purchaseId}/attachments`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))).replace(`{${"purchaseId"}}`, encodeURIComponent(String(requestParameters.purchaseId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AttachmentFromJSON));
    }

    /**
     * Returns all attachments for specified purchase.
     */
    async getPurchaseAttachments(requestParameters: GetPurchaseAttachmentsRequest): Promise<Array<Attachment>> {
        const response = await this.getPurchaseAttachmentsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns draft with specified id.
     */
    async getPurchaseDraftRaw(requestParameters: GetPurchaseDraftRequest): Promise<runtime.ApiResponse<DraftResult>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling getPurchaseDraft.');
        }

        if (requestParameters.draftId === null || requestParameters.draftId === undefined) {
            throw new runtime.RequiredError('draftId','Required parameter requestParameters.draftId was null or undefined when calling getPurchaseDraft.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("fiken_api_oauth", ["read", "write"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/companies/{companySlug}/purchases/drafts/{draftId}`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))).replace(`{${"draftId"}}`, encodeURIComponent(String(requestParameters.draftId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DraftResultFromJSON(jsonValue));
    }

    /**
     * Returns draft with specified id.
     */
    async getPurchaseDraft(requestParameters: GetPurchaseDraftRequest): Promise<DraftResult> {
        const response = await this.getPurchaseDraftRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns all attachments for specified draft.
     */
    async getPurchaseDraftAttachmentsRaw(requestParameters: GetPurchaseDraftAttachmentsRequest): Promise<runtime.ApiResponse<Array<Attachment>>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling getPurchaseDraftAttachments.');
        }

        if (requestParameters.draftId === null || requestParameters.draftId === undefined) {
            throw new runtime.RequiredError('draftId','Required parameter requestParameters.draftId was null or undefined when calling getPurchaseDraftAttachments.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("fiken_api_oauth", ["read", "write"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/companies/{companySlug}/purchases/drafts/{draftId}/attachments`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))).replace(`{${"draftId"}}`, encodeURIComponent(String(requestParameters.draftId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AttachmentFromJSON));
    }

    /**
     * Returns all attachments for specified draft.
     */
    async getPurchaseDraftAttachments(requestParameters: GetPurchaseDraftAttachmentsRequest): Promise<Array<Attachment>> {
        const response = await this.getPurchaseDraftAttachmentsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns all purchase drafts for given company.
     */
    async getPurchaseDraftsRaw(requestParameters: GetPurchaseDraftsRequest): Promise<runtime.ApiResponse<Array<DraftResult>>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling getPurchaseDrafts.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("fiken_api_oauth", ["read", "write"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/companies/{companySlug}/purchases/drafts`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DraftResultFromJSON));
    }

    /**
     * Returns all purchase drafts for given company.
     */
    async getPurchaseDrafts(requestParameters: GetPurchaseDraftsRequest): Promise<Array<DraftResult>> {
        const response = await this.getPurchaseDraftsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns given payment for specified purchase
     */
    async getPurchasePaymentRaw(requestParameters: GetPurchasePaymentRequest): Promise<runtime.ApiResponse<Payment>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling getPurchasePayment.');
        }

        if (requestParameters.purchaseId === null || requestParameters.purchaseId === undefined) {
            throw new runtime.RequiredError('purchaseId','Required parameter requestParameters.purchaseId was null or undefined when calling getPurchasePayment.');
        }

        if (requestParameters.paymentId === null || requestParameters.paymentId === undefined) {
            throw new runtime.RequiredError('paymentId','Required parameter requestParameters.paymentId was null or undefined when calling getPurchasePayment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("fiken_api_oauth", ["read", "write"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/companies/{companySlug}/purchases/{purchaseId}/payments/{paymentId}`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))).replace(`{${"purchaseId"}}`, encodeURIComponent(String(requestParameters.purchaseId))).replace(`{${"paymentId"}}`, encodeURIComponent(String(requestParameters.paymentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentFromJSON(jsonValue));
    }

    /**
     * Returns given payment for specified purchase
     */
    async getPurchasePayment(requestParameters: GetPurchasePaymentRequest): Promise<Payment> {
        const response = await this.getPurchasePaymentRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns all purchases for given company
     */
    async getPurchasePaymentsRaw(requestParameters: GetPurchasePaymentsRequest): Promise<runtime.ApiResponse<Array<Payment>>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling getPurchasePayments.');
        }

        if (requestParameters.purchaseId === null || requestParameters.purchaseId === undefined) {
            throw new runtime.RequiredError('purchaseId','Required parameter requestParameters.purchaseId was null or undefined when calling getPurchasePayments.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("fiken_api_oauth", ["read", "write"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/companies/{companySlug}/purchases/{purchaseId}/payments`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))).replace(`{${"purchaseId"}}`, encodeURIComponent(String(requestParameters.purchaseId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PaymentFromJSON));
    }

    /**
     * Returns all purchases for given company
     */
    async getPurchasePayments(requestParameters: GetPurchasePaymentsRequest): Promise<Array<Payment>> {
        const response = await this.getPurchasePaymentsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns all purchases for given company
     */
    async getPurchasesRaw(requestParameters: GetPurchasesRequest): Promise<runtime.ApiResponse<Array<PurchaseResult>>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling getPurchases.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("fiken_api_oauth", ["read", "write"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/companies/{companySlug}/purchases`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PurchaseResultFromJSON));
    }

    /**
     * Returns all purchases for given company
     */
    async getPurchases(requestParameters: GetPurchasesRequest): Promise<Array<PurchaseResult>> {
        const response = await this.getPurchasesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates draft with provided id. 
     */
    async updatePurchaseDraftRaw(requestParameters: UpdatePurchaseDraftRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling updatePurchaseDraft.');
        }

        if (requestParameters.draftId === null || requestParameters.draftId === undefined) {
            throw new runtime.RequiredError('draftId','Required parameter requestParameters.draftId was null or undefined when calling updatePurchaseDraft.');
        }

        if (requestParameters.draftRequest === null || requestParameters.draftRequest === undefined) {
            throw new runtime.RequiredError('draftRequest','Required parameter requestParameters.draftRequest was null or undefined when calling updatePurchaseDraft.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("fiken_api_oauth", ["read", "write"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/companies/{companySlug}/purchases/drafts/{draftId}`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))).replace(`{${"draftId"}}`, encodeURIComponent(String(requestParameters.draftId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: DraftRequestToJSON(requestParameters.draftRequest),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates draft with provided id. 
     */
    async updatePurchaseDraft(requestParameters: UpdatePurchaseDraftRequest): Promise<void> {
        await this.updatePurchaseDraftRaw(requestParameters);
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetPurchasesSortByEnum {
    Asc = 'date asc',
    Desc = 'date desc'
}
