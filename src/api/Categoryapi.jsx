import axiosClient from "./AxiosClient";
const categoryapi = {
   getAll(params)  {
    const url = '/products/categories';
    return axiosClient.get(url,{params :params})
   },
   get(id){
    const url = `/products/categories${id}`;
    return axiosClient.get(url)
   },
   add(data){
    const url = '/products';
    return axiosClient.post(url,data)
   },
   update(data){
    const url = `/products${data.id}`;
    return axiosClient.patch(url,data)
   },
   remove(id){
    const url = `/product/categories${id}`;
    return axiosClient.delete(url)
   }
};
export default categoryapi;