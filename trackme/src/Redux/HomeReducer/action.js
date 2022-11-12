//Write the ActionCreator functions here

import * as types from './actionType'

export const getEmailRequest = () => {
    return {
        type:types.GET_EMAIL_REQUEST
    }
}
export const getEmailSuccess = (payload) => {
    return {
        type:types.GET_EMAIL_SUCCESS,payload
    }
}
export const getEmailFailure = () => {
    return {
        type:types.GET_EMAIL_FAILURE
    }
}

export const gettingTheEmailData = (payload) => (dispatch)=> {

    dispatch(getEmailSuccess(payload))

}