import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn this Framework
        </a>
      </header>
      <div className="name-area">
        <h2>Enter your name below</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex:  Bob"
          data-testid="name-input"
        />
        <h3>You entered: {name}</h3>
      </div>
    </div>
  );
}

export default App;
