import { getLocalData, SaveTheToken } from "../../Utils/localStorage";
import * as types from './actionTypes'

const inState = {

    isAuth: getLocalData("TMRTRICTOKEN") ? true : false,
    token: getLocalData("token") || false,
    isLoading: false,
    isError: false,
    sideSize: '',
    LoginUser: [],
    SubToken: getLocalData("subthe") || ''

}

export const authReducer = (state = inState, action) => {

    const { type, payload } = action;

    switch (type) {

        case types.SINGUP_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case types.SINGUP_SUCCESS: {

            return {
                ...state,
                isLoading: false,
                isAuth: true

            }
        }

        case types.SINGUP_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case types.LOGIN_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case types.LOGIN_SUCCESS: {
            SaveTheToken("TMRTRICTOKEN", payload.data.token)
            SaveTheToken("token", payload.data.token)
            console.log(payload.data.token)
            return {
                ...state,
                isLoading: false,
                payload,
                token: payload.data.token

            }
        }

        case types.LOGIN_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case types.SIDE_BAR: {
            console.log(payload, "reducer Payload")
            return {
                ...state,
                sideSize: payload
            }
        }
        case types.GET_LOGIN_USER: {
            console.log(payload, "reducer Payload")
            // console.log("reducer with login user")
            return {
                ...state,
                LoginUser: payload
            }
        }
        case types.SUBSCRIPTION_TOKEN: {
            console.log(payload, "reducer Payload")
            
            SaveTheToken("subthe", payload)
            return {
                ...state,
                SubToken: payload
            }
        }
        default:
            return state


    }
}