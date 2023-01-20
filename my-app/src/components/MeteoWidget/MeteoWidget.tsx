import './styles.scss';

interface meteoWidgetProps {
  city: string,
  zipCode: number |string,
  temperature: number,
  icon: string,
  desc: string,
};

function MeteoWidget({ city, zipCode, temperature, icon, desc }: meteoWidgetProps) {


  return (
    <div className="meteo">
      <div>
        <div className="meteo-city">{city}</div>
        <div className="meteo-code">{zipCode}</div>
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