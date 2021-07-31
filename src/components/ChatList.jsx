import React from 'react';
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
import { useState } from 'react';
import { addChat } from '../store/chats/actions';

export default function ChatList() {
  const chats = useSelector(state => state.chats);
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

  const handleClickDelete = event => {
    const item = event.target.id;
    console.log(item);
  }

  return (
    <React.Fragment>
      <List>
        { chats ? chats.map(chat =>
          <Link to={`/chats/${chat.id}`} key={ chat.id } id={ chat.id }>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="" src="#" />
              </ListItemAvatar>
              <ListItemText
                primary={ chat.name }
              />
              <DeleteIcon onClick={ handleClickDelete } />
            </ListItem>
          </Link>
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
