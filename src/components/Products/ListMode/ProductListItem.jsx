import React from "react";
import classes from "./productListItem.module.css";

export default function ProductListItem() {
  return (
    <div className={classes.productItem}>
      <div className={classes.productItemLeft}>
        <div className={classes.image}></div>

        <div className={classes.leftData}>
          <div className={classes.tag}>Boutique officiel</div>

          <div className={classes.productName}>
            Nasco écran plat - Garantie 12 Mois
          </div>

          <div className={classes.commentCount}>
            (+40000 avis & commentaire)
          </div>
        </div>
      </div>

      <div className={classes.productItemRight}>
        <div>
          <div className={classes.sellingPrice}>40.000 FCFA</div>

          <div className={classes.normalPrice}>40.000 FCFA</div>
        </div>

        <button className={classes.button}>Ajouter au panier</button>
      </div>
    </div>
  );
}
