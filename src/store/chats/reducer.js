import { chats } from "../../constants";
import { ADD_CHAT, REMOVE_CHAT } from "./actions";

const initialState = [
  ...chats
];

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return [
        ...state,
        {
          name: action.payload.name,
          id: `chat${state.length + 1}`
        }
      ];

    case REMOVE_CHAT:
      return [
        ...state.filter((item) => item.id !== action.payload.chatId)
      ];

    default:
      return state;
  }
};
