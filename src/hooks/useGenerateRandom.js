import { useMutation } from "@tanstack/react-query";
import api from "../api";
import axios from "axios";
import { getAuthHeaders } from "../utils/header";

export const useGenerateRandom = () => {
  return useMutation(async (data) => {
    const response = await axios.post("https://dev.api.neuropassword.com/api/passwords/generate-random/", data, getAuthHeaders());
    console.log("Generated password:", response.data);
    return response.data;
  });
};

export default useGenerateRandom;

