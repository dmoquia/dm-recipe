import React from "react";

function SearchRecipe({ setSearchTerm }) {
  const searchValue = React.useRef("");
  React.useEffect(() => {
    searchValue.current.focus();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <section className="section">
      <h2 className="section-title"> foodies</h2>
      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite recipe</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={searchCocktail}
            ref={searchValue}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchRecipe;
