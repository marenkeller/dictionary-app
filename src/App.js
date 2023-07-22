import logo from "./babycats.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="btn btn-primary"
          href="#https://getbootstrap.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bootstrap
        </a>
      </header>
    </div>
  );
}

export default App;
