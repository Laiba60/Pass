import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api";

const updatePassword = async ({ id, title, folder }) => {
  const response = await api.put(`/passwords/${id}/`, { title, folder });
  return response.data;
};

export const useUpdatePassword = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePassword,
    onSuccess: () => {
      queryClient.invalidateQueries(["Password"]);
    },
  });
};
