import './style/app.sass';
import React from 'react';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuthed } from './store/profile/actions';
import Router from './Router';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const isAuthed = useSelector(state => state.profile.isAuthed);
  
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      dispatch(setIsAuthed(!!user));
    });
  }, []);

  const handleLogOut = () => {
    firebase.auth().signOut();
  }

  return (
    <BrowserRouter>
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
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <button disabled={ isAuthed ? "" : "disabled" } onClick={ handleLogOut }>Log out</button>
          </li>
        </ul>
      </header>
      <Router />
    </BrowserRouter>
  );
}

export default App;
