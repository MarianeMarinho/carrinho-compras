import React from "react";
import "./ProductCard.css";

import { GoHeartFill } from "react-icons/go";
import propTypes from "prop-types";
import formatCurrency from "../../utils/formatCurrency";

function ProductCard({ data }) {
   const {
      title,
      price,
      images: [image],
      category,
   } = data;
   return (
      <section className="productCard">
         <img src={image} alt="product" className="card__image" />
         <div className="card__infos">
            <h2 className="card__title">{title}</h2>
            <h2 className="card__price">{formatCurrency(price, "BRL")}</h2>
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

ProductCard.propTypes = {
   data: propTypes.shape({}),
}.isRequired;
