import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import "./PerfilButton.css";

function PerfilButton() {
   return (
      <button type="button" className="perfil__button">
         <IoPersonOutline />
      </button>
   );
}
export default PerfilButton;
