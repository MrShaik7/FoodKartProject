import classes from "./Card.module.css";
import food from "../../assets/food.jpg";

export default function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}
