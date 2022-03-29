import React, { useState }  from 'react';
import './App.css';
import Greeting from './Greeting.js';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React x Web Components</h1>
        <button onClick={() => setShow(!show)}>toggle alert</button>
        <greeting-component
          hidden={show}
          status={'success'}
          closable
          oncloseChange={
            () => {
              console.log('react close change')
              setShow(!show)
            }
          }
        ></greeting-component>
      </header>



    </div>
  );
}

export default App;
