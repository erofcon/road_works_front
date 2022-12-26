import axios from "axios";

const defaultHeaders = {
    'Content-Type': 'application/json',
    'Authorization': '',
}

const defaultUrl = 'http://127.0.0.1:8000';


export const defaultApiInstance = axios.create({
    baseURL: defaultUrl,
    headers: defaultHeaders,
})