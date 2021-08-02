import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, removeChat } from '../store/chats/actions';
import { getChats } from '../store/chats/selectors';

export default function ChatList() {
  const chats = useSelector(getChats);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addChat(value));
    setValue('');
  };

  const handleClickDelete = chatId => {
    console.log(chatId);
    dispatch(removeChat(chatId));
  };

  return (
    <React.Fragment>
      <h3>Chats</h3>
      <List>
        { chats ? chats.map((chat, id) =>
          <ListItem key={ id }>
            <Link
              to={`/chats/${chat.id}`}
              className="chat-link"
            >
              <ListItemAvatar>
                <Avatar alt="" src="#" />
              </ListItemAvatar>
              <ListItemText
                primary={ chat.name }
              />
            </Link>
            <DeleteIcon onClick={() => handleClickDelete(chat.id) } />
          </ListItem>
        ) : <span>No chats</span> }
      </List>
      <form onSubmit={ handleSubmit }>
        <input
          value={ value }
          onChange={ handleChange }
        />
        <button>Add chat</button>
      </form>
    </React.Fragment>
  );
}
