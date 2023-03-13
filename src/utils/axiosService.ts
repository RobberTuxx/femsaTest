import axios from 'axios';
const BASE_API_ENDPOINT = "https://6222994f666291106a29f999.mockapi.io/api/v1/"
// Set default params and headers for axios
axios.defaults.baseURL = BASE_API_ENDPOINT;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post.Accept = 'application/json';

const AxiosService = (function () {
    axios.interceptors.response.use(function (response) {
        return response.data;
    }, function (error) {
        return Promise.reject(error.response)
    });
    async function get(endPoint) {
        return axios.get(endPoint);
    }

    return {
        get,
    };
});

export default AxiosService();
