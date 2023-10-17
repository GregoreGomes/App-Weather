import Image from 'next/image'

import { DataProps } from "../Content/interfaces/interfaces";

export function BodyContent({city, list}: DataProps){
    return(
    <div className='max-width'>
    <h2 className="city-name">{city.name}</h2>
        <div>
            <div className='main-temp'>
                {list.map(item => (
                    <div key={item.dt}>
                        <Image width={100} height={100} src={`https://openweathermap.org/img/wn/${item.weather.map(e => (e.icon))}@2x.png`} alt={list[0].weather[0].description}/>
                        <p>{item.dt_txt}</p>
                        <p>{item.main.temp}</p>
                        <p>{item.weather.map(e => (e.description))}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}