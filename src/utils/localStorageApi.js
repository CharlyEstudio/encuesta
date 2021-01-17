import { ACCESS_TOKEN, REFRESH_TOKEN } from './constants';

export function setLocalStorageAPI(value) {
    const { accessToken, refreshToken } = value;
    localStorage.setItem(ACCESS_TOKEN, accessToken);
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
}

export function getLocalStorageAPI() {
    return {
        [ACCESS_TOKEN]: localStorage.getItem(ACCESS_TOKEN),
        [REFRESH_TOKEN]: localStorage.getItem(REFRESH_TOKEN)
    };
}

export function deleteLocalStoraAPI() {
    localStorage.clear();
}
