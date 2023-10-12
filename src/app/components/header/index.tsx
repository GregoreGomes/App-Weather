"use client"

import React from 'react';
import './styles.css'
import Image from 'next/image'

import { useEffect, useState } from 'react'
import api from '../../hooks/useFetch/api'

import {HeaderProps} from "./interfaces/interfaces"
import {DataProps} from "./interfaces/interfaces"
import CardInformation from '../CardInformation';

export default function Header({cityName}:HeaderProps){
    
    const [data, setData] = useState< DataProps | null >(null);
    
    const token = '71cd9f87f4cce74a862426609421ed1e';
    
    useEffect(() => {
        async function loadData() {
            try {
                const { data } = await api.get(`?q=${cityName}&appid=${token}&units=metric`);
                setData(data);
            } catch (error) {
                console.log("erro");
            }
        }
        loadData();
    }, [cityName]);

    console.log(data)
    
    return (
        data ? (
            <>
            <CardInformation>
                <div className='max-width'>
                    <h2 className="city-name">{data.city.name}</h2>
                    <div>
                        <div>
                            <Image width={100} height={100} src={`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`} alt={data.list[0].weather[0].description}/>
                            <h1 className='temp-atual'>{`${data.list[0].main.temp.toFixed(0)}°`}</h1>
                            <div className='max-min'>
                                <p>{`Máx.: ${data.list[0].main.temp_max.toFixed(0)}°`}</p>
                                <p>{`Min.: ${data.list[0].main.temp_min.toFixed(0)}°`}</p>
                            </div>
                            
                            {/* {data.list.map(item => (
                                <div key={item.dt}>
                                   <Image width={100} height={100} src={`https://openweathermap.org/img/wn/${item.weather.map(e => (e.icon))}@2x.png`} alt={data.list[0].weather[0].description}/>
                                    <p>{item.dt_txt}</p>
                                    <p>{item.main.temp}</p>
                                </div>
                            ))} */}

                        </div>
                    </div>
                </div>
            </CardInformation>
            </>
        ) : (
            <h1 className='teste'>Cidade não encontrada</h1>
        )
    )}