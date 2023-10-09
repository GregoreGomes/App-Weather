"use client"

import React, { useState, FormEvent, ChangeEvent } from 'react';
import './styles.css'

import Header from '../header';

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
            <form onSubmit={handleSubmit}>
                <label htmlFor="cidade">Procure uma cidade</label>
                <input type="text" name="cidade" id="" />
                <button type="submit">Buscar</button>
            </form>
            <Header city={inputCity}/>
        </>

    )
}