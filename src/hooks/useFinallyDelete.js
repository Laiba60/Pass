import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api";

const deletePassword = async (id) => {
  const response = await api.delete(`/passwords/${id}/`);
  return response.data;
};

export const useDeletePassword = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePassword,
    onSuccess: () => {
      queryClient.invalidateQueries(["Password"]); 
    },
  });
};
