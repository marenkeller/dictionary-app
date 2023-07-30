import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h3 className="LogoName">World of Words: Your Online Dictionary</h3>
        </header>

        <main>
          <Dictionary />
        </main>
        <footer className="App-footer text-center">
          {" "}
          Coded by{" "}
          <a
            className="GithubLink"
            href="https://github.com/marenkeller/dictionary-app.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Maren
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
