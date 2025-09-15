import { useEffect, useState } from "react";
import Card from "../../UI/Card";
import Modal from "../../UI/Modal";
import classes from "./OrderList.module.css";

export default function OrderList(props) {
  const [mealsList, setMealsList] = useState();

  const str = "https://zomatoclone-be762-default-rtdb.firebaseio.com/".concat(
    "meals.json"
  );
  console.log(str);
  const fetchTask = async () => {
    const response = await fetch(str);
    if (!response.ok) {
      console.log("OK");
    }
    const data = await response.json();
    if (data) {
      const trans = Object.values(data);
      let num = 0;
      const meals = trans.map((inner) => {
        let cost = 0;
        num += 1;
        return (
          <Card>
            <h className={classes.num}>Order Number {num}</h>
            {inner.map((id) => {
              const total = id.price * id.amount;
              cost += total;
              return (
                <ul>
                  <h2>{id.name}</h2>
                  <span className={classes.price}>{id.price}</span>
                  <span className={classes.amount}>x {id.amount}</span>
                  <span className={classes.s}>={total.toFixed(2)}</span>
                </ul>
              );
            })}
            <p className={classes.p}>Total Order Amount {cost.toFixed(2)}</p>
          </Card>
        );
      });
      setMealsList(meals);
    } else {
      const meals = <p>No Meals Ordered</p>;
      setMealsList(meals);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <Modal>
      <div className={classes.orders}>{mealsList}</div>
      <div>
        <button onClick={props.onClose}>Close</button>
      </div>
    </Modal>
  );
}
