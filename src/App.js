import './app.sass'
import { useEffect, useState } from 'react'
import { authors } from './constants'
import Message from './Message'

function App() {
  const [messageList, setMessageList] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    console.log(messageList);
    if (messageList[messageList.length - 1]?.author !== authors.bot) {
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
        <textarea
          className="App__input"
          value={ message }
          onChange={ handleChange }
          required
        ></textarea>
        <button className="App__btn">Add message</button>
      </form>
    </div>
  )
}

export default App;
