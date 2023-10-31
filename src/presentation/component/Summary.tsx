"use client";

import { FunctionComponent, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Image from "next/image";

const Summary: FunctionComponent = () => {
  const { cart, showSummary, summaryIsShowed } = useContext(CartContext);

  if (!summaryIsShowed) {
    return null;
  }

  return (
    <div className="cart">
      <button className="close" onClick={() => showSummary(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
      <section>
        {cart.map((item) => (
          <article key={item.id}>
            <Image
              src={item.image}
              width={100}
              height={100}
              className="h-full w-full object-cover object-center"
              alt=""
            />
            <div className="name">{item.title}</div>
            <div className="price">${item.price}</div>
          </article>
        ))}
        <div className="total">
          $
          {cart.reduce((accumulator, item) => {
            return accumulator + item.price;
          }, 0)}
        </div>
      </section>
    </div>
  );
};

export default Summary;
