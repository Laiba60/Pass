import { useQuery } from '@tanstack/react-query';
import api from '../api';

const fetchPasswords = async () => {
  const response = await api.get('/passwords/');
  return response.data.results || [];
};

export const useFetchPasswords = () => {
  return useQuery({
    queryKey: ['passwords'],
    queryFn: fetchPasswords,
  });
};
