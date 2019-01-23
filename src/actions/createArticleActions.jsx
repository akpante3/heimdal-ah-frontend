import axios from 'axios';
import { NEW_ARTICLE, NEW_ARTICLE_ERROR } from './actionTypes';


const articleActions = userDetails => (dispatch) => {
  const {
    title,
    body,
  } = userDetails;

  return axios.post('https://fast-food-fast-food.herokuapp.com/api/v1/auth/signup', {
    title,
    body,
    headers: {
      'access-token': '',
    },
  })
    .then((data) => {
      if (data.status === 200) {
        dispatch({
          type: NEW_ARTICLE,
          payload: data,
        });
        // const token = response.data.data.token;
        // setAccessToken(token);
      }
    }).catch((error) => {
      console.log(error.response.data);
      dispatch({
        type: NEW_ARTICLE_ERROR,
        payload: error.response.data,
      });
    });
};

export default articleActions;
