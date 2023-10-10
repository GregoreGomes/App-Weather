"use client"
import { ReactNode } from 'react';
import './styles.css'

interface CardProps {
    children: ReactNode;
}

export default function CardInformation({children} :CardProps){
    return (
        <div className='containerCard'>
            {children}
        </div>
    )
}