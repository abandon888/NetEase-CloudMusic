import axios from "axios"
//固定路径
let service = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 3000
})
export default service