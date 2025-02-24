import axiosConfig from "../axios";
export const GetPagination = (params) => {
    return axiosConfig.get(`AccountYear/Pagination`, { params });
};