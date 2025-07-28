export type brand ={
    id?: string;
    name?: string;
    logo?: string;
    desc?: string;
    created_at?: string;
}

export const emptyBrand: brand = {
    name: "",
    logo: "",
    desc: "",
};