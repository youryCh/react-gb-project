import './style/app.sass'
import { useEffect, useState, useRef } from 'react'
import { authors } from './constants'
import Message from './components/Message'
import {TextField, Grid} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import ChatList from './components/ChatList';

function App() {
  const [messageList, setMessageList] = useState([])
  const [message, setMessage] = useState('')
  const firstRender = useRef(true)

  useEffect(() => {
    if (
      !firstRender.current &&
      messageList[messageList.length - 1]?.author !== authors.bot
    ) {
      setTimeout(() => {
        setMessageList(current => [
          ...current,
          {
            text: 'Hi!',
            author: authors.bot
          }
        ])
      }, 1500)
    }
    firstRender.current = false
  }, [messageList])

  const handleChange = event => {
    setMessage(event.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    setMessageList(current => [
        ...current,
        {
          text: message,
          author: authors.me
        }
    ])
    setMessage('')
  }

  return (
    <div className="App">
      <Grid item xs={12} className="message-block">
        <ChatList />
      </Grid>
      <Grid item xs={12}>
        <div className="message-block">
          { messageList.map((message, index) => 
            <Message
              author={ message.author }
              text={ message.text }
              key={ index }
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
