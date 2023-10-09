"use client"
import { useEffect } from 'react'
import api from './hooks/useFetch/api'

export default function Home() {
  const token = '71cd9f87f4cce74a862426609421ed1e';

  useEffect(() =>{
    async function loadData() {
      const { data } = await api.get(`?q=London&appid=${token}`)

      console.log(data)
    }

    loadData()
  }, [])

  return (
    
    <h1>ola mundo</h1>
  )
}
