import axiosConfig from "../axios";
export const GetPagination = (params) => {
    return axiosConfig.get(`AccountYear/Pagination`, { params });
};
export const GetAccountYear = (id) => {
    return axiosConfig.get(`AccountYear/${id}`);
};
export const DeleteAccountYear= (id) => {
    return axiosConfig.delete(`AccountYear/${id}`);
};
export const SaveAccountYear = (params) => {
    return axiosConfig.post(`AccountYear`,params);
};