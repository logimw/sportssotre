import React from "react";
import { Link } from "react-router-dom";

const CategoryNavigation = ({ baseUrl, categories }) => {
  return (
    <>
      <Link className="btn btn-secondary btn-block" to={baseUrl}>
        Wszystkie
      </Link>
      {categories &&
        categories.map((category) => (
          <Link
            className="btn btn-secondary btn-block"
            key={category}
            to={`${baseUrl}/${category.toLowerCase()}`}
          >
            {category}
          </Link>
        ))}
    </>
  );
};

export default CategoryNavigation;
