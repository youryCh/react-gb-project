import React from 'react';
import './app.sass';
import { authors, chats } from './constants';
import {
  TextField,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send'
import { MessageClass } from './MessageClass';

export class AppClass extends React.Component {
  state = {
    messageList: [],
    message: '',
    chatList: [],
    isFirstRender: true
  }

  handleChange = event => {
    this.setState({message: event.target.value});
  }

  handleClick = event => {
    event.preventDefault();

    this.setState(state => {
      return {
        messageList: [
          ...state.messageList,
          {
            text: this.state.message,
            author: authors.me
          }
        ]
      };
    });

    this.setState({message: ''});
    this.setState({isFirstRender: false});
  }

  componentDidMount() {
    this.setState({chatList: chats});
  }

  componentDidUpdate() {
    if (
      !this.state.isFirstRender &&
      this.state.messageList[this.state.messageList.length - 1]?.author !== authors.bot
    ) {
      setTimeout(() => {
        this.setState(state => ({
          messageList: [
            ...state.messageList,
            {
              text: 'Hi!',
              author: authors.bot
            }
          ]
        }));
      }, 1500);
    }
  }

  render() {
    return (
      <div className="App">
        <Grid item xs={12} className="message-block">
          <List>
            { this.state.chatList.map(chat => 
              <ListItem key={ chat.id }>
                <ListItemAvatar>
                  <Avatar alt="" src="#" />
                </ListItemAvatar>
                <ListItemText
                  primary={ chat.name }
                />
              </ListItem>
            ) }
          </List>
        </Grid>
        <Grid item xs={12}>
          <div className="message-block">
            { this.state.messageList.map((message, index) => 
              <MessageClass
                author={ message.author }
                text={ message.text }
                key={ index }
              />
            ) }
          </div>
          <form className="App__form" onSubmit={ this.handleClick }>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Write a message..."
              value={ this.state.message }
              onChange={ this.handleChange }
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
    );
  }
}
