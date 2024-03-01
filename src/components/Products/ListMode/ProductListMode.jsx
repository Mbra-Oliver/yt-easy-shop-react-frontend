import React from "react";
import classes from "./productListMode.module.css";
import ProductListItem from "./ProductListItem";

const DATAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function ProductListMode() {
  return (
    <div className={classes.productListContainer}>
      {DATAS.map((item) => {
        return <ProductListItem key={item} />;
      })}
    </div>
  );
}
