import './style/app.sass';
import { Grid } from '@material-ui/core';
import ChatList from './components/ChatList';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <Grid item xs={12} className="message-block">
        <ChatList />
      </Grid>
      <Grid item xs={12}>
        <Chat />
      </Grid>
    </div>
  );
}

export default App;
