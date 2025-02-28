import axiosConfig from "../axios";
export const GetPagination = (params) => {
    return axiosConfig.get(`Designation/Pagination`, { params });
};
export const Get = (id) => {
    return axiosConfig.get(`Designation/${id}`);
};
export const Delete= (id) => {
    return axiosConfig.delete(`Designation/${id}`);
};
export const Save = (params) => {
    return axiosConfig.post(`Designation`,params);
};