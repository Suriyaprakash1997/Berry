import axiosConfig from "../axios";
export const GetPagination = (params) => {
    return axiosConfig.get(`User/Pagination`, { params });
};
export const Get = (id) => {
    return axiosConfig.get(`User/${id}`);
};
export const Delete= (id) => {
    return axiosConfig.delete(`User/${id}`);
};
export const Save = (params) => {
    return axiosConfig.post(`User`,params);
};