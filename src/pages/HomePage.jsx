import React from "react";
import HeroSection from "../components/Hero";

import CategoriesList from "../components/Categories/CategoriesList";
import ProductsList from "../components/Products/GridMode/ProductsList";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Les catégories */}

      <CategoriesList />

      {/* Lister les articles */}

      <ProductsList />
    </>
  );
}
