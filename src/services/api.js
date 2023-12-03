import axios from "axios";

export const uploadfile = async (data) => {

    const API_URL = "https://filesharingapplicationbackend.onrender.com";
    try {
        const response = await axios.post(`${API_URL}/upload`, data);

        return response.data;

    } catch (error) {
        console.error("Error While calling the Api", error.message);
    }


}