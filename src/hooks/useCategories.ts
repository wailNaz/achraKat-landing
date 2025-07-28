// hooks/useCategories.ts
import { useQuery } from "@tanstack/react-query";
import { Category } from "@/types/categoryType";
import { TABLES } from "@/lib/supabase/config/tables";
import { getAllCategories, getCategoryById } from "@/lib/supabase/categories";

export function useCategoriesQuery() {
    return useQuery<Category[]>({
        queryKey: [TABLES.CATEGORIES],
        queryFn: getAllCategories,
    });
}

export function useCategoryQuery(categoryId: string) {
    return useQuery<Category | null>({
        queryKey: [TABLES.CATEGORIES, categoryId],
        queryFn: () => getCategoryById(categoryId),
    });
}