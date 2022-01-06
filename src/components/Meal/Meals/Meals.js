import React from "react";

import Meal from "../Meal/Meal";
import styles from "./Meals.module.css";

const Meals = ({ meals, addToCart, amountHandler, resetIsClicked,isClicked,isClickedAdd }) => {
  return (
    <div
      className={styles.meals_container}
      style={{
        backgroundImage: "url(/pexelsfauxels3184192.jpg)",
      }}
    >
      {meals.map((meal) => (
        <Meal
          key={meal.id}
          meal={meal}
          isClickedAdd={isClickedAdd}
          isClicked={isClicked}
          addToCart={addToCart}
          amountHandler={amountHandler}
          resetIsClicked={resetIsClicked}
        />
      ))}
    </div>
  );
};
export default Meals;
