/* eslint-disable @typescript-eslint/no-explicit-any */
export type collaborator = {
    id?: string;
    accepted_at?: string;
    created_at?: string;
    subCategories?: string[];
    email?: string;
    justificalofWork?: string;
    name?: string;
    number?: string;
    status?: "blocked" | "pending" | "rejected" | "active";
}

export const emptyCollaborator: collaborator = {
    subCategories: [],
    email: "",
    justificalofWork: "",
    name: "",
    number: "",
    status: "pending",
};

export function normalizeCollaborator(data: any): collaborator {
    return {
        id: typeof data.id === "string" ? data.id : undefined,
        accepted_at: typeof data.accepted_at === "string" ? data.accepted_at : "",
        email: typeof data.email === "string" ? data.email : "",
        justificalofWork: typeof data.justificalofWork === "string" ? data.justificalofWork : "",
        name: typeof data.name === "string" ? data.name : "",
        number: typeof data.number === "string" ? data.number : "",
        status: ["blocked", "pending", "rejected", "active"].includes(data.status) ? data.status : "pending",
        subCategories: Array.isArray(data.subCategories) ? data.subCategories : [],
    };
}