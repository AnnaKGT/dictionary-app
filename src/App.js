import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h2>Dictionary</h2>
        </header>
        <main>
          <Dictionary defaultWord="word" />
        </main>
        <footer className="App-footer">
          The app was coded by{" "}
          <a
            href="https://deluxe-starship-7c78b0.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anna Kohut
          </a>{" "}
          on the workshop from{" "}
          <a
            href="https://www.shecodes.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SheCodes
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/AnnaKGT/dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
