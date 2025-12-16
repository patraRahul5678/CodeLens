import { axiosInstance } from "../lib/axios.js"


export const signup = async (signupData) => {
    try {
        const res = await axiosInstance.post("/users/signup", signupData)
        return res.data;
    } catch (error) {
        console.log("Error in signup:",error);
        return null;
    }
}

export const logout = async () => {
    try {
        const res = await axiosInstance.post("/users/logout")
        return res.data;
    } catch (error) {
        console.log("Error in signup:",error);
        return null;
    }
}



export const getAuthUser = async () => {
    try {
        const response = await axiosInstance.get("/users/me");
        return response.data;
    } catch (error) {
        console.log("Error in getAuthUser:", error);
        return null;
    }
}