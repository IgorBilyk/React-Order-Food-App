import React from "react";

import styles from "./Cart_Item.module.css";

const Cart_Item = ({ data, handleDecrement, handleIncrement }) => {
  const handleMinus = () => {
    handleDecrement(data.id);
  };
  const handlePlus = () => {
    handleIncrement(data.id);
  };
  return (
    <div className={styles.cart_item_container}>
      <div>
        <p>{data.name}</p>
        <div>
          <p>{data.price.toFixed(2)} &#36;</p>
          <p>x {data.amount}</p>
        </div>
      </div>
      <div>
        <button onClick={handleMinus}>-</button>
        <button onClick={handlePlus}>+</button>
      </div>
    </div>
  );
};

export default Cart_Item;
