export const productsMock = [
  {
    id: 1,
    image: "/images/product_1.jpg",
    title: "Product 1",
    price: 49,
  },
  {
    id: 2,
    image: "/images/product_2.jpg",
    title: "Product 2",
    price: 10,
  },
  {
    id: 3,
    image: "/images/product_3.jpg",
    title: "Product 3",
    price: 54,
  },
  {
    id: 4,
    image: "/images/product_4.jpg",
    title: "Product 4",
    price: 68,
  },
];

const getProducts = (page: number, numberOfProducts: number) => {
  const products = [];
  for (let i = 1; i <= numberOfProducts; i++) {
    products.push({
      id: (page - 1) * numberOfProducts + i,
      image: `/images/product_${Math.floor(Math.random() * 4) + 1}.jpg`,
      title: `Product ${(page - 1) * numberOfProducts + i}`,
      price: Math.floor(Math.random() * 59) + 1,
    });
  }

  return products;
};
export const getProductsList = (
  page: number,
  numberOfProductsByPage: number
) => {
  return {
    products: getProducts(page, numberOfProductsByPage),
    page: page,
    numberOfPages: 10,
  };
};
