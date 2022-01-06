import React from "react";
import Cart_Item from "./Cart_Item.js/Cart_Item";

const Cart_Items = ({ meals, handleDecrement, handleIncrement }) => {
  const mealsInCart = meals.filter((item) => item.inCart);
  return (
    <div>
      {mealsInCart.map((item) => (
        <Cart_Item
          data={item}
          key={item.id}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
      ))}
    </div>
  );
};

export default Cart_Items;
