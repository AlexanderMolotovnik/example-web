import axios from 'axios'

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL })
const user = localStorage.getItem('user')

if (user) {
  axiosInstance.defaults.headers.common.Authorization = `Token token=${JSON.parse(user).token}, email=${JSON.parse(user).email}`
}

export default axiosInstance
