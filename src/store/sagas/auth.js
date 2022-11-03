import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
  LOCAL_ACCESS_TOKEN,
} from '~/store/constants';
import { setToken } from '~/utils/token';
import { API_URL } from '~/config';

// eslint-disable-next-line
export default [authSagas];

function* startRequest(payload) {
  switch (payload.type) {
    case LOGIN:
      yield call(login, payload);
      break;
    case LOAD_USER:
      yield call(loadUser, payload);
      break;
    default:
      break;
  }
}

function* login({ payload }) {
  const { email, password } = payload;
  const url = `${API_URL}/auth/signin`;
  const body = {
    email,
    password,
  };
  try {
    const { data } = yield call(axios.post, url, body);

    if (!data?.success) {
      yield put({ type: LOGIN_ERROR, error: data?.message });
      setToken(null);
    } else {
      yield put({ type: LOGIN_SUCCESS, ...data });
      setToken(data.access_token);
      localStorage.setItem(LOCAL_ACCESS_TOKEN, data.access_token);
    }

    return data;
  } catch (error) {
    localStorage.removeItem(LOCAL_ACCESS_TOKEN);
    setToken(null);

    console.log(error);
    yield put({ type: LOGIN_ERROR, error: error });
    return error;
  }
}

function* loadUser() {
  if (localStorage[LOCAL_ACCESS_TOKEN]) {
    setToken(localStorage[LOCAL_ACCESS_TOKEN]);
  }
  const url = `${API_URL}/auth/get_user?access_token=${localStorage[LOCAL_ACCESS_TOKEN]}`;
  try {
    const { data } = yield call(axios.get, url);
    if (!data?.success) {
      yield put({ type: LOAD_USER_ERROR, error: data?.message });
    } else {
      yield put({ type: LOAD_USER_SUCCESS, ...data });
    }
    return data;
  } catch (error) {
    localStorage.removeItem(LOCAL_ACCESS_TOKEN);
    setToken(null);

    console.log(error);
    yield put({ type: LOAD_USER_ERROR, error: error });
    return error;
  }
}

export function* authSagas() {
  yield takeLatest([LOGIN, LOAD_USER], startRequest);
}
