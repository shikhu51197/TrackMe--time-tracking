// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from './actionType'

const initialState = {
  homeEmail: "",
  isLoading: false,
  isError: false,
};

const homeReducer = (state = initialState,{type,payload}) => {

  switch (type) {
    case types.GET_EMAIL_REQUEST :
    return {
      ...state,
      isLoading: true,
      isError: false,
    }
    case types.GET_EMAIL_SUCCESS :
    return {
      ...state,
      homeEmail: payload,
      isLoading: false,
      isError: false,
    }
    case types.GET_EMAIL_FAILURE :
    return {
      ...state,
      isLoading: false,
      isError: true,
    }
        
    default:
      return state;
  }
};

export { homeReducer };
