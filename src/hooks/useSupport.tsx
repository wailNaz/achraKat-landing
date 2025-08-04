import { TABLES } from "@/lib/supabase/config/tables";
import { addSupport } from "@/lib/supabase/supports";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddSupport() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addSupport,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TABLES.SUPPORTS] });
    },
    onError: (error: any) => {
      console.error("Error adding support:", error);
    },
  });
}
