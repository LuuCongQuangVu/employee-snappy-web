import { LOGIN } from '~/store/constants';

export const login = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};
