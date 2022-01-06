import React, { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";

import styles from "./HeaderCart.module.css";

const HeaderCart = ({ meals, cartPopupHandler }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const newMeals = meals.filter((meal) => meal.inCart);
  const handleCartClick = () => {
    cartPopupHandler(true);
  };

  let btnClasess = `${styles.button} ${isHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    setIsHighlighted(true);
    const interval = setInterval(() => {
      setIsHighlighted(false);
    }, 1000);
    return () => clearInterval(interval);
  }, [newMeals.length]);
  return (
    <div className={styles.cart_container}>
      <p className={btnClasess} onClick={handleCartClick}>
        <HiShoppingCart className={styles.cart} />
        Your Cart {newMeals.length}
      </p>
    </div>
  );
};
export default HeaderCart;
