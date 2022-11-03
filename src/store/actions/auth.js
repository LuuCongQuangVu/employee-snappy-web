import { LOGIN, LOAD_USER } from '~/store/constants';

export const login = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};

export const loadUser = (payload) => {
  return {
    type: LOAD_USER,
    payload,
  };
};
