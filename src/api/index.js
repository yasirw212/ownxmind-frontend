import axios from "axios";
axios.defaults.withCredentials = true

// export const getAllProducts = () => axios.get("https://ownxmind-backend-fe62091fcc52.herokuapp.com/products")
export const getAllProducts = () => axios.get('http://localhost:4000/products')

export const getAllPhotos = () => axios.get("https://ownxmind-backend-fe62091fcc52.herokuapp.com/photos")
// export const getAllPhotos = () => axios.get('http://localhost:4000/photos')

// export const retrieveSessionData = () => axios.get('https://ownxmind-backend-fe62091fcc52.herokuapp.com/order')
export const retrieveSessionData = () => axios.get('http://localhost:4000/order')


// export const updateSessionData = (data) => axios.post("https://ownxmind-backend-fe62091fcc52.herokuapp.com/order", [...data])
export const updateSessionData = (data) => axios.post("http://localhost:4000/order", [...data])