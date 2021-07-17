import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [messageList, setMessageList] = useState([])
  const [message, setMessage] = useState('')
  const [botText, setBotText] = useState('')

  useEffect(() => {
    setMessageList([
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
    ])
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setBotText('Hi, new user!')
    }, 1500)
  }, [messageList])

  const handleChange = event => {
    setMessage(event.target.value)
  }

  const handleClick = () => {
    setMessageList(() => {
      return [
        ...messageList,
        {
          text: message,
          author: 'new user'
        }
      ]
    })
  }

  return (
    <div className="App">
      <div className="message-block">
        { messageList.map((message, index) => {
          return (
          <div key={ index }>
            <p>{ message.text }</p>
            <i>{ message.author }</i>
          </div>
          )
        }) }
      </div>
      <span>{ botText }</span>
      <textarea className="App-input" value={ message } onChange={ handleChange }></textarea>
      <button className="App-btn" onClick={ handleClick }>Add message</button>
    </div>
  )
}

export default App;
