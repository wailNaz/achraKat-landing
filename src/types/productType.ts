import { brand } from "./brandType";
import { subCategorie } from "./categoryType";
import { collaborator } from "./collaboratorType";

export type product = {
    id?: string;
    subCategory?: subCategorie;
    brand?: brand;
    owner?: collaborator;
    averageRating?: number;
    desc?: string;
    details?: string[];
    images?: string[];
    name?: string;
    offer?: number;
    plans?: [
        {
            months?: number,
            price?: number,
        }
    ];
    premierVersment?: boolean;
    status?: "pending" | "confirmed" | "packed" | "shipped" | "delivered";
    taxRate?: number;
    unit_price?: number;
    qqv?: string[];
    reviews?: string[];
    created_at?: string;
}

export const emptyProduct: product = {
    averageRating: 0,
    brand: {},
    subCategory: {},
    created_at: "",
    desc: "",
    details: [],
    images: [],
    name: "",
    offer: 0,
    owner: {},
    plans: [
        {
            months: 0,
            price: 0,
        }
    ],
    premierVersment: false,
    reviews: [],
    status: "pending",
    taxRate: 0,
    unit_price: 0,
};