"use client";

import React, { useEffect } from "react";

const WeatherCard = ({
  temp,
  temp_min,
  temp_max,
  humidity,
  pressure,
  weathermood,
  name,
  speed,
  country,
  sunset,
}) => {
  const [theme, setTheme] = React.useState("bg-yellow-500");
  const [border, setBorder] = React.useState("border-yellow-500");
  const [weatherState, setWeatheState] = React.useState("");
  const [wallpaper, setWallpaper] = React.useState(
    "url(https://source.unsplash.com/random/2000x2000/?sunny)"
  );

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setTheme("bg-gray-800");
          setBorder("border-gray-800");
          setWeatheState("wi-day-cloudy");
          setWallpaper(
            "url(https://source.unsplash.com/random/2000x2000/?clouds)"
          );

          break;
        case "Haze":
          setWeatheState("wi-fog");
          setWallpaper(
            "url(https://source.unsplash.com/random/2000x2000/?fog)"
          );
          setTheme("bg-pink-400");
          setBorder("border-pink-400");
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          setWallpaper(
            "url(https://source.unsplash.com/random/2000x2000/?sunny)"
          );
          setTheme("bg-yellow-500");
          setBorder("border-yellow-500");
          break;

        case "Mist":
          setWeatheState("wi-dust");
          setWallpaper(
            "url(https://source.unsplash.com/random/2000x2000/?mist)"
          );
          setTheme("bg-sky-600");
          setBorder("border-sky-600");
          break;

        case "Rain":
          setWeatheState("wi-rain");
          setWallpaper(
            "url(https://source.unsplash.com/random/2000x2000/?rain)"
          );
          setTheme("bg-blue-700");
          setBorder("border-blue-700");
          break;

        default:
          setWeatheState("wi-day-sunny");
          setWeatheState(
            "url(https://source.unsplash.com/random/2000x2000/?happy)"
          );
          setTheme("bg-yellow-800");
          setBorder("border-yellow-800");
          break;
      }
    }
  }, [weathermood]);

  let background = {
    backgroundImage: wallpaper,
  };

  // converting the seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article
        className="widget h-screen flex flex-wrap justify-center items-center"
        style={background}
      >
        <div
          className={`max-w-sm overflow-hidden rounded-lg shadow-lg bg-gray-50 text-gray-800 border-2 border-solid ${border}`}
        >
          <div
            className={`flex flex-col items-center justify-between h-32 p-4 ${theme} bg-center bg-cover`}
          >
            <div className="text-5xl text-white">
              <i className={`wi ${weatherState}`}></i>
            </div>
            <p className="px-2 py-1 text-sm tracking-widest text-gray-100 uppercase bg-gray-800 bg-opacity-75 rounded shadow-lg">
              {weathermood}
            </p>
          </div>
          <div className="flex justify-between p-4">
            <div className="flex flex-col flex-1 gap-4">
              <div className="flex justify-center flex-col items-center gap-3">
                <div className="flex gap-2">
                  <span className="text-5xl font-semibold">{temp}&deg; C</span>
                </div>
                <div className="flex gap-2">
                  <div className="flex gap-2">
                    <span className="text-2xl font-semibold">
                      Min: {temp_min}&deg; C
                    </span>{" "}
                  </div>{" "}
                  <div className="flex justify-center items-center font-semibold text-xl"> | </div>
                  <div className="flex gap-2">
                    <span className="text-2xl font-semibold">
                      Max: {temp_max}&deg; C
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="text-sm flex justify-center gap-10">
                <div className="flex justify-center items-center">
                  <i className={"wi wi-strong-wind"}></i>
                  {speed} MPH winds.
                </div>

                <div className="flex flex-col pr-3">
                  <div className="date flex flex-col ml-2">
                    {" "}
                    {`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`}{" "}
                  </div>
                  <div className="date flex flex-col ml-2">
                    {" "}
                    {`${new Date().getHours()}:${new Date().getMinutes()}`}{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-sm leading-loose">
              <div className="flex items-center"></div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-8 p-2 border-t text-gray-600 border-gray-300">
            <div className="flex items-center space-x-1">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside md:mx-5 mx-2">
                {timeStr} PM <br />
                Sunset
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="">{`${humidity}% Humidity`}</p>
            </div>
            <div className="flex items-center space-x-1">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside md:mx-5 mx-2">
                {pressure} <br />
                Pressure
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
