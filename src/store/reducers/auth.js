import update from 'immutability-helper';

import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_ERROR } from '~/store/constants';
import { handleRequest, handleSuccess, handleError } from '~/utils/handle_reducer';

const initialState = {
  user: {
    requesting: false,
    success: false,
    message: '',
    information: {},
  },
};

const authReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case LOGIN:
    case LOAD_USER:
      return handleRequest(state, 'user', payload);
    case LOGIN_SUCCESS:
    case LOAD_USER_SUCCESS:
      return handleSuccess(state, 'user', payload);
    case LOGIN_ERROR:
    case LOAD_USER_ERROR:
      return handleError(state, 'user', payload.error);

    default:
      return state;
  }
};

export default authReducer;
