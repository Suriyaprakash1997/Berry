import axiosConfig from "../axios";
export const GetPagination = (id,params) => {
    return axiosConfig.get(`Holiday/${id}/Pagination`, { params });
};
export const Get = (id) => {
    return axiosConfig.get(`Holiday/${id}`);
};
export const Delete= (id) => {
    return axiosConfig.delete(`Holiday/${id}`);
};
export const Save = (params) => {
    return axiosConfig.post(`Holiday`,params);
};