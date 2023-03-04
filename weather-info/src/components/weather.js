import React  , { useEffect, useState } from 'react'
import classes from "./weather.module.css";
const Weather = () => {
    const [searchValue, setSearchValue] = useState("Delhi");
    const [details,setDetails] = useState({});
    const [weatherMood,setWeatherMood] = useState();
    useEffect(()=>{
        getWeatherInfo();
    },[])

    useEffect(() => {
      if(details.weather){
        switch (details.weather) {
          case 'Clear':
            setWeatherMood("wi-day-sunny")
            break;
          case 'Haze':
            setWeatherMood("wi-day-haze")
            break;
          case 'Clouds':
            setWeatherMood("wi-cloudy")
            break;
          case 'Rain':
            setWeatherMood("wi-rain")
            break;
        
          default:
            setWeatherMood('wi-refresh');
            break;
        }
      }
      
    }, [details.weather])
    

    const convertIntoTime = (seconds)=>{
      return new Date(seconds*1000);
    }

    const getWeatherInfo = async (e)=>{
        try {
            let coordinates = `https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&appid=972a80027998d939eaeb4b8fafb4bca4`
            const responseCoordinates = await fetch(coordinates);
            const dataCoordinates = await responseCoordinates.json(); 
            let latitude = Array.from(dataCoordinates)[0].lat;
            let longitude = Array.from(dataCoordinates)[0].lon;
           let  WeatherAPI=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=972a80027998d939eaeb4b8fafb4bca4`;

           const responseWeather = await fetch(WeatherAPI);
           const dataWeather = await responseWeather.json();
           console.log(dataWeather);
          //  setTemperature((dataWeather.main.temp-273).toPrecision(3));
          setDetails({
            country:dataWeather.sys.country,
            city:dataWeather.name,
            temperature:(dataWeather.main.temp-273.15).toPrecision(3),
            humidity:dataWeather.main.humidity,
            sunset:`${convertIntoTime(dataWeather.sys.sunset).getHours()} : ${convertIntoTime(dataWeather.sys.sunset).getMinutes()}`,
            pressure:dataWeather.main.pressure,
            weather:dataWeather.weather[0].main,
            wind:dataWeather.wind.speed,

          });
          
          // setWeatherMood(details.weather);
          console.log(weatherMood);
        //    setSearchValue(dataWeather.name);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
    <div className={classes.wrap}>
        <div className={classes.search}>
            <input
                type="search"
                className={classes.searchTerm}
                id='search'
                placeholder='search...'
                autoFocus
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
                />

                <button className={classes.searchButton} type='button'
                onClick={getWeatherInfo}
                >
                    search
                </button>
        </div>
    </div>
    <article className={classes.widget}>
        <div className={classes.weatherIcon}>
        <i className={`wi ${weatherMood}`}/>

        </div>

        <div className={classes.weatherInfo}>
        <div className={classes.temperature}>
            <span>{`${details.temperature}◦`}</span>
        </div>
        <div className={classes.description}>
        <div className={classes.weatherCondition}>{details.weather}</div>
        <div className={classes.place}>{`${details.city} ${details.country}`}</div>

        </div>

        </div>

        <div className={classes.date}>{new Date().toLocaleString()}</div>
        <div className={classes['extra-temp']}>
          <div className={classes['temp-info-minmax']}>
            <div className={classes["two-sided-section"]}>
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className={classes["extra-info-leftside"]}>
                {details.sunset} PM <br />
                Sunset
              </p>
            </div>

            <div className={classes["two-sided-section"]}>
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className={classes["extra-info-leftside"]}>
                {details.humidity} <br />
                Humidity
              </p>
            </div>
          </div>

          <div className={classes["weather-extra-info"]}>
            <div className={classes["two-sided-section"]}>
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className={classes["extra-info-leftside"]}>
                {details.pressure} <br />
                Pressure
              </p>
            </div>

            <div className={classes["two-sided-section"]}>
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className={classes["extra-info-leftside"]}>
                {details.wind} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
    </article>
    </>
  )
}

export default Weather
