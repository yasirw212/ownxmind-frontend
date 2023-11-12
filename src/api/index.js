import axios from "axios";

export const getAllProducts = () => axios.get("https://ownxmind-backend-fe62091fcc52.herokuapp.com/products")

export const getAllPhotos = () => axios.get("https://ownxmind-backend-fe62091fcc52.herokuapp.com/photos")