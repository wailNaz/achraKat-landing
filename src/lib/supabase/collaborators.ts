import { collaborator, normalizeCollaborator } from "@/types/collaboratorType";
import { supabase } from "./config/supabase";
import { TABLES } from "./config/tables";

export async function getAllCollaborators(): Promise<collaborator[]> {
    const { data, error } = await supabase.from(TABLES.COLLABORATORS).select("*");

    if (error || !data) return [];
    return data.map((item) => normalizeCollaborator(item));
}

export async function deleteCollaboratorById(collaboratorId: string): Promise<void> {
    const { error } = await supabase
        .from(TABLES.COLLABORATORS)
        .delete()
        .eq("id", collaboratorId);

    if (error) throw error;
}

export async function addCollaborator(collab: collaborator): Promise<void> {
    const { error } = await supabase.from(TABLES.COLLABORATORS).insert(collab);
    if (error) throw error;
}

export async function updateCollaboratorStatus(
    collaboratorId: string,
    status: "active" | "pending" | "rejected" | "blocked"
): Promise<void> {
    const update: Partial<collaborator> = { status };

    if (status === "active") {
        update.accepted_at = new Date().toISOString();
    }

    const { error } = await supabase
        .from(TABLES.COLLABORATORS)
        .update(update)
        .eq("id", collaboratorId);

    if (error) throw error;
}