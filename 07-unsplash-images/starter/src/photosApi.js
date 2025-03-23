import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const photosApi = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
  },
});

export const searchPhotos = async (query) => {
  if (!query) return { results: [] };
  const response = await photosApi.get("/search/photos", {
    params: { query },
  });
  return response.data;
};
