/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetOrderList } from '../models/GetOrderList';
import type { Order } from '../models/Order';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OrderService {

    /**
     * @param search A search term.
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @returns any 
     * @throws ApiError
     */
    public static orderOrdersList(
search?: string,
ordering?: string,
page?: number,
pageSize?: number,
): CancelablePromise<{
count: number;
next?: string | null;
previous?: string | null;
results: Array<GetOrderList>;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/order/orders/',
            query: {
                'search': search,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
            },
        });
    }

    /**
     * @param data 
     * @returns Order 
     * @throws ApiError
     */
    public static orderOrdersCreate(
data: Order,
): CancelablePromise<Order> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/order/orders/',
            body: data,
        });
    }

    /**
     * @param userId 
     * @returns GetOrderList 
     * @throws ApiError
     */
    public static orderUserOrdersRead(
userId: string,
): CancelablePromise<Array<GetOrderList>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/order/user-orders/{user_id}/',
            path: {
                'user_id': userId,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this order.
     * @returns Order 
     * @throws ApiError
     */
    public static orderRead(
id: number,
): CancelablePromise<Order> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/order/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this order.
     * @param data 
     * @returns Order 
     * @throws ApiError
     */
    public static orderUpdate(
id: number,
data: Order,
): CancelablePromise<Order> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/order/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this order.
     * @param data 
     * @returns Order 
     * @throws ApiError
     */
    public static orderPartialUpdate(
id: number,
data: Order,
): CancelablePromise<Order> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/order/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this order.
     * @returns void 
     * @throws ApiError
     */
    public static orderDelete(
id: number,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/order/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
