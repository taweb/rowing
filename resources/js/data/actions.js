import * as constants from './constants';
import axios from './axios';

const {
    LOGIN_INIT,
    LOGIN_REQUEST
} = constants

// export const userLogin = ({ email, password }) => dispatch => {    
//     return axios.get('/sanctum/csrf-cookie').then(() => {
//         return axios.post('/login', {
//             email,
//             password
//         })
//     })
// }

// export const userGet = () => dispatch => {
//     return axios.get('/api/user').then((response => {
//         const {data: {id, name, email, created_at}} = response
//         return dispatch({
//             type: USER_SET,
//             payload: {
//                 id,
//                 name,
//                 email,
//                 created_at
//             }
//         })
//     }))
// }

export const authCheck = () => {
    return {
        type: "AUTH_CHECK"
    }
}

export const loginRequest = ({email, password}) => {
    return {
        type: LOGIN_REQUEST,
        payload: {
            email,
            password
        }
    }
}

export const loginInit = () => {
    return {
        type: LOGIN_INIT
    }
}