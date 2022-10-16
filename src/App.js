import Search from "./Search";
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
                  Today 25 Sep 2022 in city <br />
                  <div className="city">
                    Kyiv <strong>19</strong>°C|F{" "}
                  </div>
                  <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
                </p>
              </div>

              <div className="col-sm-6">
                <label>
                  <strong>Change location</strong>{" "}
                </label>
                <Search />
                <button>👉My current location</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
