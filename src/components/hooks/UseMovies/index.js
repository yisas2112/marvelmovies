import { useCallback, useMemo, useRef, useState } from 'react'
import searchMovies from '../../../services'

export const useMovies = (sort) => {
  const [responseMovies, setResponseMovies] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState()
  const previousSearch = useRef()

  const getMovies = useCallback(async ({search}) =>{
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
    
  },[])

  
  const sortedMovies = useMemo(()=>{
    return sort ? [...responseMovies].sort(function(a, b) {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    }) :  responseMovies
  },[sort, responseMovies])
  
  


  return {movies : sortedMovies, getMovies, error, loading}
}



