import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const BASE_URL = "https://dev.api.neuropassword.com/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default api;