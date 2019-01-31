import keyMirror from 'keymirror';

export const ACTIONS = keyMirror({
  OPEN_MODAL: null,
  CLOSE_MODAL: null,
  SET_CURRENT_USER: null,
  SET_CURRENT_USER_FAIL: null,
  REMOVE_CURRENT_USER_ERROR: null,
  LOGOUT_USER: null,
  RESET_PASSWORD_STATE: null,
  RESET_PASSWORD_SUCCESS: null,
  RESET_PASSWORD_FAILED: null,
  RESET_PASSWORD_ERROR: null,
  UPDATE_PASSWORD_SUCCESS: null,
  UPDATE_PASSWORD_FAILED: null,
  UPDATE_PASSWORD_ERROR: null,
  GET_PROFILE: null,
  GET_ARTICLES_BY_AUTHOR: null,
  ARTICLES_RATING_SUCCESS: null,
  ARTICLES_RATING_ERROR: null,
  RESET_ARTICLES_RATING_STATE: null,
  GET_ARTICLES_RATING_SUCCESS: null,
  GET_ARTICLES_RATING_ERROR: null,
  SET_AUTH_USER: null,
  SET_LOADER: null,
  SET_ERRORS: null,
  CLEAR_ERRORS: null,
  REMOVE_AN_ERROR: null,
  GET_ALL_ARTICLES: null,
  GETTING_PROFILE_ERROR: null,
});
