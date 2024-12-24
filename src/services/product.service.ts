import type { Product } from "@/model/product";
import { fetchData, patchData, postData } from "@/utils/api";

const url = "/api/products";

const getProducts = async () => {
  return await fetchData<Product[]>(url);
};

const postProduct = async (createProduct: Product): Promise<Product> => {
  return await postData<any, Product>(url, createProduct);
};

const patchProduct = async (updateProduct: Product): Promise<Product> => {
  return await patchData<any, Product>(url + "/" + updateProduct.id, updateProduct);
};

export { getProducts, postProduct, patchProduct };
