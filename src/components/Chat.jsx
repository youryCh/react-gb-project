import React, { useState } from 'react';
import { authors } from '../constants';
import { useParams } from 'react-router-dom';
import SendIcon from '@material-ui/icons/Send';
import {TextField} from '@material-ui/core';
import Message from './Message';
import { useDispatch, useSelector } from 'react-redux';
import { addMessageWithThunk } from '../store/messages/actions';
import { getMessages } from '../store/messages/selectors';
import '../style/app.sass';

export default function Chat() {
  const { chatId } = useParams();
  const [message, setMessage] = useState('');
  const messageList = useSelector(getMessages);
  const dispatch = useDispatch();

  const handleChange = event => {
    setMessage(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const currentMessage = {
      text: message,
      author: authors.me
    };
    dispatch(addMessageWithThunk(chatId, currentMessage));
    setMessage('');
  };

  return (
    <React.Fragment>
      <span>Chat {chatId} page</span>
      <div className="message-block">
      { messageList[chatId] ? messageList[chatId].map((message, id) => 
        <Message
          message={ message }
          key={ id }
        />
      ) : null }
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
  </React.Fragment>
  );
}
