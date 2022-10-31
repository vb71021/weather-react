import Search from "./Search";
import Current from "./Current";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6">
                <Current />
              </div>

              <div className="col-sm-6">
                <Search />
                <div className="my_location_button">
                  <button>👉To my location</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="github_link">
          <a href="https://github.com/vb71021/weather-react.git" id="source">
            Open-source code
          </a>{" "}
          by Viktoria Balycheva
        </footer>
      </div>
    </div>
  );
}

export default App;
