import React from "react";
// import logo from './logo.svg';
import "./App.css";
import City from "./component/City";
import CityWheather from "./component/CityWheather";

function App() {
  const [cityName, setCityName] = React.useState("");
  const [cityWeather, setCityWeather] = React.useState([]);
  const fetchCityWeather = () => {
    console.log("I am from fetchCityWeather ");

    //   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4deb3d5b5a9ba1475a3e91881ff30ce9`)
    //   .then((res) =>  res.json() )
    //   .then((result)=> {
    //     console.log("Result is ",result);
    //     setCityWeather( {
    //         data : result
    //       }
    //       );
    //   }

    //   ) ;

    // };

    if (window.location.protocol === "http:") {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4deb3d5b5a9ba1475a3e91881ff30ce9`
      )
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          // console.log("Result is ",result);
          setCityWeather({
            data: result
          });
        });
    } else {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4deb3d5b5a9ba1475a3e91881ff30ce9`
      )
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          // console.log("Result is ",result);
          setCityWeather({
            data: result
          });
        });
    }
  };

  return (
    <div className="main-container">
      <City
        cityName={cityName}
        setCityName={setCityName}
        fetchCityWeather={fetchCityWeather}
      />

      {cityWeather.data !== undefined ? (
        <div>
          <CityWheather weather={cityWeather.data} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
