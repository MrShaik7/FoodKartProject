import React, { useState } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import food from "../../assets/food.jpg";

export default function Header(props) {
  // const show = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <header className={classes.header}>
        <h1>FoodKart</h1>
        {sessionStorage.length !== 0 && (
          <HeaderCartButton
            onLogout={props.onLogout}
            onClick={props.onClick}
            onOrder={props.onOrder}
          />
        )}
      </header>
      <div className={classes["main-image"]}>
        <img src={food} alt="Table full of delicious meals" />
      </div>
    </>
  );
}
