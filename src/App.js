import "./App.css";
import Dictonary from "./Dictonary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictonary />
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
