"use client"

import React, { useState, FormEvent, ChangeEvent } from 'react';
import './styles.css'

import Content from '../Content/index';

export default function Search(){

    const [inputCity, setInputCity] = useState('')

    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const city = formData.get('cidade') as string;
        setInputCity(city);
    }

    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <input className='input' type="text" name="cidade" id="" />
                <button className='button' type="submit">Buscar</button>
            </form>
            <Content cityName={inputCity}/>
        </>

    )
}