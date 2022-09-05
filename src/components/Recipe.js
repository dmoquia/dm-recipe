import React from "react";
import { Link } from "react-router-dom";
import { separator } from "../utils/helper";
function Recipe(props) {
  const { video, category, mealThumb, tags, id } = props;

  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={mealThumb} alt={tags} />
      </div>
      <div className="cocktail-footer ">
        <h3>{category}</h3>

        <h6>{separator(tags)}</h6>

        <Link
          to={`/single-recipe/${id}`}
          className="btn btn-primary btn-details  pt-2"
        >
          details
        </Link>
        <div style={{ display: "inline", float: "right" }}>
          {" "}
          <a
            href={`${video}`}
            className="mx-3 text-decoration-underline "
            target="blank"
          >
            watch here
            <span>
              <i
                className="fa-brands fa-youtube fa-1x text-danger"
                style={{ paddingLeft: "20px", marginTop: "10px" }}
              />
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default Recipe;
