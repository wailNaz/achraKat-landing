/* eslint-disable @typescript-eslint/no-explicit-any */
export type User = {
    id?: string;
    address?: string;
    bookedItems?: any[];
    card?: string;
    check?: string;
    created_at?: string;
    email?: string;
    gender?: "male" | "female";
    isLoyal?: boolean;
    name?: string;
    numero?: string;
    profilePicture?: string;
    purchases?: any[];
    isBlocked?: boolean;
    history?: any[];
};

export const emptyUser: User = {
    address: "",
    bookedItems: [],
    card: "",
    check: "",
    email: "",
    gender: "male",
    isLoyal: false,
    name: "",
    numero: "",
    profilePicture: "",
    purchases: [],
    isBlocked: false,
    history: [],
};
