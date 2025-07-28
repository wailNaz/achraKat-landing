import { support } from "@/types/supportType";
import { TABLES } from "./config/tables";
import { supabase } from "./config/supabase";

export async function getAllSupports(): Promise<support[]> {
    const { data, error } = await supabase.from(TABLES.SUPPORTS).select("*");
    if (error || !data) return [];
    return data as support[];
}