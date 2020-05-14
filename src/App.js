import React, { useState } from 'react';
import Clock from './components/Clock/Clock';
import DatePL from './components/DatePL/DatePL';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from './images/openweather-logo.png';

const api = {
  key: '&APPID=183d4af22c5b654ede3953c40f485cdf',
  base: 'https://api.openweathermap.org/data/2.5/weather?q=',
  metric: '&units=metric'
};

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
          // console.log(result);
          setQuery('');
        });
    }
  };  
  
  return (
    <div className="app">
      <header>
        <div><DatePL /></div>
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
      {(typeof weather.main != "undefined") ? (
      <div className='content'>
        <div className='bg1 logo'> {/* 1 */}
          <a href='https://openweathermap.org/'>
          <img src={logo} alt='logo' />
          </a>
        </div>
        <div className='bg1 bgm'>{/* 2 */}
          <h5>Miasto</h5>
          <h2>{weather.name}</h2>
        </div>
        <div className='bg2 bgm'>{/* 3 */}
          <h5>Kraj</h5>
          <h2>{weather.sys.country}</h2>
        </div>
        <div className='bg1 bgm'>{/* 4 */}
          <h5>Temperatura minimalna</h5>
          <h2>{Math.round(weather.main.temp_min)} °C</h2>
        </div>
        <div className='bg1 bgm'>{/* 5 */}
          <h3>Temperatura</h3>
          <h1>{Math.round(weather.main.temp)} °C</h1>
        <br/>
          <h5>Temperatura odczuwalna</h5>
          <h2>{Math.round(weather.main.feels_like)} °C</h2>
        </div>
        <div className='bg2 bgm'>{/* 6 */}
          <h5>Temperatura maksymalna</h5>
          <h2>{Math.round(weather.main.temp_max)} °C</h2>
        </div>
        <div className='bg1 bgm'>{/* 7 */}
          <h5>Pogoda</h5>
          <h2>{weather.weather[0].main}</h2>
        </div>
        <div className='bg2 bgm'>{/* 8 */}
          <h5>Zachmurzenie</h5>
          <h2>{weather.clouds.all} %</h2>
        </div>
        <div className='bg1 bgm'>{/* 9 */}
          <h5>Wilgotność</h5>
          <h2>{weather.main.humidity} %</h2>
        </div>
        <div className='bg2 bgm'>{/* 10 */}
          <h5>Ciśnienie</h5>
          <h2>{weather.main.pressure} hPa</h2>
        </div>
        <div className='bg1 bgm'>{/* 11 */}
          <h5>Wschód słońca</h5>
          <h2>{new Date(weather.sys.sunrise*1000).toLocaleTimeString()}</h2>
        </div>
        <div className='bg2 bgm'>{/* 12 */}
          <h5>Zachód słońca</h5>
          <h2>{new Date(weather.sys.sunset*1000).toLocaleTimeString()}</h2>
        </div>
        <div className='bg1 sm bgm'>{/* 13 */}
          <p><FontAwesomeIcon icon={faFacebook} /></p>
        </div>
        <div className='bg2 sm bgm'>{/* 14 */}
          <p><FontAwesomeIcon icon={faInstagram} /></p>
        </div>
        <div className='bg2 sm bgm'>{/* 15 */}
          <p><FontAwesomeIcon icon={faTwitter} /></p>
        </div>
        <div className='bg2 sm bgm'>{/* 16 */}
          <p><FontAwesomeIcon icon={faLinkedinIn} /></p>
        </div>
      </div>
      ) : ('')}
    </div>
  );
}

export default App;
