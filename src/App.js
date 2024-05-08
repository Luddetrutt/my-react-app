import Button from "./Button.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="\bitcoinLogo.JPG" className="App-logo" alt="bitcoinLogo" />
        <p>
          We acceptl Bitcoin!
        </p>
        <Button />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to the homepage of Webbstyr!
        </a>
      </header>
    </div>
  );
}

export default App;
