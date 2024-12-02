interface Product {
  id: number;
  name: string;
  price: number;
}
export { type Product };

export const initialProduct: Product = {
  id: 0,
  name: "",
  price: 0,
};
