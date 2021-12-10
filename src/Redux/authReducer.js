import {
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "./actionType";

const initState = {
  loading: false,
  error: false,
  token: "",
  user: {},
  auth: false,
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload.admin,
        user: payload.user,
        auth: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload.token,
        user: payload.token,
        auth: true,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: false,
      };
    default:
      return {
        ...state,
      };
  }
};
