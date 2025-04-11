
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePassword } from '../api';

export const useDeletePassword = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePassword,
    onSuccess: () => {
      // Password list ko refresh karne ke liye
      queryClient.invalidateQueries('passwords');
    },
  });
};
