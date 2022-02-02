import React from "react";

import styles from "./AddButton.module.css";

const AddButton = ({
  meal,
  addToCart,
  isClickedAdd,
  amountHandler,
  resetIsClicked,
  isClicked,
}) => {
  const inputHandler = (e) => {
    amountHandler(e.target.value, meal.id);
  };
  const handleIncrement = (e) => {
    e.stopPropagation();
    addToCart(meal.id);
    resetIsClicked(meal.id);
  };
  return (
    <div className={styles.addButton_container}>
      <div className={styles.amount_container}>
        <p>Amount</p>
        <input
          type="number"
          min="1"
          max="7"
          step="1"
          value={meal.amount}
          onChange={inputHandler}
        />
      </div>
      <div>
        <button onClick={handleIncrement}>+Add</button>
      </div>
    </div>
  );
};
export default AddButton;
