import axiosConfig from "../axios";
export const SaveEmployee = (params) => {
    return axiosConfig.post(`Employee`,params);
};