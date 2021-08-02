export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const REMOVE_CHAT = 'CHATS::REMOVE_CHAT';

export const addChat = name => {
  return {
    type: ADD_CHAT,
    payload: {
      name
    }
  };
};

export const removeChat = chatId => {
  return {
    type: REMOVE_CHAT,
    payload: {
      chatId
    }
  };
};
