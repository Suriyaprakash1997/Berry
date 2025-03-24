import axiosConfig from "../axios";
export const GetMenu = (id) => {
    return axiosConfig.get(`RolePermision/${id}`);
};
export const Save = (params) => {
    return axiosConfig.post(`RolePermision`,params);
};