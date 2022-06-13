import React from "react";

const ProductList = ({ products }) => {
  if (products === null || products.length === 0) {
    return <h5 className="p-2">Brak produktów.</h5>;
  }
  return products.map((product) => {
    return (
      <div className="card m-1 p-1 bg-light" key={product.id}>
        <h4>
          {product.name}{" "}
          <span className="badge badge-pill badge-primary float-right">
            {product.price.toFixed(2)} zł
          </span>
        </h4>
        <div className="card-text bg-white p-1">{product.description}</div>
      </div>
    );
  });
};

export default ProductList;
