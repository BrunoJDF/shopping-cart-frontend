import type { Product } from "@/model/product";
import { fetchData } from "@/utils/api";

const url = "/api/products";

const getProducts = async () => {
  return await fetchData<Product[]>(url);
};

export { getProducts };
