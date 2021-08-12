import './style/app.sass';
import React from 'react';
import firebase from 'firebase';
import { useDispatch } from 'react-redux';
import { setIsAuthed } from './store/profile/actions';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      dispatch(setIsAuthed(!!user));
    });
  }, []);

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
