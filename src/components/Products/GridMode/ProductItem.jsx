import React from "react";
import classes from "./productItem.module.css";

export default function ProductItem() {
  return (
    <div className={classes.productItem}>
      <div className={classes.productImage}></div>

      <div className={classes.productName}>Produit exemple</div>
      <div className={classes.productDescription}>
        Une courte description du produit qui devrait ressembler a un lorem
        ipsum
      </div>

      <div className={classes.productFooter}>
        <div className="flex flex-col">
          <span className={classes.mainPrice}>800.000 FCFA</span>
          <span className={classes.initialPrice}>800.000 FCFA</span>
        </div>

        <div>
          <button className={classes.button}>Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
}
