import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000", // Adjust if needed
    withCredentials: true, // Allow sending cookies
});

export default API;
