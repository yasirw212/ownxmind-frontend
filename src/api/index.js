import axios from "axios";
axios.defaults.withCredentials = true

// export const getAllProducts = () => axios.get("https://ownxmind-backend-fe62091fcc52.herokuapp.com/products")

export const getAllPhotos = () => axios.get("https://ownxmind-backend-fe62091fcc52.herokuapp.com/photos")

export const retrieveSessionData = () => axios.get('https://ownxmind-backend-fe62091fcc52.herokuapp.com/order')


export const updateSessionData = (data) => axios.post("https://ownxmind-backend-fe62091fcc52.herokuapp.com/order", [...data])