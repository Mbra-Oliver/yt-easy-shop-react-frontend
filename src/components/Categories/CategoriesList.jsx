import CategorieItem from "./CategorieItem";
import classes from "./categorieList.module.css";

const DATAS = [1, 2, 3, 4, 5];

const CategoriesList = () => {
  return (
    <div className={classes.separator}>
      <h3 className={classes.textCenter}>Dernieres catégories</h3>
      <div className={classes.categorieListContainer}>
        {DATAS.map((categorie) => {
          return <CategorieItem key={categorie} />;
        })}
      </div>
    </div>
  );
};

export default CategoriesList;
