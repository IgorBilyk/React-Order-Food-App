import React from "react";

import AddButton from "./AddButton/AddButton";
import styles from "./Meal.module.css";

const Meal = ({ meal, addToCart, amountHandler,resetIsClicked,isClicked,isClickedAdd }) => {
  
  return (
    <div className={styles.meal_card}>
      <div>
        <p>{meal.name}</p>
        <p>{meal.description.slice(0, 30)}...</p>
        <p>{meal.price.toFixed(2)}&#36;</p>
      </div>
      <AddButton
        meal={meal}
        isClicked={isClicked}
        isClickedAdd={isClickedAdd}
        addToCart={addToCart}
        amountHandler={amountHandler}
        resetIsClicked={resetIsClicked}
      />
    </div>
  );
};
export default Meal;
