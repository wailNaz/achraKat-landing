import { addCollaborator } from "@/lib/supabase/collaborators";
import { TABLES } from "@/lib/supabase/config/tables";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddCollaborator() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addCollaborator,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TABLES.COLLABORATORS] });
    },
    onError: (error: any) => {
      console.error("Error adding collaborator:", error);
    },
  });
}
