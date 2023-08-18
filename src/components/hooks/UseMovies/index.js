import withoutMovies from '../../../mocks/with-result.json'
import {moviesAdapters} from '../../../adapters/moviesAdapters'
import { useState } from 'react'
import axios from 'axios'

export const useMovies = (search) => {
  const [responseMovies, setResponseMovies] = useState([])
  let movies = responseMovies.data?.data?.results
  const listMovies =  moviesAdapters(movies)

  const getMovies = () =>{
    if(search){      
      axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=fc172ce5fcc79d79fafd9f2415175c9c&hash=886d4a53771cea3fe9cfe46f272ad258`)
      .then(response => setResponseMovies(response))
      
    }else{
      setResponseMovies(withoutMovies)
    }

  }

  return {movies : listMovies, getMovies}
}



