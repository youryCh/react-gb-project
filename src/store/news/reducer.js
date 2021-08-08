import { NEWS_REQUEST_STATUS } from "../../constants";
import { GET_NEWS, SET_ERROR_STATUS, SET_IDLE_STATUS, SET_LOADING_STATUS } from "./actions";

const initialState = {
  list: [],
  status: NEWS_REQUEST_STATUS.IDLE
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        list: action.payload.newsList
      };

    case SET_LOADING_STATUS:
      return {
        ...state,
        status: NEWS_REQUEST_STATUS.LOADING
      };

    case SET_ERROR_STATUS:
      return {
        ...state,
        status: NEWS_REQUEST_STATUS.ERROR
      };

    case SET_IDLE_STATUS:
      return {
        ...state,
        status: NEWS_REQUEST_STATUS.IDLE
      };

    default:
      return state;
  }
};
