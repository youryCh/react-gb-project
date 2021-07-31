import { createStore, combineReducers } from 'redux';
import { messagesReducer } from './messages/reducer';
import { profileReducer } from './profile/reducer';
import { chatsReducer } from './chats/reducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);
