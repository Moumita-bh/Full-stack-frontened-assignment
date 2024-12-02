import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

API.interceptors.request.use((req) => {
    const token = localStorage.getItem("accessToken");
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
});

export const loginUser = (credentials) => API.post("/auth/login", credentials);
export const signupUser = (credentials) => API.post("/auth/signup", credentials);
export const fetchProducts = () => API.get("/products");
export const createProduct = (data) => API.post("/products", data);
export const deleteProduct = (id) => API.delete(`/products/${id}`);
