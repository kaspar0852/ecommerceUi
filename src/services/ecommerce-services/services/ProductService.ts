/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetProduct } from '../models/GetProduct';
import type { GetProductReview } from '../models/GetProductReview';
import type { ProductCreate } from '../models/ProductCreate';
import type { ProductReview } from '../models/ProductReview';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProductService {

    /**
     * @param data
     * @returns ProductCreate
     * @throws ApiError
     */
    public static productCreateCreate(
        data: ProductCreate,
    ): CancelablePromise<ProductCreate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/product/create/',
            body: data,
        });
    }

    /**
     * @param search A search term.
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @returns any
     * @throws ApiError
     */
    public static productListList(
        search?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<{
        count: number;
        next?: string | null;
        previous?: string | null;
        results: Array<GetProduct>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/product/list/',
            query: {
                'search': search,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
            },
        });
    }

    /**
     * @param search A search term.
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @returns any
     * @throws ApiError
     */
    public static productReviewList(
        search?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<{
        count: number;
        next?: string | null;
        previous?: string | null;
        results: Array<GetProductReview>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/product/review/',
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
     * @returns ProductReview
     * @throws ApiError
     */
    public static productReviewCreate(
        data: ProductReview,
    ): CancelablePromise<ProductReview> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/product/review/',
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this product review.
     * @returns GetProductReview
     * @throws ApiError
     */
    public static productReviewRead(
        id: number,
    ): CancelablePromise<GetProductReview> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/product/review/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this product review.
     * @param data
     * @returns ProductReview
     * @throws ApiError
     */
    public static productReviewUpdate(
        id: number,
        data: ProductReview,
    ): CancelablePromise<ProductReview> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/product/review/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this product review.
     * @param data
     * @returns ProductReview
     * @throws ApiError
     */
    public static productReviewPartialUpdate(
        id: number,
        data: ProductReview,
    ): CancelablePromise<ProductReview> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/product/review/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this product review.
     * @returns void
     * @throws ApiError
     */
    public static productReviewDelete(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/product/review/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this product.
     * @returns GetProduct
     * @throws ApiError
     */
    public static productRead(
        id: number,
    ): CancelablePromise<GetProduct> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/product/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this product.
     * @param data
     * @returns GetProduct
     * @throws ApiError
     */
    public static productUpdate(
        id: number,
        data: GetProduct,
    ): CancelablePromise<GetProduct> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/product/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this product.
     * @param data
     * @returns GetProduct
     * @throws ApiError
     */
    public static productPartialUpdate(
        id: number,
        data: GetProduct,
    ): CancelablePromise<GetProduct> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/product/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this product.
     * @returns void
     * @throws ApiError
     */
    public static productDelete(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/product/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
