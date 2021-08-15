import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Chat from './components/Chat';
import ChatList from './components/ChatList';
import Profile from './components/Profile';
import { News } from './components/News';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './components/Login';
import { OptimisationComp } from './components/OptimisationComp';

export default function Router() {
  const [counter, setCounter] = React.useState(0);

  const handleCounter = () => {
    setCounter(counter => counter + 1);
  };

  return (
    <>
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

      <Route path="/optimisation" render={ () => <OptimisationComp counter={ counter } /> } />

      <Route>
        Page not found
      </Route>
    </Switch>
    <button onClick={ handleCounter }>Increase count</button>
    </>
  );
}
