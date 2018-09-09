import {  
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_LOGOUT
} from '../constaints/login-types'





const initialState = {
  token: localStorage.getItem('token'),
  error: null,
  islogged: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case AUTH_SUCCESS: {
        return { ...state, token: payload, islogged:true };
      }
      case AUTH_FAILURE: {
        return { ...state, token: "", error: payload, islogged:false }
      }
      case AUTH_LOGOUT: {
        return { ...state, token: "", islogged: false };
      }
      default:
        return state;
    }
};