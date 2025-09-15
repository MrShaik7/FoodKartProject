import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import OrderList from "./components/Meals/Orders/OrderList";
import CartProvider from "./components/Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [log, setLog] = useState();
  const [orderCart, setOrderCart] = useState(false);

  const logoutHandler = (e) => {
    setLog((e) => !e);
  };

  const closeCartHandler = () => {
    setOrderCart(false);
  };

  const orderCartHandler = () => {
    setOrderCart(true);
  };

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const renderHandler = (e) => {
    setLog((e) => !e);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClick={hideCartHandler} />}
      {orderCart && (
        <OrderList onClick={hideCartHandler} onClose={closeCartHandler} />
      )}
      <Header
        onLogout={logoutHandler}
        onClick={showCartHandler}
        onOrder={orderCartHandler}
      />
      <Meals onRender={renderHandler} log={log} open={showCartHandler} />
    </CartProvider>
  );
}

export default App;
