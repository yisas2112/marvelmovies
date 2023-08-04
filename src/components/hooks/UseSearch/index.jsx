import { useEffect, useRef, useState } from 'react'

export const useSearch = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState()
  const isfirst = useRef(true)

  useEffect(()=>{
    if(isfirst.current){
      isfirst.current = search === ''
      return
    }
    if(search === ''){
      setError('No se puede buscar pelicula vacía') 
      return
    } 

    if(search.match(/^\d+$/)){
      setError('No se pueden realizar búsquedas de números')
      return
    }

    if(search.length < 2){
      setError('La búsqueda debe tener al menos 3 carácteres');
      return
    }

    setError(null)
  },[search])


  return {search, setError, error, setSearch}
}

