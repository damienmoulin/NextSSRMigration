"use client";

import { fetchProducts } from "@/data/fetchProducts";
import InfinitePagination from "@/presentation/component/InfinitePagination";
import Product from "@/presentation/component/Product";
import { useEffect, useState } from "react";

export default function ClientPage() {
  const [productsList, setProductsList] = useState<ProductList>();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    changePage(1);
  }, []);

  const changePage = (page: number) => {
    setLoading(true);
    fetchProducts(page).then((response) => {
      setProductsList({
        products:
          productsList?.products.concat(response.products) || response.products,
        page: response.page,
        numberOfPages: response.numberOfPages,
      });
      setLoading(false);
    });
  };

  return (
    <main className="products">
      <h1>Products </h1>
      <section>
        <InfinitePagination
          numberOfPages={productsList?.numberOfPages || 1}
          fetchData={changePage}
          isLoading={isLoading}
        >
          {productsList?.products?.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </InfinitePagination>
      </section>
    </main>
  );
}
