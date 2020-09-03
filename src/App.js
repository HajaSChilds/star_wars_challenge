import React from 'react';

import './App.scss';
import star_wars_bg from './images/star_wars_bg.jpg';


function App() {
  return (
    <div className="App">
      <header className="App-header" styles={{  backgroundImage:`url(${star_wars_bg})` }}>
        <div className="title">
          <h1>STAR WARS</h1>
          <h2>Movie Release Timeline</h2>
        </div>
      </header>
    </div>
  );
}

export default App;
