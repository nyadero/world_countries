import React, {useState, useEffect} from 'react'
import "./Home.css"
import * as api from "../../api"
import Country from '../../components/Country/Country';
import Loading from '../../components/LoadingState/Loading';

export default function Home() {
 const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData(){
    setIsLoading(true)
    const {data} = await api.getAllCountries()
    setCountries(data)
    console.log({data});
    setIsLoading(false)
  }

  useEffect(() =>   {
    fetchData()
  }, [])

  return (
    <div>
    {isLoading ? (
    <div className='loader'>
        <h3>Loading countries....</h3>
    </div>
   ): (
    <div>
     
     <h3>found {countries.length} countries</h3>

     <div className='countriesList'>
                   {countries.map((country, index) => (
        <Country key={index} country={country} />
     ))}
     </div>
     

    </div>
   )}
    </div>
  )
}
