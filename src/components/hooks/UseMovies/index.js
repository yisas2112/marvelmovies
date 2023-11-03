import withoutMovies from '../../../mocks/with-result.json'
import {moviesAdapters} from '../../../adapters/moviesAdapters'
import { useRef, useState } from 'react'
import axios from 'axios'
import searchMovies from '../../../services'

export const useMovies = (search) => {
  const [responseMovies, setResponseMovies] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState()
  const previousSearch = useRef()

  const getMovies =async () =>{
    if(search === previousSearch.current) return
    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const result = await searchMovies(search)
      setResponseMovies(result)
    } catch (error) {
       setError(e.message)
    }finally{
      setLoading(false)
    }
      
  }

  return {movies : responseMovies, getMovies, error, loading}
}



