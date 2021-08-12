import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Chat from './components/Chat';
import ChatList from './components/ChatList';
import Profile from './components/Profile';
import { News } from './components/News';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './components/Login';

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
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </header>
      <Switch>
        <Route path="/" exact>
          <h3>Home page</h3>
        </Route>

        <PrivateRoute path="/chats" exact>
          <ChatList />
        </PrivateRoute>

        <PrivateRoute path="/chats/:chatId">
          <Chat />
        </PrivateRoute>

        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>

        <Route path="/news">
          <News />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route>
          Page not found
        </Route>
      </Switch>
    </React.Fragment>
  );
}
