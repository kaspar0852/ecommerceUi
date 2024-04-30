/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Order = {
    readonly id?: number;
    OrderStatusId: number;
    ProductId: number;
    UserId: number;
    NumberOfOrders: number;
    readonly OrderSlug?: string;
    Is_Confirmed?: boolean;
};
