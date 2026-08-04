import { instance } from "../../config/instance";

export const getWatches = async () => {
  const response = await instance.get("/products/category/mens-watches");
  return response.data.products ?? [];
};

export const getProductById = async (id) => {
  const response = await instance.get(`/products/${id}`);
  return response.data ?? {};
};