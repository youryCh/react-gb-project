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
