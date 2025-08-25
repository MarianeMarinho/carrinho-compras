import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import "./CartButton.css";

function CartButton() {
   return (
      <button type="button" className="cart__button">
         <CiShoppingCart />
      </button>
   );
}
export default CartButton;
