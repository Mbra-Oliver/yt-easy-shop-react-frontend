import React from "react";
import classes from "./categorieItem.module.css";

export default function CategorieItem() {
  return (
    <div className={classes.productItem}>
      <div className={classes.productImage}></div>

      <div className={classes.productName}>Produit exemple</div>
    </div>
  );
}
