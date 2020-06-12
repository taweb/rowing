import {
    LOGIN_INIT,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../constants'

export const initialState = {
    init: false,
    error: false,
    loading: false,
    auth: false,
    user: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_SET':
        return {
            ...state,
            auth: action.payload.auth,
            init: true
        }
        case LOGIN_INIT:
        return {
            ...state,
            error: false
        }
        case LOGIN_START:
        return {
            ...state,
            loading: true
        }
        // case "LOGIN_STOP":
        case LOGIN_SUCCESS:
        return {
            ...state,
            loading: false,
            auth: true 
        }
        case LOGIN_ERROR:
        return {
            ...state,
            error: action.payload.message,
            loading: false
        }
        case "USER_SET":
        return {
            ...state,
            user: {
                ...state.user,
                ...action.payload
            }
        }
        default: return state
    }
}

export default reducer;