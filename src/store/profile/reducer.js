import { CHANGE_IS_AUTHED, CHANGE_NAME, SHOW_NAME } from "./actions";

const initialState = {
  id: null,
  name: 'Unknown',
  showName: true,
  isAuthed: false
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

    case CHANGE_IS_AUTHED:
      return {
        ...state,
        isAuthed: action.payload.isAuthed
      };

    default:
      return state;
  }
};
