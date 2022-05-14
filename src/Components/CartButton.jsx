import React from "react";
import { useDispatch } from "react-redux";
import { UIAction } from "../store/cart-slice";

function CartButton() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(UIAction.toggleCart());
  };
  return (
    <div>
      <button onClick={handleClick}> cart</button>
    </div>
  );
}

export default CartButton;
