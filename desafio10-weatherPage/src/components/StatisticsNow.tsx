import { CloudRain, Drop, Wind } from "@phosphor-icons/react"

interface StatisticsProps {
    windSpeed: number;
    humidity:number;
    rain: number;

}

export function StatisticsNow({windSpeed, humidity, rain}: StatisticsProps){
    return(
        <div className="flex gap-2 w-full justify-between">
            <div className="w-full flex items-center gap-3 p-3 bg-min-cards rounded-md">
                <Wind size={32} color="white" />
                <div className="text-left">
                    <p className="text-xs text-white-gray">Vento</p>
                    <strong className="text-lg mr-1 flex gap-1 items-center text-white">
                        {windSpeed}
                        <span className="text-sm text-white-50">km/h</span>
                    </strong>
                </div>
            </div>
            <div className="w-full flex items-center gap-3 p-3 bg-min-cards rounded-md">
                <Drop size={32} color="white" />
                <div className="text-left">
                    <p className="text-xs text-white-gray">Umidade</p>
                    <strong className="text-lg mr-1 flex items-center gap-1 text-white">
                        {humidity}
                        <span className="text-sm text-white-50">{"%"}</span>
                    </strong>
                </div>
            </div>
            <div className="w-full flex items-center gap-3 p-3 bg-min-cards rounded-md">
                <CloudRain size={32} color="white" />
                <div className="text-left">
                    <p className="text-xs text-white-gray">Chuva</p>
                    <strong className="text-lg mr-1 flex items-center gap-1 text-white">
                        {rain.toFixed(1)}
                        <span className="text-sm text-white-50">{"mm"}</span>
                    </strong>
                </div>
            </div>

        </div>
    );
}