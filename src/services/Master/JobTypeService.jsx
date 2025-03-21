import axiosConfig from "../axios";
export const GetPagination = async (params) => {
    try {
        const response = await axiosConfig.get(`JobType/Pagination`, { params });
        return response.data; // Extracting the actual data
    } catch (error) {
        console.error("Error fetching pagination data:", error);
        throw error; // Rethrow the error so the caller can handle it
    }
};
export const Get = (id) => {
    return axiosConfig.get(`JobType/${id}`);
};
export const Delete= (id) => {
    return axiosConfig.delete(`JobType/${id}`);
};
export const Save = (params) => {
    return axiosConfig.post(`JobType`,params);
};