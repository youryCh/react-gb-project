import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Chat from './components/Chat';
import ChatList from './components/ChatList';
import Profile from './components/Profile';
import { News } from './components/News';

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

        <Route path="/chats" exact>
          <ChatList />
        </Route>

        <Route path="/chats/:chatId">
          <Chat />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/news">
          <News />
        </Route>

        <Route>
          Page not found
        </Route>
      </Switch>
    </React.Fragment>
  );
}
