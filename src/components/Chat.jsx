import React from 'react';
import {useParams} from 'react-router-dom';
import {chats} from '../constants';
import {Redirect} from 'react-router-dom';

export default function Chat() {
  const {chatId} = useParams();

  if (!chatId || !chats[chatId - 1]) {
    console.log(chatId);
    return <Redirect to="/chats" />;
  }
  
  return (
    <span>Chat {chatId} page</span>
  );
}
