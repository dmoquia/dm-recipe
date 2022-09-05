import React from "react";
import Recipe from "./Recipe";
function RecipeList({ recipes, loading }) {
  if (loading) {
    return (
      <section style={{ height: "90vh" }}>
        <h2 className="section-title"> ...loading</h2>;
      </section>
    );
  }
  if (recipes?.length < 1) {
    return <h2 className="section-title">no recipe found</h2>;
  }
  return (
    <section className="cocktails-center">
      {recipes?.map((recipe) => {
        return <Recipe key={recipe.id} {...recipe} />;
      })}
    </section>
  );
}

export default RecipeList;
