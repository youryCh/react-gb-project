import React from 'react';
import {List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {chats} from '../constants';

export default function ChatList() {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    setChatList(chats)
  }, [])

  return (
    <List>
      {chatList.map(chat =>
        <Link to={`/chats/${chat.id}`} key={ chat.id }>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="" src="#" />
            </ListItemAvatar>
            <ListItemText
              primary={ chat.name }
            />
          </ListItem>
        </Link>
      )}
    </List>
  );
}
