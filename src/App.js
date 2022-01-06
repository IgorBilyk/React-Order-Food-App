import React, { useState, useEffect } from "react";

import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meal/Meals/Meals";
import Cart from "./components/Cart/Cart";

import mealsData from "./components/Meal_Data/Meal_Data";

import styles from "./App.module.css";
const App = () => {
  const [meals, setMeals] = useState(mealsData);
  const [cartCliked, setCartClicked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedAdd, setIsClickedAdd] = useState({
    isClickedAdd: false,
    id: null,
  });

  //Add to cart habdler
  const addToCart = (id) => {
    let newMeals = [...meals];
    newMeals.map((meal) => {
      if (meal.id === id) {
        meal.inCart = true;
      }
    });
    setMeals(newMeals);
    setIsClicked(true);
  };
  //Amount handler function
  const amountHandler = (data, id) => {
    let newMeals = [...meals];
    newMeals.map((meal) => {
      if (meal.id === id) {
        meal.amount = data;
      }
    });
    setMeals(newMeals);
  };
  //Popup Window handler
  const cartPopupHandler = (e) => {
    setCartClicked(!cartCliked);
  };
  //Increase quantity in the cart
  const handleIncrement = (id) => {
    let newMeals = [...meals];
    newMeals.map((meal) => {
      if (meal.id === id) {
        meal.amount++;
      }
    });

    setMeals(newMeals);
  };
  //Decrease quantity in the cart
  const handleDecrement = (id) => {
    let newMeals = [...meals];
    newMeals.map((meal) => {
      if (meal.id === id) {
        if (meal.amount < 2) {
          meal.inCart = false;
          return false;
        }
        meal.amount--;
      }
    });
    setMeals(newMeals);
  };
  const resetIsClicked = (id) => {
    setIsClicked(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIsClicked(false);
    }, 1000);

    return () => clearInterval(timer);
  }, [isClicked]);

  return (
    <div
      className={styles.main_container}
      style={{
        backgroundImage: "url(/img/bgimage.jpg)",
      }}
    >
      <Header meals={meals} cartPopupHandler={cartPopupHandler} />

      <Meals
        meals={mealsData}
        isClicked={isClicked}
        isClickedAdd={isClickedAdd}
        addToCart={addToCart}
        amountHandler={amountHandler}
        resetIsClicked={resetIsClicked}
      />
      {cartCliked && (
        <Cart
          meals={meals}
          cartPopupHandler={cartPopupHandler}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      )}
    </div>
  );
};

export default App;
