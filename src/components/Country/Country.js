import React from 'react'
import "./Country.css"
import { Link } from 'react-router-dom'

export default function Country({country}) {
    const {name, coatOfArms, continents, capital, region, subregion} = country
  return (
    <Link to={`/country/${country.name.official}`}>
        <div className='country'>
            <div className='header'>
                <img src={coatOfArms?.png} className="img" loading='eager' alt='country coat of arms' />
                <div>
                   <h3 className='name'>{name.official} </h3>
                   <h3 className='continent' >{continents}</h3>
                </div>
            </div>


            <div>
                <h4>Capital: {capital} </h4>
                <h4>Region: {region} </h4>
                <h4>SubRegion: {subregion} </h4>
            </div>
        </div>
    </Link>
  )
}
