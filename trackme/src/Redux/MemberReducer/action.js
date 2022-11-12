import axios from "axios";
import { getLocalData } from "../../Utils/localStorage";
import * as types from './actionTypes'



export const getMemeberUserData = (payload) => {
    return {
        type: types.GET_USER_ALL_DATA,
        payload
    }
}


export const GetMemberUserData = (token) => async (dispatch) => {

    return await axios.get("https://tmetric-41504.herokuapp.com/member/user", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => {
            return (dispatch(getMemeberUserData(res.data)))

        })
        .catch((err) => {
            console.log(err)
        })

}


export const postMember = (payload) => {
    return {
        type: types.POST_MEMBER_DATA,
        payload
    }
}

export const postMemberError = (payload) => {
    return {
        type: types.POST_MEMBER_DATA_EEEOR,
        payload
    }
}

export const PostMemberSignup = (payload) => async (dispatch) => {

    console.log("patload", payload.id)
    console.log(getLocalData("token"))
    return await axios.post(`https://tmetric-41504.herokuapp.com/member/`, payload, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${payload.token}`
        }
    })
        .then((res) => {

            return dispatch(postMember(res));
            // console.log(res)

        })
        .catch((err) => {
            console.log(err, "errrrr2222222")
            return dispatch(postMemberError(err))
        });


}


const getMemberData = (payload) => {

    return {
        type: types.GET_MEMBER_ALL_DATA,
        payload
    }
}

export const GetMemberData = (token) => async (dispatch) => {

    return await axios.get("https://tmetric-41504.herokuapp.com/member/", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => {
            return (dispatch(getMemberData(res.data)))
            // console.log(res.data)

        })
        .catch((err) => {
            console.log(err)
        })
}


const updateMember = (payload) => {
    return {
        type: types.UPDATE_MEMBER,
        payload
    }
}


export const UpdateMember = (payload) => async (dispatch) => {

    console.log("payload", payload.role)
    // console.log(getLocalData("token"))
    return await axios.patch(`https://tmetric-41504.herokuapp.com/member/${payload.userId}`, payload, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${payload.token}`
        }
    })
        .then((res) => {

            return dispatch(updateMember(res));
            // console.log(res)

        })
        .catch((err) => {
            console.log(err, "errrrr2222222")
            // return dispatch(postMemberError(err))
        });


}




const DeleteMember = (payload) => {
    return {
        type: types.DELETE_MEMBER,
        payload
    }
}


export const DeleteMemberFun = (payload) => async (dispatch) => {


    // console.log(getLocalData("token"))
    return await axios.delete(`https://tmetric-41504.herokuapp.com/member/${payload.userId}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${payload.token}`
        }
    })
        .then((res) => {

            return dispatch(DeleteMember(res));
            // console.log(res)

        })
        .catch((err) => {
            console.log(err, "errrrr2222222")
            // return dispatch(postMemberError(err))
        });


}