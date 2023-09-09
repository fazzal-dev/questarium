import axios from "axios";
 
export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:'2074bf563e4d4ae5b838c66d9a8b6aa3'
    }
})