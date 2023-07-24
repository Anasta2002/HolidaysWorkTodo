import React from 'react'
import s from './index.module.css'

export default function TopButtons({setQuery}) {
 
 const cities = [
    {
        id: 1,
        title: 'London'
    },
    {
        id: 2,
        title: 'Sydney'
    },
    {
        id: 3,
        title: 'Tokyo'
    },
    {
        id: 4,
        title: 'Toronto'
    },
    {
        id: 5,
        title: 'Paris'
    },
 ]
    
    return (
    <div className={s.cities_container}>
        {cities.map((city) => (
            <button key={city.id} 
            onClick={() => setQuery({q: city.title})}>{city.title}</button>
        ))}
    </div>
  )
}
