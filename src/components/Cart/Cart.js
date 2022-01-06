import React from "react";

import styles from "./Cart.module.css";

import Cart_Items from "./Cart_Items/Cart_Items";

const Cart = ({
  meals,
  cartPopupHandler,
  handleDecrement,
  handleIncrement,
}) => {
  const isInCart = meals.filter((item) => item.inCart);

  const handleCloseButton = () => {
    cartPopupHandler();
  };
  const totalAmount = isInCart
    .map((item) => item.price * item.amount)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <div className={styles.cart_container}>
      <div className={styles.cart_inner_container}>
        <div className={styles.cart_content}>
          {isInCart.length === 0 ? (
            "No Items in Cart"
          ) : (
            <Cart_Items
              meals={meals}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
            />
          )}
        </div>
        <div className={styles.cart_total_amount}>
          <p>
            Total Amount {!totalAmount.toFixed(2) ? "" : totalAmount.toFixed(2)}
            &#36;
          </p>
        </div>
        <div className={styles.cart_buttons}>
          <button onClick={handleCloseButton}>Close</button>
          <button>Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
