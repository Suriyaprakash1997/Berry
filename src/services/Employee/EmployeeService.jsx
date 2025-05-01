import axiosConfig from "../axios";

export const SaveEmployee = (params) => {
    return axiosConfig.post(`Employee`,params);
};

export const GetPagination = (params) => {
    return axiosConfig.get(`Employee/Pagination`, { params });
};
export const DeleteEmployee= (id) => {
    return axiosConfig.delete(`Employee/${id}`);
};
export const GetEmployee= (id) => {
    return axiosConfig.get(`Employee/${id}`);
};