import {  
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAILURE,
    AUTH_LOGOUT
} from '../constaints/login-types';
export const authorize = (username, password) => ({
    type: AUTH_REQUEST,
    payload: { username, password }
});
export const logout = () => ({
    type: AUTH_LOGOUT
});