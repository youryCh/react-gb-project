import { authors } from "../../constants";
import { ADD_MESSAGE } from "./actions";

const initialState = {
  chat1: [
    {
      text: 'Hello',
      author: authors.me,
      id: 'message1'
    },
    {
      text: 'Hello',
      author: authors.bot,
      id: 'message2'
    }
  ]
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      if (state[action.payload.chatId]) {
        return {
          ...state,
          [action.payload.chatId]: [
            ...state[action.payload.chatId],
            {
              ...action.payload.message,
              id: `message${state[action.payload.chatId].length + 1}`
            }
          ]
        };
      }
      return {
        ...state,
        [action.payload.chatId]: [
          {
            ...action.payload.message,
            id: 'message1'
          }
        ]
      };

    default:
      return state;
  }
};
