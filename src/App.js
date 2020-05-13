import React, { useState } from 'react';
const api = {
  key: '&APPID=183d4af22c5b654ede3953c40f485cdf',
  base: 'https://api.openweathermap.org/data/2.5/weather?q=',
  metric: '&units=metric'
}


function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const url = `${api.base}${query}${api.key}${api.metric}`;

  const search = event => {
    if(event.key === 'Enter') {
      fetch(url)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          console.log(result);
        });
    }
  };
  
  
  return (


    <div className="app">
      <h1>Local weather</h1>
      <input
      type='text'
      onChange={event => setQuery(event.target.value)}
      value={query}
      onKeyPress={search}
      />
      <div>

      </div>
      
      {(typeof weather.main != "undefined") ? (
      <div>
        <div>
          city
        {weather.name}
        </div>
        <div>
        country
        {weather.sys.country}
        </div>
        <div>
          temp min
        {Math.round(weather.main.temp_min)} °C
        </div>
        <div>
          temp
        {Math.round(weather.main.temp)} °C <br/>
        reelfeel
        {Math.round(weather.main.feels_like)} °C
        </div>
        <div>
          temp max
        {Math.round(weather.main.temp_max)} °C
        </div>
        <div>
          description
        {weather.weather[0].main}
        </div>
        <div>
          clouds
        {weather.clouds.all} %
        </div>

        <div>
          sunrise
        {weather.sys.sunrise} 
        </div>
        <div>
          sunset
        {weather.sys.sunset} 
        </div>


      </div>
      ) : ('')}
    </div>
  );
}

export default App;
