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
    InvoiceRequest,
    InvoiceRequestFromJSON,
    InvoiceRequestToJSON,
    InvoiceResult,
    InvoiceResultFromJSON,
    InvoiceResultToJSON,
    InvoiceishDraftRequest,
    InvoiceishDraftRequestFromJSON,
    InvoiceishDraftRequestToJSON,
    InvoiceishDraftResult,
    InvoiceishDraftResultFromJSON,
    InvoiceishDraftResultToJSON,
    SendInvoiceRequest,
    SendInvoiceRequestFromJSON,
    SendInvoiceRequestToJSON,
    UpdateInvoiceRequest,
    UpdateInvoiceRequestFromJSON,
    UpdateInvoiceRequestToJSON,
} from '../models';
import { createReadStream } from 'fs';

export interface AddAttachmentToInvoiceRequest {
    companySlug: string;
    invoiceId: number;
    filename?: string;
    file?: Blob;
}

export interface AddAttachmentToInvoiceDraftRequest {
    companySlug: string;
    draftId: number;
    filename?: string;
    comment?: string;
    file?: Blob;
}

export interface CreateInvoiceRequest {
    companySlug: string;
    invoiceRequest: InvoiceRequest;
}

export interface CreateInvoiceDraftRequest {
    companySlug: string;
    invoiceishDraftRequest: InvoiceishDraftRequest;
}

export interface CreateInvoiceFromDraftRequest {
    companySlug: string;
    draftId: number;
}

export interface DeleteInvoiceDraftRequest {
    companySlug: string;
    draftId: number;
}

export interface GetInvoiceRequest {
    companySlug: string;
    invoiceId: number;
}

export interface GetInvoiceAttachmentsRequest {
    companySlug: string;
    invoiceId: number;
}

export interface GetInvoiceDraftRequest {
    companySlug: string;
    draftId: number;
}

export interface GetInvoiceDraftAttachmentsRequest {
    companySlug: string;
    draftId: number;
}

export interface GetInvoiceDraftsRequest {
    companySlug: string;
    page?: number;
    pageSize?: number;
}

export interface GetInvoicesRequest {
    companySlug: string;
    page?: number;
    pageSize?: number;
    issueDate?: Date;
    issueDateLe?: Date;
    issueDateLt?: Date;
    issueDateGe?: Date;
    issueDateGt?: Date;
    lastModified?: Date;
    lastModifiedLe?: Date;
    lastModifiedLt?: Date;
    lastModifiedGe?: Date;
    lastModifiedGt?: Date;
    customerId?: number;
    settled?: boolean;
}

export interface SendInvoiceOperationRequest {
    companySlug: string;
    sendInvoiceRequest: SendInvoiceRequest;
}

export interface UpdateInvoiceOperationRequest {
    companySlug: string;
    invoiceId: number;
    updateInvoiceRequest: UpdateInvoiceRequest;
}

export interface UpdateInvoiceDraftRequest {
    companySlug: string;
    draftId: number;
    invoiceishDraftRequest: InvoiceishDraftRequest;
}

/**
 * 
 */
export class InvoicesApi extends runtime.BaseAPI {

    /**
     * Creates and adds a new attachment to an Invoice
     */
    async addAttachmentToInvoiceRaw(requestParameters: AddAttachmentToInvoiceRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling addAttachmentToInvoice.');
        }

        if (requestParameters.invoiceId === null || requestParameters.invoiceId === undefined) {
            throw new runtime.RequiredError('invoiceId','Required parameter requestParameters.invoiceId was null or undefined when calling addAttachmentToInvoice.');
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

        const formParams = new FormData();

        const { filename, file } = requestParameters;

        formParams.append('filename', filename as any);

        if (typeof file === 'string') {
          const stream = createReadStream(file);
          formParams.append('file', stream, filename);
        } else {
          formParams.append('file', file, filename);
        } 
        
        const response = await this.request({
            path: `/companies/{companySlug}/invoices/{invoiceId}/attachments`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))).replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters.invoiceId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            formBody: formParams,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates and adds a new attachment to an Invoice
     */
    async addAttachmentToInvoice(requestParameters: AddAttachmentToInvoiceRequest): Promise<void> {
        await this.addAttachmentToInvoiceRaw(requestParameters);
    }

