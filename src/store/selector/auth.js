import { createSelector } from 'reselect';

const selectAuthDomain = () => (state) => state.auth;

const selectUser = createSelector(selectAuthDomain(), (substate) => substate.user);

const selectAuth = createSelector(
  selectUser,

  (selectUser) => ({
    selectUser,
  }),
);

export { selectUser, selectAuth };
