
import '../App.css';
import snowImage from '../images/snow.png';
import rainImage from '../images/rain.png'
import clearImage from '../images/clear.png';
import mistImage from '../images/mist.png';
import cloudImage from '../images/cloud.png';
import React, { useEffect, useState } from 'react';

function Location() {
  const [weatherImage, setWeatherImage] = useState('');

  useEffect(() =>
{
  const apiKey = '295df9c37534f9a9b2cedfc9e0e9bbca';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=DEINE_STADT&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => 
    {
      const description = data.wheather[0].description.toLowerCase();
      switch (true)
      {
        case description.includes('snow'):
          setWeatherImage(snowImage);
          break;
        case description.includes('rain'):
          setWeatherImage(rainImage);
          break;
        case description.includes('mist'):
          setWeatherImage(mistImage);
          break;
        case desw cription.includes('clear'):
          setWeatherImage(clearImage);
          break;
        case description.includes('cloud'):
          setWeatherImage(cloudImage);
          break;
      }
    })
    .catch(error => console.log(error));

}, []);
  return (
    <div>
      <div className='bg-white p-4 rounded-lg shadow-lg'>
        <div id='image'>
          {/* snow */}
          {/* cloud */}
          {/* mist */}
          {/* rain */}
          {/* clear */}
        </div>
        <div id='temperature'>
          {/* temperature */}
          {/* description like snow ect */}
        </div>
        <div id='windSpeed'>
          <box-icon name='wind'></box-icon>
          <p>Wind Speed</p>
        </div>
        <div id='humidity'>
          <box-icon name='droplet'></box-icon>
          <p>Humidity</p>
        </div>
      </div>
    </div>
  );
}

export default Location;
