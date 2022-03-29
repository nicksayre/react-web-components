
import './App.css';
import Greeting from './Greeting.js';

function App() {
  console.log(Greeting)
  return (
    <div className="App">
      <header className="App-header">
        <h1>React x Web Components</h1>
        <greeting-component></greeting-component>
      </header>
    </div>
  );
}

export default App;
