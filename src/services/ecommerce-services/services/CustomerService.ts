/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserFull } from '../models/UserFull';
import type { UserSerializerWithoutOrderNumber } from '../models/UserSerializerWithoutOrderNumber';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CustomerService {

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @returns any 
     * @throws ApiError
     */
    public static customerCustomersList(
page?: number,
pageSize?: number,
): CancelablePromise<{
count: number;
next?: string | null;
previous?: string | null;
results: Array<UserFull>;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/customer/customers/',
            query: {
                'page': page,
                'page_size': pageSize,
            },
        });
    }

    /**
     * @param data 
     * @returns UserSerializerWithoutOrderNumber 
     * @throws ApiError
     */
    public static customerCustomersCreate(
data: UserSerializerWithoutOrderNumber,
): CancelablePromise<UserSerializerWithoutOrderNumber> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/customer/customers/',
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this user.
     * @returns UserFull 
     * @throws ApiError
     */
    public static customerCustomersRead(
id: number,
): CancelablePromise<UserFull> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/customer/customers/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     * @returns UserSerializerWithoutOrderNumber 
     * @throws ApiError
     */
    public static customerCustomersUpdate(
id: number,
data: UserSerializerWithoutOrderNumber,
): CancelablePromise<UserSerializerWithoutOrderNumber> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/customer/customers/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     * @returns UserSerializerWithoutOrderNumber 
     * @throws ApiError
     */
    public static customerCustomersPartialUpdate(
id: number,
data: UserSerializerWithoutOrderNumber,
): CancelablePromise<UserSerializerWithoutOrderNumber> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/customer/customers/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this user.
     * @returns void 
     * @throws ApiError
     */
    public static customerCustomersDelete(
id: number,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/customer/customers/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
