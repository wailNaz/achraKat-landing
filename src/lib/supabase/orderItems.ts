import { supabase } from "@/lib/supabase/config/supabase";
import { TABLES } from "./config/tables";
import { orderItem } from "@/types/orderItemType";

export async function getAllOrderItems(): Promise<orderItem[]> {
    const { data, error } = await supabase.from(TABLES.ORDERITEMS).select("*,product_id:product_id(name)").order("created_at", { ascending: false });
    if (error || !data) return [];
    return data as orderItem[];
}

export async function getOrderItemById(orderItemId: string): Promise<orderItem | null> {
    const { data, error } = await supabase
        .from(TABLES.ORDERITEMS)
        .select("*")
        .eq("id", orderItemId)
        .single();

    if (error || !data) return null;
    return data as orderItem;
}

export async function deleteOrderItemById(orderItemId: string): Promise<void> {
    const { error } = await supabase
        .from(TABLES.ORDERITEMS)
        .delete()
        .eq("id", orderItemId);

    if (error) throw error;
}

export async function addOrderItem(item: orderItem): Promise<void> {
    const { error } = await supabase.from(TABLES.ORDERITEMS).insert([item]);
    if (error) throw error;
}