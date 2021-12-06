import axios from "axios";
import { useState } from "react";

const AskWeather = () => {
  const [weather, setWeather] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const baseUrl = process.env.REACT_APP_API_URL;

  const checkWeather = () => {
    axios
      .get(baseUrl + "weather/" + weather)
      .then((data) => {
        console.log(data.data);
        setWeatherData(data.data.weather);
        console.log(weatherData);
      })
      .catch((e) => {
        setWeatherData(null);
        console.log("wrong city");
      });
  };

  return (
    <div
      style={{ height: "40vh" }}
      className="d-flex flex-column align-items-center justify-content-center"
    >
      <h3>You're not logged in.</h3>
      <h4>In order to make purchare. Try logging in.</h4>
      <h5 className="mt-4">Till then all we can offer you is Weather.</h5>
      <div>
        <input
          type="text"
          value={weather}
          onChange={(e) => setWeather(e.target.value)}
        />
      </div>
      <div className="mt-2">
        <button className="btn btn-warning" onClick={checkWeather}>
          Check weather
        </button>
      </div>
      {weatherData !== null && (
        <div className="mt-4">
          <button className="btn btn-success text-capitalize">
            <h3>{weatherData[0].description}</h3>
          </button>
        </div>
      )}
    </div>
  );
};

export default AskWeather;
