
import { useState } from 'react';
import './App.css';
import { Dropdown } from './components/Dropdown.js';

function App() {

  let [title, setTitle] = useState('Click me')
  let [show, setShow] = useState(false)

  let [inputFlavor, setInputFlavor] = useState('')
  let [flavor, setFlavor] = useState('Chocolate')

  // function to run when
  function handleShow(e) {
    setShow(e.detail)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setFlavor(inputFlavor)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React and Web Components</h1>
        <h2>(Best friends forever)</h2>
        <label for="flavor-input">Flavor</label>
        <form>
          <input
            id="flavor-input"
            type="text"
            onChange={(event)=> setInputFlavor(event.target.value)}
            ></input>
          <button
            type="submit"
            onClick={ (event) => handleSubmit(event)}
          >Submit</button>
        </form>

        <p>The dropdown is {show ? 'open' : 'closed'}</p>
        <Dropdown
          title={title}
          onShow={ (e) => handleShow(e) }
          flavor={flavor}
        >
          🤠 Howdy. This is passed down to the web component from React
        </Dropdown>
      </header>
    </div>
  );
}

export default App;
