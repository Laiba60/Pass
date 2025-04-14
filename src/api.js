import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const BASE_URL = "https://dev.api.neuropassword.com/api";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        try {
          const response = await api.post("/user/refresh-token/", {
            refresh_token: refreshToken,
          });

          const newAccessToken = response.access;
          localStorage.setItem("authToken", newAccessToken);
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        } catch (err) {
          console.error("Error refreshing token:", err);
          clearExpiredToken();
          window.location.href = "/auth/logon"; // Redirect to login
        }
      } else {
        clearExpiredToken();
        window.location.href = "/auth/logon"; // Redirect to login
      }
    }

    return Promise.reject(error);
  }
);


export const generateToken = async (seed) => {
  const cleanedSeed = seed
  .replace(/,/g, ' ')     
  .replace(/\s+/g, ' ')    // Multiple spaces ko single bana do
  .trim()                  // Extra space hatao start/end se
  .toUpperCase();          // Capital letters (agar API casing sensitive hai)

const data = {
  pass_phrase: cleanedSeed,
};

  try {
    console.log("Print Seed brfore the API call",seed);
    const response = await api.post("/user/generate-token/", data);

    console.log("Full API Response:", response.data);

    localStorage.setItem("token", response.data.access);
   

    return { token: response.data.access };
  } catch (error) {
    console.error("Error generating token:", error.response?.data || error.message);
    throw error;
  }
};


const generatePassphrase = async () => {
  try {
    const response = await api.post("/user/generate-pass-phrase/");

    console.log("API Full Response:", response.data);

    if (!response.data?.pass_phrase) {
      throw new Error(
        `Invalid API response. Expected 'pass_phrase', but got: ${JSON.stringify(response.data)}`
      );
    }

    console.log("Generated Passphrase:", response.data.pass_phrase);
    return { seed: response.data.pass_phrase };
  } catch (error) {
    console.error("Error generating passphrase:", error.response?.data || error.message);
    throw error;
  }
};


export const clearExpiredToken = () => {
  console.warn("Token is invalid or expired. Clearing storage...");
  localStorage.removeItem("authToken");
  localStorage.removeItem("refreshToken");
};

export const useGenerateToken = () => {
  return useMutation({ mutationFn: generateToken });
};

export const useGeneratePassphrase = () => {
  return useMutation({ mutationFn: generatePassphrase });
};
export const deletePassword = async (passwordId) => {
  try {
    const response = await api.delete(`/passwords/${passwordId}/`);  
    console.log("Password deleted:", response.data);
    return response.data;  
  } catch (error) {
    console.error("Error deleting password:", error.response?.data || error.message);
    throw error;  
  }
};
export const generateRandomPassword = async (data) => {
  
  try {
    const response = await axios.post("/passwords/generate-random/",data);
    console.log("Generated password:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error generating password:", error);
    throw error; 
  }
};


export default api;
