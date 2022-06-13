import React, { useEffect, useState } from "react";
import { loadData } from "./data/ActionCreators";
import { DataTypes } from "./data/Types";

const mapStateToProps = (dataStore) => ({
  ...dataStore,
});

const mapDispatchToProps = {
  loadData,
};

const filterProducts = (products = [], category) =>
  !category || category === "Wszystkie"
    ? products
    : products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );

const ShopData = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(...DataTypes.CATEGORIES);
    setData(...DataTypes.PRODUCTS);
  }, []);

  return <div>ddd</div>;
};
export default ShopData;
// export const ShopConnector = connect(
//   mapStateToProps,
//   mapDispatchToProps,
//   ShopData
// );
