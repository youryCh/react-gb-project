import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { messagesReducer } from './messages/reducer';
import { profileReducer } from './profile/reducer';
import { chatsReducer } from './chats/reducer';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { newsReducer } from './news/reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'news'
  ]
};

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  news: newsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
