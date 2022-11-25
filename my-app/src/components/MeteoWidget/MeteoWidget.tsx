/* import axios from 'axios'; */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { actionAuthentSuccess } from '../../actions/user';
import store from '../../store/store';
import './styles.scss';

interface meteoWidgetProps {
  city: string,
  zipcode: string,
  temperature: any,
  icon: any,
  desc: any,
};

function MeteoWidget({ city, zipcode, temperature, icon, desc }: meteoWidgetProps) {

  return (
    <div className="meteo">
      <div>
        <div className="meteo-city">{city}</div>
        <div className="meteo-code">{zipcode}</div>
        <div className="meteo-temperature">
        <p>{temperature}°C</p>
        </div>
      </div>
      <div className="temps">
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={desc} />
       <p>{desc}</p>  
      </div>
     

    </div>
  )
}

export default MeteoWidget;