
import { useState } from 'react';
import './App.css';
import { Dropdown } from './components/Dropdown.js';

function App() {

  let [title, setTitle] = useState('Click me')
  let [show, setShow] = useState(false)

  // function to run when
  function handleShow(e) {
    setShow(e.detail)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React and Web Components</h1>
        <h2>(Best friends forever)</h2>
        <p>The dropdown is {show ? 'open' : 'closed'}</p>
        <Dropdown
          title={title}
          onShow={ (e) => handleShow(e) }
        >
          🤠 Howdy. This is passed down to the web component from React
        </Dropdown>
      </header>
    </div>
  );
}

export default App;
