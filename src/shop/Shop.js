import React from "react";
import CategoryNavigation from "./CategoryNavigation";
import ProductList from "./ProductList";

const Shop = ({ products, categories }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col bg-dark text-white">
          <div className="navbar-brand">Sklep SPORTSSTORE</div>
        </div>
      </div>
      <div className="row">
        <div className="col-3 p-2">
          <CategoryNavigation
            baseUrl="/shop/products"
            categories={categories}
          />
        </div>
        <div className="col-9 p-2">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
