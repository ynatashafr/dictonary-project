import "./App.css";
import Dictonary from "./Dictonary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"> </header>
        <h1 className="Title">Dictionary</h1>
        <main>
          <Dictonary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://github.com/ynatashafr/dictonary-project"
              target="_blank"
              rel="noreferrer"
            >
              Yosmeli Figueroa
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
