import React, { useState } from 'react';
import Clock from './components/Clock/Clock';
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
          setQuery('');
        });
    }
  };
  
  
  return (


    <div className="app">
      <header>
        <div>Środa, 13 maja 2020</div>
        <input
        type='text'
        onChange={event => setQuery(event.target.value)}
        value={query}
        onKeyPress={search}
        placeholder="Wpisz miasto..."
        />
        <div>
          <Clock />
        </div>
      </header>
      <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim sodales ut eu sem. Aliquet risus feugiat in ante metus dictum. Sem nulla pharetra diam sit. At augue eget arcu dictum varius. Libero id faucibus nisl tincidunt eget nullam non. Sit amet risus nullam eget felis eget nunc lobortis. Rhoncus urna neque viverra justo nec ultrices dui. Mauris a diam maecenas sed enim. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Condimentum lacinia quis vel eros donec ac odio.

Commodo viverra maecenas accumsan lacus vel facilisis. Pellentesque elit eget gravida cum sociis natoque. Sit amet volutpat consequat mauris nunc congue nisi vitae. Ullamcorper eget nulla facilisi etiam. Quis imperdiet massa tincidunt nunc pulvinar. Sed augue lacus viverra vitae congue. Magna sit amet purus gravida quis blandit. Non arcu risus quis varius. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Tincidunt augue interdum velit euismod in pellentesque massa. Purus gravida quis blandit turpis cursus in hac habitasse. Sem viverra aliquet eget sit amet. Donec et odio pellentesque diam volutpat commodo sed. Arcu non sodales neque sodales. Aliquam ultrices sagittis orci a scelerisque. Scelerisque in dictum non consectetur a erat nam at. Elementum pulvinar etiam non quam lacus suspendisse. Viverra orci sagittis eu volutpat. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Ut diam quam nulla porttitor massa id neque.

      </div>
      
      
      {/* {(typeof weather.main != "undefined") ? (
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
      ) : ('')} */}
    </div>
  );
}

export default App;
