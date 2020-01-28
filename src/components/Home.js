import React from "react"

import HeroImage from "./HeroImage"
import Grid from "./Grid"
import SearchBar from "./SearchBar"
import LoadButton from "./LoadButton"
import FilmThumbnail from "./FilmThumbnail"
import Spinner from "./Spinner"

const Home = () => (
  <>
    <HeroImage/>
    <SearchBar/>
    <Grid/>
    <FilmThumbnail/>
    <Spinner/>
    <LoadButton/>
  </>
)

export default Home