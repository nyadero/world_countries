import axios from "axios"

const API = axios.create({baseURL: "https://restcountries.com/v3.1"})

// get all countries
export const getAllCountries = () => API.get("/all")

// get country by name
export const getCountryByName = (name) => API.get(`/name/${name}?fullText=true`)