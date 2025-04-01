import { useQuery } from "@tanstack/react-query";
import api from "../api";

const fetchFolder = async () => {
  const response = await api.get("/folders");
  return response.data.results || [];
};

export const useFetchFolder = () => {
  return useQuery({
    queryKey: ["folders"],
    queryFn: fetchFolder,
  });
};
