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

  
const updateCart= async (cartId, quantity) => {
  try {
    const response = await axiosClient.post(`/user/cart/update`, {
      _id: cartId, quantity
    });
    return response.data;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};
  
const getCarts = async ( ) => {
  try {
    const response = await axiosClient.get(`/user/cart/find?order=createdAt&page=1&limit=10000`);
    return response.data;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};


const deleteCart= async (_ids) => {
  try {
    console.log(_ids)
    const response = await axiosClient.post(`/user/cart/delete`, {
      _ids
    });
    return response.data;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

  export {
    createCart,
    updateCart,
    deleteCart,
    getCarts
  }