import axiosConfig from "../axios";
export const GetPagination = (params) => {
    return axiosConfig.get(`Policy/Pagination`, { params });
};
export const Get = (id) => {
    return axiosConfig.get(`Policy/${id}`);
};
export const Delete= (id) => {
    return axiosConfig.delete(`Policy/${id}`);
};
export const Save = (params,file) => {
    return axiosConfig.post(`Policy`,params,file);
};