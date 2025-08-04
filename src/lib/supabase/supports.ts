import { support } from "@/types/supportType";
import { TABLES } from "./config/tables";
import { supabase } from "./config/supabase";

export async function addSupport(supportData: support) {
    const { data, error } = await supabase
        .from(TABLES.SUPPORTS)
        .insert(supportData)
        .select("*")
        .single();

    if (error) {
        console.error("Error adding support:", error);
        throw new Error("Failed to add support");
    }

    return data;
}