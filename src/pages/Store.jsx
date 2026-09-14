import React from "react";
import StoreHero from "../component/store/StoreHero";
import StoreFilterBar from "../component/store/StoreFilterBar";
import ProductGrid from "../component/store/ProductGrid";

const Store = () => {
  return (
    <div>
      <StoreHero />
      <StoreFilterBar />
      <ProductGrid />
    </div>
  );
};

export default Store;
