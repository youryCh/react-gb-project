import React from 'react';
import './App.css';

export class AppClass extends React.Component {
  state = {
    messageList: [],
    message: '',
    botText: ''
  }

  componentDidMount() {
    this.setState({
      messageList: [
        {
          text: 'some text',
          author: 'user1'
        },
        {
          text: 'some text',
          author: 'user2'
        },
        {
          text: 'some text',
          author: 'user3'
        }
      ]
    })
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({
        botText: 'Hi, new user!'
      })
    }, 1500)
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  handleClick = () => {
    this.setState(state => {
      return {
        messageList: [
          ...state.messageList,
          {
            text: this.state.message,
            author: 'new user'
          }
        ]
      }
    })
  }

  render() {
    return (
      <div className="App">
      <div className="message-block">
        { this.state.messageList.map((message, index) => {
          return (
          <div key={ index }>
            <p>{ message.text }</p>
            <i>{ message.author }</i>
          </div>
          )
        }) }
      </div>
      <span>{ this.state.botText }</span>
      <textarea className="App-input" value={ this.state.message } onChange={ this.handleChange }></textarea>
      <button className="App-btn" onClick={ this.handleClick }>Add message</button>
    </div>
    );
  }
}
