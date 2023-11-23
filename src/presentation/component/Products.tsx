"use client";

import { fetchProducts } from "@/data/fetchProducts";
import React, { FunctionComponent, useState } from "react";
import Product from "./Product";
import InfinitePagination from "./InfinitePagination";

type ProductsProps = {
  pageStart: number;
};

const Products: FunctionComponent<ProductsProps> = ({ pageStart }) => {
  const [productsList, setProductsList] = useState<ProductList>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const changePage = (page: number) => {
    setLoading(true);
    fetchProducts(page + ((pageStart > 0 ? pageStart : 0) - 1)).then(
      (response) => {
        setProductsList({
          products:
            productsList?.products.concat(response.products) ||
            response.products,
          page: response.page,
          numberOfPages: response.numberOfPages,
        });
        setLoading(false);
      }
    );
  };

  return (
    <>
      <InfinitePagination
        numberOfPages={productsList?.numberOfPages || 1}
        fetchData={changePage}
        isLoading={isLoading}
      >
        {productsList?.products?.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </InfinitePagination>
    </>
  );
};

export default Products;
