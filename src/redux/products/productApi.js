import axiosInstance from "../../constants/axiosInstance ";



export const getProductsAPI = async () => {
  const res = await axiosInstance.get("/product");
  return res.data;
};

export const updateProductAPI = async (product) => {
  const res = await axiosInstance.patch(`/product/${product._id}`, product);
  return res.data;
};

export const deleteProductAPI = async (id) => {
  await axiosInstance.delete(`/product/${id}`);
  return id;
};
