import { product } from "@/types/productType";
import { supabase } from "./config/supabase";
import { TABLES } from "./config/tables";

export async function getAllProducts(): Promise<product[]> {
    const { data, error } = await supabase
        .from(TABLES.PRODUCTS)
        .select(`
        *,
        subCategory:subCategory (
            nameAr,
            nameEn,
            nameFr
        ),
        brand:brand (
            name
        ),
        owner:owner (
            name,
            email
        )
      `)
        .order("created_at", { ascending: false });

    if (error || !data) return [];

    return data as product[];
}
