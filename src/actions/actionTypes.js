import keyMirror from 'keymirror';

export const ACTIONS = keyMirror({
  RESET_PASSWORD_STATE: null,
  RESET_PASSWORD_SUCCESS: null,
  RESET_PASSWORD_FAILED: null,
  RESET_PASSWORD_ERROR: null,
  UPDATE_PASSWORD_SUCCESS: null,
  UPDATE_PASSWORD_FAILED: null,
  UPDATE_PASSWORD_ERROR: null,

  SET_CURRENT_USER: null,
  SET_AUTH_USER: null,

  SET_ERRORS: null,
  CLEAR_ERRORS: null,
  REMOVE_AN_ERROR: null,

  FLASH_SUCCESS_MSG: null,

  TOGGLE_LOADER: null,
  TOGGLE_MODAL: null,
});
