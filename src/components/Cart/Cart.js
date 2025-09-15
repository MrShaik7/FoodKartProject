import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../Store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const [success, setSuccess] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  console.log(cartCtx.userId, "USERID");

  const orderHandler = async (event) => {
    event.preventDefault();
    console.log(cartCtx.items);
    const data = cartCtx.items.map((id) => {
      console.log(cartCtx.userId);
      return {
        name: id.name,
        amount: id.amount,
        id: id.id,
        price: id.price,
        userId: id.id
      };
    });
    console.log(data);
    const response = await fetch(
      "https://zomatoclone-be762-default-rtdb.firebaseio.com/meals.json",
      {
        method: "POST",
        body: JSON.stringify(data)
      }
    );

    if (!response.ok) {
      console.log("Nope");
    }
    cartCtx.clearCart();
    setSuccess(true);
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem([{ ...item, amount: 1 }]);
  };

  console.log("cart");
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const mode = (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClick}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
  const msg = (
    <Modal>
      <p style={{ fontWeight: "bold" }}>Order Successfull!</p>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClick}>
          Close
        </button>
      </div>
    </Modal>
  );

  return <>{!success ? mode : msg}</>;
};

export default Cart;
