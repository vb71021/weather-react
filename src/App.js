import Search from "./Search";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <Search defaultCity="Kyiv" />
        </div>
        <footer className="github_link">
          <a
            href="https://github.com/vb71021/weather-react.git"
            id="source"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by Viktoria Balycheva
        </footer>
      </div>
    </div>
  );
}

export default App;
