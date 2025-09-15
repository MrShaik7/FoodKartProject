import React, { useContext, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/cart-context";
import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const logoutHandler = () => {
    sessionStorage.clear();
    props.onLogout(true);
  };

  return (
    <>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
      <button className={classes.button} onClick={props.onOrder}>
        View Recent Ordered Items
      </button>
      <button className={classes.button} onClick={logoutHandler}>
        Logout
      </button>
    </>
  );
}
