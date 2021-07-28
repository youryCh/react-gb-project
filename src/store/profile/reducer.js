import { CHANGE_NAME, SHOW_NAME } from "./actions";

const initialState = {
  id: null,
  name: 'Unknown',
  showName: true
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload.name
      };

    case SHOW_NAME:
      return {
        ...state,
        showName: !action.payload.showName
      };

    default:
      return state;
  }
}
