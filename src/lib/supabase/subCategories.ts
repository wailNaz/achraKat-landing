import { supabase } from "./config/supabase";
import { TABLES } from "./config/tables";

export async function getAllSubCategories() {
    const { data, error } = await supabase
        .from(TABLES.SUBCATEGORIES)
        .select("*")
        .order("created_at", { ascending: true });

    if (error) {
        console.error("Error fetching subcategories:", error);
        throw new Error("Failed to fetch subcategories");
    }

    return data || [];
}