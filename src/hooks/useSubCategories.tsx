import { TABLES } from "@/lib/supabase/config/tables";
import { getAllSubCategories } from "@/lib/supabase/subCategories";
import { useQuery } from "@tanstack/react-query";

export function useSubCategoriesQuery() {
  return useQuery<any[]>({
    queryKey: [TABLES.SUBCATEGORIES],
    queryFn: getAllSubCategories,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}
