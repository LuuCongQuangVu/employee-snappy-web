import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOCAL_ACCESS_TOKEN } from '~/store/constants';
import { setToken } from '~/utils/token';
import { API_URL } from '~/config';

// eslint-disable-next-line
export default [authSagas];

function* startRequest(payload) {
  switch (payload.type) {
    case LOGIN:
      yield call(login, payload);
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

    console.log('data', data);

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
    console.log(error);
    yield put({ type: LOGIN_ERROR, error: error });
    setToken(null);
    return error;
  }
}

export function* authSagas() {
  yield takeLatest([LOGIN], startRequest);
}
