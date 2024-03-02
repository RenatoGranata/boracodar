import { MagnifyingGlass, MapPin } from "@phosphor-icons/react";
import { StatisticsNow } from "./StatisticsNow";

// import cloud from '../assets/cloud.png'
import { useState } from "react";

interface WeatherPropschild {
    id?: number;
    nameCity: string;
    temperature: number;
    temperatureMax: number;
    temperatureMin: number;
    windSpeed: number;
    humidity: number;
    rain: number
    weatherPlace: (namePlace:string)=>void;
    icon: string;
    country: string;
    description: string;
}



export function TempNow({nameCity, temperature, temperatureMax, temperatureMin, windSpeed, humidity, rain, weatherPlace, icon, country, description}: WeatherPropschild){

    const [namePlace, setNamePlace] = useState('')
    
    function searchPlace(){
        weatherPlace(namePlace)
    }

    return(
        <div className="w-[480px] h-[480px] pt-5 px-2 pb-3 flex flex-col items-center  bg-card-weatherClean rounded-[10px]">
            <div className="w-full flex justify-center gap-2 mb-4">
                
                <img src={icon} className="w-10" alt="" />
                
                <input 
                    type="text" 
                    className="w-full text-white-gray bg-transparent pl-1 border-0 outline-none border-b-2" 
                    placeholder="Digite a cidade, estado ou país" 
                    onChange={(e)=>{setNamePlace(e.target.value)}}
                />

                <button className="bg-white-gray rounded-md py-2 px-3" onClick={searchPlace}>
                    <MagnifyingGlass size={16} />
                </button> 
            </div>
            <div className=" w-full flex items-center justify-around gap-1 text-white-blue">
                <h2>Status: {description}</h2>
                <div className="flex items-center">
                    <MapPin size={20} weight={"fill"} />
                    <p>{nameCity}, {country}</p>

                </div>
            </div>
            <div className="w-full h-full flex flex-col mt-8">
                <strong className="text-white text-xl w-full h-fit flex justify-center gap-1">
                    {temperature.toFixed(0)} 
                    <span className="text-2xl align-text-top h-fit relative top-[30px]">ºC</span>
                </strong>

                <div className="flex gap-3 justify-center items-center pr-8 text-white">
                    <p>{temperatureMax.toFixed(0) + "º"}</p>
                    <p className="text-min-temperature">{temperatureMin.toFixed(0) + "º"}</p>
                </div>

            </div>


            <div className="w-full flex items-end">
                <StatisticsNow windSpeed={windSpeed} humidity={humidity} rain={rain} />

            </div>
        </div>
    );
}