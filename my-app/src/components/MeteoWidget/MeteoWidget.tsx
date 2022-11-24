import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles.scss';

interface meteoWidgetProps {
  city: string,
  zipcode: string,
};

function MeteoWidget({ city, zipcode }: meteoWidgetProps) {

  const [temperature, setTemperature] = useState(0);
  const [icon, setIcon] = useState('');
  const [desc, setDesc] = useState('');




/*   useEffect(() => {
    const API_KEY = 'f6888798e89c7be738a22c0619eb2a14';
    const urlAPI = 'https://api.openweathermap.org/data/2.5/weather';

    axios.get(`${urlAPI}?zip=${zipcode},fr&appid=${API_KEY}&units=metric&lang=fr`)
      .then((response) => {
        console.log(response);
        setTemperature(Math.round(response.data.main.temp));
        setIcon(response.data.weather[0].icon);
        setDesc(response.data.weather[0].description)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [zipcode]); */

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