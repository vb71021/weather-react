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
                <p>
                  Today 25 Sep 2022 <br />
                  <div className="city">
                    <Current />
                  </div>
                  <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
                </p>
              </div>

              <div className="col-sm-6">
                <label>
                  <strong>Change location</strong>{" "}
                </label>
                <Search />
                <div className="my_location_button">
                  <button>👉To my location</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="github_link">
          <a href="https://github.com/vb71021/weather-react.git" id="source">
            Open-source code
          </a>
          <br />
          by Viktoria Balycheva
        </p>
      </div>
    </div>
  );
}

export default App;
