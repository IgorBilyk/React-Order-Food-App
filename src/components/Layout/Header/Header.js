import React from "react";

import HeaderCart from "../HeaderCart.js/HeaderCart";
/* import AddMeal from "../AddMealPage/AddMeal"; */
import styles from "./Header.module.css";

const Header = ({ meals, cartPopupHandler }) => {
  return (
    <div className={styles.container}>
      <h1>ReactMeals</h1>

      <HeaderCart meals={meals} cartPopupHandler={cartPopupHandler} />
    </div>
  );
};

export default Header;
