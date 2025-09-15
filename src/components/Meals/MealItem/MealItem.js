import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (upAmount) => {
    let stored = {
      id: props.id,
      name: props.name,
      amount: upAmount,
      price: props.price
    };
    props.onSave(stored);
  };

  return (
    <>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm onAddToCart={addToCartHandler} />
        </div>
      </li>
    </>
  );
};

export default MealItem;
