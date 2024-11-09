import axiosClient from "./AxiosClient";
const getAllProducts = async () => {
  const response = await axiosClient.get("/product/findAll");
  return response.data;
};
const getProduct = async (id) => {
  try {
    console.log("Product ID:", id); // Kiểm tra giá trị id
    const response = await axiosClient.get(`/product/findOne`, {
      params: { _id: id },
    });
    return response.data;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};
const getAllCategories = async () => {
  const response = await axiosClient.get("/categories/findAll");
  return response.data;
};
const getProductByCategory = async (id) => {
  const response = await axiosClient.get(`/categories`, { param: { _id: id } });
  return response.data;
};
export { getAllProducts, getProduct, getAllCategories, getProductByCategory };
