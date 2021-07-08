import './App.css';
import Message from './Message';

function App() {
  const text = 'Hello, World!';
  return (
    <div className="App">
      <header className="App-header">
        My first React application
        <Message text={ text } text2="Hello, World! from text2" />
      </header>
    </div>
  );
}

export default App;
