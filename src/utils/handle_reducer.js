import update from 'immutability-helper';
import { toast } from 'react-toastify';

import { convertObjToCamelKeys } from './handle_variable';

export const handleRequest = (state, action) =>
  update(state, {
    [action]: {
      requesting: { $set: true },
      success: { $set: false },
      message: { $set: '' },
    },
  });

export const handleSuccess = (state, action, payload) => {
  if (!!payload?.message) toast.success(payload?.message);
  return update(state, {
    [action]: {
      requesting: { $set: false },
      success: { $set: true },
      $merge: convertObjToCamelKeys(payload),
    },
  });
};

export const handleError = (state, action, error) => {
  if (typeof error === 'string') toast.error(error);
  return update(state, {
    [action]: {
      requesting: { $set: false },
      success: { $set: false },
      message: { $set: (typeof error === 'string' && error) || 'Đã có lỗi xảy ra vui lòng thử lại sau' },
    },
  });
};

export const handleFetchData = (state, action, key = 'data') =>
  update(state, {
    [action]: { requesting: { $set: true } },
  });
