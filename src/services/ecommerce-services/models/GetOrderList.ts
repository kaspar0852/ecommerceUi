/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderProduct } from './OrderProduct';
import type { OrderStatus } from './OrderStatus';
import type { OrderUser } from './OrderUser';

export type GetOrderList = {
    readonly id?: number;
    order_status?: OrderStatus;
    ProductId: number;
    UserId: number;
    NumberOfOrders: number;
    OrderSlug: string;
    Is_Confirmed?: boolean;
    user?: OrderUser;
    product?: OrderProduct;
};

