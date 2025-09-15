import Card from "../UI/Card";
import classes from "./Restaurants.module.css";
import RestaurantButton from "./RestaurantButton";

export default function Restaurants(props) {
  const rest1Handler = (e) => {
    props.onSave(e);
  };

  const Disp = () => {
    return (
      <>
        {RestaurantButton.map((item) => (
          <div className="grid-container">
            <div className="grid-item">
              <img
                className={classes.img}
                src={item.src}
                onClick={() => {
                  rest1Handler(item.id);
                }}
                alt=""
              />
              <button
                onClick={() => {
                  rest1Handler(item.id);
                }}
              >
                {item.name}
              </button>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <section className={classes.section}>
      <div>
        <Card>
          <h>List of Restaurants</h>
        </Card>
        <ul>
          <Disp />
        </ul>
      </div>
    </section>
  );
}
