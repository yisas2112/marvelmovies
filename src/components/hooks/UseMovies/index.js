import withResults from '../../../mocks/with-result.json'
import withoutMovies from '../../../mocks/with-result.json'
import {moviesAdapters} from '../../../adapters/moviesAdapters'
import { useState } from 'react'

export const useMovies = ({search}) => {
  const [responseMovies, setResponseMovies] = useState([])
  let movies = responseMovies.Search 

  const listMovies =  moviesAdapters(movies)

  const getMovies = () =>{
    if(search){
      fetch(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=fc172ce5fcc79d79fafd9f2415175c9c&hash=886d4a53771cea3fe9cfe46f272ad258`)
      .then(res=> res.json())
      .then(json =>{
        setResponseMovies(json)
      })
    }else{
      setResponseMovies(withoutMovies)
    }

  }

  return {movies : listMovies, getMovies}
}



