import axiosClient from "./AxiosClient";

const createCart= async (userId, productId, quantity) => {
    try {
      const response = await axiosClient.post(`/user/cart/create`, {
        userId, productId, quantity
      });
      return response.data;
    } catch (error) {
      console.error("API call failed:", error);
      throw error;
    }
  };

  export {
    createCart
  }