import axiosConfig from "../axios";

export const GetDropdown = (mode) => {
    return axiosConfig.get(`Dropdown/${mode}`);
};