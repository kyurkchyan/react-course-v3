import { createClient } from "contentful";
import { useQuery } from "@tanstack/react-query";

export const contentful = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export const useGetProjects = () => {
  const {
    data: projects,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await contentful.getEntries({
        content_type: "projects",
      });
      return response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { id, title, url, img };
      });
    },
  });
  return { projects, isLoading, error };
};
