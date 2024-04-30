/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductName } from './ProductName';
import type { ProductUser } from './ProductUser';

export type GetProductReview = {
    readonly id?: number;
    ProductId: number;
    UserId: number;
    Rating: number;
    Review_Text: string;
    Review_Date: string;
    product?: ProductName;
    user?: ProductUser;
};
