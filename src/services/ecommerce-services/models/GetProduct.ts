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
    Product_Type?: ProductProductType;
    Price?: string | null;
    readonly Product_Image?: Array<ProductImage>;
};

