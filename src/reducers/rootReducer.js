import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import {
  resetPassword, updatePassword, articleRating, getarticleRating,
} from './index';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import articleReducer from './Articles/articleReducer';
import profileReducer from './profile/profileReducer';

const rootReducer = combineReducers({
  resetpassword: resetPassword,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  articlerating: articleRating,
  getarticlerating: getarticleRating,
  errors: errorsReducer,
  auth: authReducer,
  articles: articleReducer,
  profile: profileReducer,
});

export default rootReducer;
