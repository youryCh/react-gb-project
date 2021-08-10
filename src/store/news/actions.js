import { URL_API } from "../../constants";

export const GET_NEWS = 'NEWS::GET_NEWS';

export const SET_LOADING_STATUS = 'NEWS::SET_LOADING_STATUS';

export const SET_ERROR_STATUS = 'NEWS::SET_ERROR_STATUS';

export const SET_IDLE_STATUS = 'MEWS::SET_IDLE_STATUS';

export const getNews = newsList => {
  return {
    type: GET_NEWS,
    payload: {
      newsList
    }
  };
};

export const setLoadingStatus = () => {
  return {
    type: SET_LOADING_STATUS
  };
};

export const setErrorStatus = () => {
  return {
    type: SET_ERROR_STATUS
  };
};

export const setIdleStatus = () => {
  return {
    type: SET_IDLE_STATUS
  };
};

export const fetchNews = () => {
  return (dispatch, getState) => {
    dispatch(setLoadingStatus());

    fetch(URL_API)
      .then(response => {
        if (response.status !== 200) {
          throw Error('Something wrong');
        }
        return response.json();
      })
      .then(result => {
        dispatch(getNews(result));
      })
      .catch(err => {
        dispatch(setErrorStatus());
        console.error(err)
      })
      .finally (() => {
        dispatch(setIdleStatus());
      })
  };
};
