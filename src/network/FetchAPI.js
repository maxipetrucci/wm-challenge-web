import axios from 'axios';
import AppConstants from '../AppConstants';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    async config => {
        config.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        return config;
    },
    error => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
    response => {
        return response.data;
    },
    async error => {
        return Promise.reject(error);
    }
)


export const fetchFromURL = async(url, params = {}, timeOutTime = AppConstants.REQUEST_TIMEOUTS.FETCH_TIMEOUT) => {
    return axiosInstance.get(url, {
        params: params,
        timeout: timeOutTime
    })
    .then((response) => {
        return response;
    })
    .catch((th) => {
        console.log(`FetchAPI@fetchFromURL: ${url}`, th);

        throw th;
    });
}