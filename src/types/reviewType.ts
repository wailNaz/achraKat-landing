/* eslint-disable @typescript-eslint/no-explicit-any */
export type Review = {
  id?: string;
  comment?: string;
  created_at?: string;
  customer_id?: string;
  mark?: number;
  product_id?: string;
};

export const emptyReview: Review = {
  comment: "",
  customer_id: "",
  mark: 0,
  product_id: "",
};

export function normalizeReview(data: any): Review {
  return {
    id: typeof data.id === "string" ? data.id : undefined,
    comment: typeof data.comment === "string" ? data.comment : "",
    customer_id: typeof data.customer_id === "string" ? data.customer_id : "",
    mark: typeof data.mark === "number" ? data.mark : 0,
    product_id: typeof data.product_id === "string" ? data.product_id : "",
  };
}