export type support = {
    id?: string,
    desc?: string,
    email?: string,
    number?: string,
    seen?: boolean,
    status?: "pending" | "resolved" | "inProgress",
    created_at?: string,
}

export const emptySupport: support = {
    desc: "",
    email: "",
    seen: false,
    status: "pending",
    number: "",
}