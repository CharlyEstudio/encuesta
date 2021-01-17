import { basePath, apiVersion } from './config';
import axios from 'axios';
import { setLocalStorageAPI } from "../utils/localStorageApi";

export async function signUpApi(values) {
    const url = `${basePath}/${apiVersion}/register`;
    const headers = {
        'Content-Type': 'application/json'
    };

    try {
        const { data } = await axios.post(url, values, { headers });
        return data;
    } catch (e) {
        return {status: false, message: e.message};
    }
}

export async function signInUp(values) {
    const url = `${basePath}/${apiVersion}/login`;
    const headers = {
        'Content-Type': 'application/json'
    };

    try {
        const { data } = await axios.post(url, values, { headers });
        if (data.status) {
            setLocalStorageAPI(data);
        }
        return data;
    } catch (e) {
        return {status: false, message: e.message};
    }
}
