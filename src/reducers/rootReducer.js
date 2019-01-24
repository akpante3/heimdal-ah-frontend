import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import socialAuthReducer from './SocialAuthReducer/socialAuthReducer';
import { resetPassword, updatePassword } from './index';

const rootReducer = combineReducers({
  resetpassword: resetPassword,
  auth: socialAuthReducer,
  updatepassword: updatePassword,
  toastr: toastrReducer,
});

export default rootReducer;
