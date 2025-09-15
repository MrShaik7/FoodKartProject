import { useState } from "react";
import Restaurants from "../Layout/Restaurants";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import "./Meals.css";
import DUMMY_MEALS from "./Dummy";
import LoginForm from "../Layout/LoginForm";

export default function Meals(props) {
  const [val, setVal] = useState(0);
  const [show, setShow] = useState();

  const renderHandler = (e) => {
    setShow(e);
    props.onRender(true);
  };

  const clickHandler = (items) => {
    setVal(items);
  };

  const finalList = DUMMY_MEALS.filter((items) => {
    if (items.rest.indexOf(val) !== -1) return items;
  });

  const token = sessionStorage.getItem(show);

  const content = (
    <>
      <MealsSummary />
      {val === 0 ? (
        <Restaurants onSave={clickHandler} />
      ) : (
        <AvailableMeals
          onBack={clickHandler}
          item={finalList}
          open={props.open}
        />
      )}
    </>
  );

  return <>{!token ? <LoginForm onRender={renderHandler} /> : content}</>;
}
