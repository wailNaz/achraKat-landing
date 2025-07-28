import { product } from "./productType";

export type orderItem = {
    id?: string;
    created_at?: string;
    initialVersmentImage?: string;
    orderId?: string;
    paidMonths?: number;
    plan?: { cost?: number, months?: number };
    qqv?: string;
    product_id?: product;
    quantity?: number;
    subtotal?: number;
    unit_price?: number;
}

export const emptyOrderItem: orderItem = {
    initialVersmentImage: "",
    orderId: "",
    paidMonths: 0,
    plan: { cost: 0, months: 0 },
    qqv: "",
    product_id: {},
    quantity: 0,
    subtotal: 0,
    unit_price: 0,
};