import axios from "axios";
import { BASE_URL } from "./config";

const apiService = axios.create({baseURL: BASE_URL,});

apiService.interceptors.request.use((request) => {
    console.log("start Request", request)
    return request 
}, function (error) {
    console.log("REQUEST_ERROR", error)
})
apiService.interceptors.response.use((request) => {
    console.log("start response", request)
    return request 
}, function (error) {
    console.log("REQUEST_response", error)
})
export default apiService