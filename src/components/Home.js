import React, { useState, useEffect } from "react"

import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config"

import HeroImage from "./HeroImage"
import Grid from "./Grid"
import SearchBar from "./SearchBar"
import LoadButton from "./LoadButton"
import FilmThumbnail from "./FilmThumbnail"
import Spinner from "./Spinner"

const Home = () => {
  const [ state, setState ] = useState({ films: [] })
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(false)
  console.log(state)

  const handleGetFilms = async (api) => {
    setError(false)
    setLoading(true)
    try {
      const result = await (await fetch(api)).json()
    } catch (error) {
      
    }
    setLoading(false)
  }

  return (
    <>
      <HeroImage/>
      <SearchBar/>
      <Grid/>
      <FilmThumbnail/>
      <Spinner/>
      <LoadButton/>
    </>
  )
}

export default Home