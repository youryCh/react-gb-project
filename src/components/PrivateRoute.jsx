import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = (props) => {
  const isAuthed = useSelector(state => state.profile.isAuthed);
  
  return isAuthed ? <Route { ...props } /> : <Redirect to="/login" />;
};
