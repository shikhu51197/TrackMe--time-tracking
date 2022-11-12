import axios from "axios";
import * as types from './actionTypes'


export const singupRequest = () => {
    return {

        type: types.SINGUP_REQUEST
    }
}

export const singupSuccess = (payload) => {

    return {
        type: types.SINGUP_SUCCESS,
        payload
    }
}

export const singupFailure = (payload) => {
    return {

        type: types.SINGUP_FAILURE,
        payload
    }
}


export const SingupUser = (payload) => async (dispatch) => {
    dispatch(singupRequest());


    return axios.post("https://tmetric-41504.herokuapp.com/user/singup", payload)
        .then((res) => {
            console.log(res)
            return dispatch(singupSuccess(res))

        })
        .catch((err) => {

            return singupFailure(err)

        })
}


export const loginRequest = () => ({
    type: types.LOGIN_REQUEST
});

export const loginSuccess = (payload) => ({
    type: types.LOGIN_SUCCESS,
    payload
});

export const loginFailure = (payload) => ({
    type: types.LOGIN_FAILURE,
    payload
})


export const UserLogin = (payload) => async (dispatch) => {

    dispatch(loginRequest());
    const headers = {
        "Content-Type": "application/json",
    };
    return await axios.post("https://tmetric-41504.herokuapp.com/user/login", payload, {
        headers: headers,
    })
        .then((res) => {
            // console.log(res.data.token, "login")
            return dispatch(loginSuccess(res));

        })
        .catch((err) => {
            return dispatch(loginFailure(err));

        })
}


// for small and large functionality
export const sidebar = (payload) => ({
    type: types.SIDE_BAR,
    payload

})


export const Side_Bar_Size = (payload) => async (dispatch) => {

    dispatch(sidebar(payload))
}


// for login user

export const loginUser = (payload) => {
    return {
        type: types.GET_LOGIN_USER,
        payload
    }
}

export const LoginUserData = (token) => async (dispatch) => {

    return await axios.get("https://tmetric-41504.herokuapp.com/member/loginuser", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => {
            return (dispatch(loginUser(res.data)))
            // console.log(res.data.name)

        })
        .catch((err) => {
            console.log(err)
        })
}


export const subToken = (payload) => {
    return {
        type: types.SUBSCRIPTION_TOKEN,
        payload
    }
}

export const SubToken = (payload) => async (dispatch) => {



    return (dispatch(subToken(payload)))

    // console.log(res, "sub action")

}