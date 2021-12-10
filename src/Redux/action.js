import {
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "./actionType";

export const loginLoading = () => ({
  type: LOGIN_LOADING,
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const loginError = (error) => ({
  type: LOGIN_ERROR,
  payload: error,
});

export const registerLoading = () => ({
  type: REGISTER_LOADING,
});

export const registerSuccess = (data) => ({
  type: REGISTER_SUCCESS,
  payload: data,
});

export const registerError = (error) => ({
  type: REGISTER_ERROR,
  payload: error,
});
