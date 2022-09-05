import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { flattenArray } from "../utils/helper";
function SingleRecipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const result = await res.json();

        if (result.meals) {
          const {
            strArea: origin,
            strCategory: category,
            strMeal: meal,
            strInstructions: instructions,
            strMealThumb: image,
            strYoutube: video,
            strSource: source,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
            strIngredient16,
            strIngredient17,
            strIngredient18,
            strIngredient19,
            strIngredient20,
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
            strMeasure7,
            strMeasure8,
            strMeasure9,
            strMeasure10,
            strMeasure11,
            strMeasure12,
            strMeasure13,
            strMeasure14,
            strMeasure15,
            strMeasure16,
            strMeasure17,
            strMeasure18,
            strMeasure19,
            strMeasure20,
          } = result.meals[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
            strIngredient16,
            strIngredient17,
            strIngredient18,
            strIngredient19,
            strIngredient20,
          ];
          const measurements = [
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
            strMeasure7,
            strMeasure8,
            strMeasure9,
            strMeasure10,
            strMeasure11,
            strMeasure12,
            strMeasure13,
            strMeasure14,
            strMeasure15,
            strMeasure16,
            strMeasure17,
            strMeasure18,
            strMeasure19,
            strMeasure20,
          ];
          const newMeal = {
            meal,
            instructions,
            image,
            video,
            source,
            ingredients,
            measurements,
            category,
            origin,
          };
          setRecipe(newMeal);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [id]);

  if (loading) {
    return <h1 className="section-title">loading</h1>;
  }
  if (!recipe) {
    <h1 className="section">no recipe to display</h1>;
  }
  return (
    <section className="section cocktail-section">
      <h2 className="section-title">{recipe?.meal}</h2>
      <div className="drink">
        <img src={recipe?.image} alt={recipe?.meal} />
        <div className="drink-info">
          <p>name : {recipe?.meal}</p>
          <p>Origin : {recipe?.origin}</p>
          <p>category : {recipe?.category}</p>
          <p>
            website: <a href={`${recipe?.source}`}>{recipe?.source}</a>
          </p>
          <p>instructions: {recipe?.instructions}</p>
          <p>ingredients: {flattenArray(recipe?.ingredients)}</p>
          <p>measurements: {flattenArray(recipe?.measurements)}</p>
          <Link to="/" className="btn btn-primary">
            back home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SingleRecipe;
