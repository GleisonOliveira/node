type Product = {
  title: string;
  price: number;
};

const data: Product[] = [
  { price: 10, title: "Produto1" },
  { price: 20, title: "Produto2" },
  { price: 30, title: "Produto3" },
];

export const Product = {
  getAll: (): Product[] => data,
  getByPriceAfter: (price: number): Product[] =>
    data.filter((product: Product) => product.price >= price),
};