import axiosConfig from "../axios";
export const GetPagination = (params) => {
    return axiosConfig.get(`Role/Pagination`, { params });
};
export const Get = (id) => {
    return axiosConfig.get(`Role/${id}`);
};
export const Delete= (id) => {
    return axiosConfig.delete(`Role/${id}`);
};
export const Save = (params) => {
    return axiosConfig.post(`Role`,params);
};