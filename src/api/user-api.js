import { basePath, apiVersion } from './config';
import axios from 'axios';

export async function signUpApi(values) {
    const url = `${basePath}/${apiVersion}/register`;
    const formData = new FormData();
    formData.append('Content-Type', 'application/json');

    try {
        const { data } = await axios.post(url, values, { headers: formData.getHeaders() });
        return data;
    } catch (e) {
        return {status: false, message: e.message};
    }
}

export async function signInUp(values) {
    const url = `${basePath}/${apiVersion}/login`;
    const formData = new FormData();
    formData.append('Content-Type', 'application/json');

    try {
        const { data } = await axios.post(url, values, { headers: formData.getHeaders() });
        return data;
    } catch (e) {
        return {status: false, message: e.message};
    }
}
