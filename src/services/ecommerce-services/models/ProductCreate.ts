/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProductCreate = {
    readonly id?: number;
    Name: string;
    Description: string;
    Expiration_Date: string;
    ProductTypeId: number;
    Price?: string | null;
    readonly image?: string;
};

