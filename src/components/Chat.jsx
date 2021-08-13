import React, { useState } from 'react';
import { authors } from '../constants';
import { useParams } from 'react-router-dom';
import SendIcon from '@material-ui/icons/Send';
import {TextField} from '@material-ui/core';
import Message from './Message';
import '../style/app.sass';
import firebase from 'firebase';

export default function Chat() {
  const { chatId } = useParams();
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const db = firebase.database();

  const handleChange = event => {
    setMessage(event.target.value);
  };

  React.useEffect(() => {
    firebase.database().ref('messages').child(chatId).get()
      .then(snapshot => {
        let messages = [];

        snapshot.forEach(item => {
          messages.push(item.val());
        });

        setMessageList(messages);
        messageListChangeListener(chatId, message => {
          setMessageList(messages => [
            ...messages,
            message
          ]);
        });
      });
  }, []);

  const messageListChangeListener = (chatId, callback) => {
    firebase.database().ref('messages').child(chatId).on('child_added', snapshot => {
      callback(snapshot.val());
    });

    firebase.database().ref('messages').child(chatId).on('child_changed', snapshot => {
      callback(snapshot.val());
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    const currentMessage = {
      id: `message${Date.now()}`,
      text: message,
      author: authors.me
    };
    
    db.ref('messages').child(chatId).push(currentMessage);
    setMessage('');
  };

  return (
    <React.Fragment>
      <span>Chat {chatId} page</span>
      <div className="message-block">
      { messageList ? messageList.map((message, id) => 
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
