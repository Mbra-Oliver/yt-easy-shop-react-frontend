import React from "react";
import classes from "./productViewMode.module.css";
import { LuLayoutList } from "react-icons/lu";
import { LuLayoutGrid } from "react-icons/lu";

export default function ProductViewMode({ currentMode, handleChangeMode }) {
  const onClickMode = (mode) => {
    handleChangeMode(mode);
  };

  return (
    <div className={classes.root}>
      <div className={classes.total}>100 éléments trouvés</div>

      <div className="flex items-center gap-1">
        <div
          className={`${
            currentMode === "GRID" && classes.active
          } cursor-pointer`}
        >
          <LuLayoutGrid onClick={() => onClickMode("GRID")} />
        </div>
        <div
          className={`${
            currentMode === "LIST" && classes.active
          } cursor-pointer`}
        >
          <LuLayoutList onClick={() => onClickMode("LIST")} />
        </div>
      </div>
    </div>
  );
}
