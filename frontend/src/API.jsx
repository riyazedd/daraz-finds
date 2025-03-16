import axios from "axios";

const API = axios.create({
    baseURL: "https://swoyatnayonjan.com.np", // Adjust if needed
    withCredentials: true, // Allow sending cookies
});

export default API;
