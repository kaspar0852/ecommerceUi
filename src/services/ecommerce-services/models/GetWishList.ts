/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WishlistProduct } from './WishlistProduct';
import type { WishlistUser } from './WishlistUser';

export type GetWishList = {
    readonly id?: number;
    UserId: number;
    user?: WishlistUser;
    ProductId: number;
    product?: WishlistProduct;
    readonly CreatedTime?: string;
};
