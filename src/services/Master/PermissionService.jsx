import axiosConfig from "../axios";
export const Get = () => {
    return axiosConfig.get(`Permission`);
};
export const Save = (params) => {
    return axiosConfig.post(`Permission`,params);
};