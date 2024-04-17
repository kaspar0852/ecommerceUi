/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductImage } from './ProductImage';
import type { ProductProductType } from './ProductProductType';

export type GetProduct = {
    readonly id?: number;
    Name: string;
    Description: string;
    Expiration_Date: string;
    UserId: number;
    Product_Type?: ProductProductType;
    readonly Product_Image?: Array<ProductImage>;
};

