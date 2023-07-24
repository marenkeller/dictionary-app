import logo from "./babycats.jpeg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <p>World of Words: Your Online Dictionary</p>
          <a
            className="btn btn-primary"
            href="#https://getbootstrap.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bootstrap
          </a>
        </header>

        <main>
          <Dictionary />
        </main>
        <footer className="App-footer text-center"> Coded by Maren</footer>
      </div>
    </div>
  );
}

export default App;
