import Image from "next/image";
import React, { FunctionComponent, useContext } from "react";
import { CartContext } from "../context/CartContext";

type ProductType = {
  product: Product;
};
const Product: FunctionComponent<ProductType> = ({ product }) => {
  const { addProduct, showSummary } = useContext(CartContext);

  const addToCart = () => {
    addProduct(product);
    showSummary(true);
  };

  return (
    <article onClick={addToCart}>
      <div className="image">
        <Image
          src={product.image}
          alt={product.title}
          width={280}
          height={300}
        />
        <span className="hover-me">
          <button>AddToCart</button>
        </span>
      </div>

      <div className="details">
        <div>
          <h2>{product.title}</h2>
        </div>
        <p>${product.price}</p>
      </div>
    </article>
  );
};

export default Product;
