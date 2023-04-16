import Axios from 'axios'

export default Axios.create({
    headers: { 'Access-Control-Allow-Origin': '*' },
    baseURL: 'https://dummyjson.com',
})
