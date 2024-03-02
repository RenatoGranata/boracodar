import { useEffect, useState } from "react";
import { TempNow } from "./components/TempNow";

//feels_like = qualidade do ar(eu acho)

interface WeatherProps {
  id?: number;
  nameCity: string;
  temperature: number;
  temperatureMax: number;
  temperatureMin: number;
  windSpeed: number;
  humidity: number;
  rain: number;
  weatherPlace?: (namePlace:string)=>void;
  icon: string;
  country: string;
  description: string;
}

export function App() {

  const [weather, setWeather] = useState<WeatherProps | null>(null)
  const [place, setPlace] = useState('Rio de Janeiro')

  const key = '230729b13d0d49ad259ba8635c84058d'
  

  async function loadData(){

    try {
      const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${key}&lang=pt_br`
  
      const response = await fetch(weatherApiUrl)
      const data = await response.json();

      const userData: WeatherProps ={
        nameCity: data.name,
        temperature: data.main.temp,
        temperatureMax: data.main.temp_max,
        temperatureMin: data.main.temp_min,
        windSpeed: data.wind.speed,
        humidity: data.main.humidity,
        rain: data.rain ? data.rain[`1h`] : 0,
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        country: data.sys.country,
        description: data.weather[0].description,
      }
      setWeather(userData)
  
      console.log(data);
    } 
    catch(e){
      console.log('erro')
    }




  }
  
  useEffect(()=>{
    loadData();
    
  }, [place])

  function weatherPlace(namePlace:string){
    setPlace(namePlace)
    // loadData()
  }

  return (
    <div className="w-screen h-screen flex bg-weathear-clean  justify-center items-center gap-8">
      
      {weather && <TempNow  {...weather} weatherPlace={weatherPlace}/>}
      
      
      

        {/* <div className="grid grid-cols-2 gap-6 ">
          <div className="w-[277px] h-[244px] p-3 flex flex-col items-center  bg-card-weatherClean rounded-[10px]">
            <Leaf />
            <strong>Qualidade do ar</strong>

            <div>
              <strong>Boa</strong>
              <p>21</p>
            </div>

            <div className="w-full grid grid-cols-6 text-center text-sm ">
              <div>
                <p>12.9</p>
                <p>PM2.5</p>

              </div>
              <div>
                <p>12.9</p>
                <p>PM10</p>

              </div>
              <div>
                <p>2.1</p>
                <p>SO2</p>

              </div>
              <div>
                <p>1.4</p>
                <p>NO2</p>

              </div>
              <div>
                <p>21.2</p>
                <p>O3</p>

              </div>
              <div>
                <p>0.7</p>
                <p>CO</p>

              </div>
            </div>
          </div>
          
          <div className="w-[277px] h-[244px] p-3 flex flex-col items-center  bg-card-weatherClean rounded-[10px]">

          </div>
          
          <div className="col-span-2 w-full h-[212px] p-3 flex flex-col items-center  bg-card-weatherClean rounded-[10px]">

          </div>
          
        </div> */}
    </div>
  )
}