    /**
     * Creates and adds a new attachment to an invoice draft
     */
    async addAttachmentToInvoiceDraftRaw(requestParameters: AddAttachmentToInvoiceDraftRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling addAttachmentToInvoiceDraft.');
        }

        if (requestParameters.draftId === null || requestParameters.draftId === undefined) {
            throw new runtime.RequiredError('draftId','Required parameter requestParameters.draftId was null or undefined when calling addAttachmentToInvoiceDraft.');
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

        const formParams = new FormData();

        const { filename, file } = requestParameters;

        formParams.append('filename', filename as any);

        if (typeof file === 'string') {
          const stream = createReadStream(file);
          formParams.append('file', stream, filename);
        } else {
          formParams.append('file', file, filename);
        } 

        if (requestParameters.comment !== undefined) {
            formParams.append('comment', requestParameters.comment as any);
        }

        const response = await this.request({
            path: `/companies/{companySlug}/invoices/drafts/{draftId}/attachments`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))).replace(`{${"draftId"}}`, encodeURIComponent(String(requestParameters.draftId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            formBody: formParams,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates and adds a new attachment to an invoice draft
     */
    async addAttachmentToInvoiceDraft(requestParameters: AddAttachmentToInvoiceDraftRequest): Promise<void> {
        await this.addAttachmentToInvoiceDraftRaw(requestParameters);
    }

    /**
     * Creates an invoice. There are two types of invoice lines that can be added to an invoice line: product line or free text line. Provide a product Id if you are invoicing a product. All information regarding the price and VAT for this product will be added to the invoice. It is however also possible to override the unit amount by sending information in both fields \"productId\" and \"unitAmount\". An invoice line can also be a free text line meaning that no existing product will be associated with the invoiced line. In this case all information regarding the price and VAT of the product or service to be invoiced must be provided. 
     */
    async createInvoiceRaw(requestParameters: CreateInvoiceRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling createInvoice.');
        }

        if (requestParameters.invoiceRequest === null || requestParameters.invoiceRequest === undefined) {
            throw new runtime.RequiredError('invoiceRequest','Required parameter requestParameters.invoiceRequest was null or undefined when calling createInvoice.');
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
            path: `/companies/{companySlug}/invoices`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InvoiceRequestToJSON(requestParameters.invoiceRequest),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates an invoice. There are two types of invoice lines that can be added to an invoice line: product line or free text line. Provide a product Id if you are invoicing a product. All information regarding the price and VAT for this product will be added to the invoice. It is however also possible to override the unit amount by sending information in both fields \"productId\" and \"unitAmount\". An invoice line can also be a free text line meaning that no existing product will be associated with the invoiced line. In this case all information regarding the price and VAT of the product or service to be invoiced must be provided. 
     */
    async createInvoice(requestParameters: CreateInvoiceRequest): Promise<void> {
        await this.createInvoiceRaw(requestParameters);
    }

    /**
     * Creates an invoice draft.
     */
    async createInvoiceDraftRaw(requestParameters: CreateInvoiceDraftRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling createInvoiceDraft.');
        }

        if (requestParameters.invoiceishDraftRequest === null || requestParameters.invoiceishDraftRequest === undefined) {
            throw new runtime.RequiredError('invoiceishDraftRequest','Required parameter requestParameters.invoiceishDraftRequest was null or undefined when calling createInvoiceDraft.');
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
            path: `/companies/{companySlug}/invoices/drafts`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InvoiceishDraftRequestToJSON(requestParameters.invoiceishDraftRequest),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates an invoice draft.
     */
    async createInvoiceDraft(requestParameters: CreateInvoiceDraftRequest): Promise<void> {
        await this.createInvoiceDraftRaw(requestParameters);
    }

    /**
     * Creates an invoice from an already created draft.
     */
    async createInvoiceFromDraftRaw(requestParameters: CreateInvoiceFromDraftRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling createInvoiceFromDraft.');
        }

        if (requestParameters.draftId === null || requestParameters.draftId === undefined) {
            throw new runtime.RequiredError('draftId','Required parameter requestParameters.draftId was null or undefined when calling createInvoiceFromDraft.');
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
            path: `/companies/{companySlug}/invoices/drafts/{draftId}/createInvoice`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))).replace(`{${"draftId"}}`, encodeURIComponent(String(requestParameters.draftId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates an invoice from an already created draft.
     */
    async createInvoiceFromDraft(requestParameters: CreateInvoiceFromDraftRequest): Promise<void> {
        await this.createInvoiceFromDraftRaw(requestParameters);
    }

    /**
     * Delete invoice draft with specified id.
     */
    async deleteInvoiceDraftRaw(requestParameters: DeleteInvoiceDraftRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling deleteInvoiceDraft.');
        }

        if (requestParameters.draftId === null || requestParameters.draftId === undefined) {
            throw new runtime.RequiredError('draftId','Required parameter requestParameters.draftId was null or undefined when calling deleteInvoiceDraft.');
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
            path: `/companies/{companySlug}/invoices/drafts/{draftId}`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))).replace(`{${"draftId"}}`, encodeURIComponent(String(requestParameters.draftId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete invoice draft with specified id.
     */
    async deleteInvoiceDraft(requestParameters: DeleteInvoiceDraftRequest): Promise<void> {
        await this.deleteInvoiceDraftRaw(requestParameters);
    }

    /**
     * Returns invoice with specified id.
     */
    async getInvoiceRaw(requestParameters: GetInvoiceRequest): Promise<runtime.ApiResponse<InvoiceResult>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling getInvoice.');
        }

        if (requestParameters.invoiceId === null || requestParameters.invoiceId === undefined) {
            throw new runtime.RequiredError('invoiceId','Required parameter requestParameters.invoiceId was null or undefined when calling getInvoice.');
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
            path: `/companies/{companySlug}/invoices/{invoiceId}`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))).replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters.invoiceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceResultFromJSON(jsonValue));
    }

    /**
     * Returns invoice with specified id.
     */
    async getInvoice(requestParameters: GetInvoiceRequest): Promise<InvoiceResult> {
        const response = await this.getInvoiceRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns all attachments for a given Invoice
     */
    async getInvoiceAttachmentsRaw(requestParameters: GetInvoiceAttachmentsRequest): Promise<runtime.ApiResponse<Array<Attachment>>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling getInvoiceAttachments.');
        }

        if (requestParameters.invoiceId === null || requestParameters.invoiceId === undefined) {
            throw new runtime.RequiredError('invoiceId','Required parameter requestParameters.invoiceId was null or undefined when calling getInvoiceAttachments.');
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
            path: `/companies/{companySlug}/invoices/{invoiceId}/attachments`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))).replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters.invoiceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AttachmentFromJSON));
    }

    /**
     * Returns all attachments for a given Invoice
     */
    async getInvoiceAttachments(requestParameters: GetInvoiceAttachmentsRequest): Promise<Array<Attachment>> {
        const response = await this.getInvoiceAttachmentsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns invoice draft with specified id.
     */
    async getInvoiceDraftRaw(requestParameters: GetInvoiceDraftRequest): Promise<runtime.ApiResponse<InvoiceishDraftResult>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling getInvoiceDraft.');
        }

        if (requestParameters.draftId === null || requestParameters.draftId === undefined) {
            throw new runtime.RequiredError('draftId','Required parameter requestParameters.draftId was null or undefined when calling getInvoiceDraft.');
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
            path: `/companies/{companySlug}/invoices/drafts/{draftId}`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))).replace(`{${"draftId"}}`, encodeURIComponent(String(requestParameters.draftId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceishDraftResultFromJSON(jsonValue));
    }

    /**
     * Returns invoice draft with specified id.
     */
    async getInvoiceDraft(requestParameters: GetInvoiceDraftRequest): Promise<InvoiceishDraftResult> {
        const response = await this.getInvoiceDraftRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns all attachments for specified draft.
     */
    async getInvoiceDraftAttachmentsRaw(requestParameters: GetInvoiceDraftAttachmentsRequest): Promise<runtime.ApiResponse<Array<Attachment>>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling getInvoiceDraftAttachments.');
        }

        if (requestParameters.draftId === null || requestParameters.draftId === undefined) {
            throw new runtime.RequiredError('draftId','Required parameter requestParameters.draftId was null or undefined when calling getInvoiceDraftAttachments.');
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
            path: `/companies/{companySlug}/invoices/drafts/{draftId}/attachments`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))).replace(`{${"draftId"}}`, encodeURIComponent(String(requestParameters.draftId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AttachmentFromJSON));
    }

    /**
     * Returns all attachments for specified draft.
     */
    async getInvoiceDraftAttachments(requestParameters: GetInvoiceDraftAttachmentsRequest): Promise<Array<Attachment>> {
        const response = await this.getInvoiceDraftAttachmentsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns all invoice drafts for given company.
     */
    async getInvoiceDraftsRaw(requestParameters: GetInvoiceDraftsRequest): Promise<runtime.ApiResponse<Array<InvoiceishDraftResult>>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling getInvoiceDrafts.');
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
            path: `/companies/{companySlug}/invoices/drafts`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(InvoiceishDraftResultFromJSON));
    }

    /**
     * Returns all invoice drafts for given company.
     */
    async getInvoiceDrafts(requestParameters: GetInvoiceDraftsRequest): Promise<Array<InvoiceishDraftResult>> {
        const response = await this.getInvoiceDraftsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns all invoices for given company. You can filter based on issue date, last modified date, customer ID, and if the invoice is settled or not.
     */
    async getInvoicesRaw(requestParameters: GetInvoicesRequest): Promise<runtime.ApiResponse<Array<InvoiceResult>>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling getInvoices.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.issueDate !== undefined) {
            queryParameters['issueDate'] = (requestParameters.issueDate as any).toISOString().substr(0,10);
        }

        if (requestParameters.issueDateLe !== undefined) {
            queryParameters['issueDateLe'] = (requestParameters.issueDateLe as any).toISOString().substr(0,10);
        }

        if (requestParameters.issueDateLt !== undefined) {
            queryParameters['issueDateLt'] = (requestParameters.issueDateLt as any).toISOString().substr(0,10);
        }

        if (requestParameters.issueDateGe !== undefined) {
            queryParameters['issueDateGe'] = (requestParameters.issueDateGe as any).toISOString().substr(0,10);
        }

        if (requestParameters.issueDateGt !== undefined) {
            queryParameters['issueDateGt'] = (requestParameters.issueDateGt as any).toISOString().substr(0,10);
        }

        if (requestParameters.lastModified !== undefined) {
            queryParameters['lastModified'] = (requestParameters.lastModified as any).toISOString().substr(0,10);
        }

        if (requestParameters.lastModifiedLe !== undefined) {
            queryParameters['lastModifiedLe'] = (requestParameters.lastModifiedLe as any).toISOString().substr(0,10);
        }

        if (requestParameters.lastModifiedLt !== undefined) {
            queryParameters['lastModifiedLt'] = (requestParameters.lastModifiedLt as any).toISOString().substr(0,10);
        }

        if (requestParameters.lastModifiedGe !== undefined) {
            queryParameters['lastModifiedGe'] = (requestParameters.lastModifiedGe as any).toISOString().substr(0,10);
        }

        if (requestParameters.lastModifiedGt !== undefined) {
            queryParameters['lastModifiedGt'] = (requestParameters.lastModifiedGt as any).toISOString().substr(0,10);
        }

        if (requestParameters.customerId !== undefined) {
            queryParameters['customerId'] = requestParameters.customerId;
        }

        if (requestParameters.settled !== undefined) {
            queryParameters['settled'] = requestParameters.settled;
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
            path: `/companies/{companySlug}/invoices`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(InvoiceResultFromJSON));
    }

    /**
     * Returns all invoices for given company. You can filter based on issue date, last modified date, customer ID, and if the invoice is settled or not.
     */
    async getInvoices(requestParameters: GetInvoicesRequest): Promise<Array<InvoiceResult>> {
        const response = await this.getInvoicesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Sends the specified document
     */
    async sendInvoiceRaw(requestParameters: SendInvoiceOperationRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling sendInvoice.');
        }

        if (requestParameters.sendInvoiceRequest === null || requestParameters.sendInvoiceRequest === undefined) {
            throw new runtime.RequiredError('sendInvoiceRequest','Required parameter requestParameters.sendInvoiceRequest was null or undefined when calling sendInvoice.');
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
            path: `/companies/{companySlug}/invoices/send`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendInvoiceRequestToJSON(requestParameters.sendInvoiceRequest),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Sends the specified document
     */
    async sendInvoice(requestParameters: SendInvoiceOperationRequest): Promise<void> {
        await this.sendInvoiceRaw(requestParameters);
    }

    /**
     * Updates invoice with provided id. It is possible to update the due date of an invoice as well as if the invoice was sent manually, outside of Fiken. 
     */
    async updateInvoiceRaw(requestParameters: UpdateInvoiceOperationRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling updateInvoice.');
        }

        if (requestParameters.invoiceId === null || requestParameters.invoiceId === undefined) {
            throw new runtime.RequiredError('invoiceId','Required parameter requestParameters.invoiceId was null or undefined when calling updateInvoice.');
        }

        if (requestParameters.updateInvoiceRequest === null || requestParameters.updateInvoiceRequest === undefined) {
            throw new runtime.RequiredError('updateInvoiceRequest','Required parameter requestParameters.updateInvoiceRequest was null or undefined when calling updateInvoice.');
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
            path: `/companies/{companySlug}/invoices/{invoiceId}`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))).replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters.invoiceId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateInvoiceRequestToJSON(requestParameters.updateInvoiceRequest),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates invoice with provided id. It is possible to update the due date of an invoice as well as if the invoice was sent manually, outside of Fiken. 
     */
    async updateInvoice(requestParameters: UpdateInvoiceOperationRequest): Promise<void> {
        await this.updateInvoiceRaw(requestParameters);
    }

    /**
     * Updates invoice draft with provided id. 
     */
    async updateInvoiceDraftRaw(requestParameters: UpdateInvoiceDraftRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.companySlug === null || requestParameters.companySlug === undefined) {
            throw new runtime.RequiredError('companySlug','Required parameter requestParameters.companySlug was null or undefined when calling updateInvoiceDraft.');
        }

        if (requestParameters.draftId === null || requestParameters.draftId === undefined) {
            throw new runtime.RequiredError('draftId','Required parameter requestParameters.draftId was null or undefined when calling updateInvoiceDraft.');
        }

        if (requestParameters.invoiceishDraftRequest === null || requestParameters.invoiceishDraftRequest === undefined) {
            throw new runtime.RequiredError('invoiceishDraftRequest','Required parameter requestParameters.invoiceishDraftRequest was null or undefined when calling updateInvoiceDraft.');
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
            path: `/companies/{companySlug}/invoices/drafts/{draftId}`.replace(`{${"companySlug"}}`, encodeURIComponent(String(requestParameters.companySlug))).replace(`{${"draftId"}}`, encodeURIComponent(String(requestParameters.draftId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: InvoiceishDraftRequestToJSON(requestParameters.invoiceishDraftRequest),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates invoice draft with provided id. 
     */
    async updateInvoiceDraft(requestParameters: UpdateInvoiceDraftRequest): Promise<void> {
        await this.updateInvoiceDraftRaw(requestParameters);
    }

}
