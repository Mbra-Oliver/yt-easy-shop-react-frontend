import classes from "./productDetails.module.css";

const ProductDetailsPage = () => {
  return (
    <>
      <div className={`${classes.detailsContainer} ${classes.mt1}`}>
        <div className={classes.detailsLeft}>
          <div className={classes.productImage}> </div>

          <div className="previews flex items-center jc-center gap-1">
            <div className="preview-image"></div>
            <div className="preview-image"></div>
            <div className="preview-image"></div>
          </div>
        </div>
        <div className={classes.detailsRight}>
          <h1>
            Produit
            <span className={classes.borderB}>Exemple</span>
          </h1>

          <div
            className={`${classes.flex} ${classes.gap1} ${classes.jcCenter} ${classes.itemsCenter} ${classes.mt1}`}
          >
            <div className={classes.tag}>Sac a dos</div>
            <div className={classes.tag}>Sac a dos</div>
            <div className={classes.tag}>Sac a dos</div>
            <div className={classes.tag}>Sac a dos</div>
            <div className={classes.tag}>Sac a dos</div>
          </div>

          <div className={`${classes.price} ${classes.mt1} ${classes.mb1}`}>
            80£
          </div>

          <div className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod tincidunt egestas. Vivamus accumsan tristique
            lectus, a egestas elit placerat nec. Phasellus rhoncus lorem
            scelerisque ligula convallis, at facilisis odio accumsan. Nullam
            auctor dolor vel arcu pretium, ac suscipit sapien rutrum. Cras
            congue, neque vel cursus sollicitudin, enim lacus mattis nulla, in
            scelerisque metus est nec eros. Duis rhoncus purus tortor. Aenean a
            augue sed risus vehicula aliquet sed eu quam. Duis vitae lobortis
            ex, vulputate suscipit est. Sed ultrices consectetur commodo. Fusce
            porttitor
          </div>

          <div className="buttons mt-1 mb-1">
            <button className={classes.button}>Ajouter au panier</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
