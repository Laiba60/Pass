
import { useMutation } from '@tanstack/react-query';
import api from '../api';

const createPassword = async (passwordData) => {
  const response = await api.post('/passwords/', passwordData);
  return response.data;
};

export const useCreatePassword = () => {
  return useMutation({
    mutationFn: createPassword,
  });
};
