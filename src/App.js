import './style/app.sass';
import { useEffect, useState, useRef } from 'react';
import { authors } from './constants';
import Message from './components/Message';
import {TextField, Grid} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ChatList from './components/ChatList';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from './store/messages/actions';
import { getMessages } from './store/messages/selectors';

function App() {
  const [message, setMessage] = useState('')
  const firstRender = useRef(true)
  const messageList = useSelector(getMessages);
  const dispatch = useDispatch();
  const currentChatId = 'chat1';


  // useEffect(() => {
  //   if (
  //     !firstRender.current &&
  //     messageList[currentChatId][messageList[currentChatId].length - 1]?.author !== authors.bot
  //   ) {
  //     setTimeout(() => {
  //       const botMessage = {
  //         text: 'Hi!',
  //         author: authors.bot
  //       };
  //       dispatch(currentChatId, botMessage);
  //     }, 1500)
  //   }
  //   firstRender.current = false
  // }, [messageList, dispatch])

  const handleChange = event => {
    setMessage(event.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault();
    const currentMessage = {
      text: message,
      author: authors.me
    };

    dispatch(addMessage(currentChatId, currentMessage));
    setMessage('');
  };

  return (
    <div className="App">
      <Grid item xs={12} className="message-block">
        <ChatList />
      </Grid>
      <Grid item xs={12}>
        <div className="message-block">
          { messageList[currentChatId].map(message => 
            <Message
              message={ message }
              key={ message.id }
            />
          ) }
        </div>
        <form className="App__form" onSubmit={ handleClick }>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Write a message..."
            value={ message }
            onChange={ handleChange }
            fullWidth
            autoFocus
            required
          />
          <button className="App__btn">
            <SendIcon color="action" />
          </button>
        </form>
      </Grid>
    </div>
  )
}

export default App;
