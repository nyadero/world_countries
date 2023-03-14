import React, { useState, useEffect } from 'react'
import "./CountryPage.css"
import {useParams} from "react-router-dom"
import * as api from "../../api"
import GoogleMapReact from "google-map-react"


export default function CountryPage() {
    const [country, setCountry] = useState({})
    const [isLoading, setIsLoading] = useState(false)
     const queryParameters = useParams()
    const nameparam = queryParameters.name;

    const fetchData = async (nameparam) => {
       setIsLoading(true)
       const {data} = await api.getCountryByName(nameparam)
       setCountry(data[0])
       console.log({data});
       setIsLoading(false)
    }

    useEffect(() => {
        fetchData(nameparam)
    }, [nameparam])


    const {name, flags, area, capital, currencies, altSpellings, continent, region, borders, languages, population, maps, subregion, unMember } = country


    return (
    <div className='countryPage'>
        {isLoading ? (
            <h1>Loading country info......</h1>
        ): (
            <div className="info_container">

                <div>
                    <div className='img_container'>
                        <img src={flags?.png} alt={flags?.alt} width="100%" height="300px" loading="eager" />
                    </div>
                    <h3>Official Name: {name?.official}</h3>
                    <h3>Capital City: {capital}</h3>
                                        <h3>Continent: {continent}</h3>
                    <h3>Region: {region}</h3>
                    <h3>Subregion: {subregion}</h3>
                    <h3>Area: {area} km</h3>
                    <h3>Population: {population}</h3>


                   <h3>Languages:</h3>
                   {languages && (
                    <>
                       {Object.values(languages).map((value, index) => {
                        return(
                          <span key={index}>{value}</span>
                        )
                    })}
                    </>
                    )}

                    <h3>Border Countries:</h3>
                    {borders && (
                    <>
                       {Object.values(borders).map((value, index) => {
                        return(
                          <span key={index}>{value}</span>
                        )
                    })}
                    </>
                    )}

                </div>


                <div>
                    {/* <GoogleMapReact location>

                    </GoogleMapReact> */}
                </div>
                   

                {/* found */}
            </div>
        )}
    </div>
  )
}
