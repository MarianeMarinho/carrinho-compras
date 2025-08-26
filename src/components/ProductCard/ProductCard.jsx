import React from "react";
import "./ProductCard.css";

import { GoHeartFill } from "react-icons/go";

function ProductCard() {
   return (
      <section className="productCard">
         <img src="https://i.imgur.com/QkIa5tT.jpeg" alt="product" className="card__image" />
         <div className="card__infos">
            <h2 className="card__title">Teste123</h2>
            <h2 className="card__price">R$ 200,00</h2>
         </div>
         <button type="button" className="button__add-cart">
            adicionar ao carrinho
         </button>
         <div className="card__favorite">
            <GoHeartFill className="heart-animate" />
         </div>
      </section>
   );
}

export default ProductCard;
