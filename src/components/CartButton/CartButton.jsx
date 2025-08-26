import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import "./CartButton.css";

function CartButton() {
   return (
      <button type="button" className="cart__button">
         <CiShoppingCart />
         <span className="cart__status">1</span>
      </button>
   );
}
export default CartButton;
