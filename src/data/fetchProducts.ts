export async function fetchProducts(page: number): Promise<ProductList> {
  return (
    await fetch(`http://localhost:3000/api/products?page=${page}`)
  ).json();
}
