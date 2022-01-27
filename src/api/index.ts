import axios from "axios";
import {API_URL} from "../constants/api";
import {getTokenWithBearer} from "../utils";

export const request = axios.create({
    baseURL: API_URL,
})

export const authInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

request.interceptors.request.use(config => {
    config.headers!.Authorization = getTokenWithBearer();

    return config;
})