import { getProductsList } from "./mockProducts";

export async function fetchProducts(page: number): Promise<ProductList> {
  return new Promise((resolve) =>
    setTimeout(resolve, 100, getProductsList(page, 10))
  );
}
