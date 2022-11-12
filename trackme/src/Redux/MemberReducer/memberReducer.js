import * as types from './actionTypes'

const inState = {

    memberUserData: [],
    memberData: []


}

export const memberReducer = (state = inState, action) => {

    const { type, payload } = action;

    switch (type) {

        case types.GET_USER_ALL_DATA: {
            return {
                ...state,
                memberData: payload
            }
        }
        case types.POST_MEMBER_DATA: {
            return {
                ...state,
                payload
            }
        }
        case types.POST_MEMBER_DATA_EEEOR: {
            return {
                ...state,
                payload
            }
        }
        case types.GET_MEMBER_ALL_DATA: {
            return {
                ...state,
                memberData: payload
            }
        }
        case types.DELETE_MEMBER: {
            return {
                ...state,
                payload
            }
        }

        default:
            return state


    }
}