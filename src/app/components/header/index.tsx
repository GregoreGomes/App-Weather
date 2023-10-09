"use client"

import React from 'react';
import './styles.css'

import { useEffect, useState } from 'react'
import api from '../../hooks/useFetch/api'

interface HeaderProps {
    city?: string
    name?: string
    main?: DadosClimaticos
}

interface DadosClimaticos {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
  }

export default function Header({city}:HeaderProps){
    
    const [data, setData] = useState< HeaderProps | null >(null);
    
    const token = '71cd9f87f4cce74a862426609421ed1e';
    
    useEffect(() => {
        async function loadData() {
            try {
                const { data } = await api.get(`?q=${city}&appid=${token}`);
                setData(data);
            } catch (error) {
                console.log("erro");
            }
        }
        loadData();
    }, [city]);

    console.log(data)
    
    return (
        data ? (
            <>
                <h1 className="header">{data.name}</h1>
                <h3 className="header">{data.main?.temp_max}</h3>
                <h3 className="header">{data.main?.temp_min}</h3>
            </>
        ) : (
            <h1 className='teste'>Cidade não encontrada</h1>
        )
    )}