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

const deleteProduct = async (id: number): Promise<void> => {
  await fetch(url + "/" + id, {
    method: "DELETE",
  });
};

export { getProducts, postProduct, patchProduct, deleteProduct };
