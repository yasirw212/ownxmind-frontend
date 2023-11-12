import axios from "axios";

export const getAllProducts = () => axios.get("http://localhost:4001/products")

export const getAllPhotos = () => axios.get("http://localhost:4001/photos")