import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

import CartButton from "../CartButton/CartButton";
import PerfilButton from "../PerfilButton/PerfilButton";
function Header() {
   return (
      <header className="header">
         <div className="container">
            <SearchBar />
            <div className="header-buttons">
               <CartButton />
               <PerfilButton />
            </div>
         </div>
      </header>
   );
}
export default Header;
