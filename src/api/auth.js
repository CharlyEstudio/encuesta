import { basePath, apiVersion } from './config';
import { getTokenLocalStorageAPI, getRefreshTokenLocalStoraAPI } from '../utils/localStorageApi';
import jwtDecode from 'jwt-decode';

export function getAccessToken() {
    const token = getTokenLocalStorageAPI();

    if (!token) {
        return null;
    }
    return withExpiredToken(token) ? null : token;
}

export function getRefreshToken() {
    const refreshToken = getRefreshTokenLocalStoraAPI();
    if (!refreshToken) {
        return null;
    }

    return withExpiredToken(refreshToken) ? null : refreshToken;
}

function withExpiredToken(token) {
    const seconds = 60;
    const metaToken = jwtDecode(token);
    const { exp } = metaToken;
    const now = (Date.now() + seconds) / 1000;
    return now > exp;
}
