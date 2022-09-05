import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import RecipeList from "../components/RecipeList";
import SearchRecipe from "../components/SearchRecipe";

function Home() {
  const [recipes, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTem, setSearchTerm] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTem}`
        );
        const data = await res.json();
        const { meals } = data;
        if (meals) {
          const newMeals = meals.map((meal) => {
            const {
              idMeal,
              strCategory,
              strImageSource,
              strInstructions,
              strMealThumb,
              strTags,
              strYoutube,
            } = meal;

            return {
              video: strYoutube,
              tags: strTags,
              id: idMeal,
              category: strCategory,
              instructions: strInstructions,
              image: strImageSource,
              mealThumb: strMealThumb,
            };
          });
          setRecipe(newMeals);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [searchTem]);
  return (
    <>
      <main>
        <SearchRecipe setSearchTerm={setSearchTerm} />
        <RecipeList recipes={recipes} loading={loading} />
      </main>
      <Footer />
    </>
  );
}

export default Home;
