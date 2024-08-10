/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetWishList } from '../models/GetWishList';
import type { Wishlist } from '../models/Wishlist';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WishlistService {

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @returns any
     * @throws ApiError
     */
    public static wishlistCreateList(
        page?: number,
        pageSize?: number,
    ): CancelablePromise<{
        count: number;
        next?: string | null;
        previous?: string | null;
        results: Array<GetWishList>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wishlist/create/',
            query: {
                'page': page,
                'page_size': pageSize,
            },
        });
    }

    /**
     * @param data
     * @returns Wishlist
     * @throws ApiError
     */
    public static wishlistCreateCreate(
        data: Wishlist,
    ): CancelablePromise<Wishlist> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wishlist/create/',
            body: data,
        });
    }

    /**
     * @param userId
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @returns any
     * @throws ApiError
     */
    public static wishlistUserWishlistsRead(
        userId: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<{
        count: number;
        next?: string | null;
        previous?: string | null;
        results: Array<GetWishList>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wishlist/user-wishlists/{user_id}/',
            path: {
                'user_id': userId,
            },
            query: {
                'page': page,
                'page_size': pageSize,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this wishlist.
     * @returns GetWishList
     * @throws ApiError
     */
    public static wishlistRead(
        id: number,
    ): CancelablePromise<GetWishList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wishlist/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this wishlist.
     * @param data
     * @returns Wishlist
     * @throws ApiError
     */
    public static wishlistUpdate(
        id: number,
        data: Wishlist,
    ): CancelablePromise<Wishlist> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/wishlist/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this wishlist.
     * @param data
     * @returns Wishlist
     * @throws ApiError
     */
    public static wishlistPartialUpdate(
        id: number,
        data: Wishlist,
    ): CancelablePromise<Wishlist> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/wishlist/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this wishlist.
     * @returns void
     * @throws ApiError
     */
    public static wishlistDelete(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/wishlist/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
