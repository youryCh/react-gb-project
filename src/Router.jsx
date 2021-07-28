import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import App from './App';
import Chat from './Chat';
import ChatList from './ChatList';

export default function Router() {
  return (
    <React.Fragment>
      <header>
        <ul className="header-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chats">Chats</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </header>
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>

        <Route path="/chats" exact>
          <ChatList />
        </Route>

        <Route path="/chats/:chatId?">
          <Chat />
        </Route>

        <Route path="/profile">
          Profile
        </Route>

        <Route>
          Page not found
        </Route>
      </Switch>
    </React.Fragment>
  );
}
