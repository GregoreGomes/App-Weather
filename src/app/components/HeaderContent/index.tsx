import Image from 'next/image'

import { DataProps } from "../Content/interfaces/interfaces";

export function HeaderContent({city, list}: DataProps){
    return(
    <div className='max-width header-content'>
        <div className='flex'>
            <div className='align-items'>
                <h2 className="city-name">{city.name}</h2>
                <div className='main-temp'>
                    <Image width={100} height={100} src={`https://openweathermap.org/img/wn/${list[0].weather[0].icon}@2x.png`} alt={list[0].weather[0].description}/>
                    <h1 className='temp-atual'>{`${list[0].main.temp.toFixed(0)}°`}</h1>
                    <div className='max-min'>
                        <p>{`Máx.: ${list[0].main.temp_max.toFixed(0)}°`}</p>
                        <p>{`Min.: ${list[0].main.temp_min.toFixed(0)}°`}</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='max-min days-details'>
                <p>{`Máx.: ${list[0].main.temp_max.toFixed(0)}°`}</p>
                <p>{`Min.: ${list[0].main.temp_min.toFixed(0)}°`}</p>
        </div>
    </div>
    )
}