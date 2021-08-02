import { authors } from "../../constants";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, message) => {
  return {
    type: ADD_MESSAGE,
    payload: {
      chatId,
      message
    }
  };
};

export const addMessageWithThunk = (chatId, message) => {
  return (dispatch, getState) => {
    dispatch(addMessage(chatId, message));
    if (message.author !== authors.bot) {
      const botMessage = {
        text: 'Hi!',
        author: authors.bot
      };
      setTimeout(() => {
        dispatch(addMessage(chatId, botMessage));
      }, 1500);
    }
  };
};
