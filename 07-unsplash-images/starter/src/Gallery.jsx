import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "./context";
import { searchPhotos } from "./photosApi";
const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const { data, isLoading, error } = useQuery({
    queryKey: ["photos", searchTerm],
    queryFn: () => searchPhotos(searchTerm),
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error.message}</h2>;
  const results = data.results;
  if (results.length < 1) return <h2>No results found</h2>;
  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            key={item.id}
            src={url}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
