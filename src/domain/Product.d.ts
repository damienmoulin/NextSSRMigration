interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
}

interface ProductList {
  products: Product[];
  page: number;
  numberOfPages: number;
}
