import { supabase } from "@/lib/supabase/config/supabase";
import { User } from "@/types/userType";
import { TABLES } from "./config/tables";

export async function getAllUsers(): Promise<User[]> {
    console.log("Fetching all users from Supabase...");
    const { data, error } = await supabase.from(TABLES.USERS).select("*").order("created_at", { ascending: false });
    if (error || !data) return [];
    return data as User[];
}

export async function getUserById(userId: string): Promise<User | null> {
    const { data, error } = await supabase
        .from(TABLES.USERS)
        .select("*")
        .eq("id", userId)
        .single();

    if (error || !data) return null;
    return data as User;
}

export async function deleteUserById(userId: string): Promise<void> {
    const { error } = await supabase
        .from(TABLES.USERS)
        .delete()
        .eq("id", userId);

    if (error) throw error;
}

export async function addUser(user: User): Promise<void> {
    const { error } = await supabase.from(TABLES.USERS).insert([user]);
    if (error) throw error;
}

export async function blockUser(userId: string, isBlocked: boolean): Promise<void> {
    const { error } = await supabase
        .from(TABLES.USERS)
        .update({ isBlocked })
        .eq("id", userId);

    if (error) throw error;
}

export async function updateIsLoyal(userId: string, isLoyal: boolean): Promise<void> {
    const { error } = await supabase
        .from(TABLES.USERS)
        .update({ isLoyal })
        .eq("id", userId);

    if (error) throw error;
}
