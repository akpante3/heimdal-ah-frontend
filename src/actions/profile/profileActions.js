import instance from '../../config/http';
import { ACTIONS } from '../actionTypes';
import ActionResponse from '../actionResponse';

export const getProfile = username => dispatch => instance.get(`/profiles/${username}`)
  .then((response) => {
    const { profile } = response.data;
    dispatch({ type: ACTIONS.GET_PROFILE, profile });
  })
  .catch((error) => {
    if (!error.response) {
      return (
        dispatch({
          type: ACTIONS.GETTING_PROFILE_ERROR,
          error: 'Internet connection error',
        }));
    }

    if (error.response.status === 404) {
      return (
        dispatch({
          type: ACTIONS.GETTING_PROFILE_ERROR,
          error: 'The requested page doesn’t exist!',
        }));
    }

    return dispatch({
      type: ACTIONS.GETTING_PROFILE_ERROR,
      error: 'A server error occured',
    });
  });


export const updateProfile = (username, body, history, flashMessage) => dispatch => instance.put(`/profiles/${username}`, body)
  .then((response) => {
    const { profile } = response.data;
    dispatch({ type: ACTIONS.GET_PROFILE, profile });
    flashMessage('Profile successfully updated', 'success', 'Profile Updated');
    setTimeout(() => history.push(`/${username}`), 100);
  })
  .catch((error) => {
    if (!error.response) {
      return flashMessage('Internet connection error', 'error', 'Internet Error');
    }

    if (error.response.status === 404) {
      return flashMessage('The requested page doesn’t exist!', 'error', 'Page Not Found');
    }
    return flashMessage('A server error occured', 'error', 'Server Error');
  });

export const getArticlesByAuthor = username => (
  dispatch => instance.get(`/articles_search/author?author=${username}&size=6`)
    .then((response) => {
      const { articles } = response.data;
      dispatch({ type: ACTIONS.GET_ARTICLES_BY_AUTHOR, articles });
    }));

export const followUser = (followedId, userId) => (
  dispatch => instance.post(`/users/${followedId}/follow`)
    .then(() => {
      dispatch(ActionResponse(ACTIONS.FOLLOW_USER, userId));
    })
);

export const unfollowUser = (followedId, userId) => (
  dispatch => instance.post(`/users/${followedId}/unfollow`)
    .then(() => {
      dispatch(ActionResponse(ACTIONS.UNFOLLOW_USER, userId));
    })
);
