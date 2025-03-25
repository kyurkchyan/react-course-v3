import React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import NotFound from "../components/NotFound";
import { Link } from "react-router-dom";
const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const response = await axios.get(`${singleCocktailUrl}${params.id}`);
  const drink = response.data.drinks ? response.data.drinks[0] : null;
  if (!drink) {
    return null;
  }
  const ingredients = [];
  Object.keys(drink)
    .filter((key) => key.startsWith("strIngredient") && drink[key])
    .forEach((key) => {
      ingredients.push(drink[key]);
    });
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strGlass: glass,
    strInstructions: instructions,
  } = drink;
  return { name, image, info, glass, instructions, ingredients };
};

const Cocktail = () => {
  const data = useLoaderData();
  if (!data) {
    return <NotFound message="No cocktail found" />;
  }
  const { name, image, info, glass, instructions, ingredients } = data;
  const formattedIngredients = ingredients.reduce((acc, curr) => {
    return `${acc}${acc ? ", " : ""}${curr}`;
  }, "");
  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          Back to Home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients:</span>
            {formattedIngredients}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 3rem;
    .btn {
      margin-bottom: 1rem;
    }
  }
  .img {
    border-radius: var(--borderRadius);
  }
  .drink-info {
    padding-top: 2rem;
  }
  .drink p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .drink-data {
    margin-right: 0.5rem;
    background: var(--primary-300);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
  }
  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }
    .drink-info {
      padding-top: 0;
    }
  }
`;

export default Cocktail;
