import React from 'react';
import Weather from './Weather';
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York" />
 <footer>This project was coded by Audrey Mabry and is open-sourced on 
 <a href='https://github.com/aamabry/aamabry-react-weather' target='blank'> Github</a> and is hosted on <a href='https://aamabry-react-weather.netlify.app/'>Netlify</a>
 </footer>
 </div>
    </div>
  );
}

