import React, { useState } from "react";
import ProductsList from "../../components/Products/GridMode/ProductsList";
import ProductListMode from "../../components/Products/ListMode/ProductListMode";
import ProductViewMode from "../../components/Products/ProductViewMode";

export default function ProductsPage() {
  const [displayMode, setDisplayMode] = useState("LIST");
  let content;

  if (displayMode === "GRID") {
    content = <ProductsList />;
  }
  if (displayMode === "LIST") {
    content = <ProductListMode />;
  }

  const handleChangeMode = (mode) => {
    setDisplayMode(mode);
  };

  return (
    <div className="flex flex-col gap-1">
      <div>
        <ProductViewMode
          currentMode={displayMode}
          handleChangeMode={handleChangeMode}
        />
      </div>
      <div>{content}</div>
    </div>
  );
}
