import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const API = axios.create({
    baseURL: process.env.BACKEND_URL, // Adjust if needed
    withCredentials: true, // Allow sending cookies
});

export default API;
