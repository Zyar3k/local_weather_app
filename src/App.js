import React, { useState } from 'react';
const api = {
  key: '&APPID=183d4af22c5b654ede3953c40f485cdf',
  base: 'https://api.openweathermap.org/data/2.5/weather?q=',
  metric: '&units=metric'
}


function App() {
  let [query, setQuery] = useState('');

  const url = `${api.base}${query}${api.key}${api.metric}`;

  const search = event => {
    if(event.key === 'Enter') {
      fetch(url)
        .then(res => res.json())
        .then(result => {
          console.log(result)
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
    </div>
  );
}

export default App;
