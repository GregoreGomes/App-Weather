"use client"

import React from 'react';
import './styles.css'
import Image from 'next/image'

import { useEffect, useState } from 'react'
import api from '../../hooks/useFetch/api'

import {HeaderProps, DataProps} from "./interfaces/interfaces"
import CardInformation from '../CardInformation';
import { HeaderContent } from '../HeaderContent';
import { BodyContent } from '../BodyContent';


export default function Content({cityName}:HeaderProps){
    
    const [data, setData] = useState< DataProps | null >(null);
    
    const token = '71cd9f87f4cce74a862426609421ed1e';
    
    useEffect(() => {
        async function loadData() {
            try {
                const { data } = await api.get(`?q=${cityName}&appid=${token}&units=metric&lang=pt_br`);
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
                <HeaderContent city={data.city} list={data.list}/>
            </CardInformation>

            <CardInformation>
                <BodyContent city={data.city} list={data.list}/>
            </CardInformation>
            </>
        ) : (
            <CardInformation>
                <h1>Procure por uma cidade</h1>
            </CardInformation>
        )
    )}