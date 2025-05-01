import axiosConfig from "../axios";

export const SaveEmployee = (params) => {
    return axiosConfig.post(`Employee`,params);
};

export const GetPagination = (params) => {
    return axiosConfig.get(`Employee/Pagination`, { params });
};