import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import Search from "./Functionalities/Search";
import { useState, useContext } from "react";
import Filter from "./Functionalities/Filter";
import CartContext from "../Store/cart-context";

const AvailableMeals = (props) => {
  const crtCtx = useContext(CartContext);

  const finalList = props.item;

  const [searchData, setSearhData] = useState(finalList);
  const [filteredData, setFilteredData] = useState(finalList);

  const mealHandler = (meals) => {
    setFilteredData(meals);
  };

  const searchHandler = (meals) => {
    setSearhData(meals);
  };

  let stored = [];
  const addToCartHandler = (items) => {
    const index = stored.findIndex((x) => x.id === items.id);
    if (index === -1) {
      stored.push(items);
    } else {
      stored[index].amount = items.amount;
    }
  };

  const backHandler = () => {
    props.onBack(0);
    crtCtx.clearCart();
  };

  const addHandler = (event) => {
    event.preventDefault();
    crtCtx.addItem(stored);
    props.open();
  };

  const MealsList = () => {
    return (
      <>
        {searchData.map((meal) => (
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            category={meal.category}
            onSave={addToCartHandler}
          />
        ))}
      </>
    );
  };

  return (
    <section className={classes.meals}>
      <Card>
        <div className={classes.fil}>
          <Filter onFilter={mealHandler} data={finalList} />
          <Search onSearch={searchHandler} data={filteredData} />
        </div>

        <ul>
          <MealsList />
        </ul>
        <div className={classes.div}>
          <button className={classes.button} onClick={backHandler}>
            Back
          </button>
          <button className={classes.button} onClick={addHandler}>
            Add
          </button>
        </div>
      </Card>
    </section>
  );
};
export default AvailableMeals;
