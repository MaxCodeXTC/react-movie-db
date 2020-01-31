import React, { useState, useEffect } from "react"

import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config"

import HeroImage from "./HeroImage"
import Grid from "./Grid"
import SearchBar from "./SearchBar"
import LoadButton from "./LoadButton"
import FilmThumbnail from "./FilmThumbnail"
import Spinner from "./Spinner"

//hooks
import { useHomeFetch } from "./hooks/useHomeFetch"

const Home = () => {
  const [{ state, loading, error }, handleGetFilms] = useHomeFetch()
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