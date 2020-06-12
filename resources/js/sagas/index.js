import { takeEvery, call, put, all } from "redux-saga/effects";
import history from '../history';
import axios from '../data/axios';
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN_REQUEST
} from '../data/constants'

function* watchLogin() {
    yield takeEvery('LOGIN_REQUEST', workerLogin);
}

function* workerLogin(action) {
    try {
        yield put({type: 'LOGIN_START'})
        const cookie = yield call(getCookieAPI);
        const response = yield call(loginAPI, action.payload) // email and password
        yield put({
            type: 'LOGIN_SUCCESS'
        })
        history.push('/home');
    } 
    catch(error) {
        yield put({
            type: 'LOGIN_ERROR',
            payload: {
                message: error.response.data.message
            }
        })
    }
}

function getCookieAPI() {
    return axios.get('/sanctum/csrf-cookie')
}

function loginAPI({email, password}) {
    return axios.post('/login', {
        email,
        password
    })
}

function* watchCheckAuth() {
    yield takeEvery('AUTH_CHECK', function* () {
        try {
            const response = yield call(checkAuth);
            yield put({
                type: 'AUTH_SET',
                payload: {
                    auth: response.data.auth
                }
            })
        }
        catch(error) {
            console.log(error)
        }
    })
}

function checkAuth() {
    return axios.get('/api/auth')
}

export default function* rootSaga() {
    yield all([
      watchLogin(),
      watchCheckAuth()
    ])
}