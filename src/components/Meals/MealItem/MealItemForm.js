import { useState } from "react";
import classes from "./MealItemForm.module.css";

export default function MealItemForm(props) {
  const [val, setVal] = useState(1);

  const decrementHandler = (e) => {
    e.preventDefault();
    if (val > 1) setVal(val - 1);
    props.onAddToCart(val);
  };

  const incremenetHandler = (e) => {
    e.preventDefault();
    setVal(val + 1);
    props.onAddToCart(val);
  };

  return (
    <form className={classes.form}>
      <button onClick={decrementHandler}>-</button>
      <span className={classes.span}>{val - 1}</span>
      <button onClick={incremenetHandler}>+</button>
    </form>
  );
}
