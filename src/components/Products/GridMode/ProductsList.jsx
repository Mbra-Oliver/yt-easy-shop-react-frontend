import ProductItem from "./ProductItem";
import classes from "./productList.module.css";

const DATAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ProductsList = () => {
  return (
    <div className={classes.productListContainer}>
      {DATAS.map((item) => {
        return <ProductItem key={item} />;
      })}
    </div>
  );
};

export default ProductsList;
