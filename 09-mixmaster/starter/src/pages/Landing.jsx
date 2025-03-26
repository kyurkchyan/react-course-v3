import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  console.log(url);
  const searchTerm = url.searchParams.get("searchTerm") || "margarita";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const data = useLoaderData();
  return (
    <div>
      <SearchForm searchTerm={data.searchTerm} />
      <CocktailList drinks={data.drinks} />
    </div>
  );
};

export default Landing;
