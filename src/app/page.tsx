import { fetchProducts } from "@/data/fetchProducts";
import Product from "@/presentation/component/Product";
import Products from "@/presentation/component/Products";
import React, { Suspense } from "react";

export default async function Page() {
  const productsList = await fetchProducts(1);

  return (
    <main className="products">
      <h1>Products </h1>
      <section>
        <>
          {productsList.products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
          <Suspense fallback={<span>Loading</span>}>
            <Products pageStart={2} />
          </Suspense>
        </>
      </section>
    </main>
  );
}
