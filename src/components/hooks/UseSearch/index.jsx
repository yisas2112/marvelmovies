import { useEffect, useRef, useState } from 'react'

export const useSearch = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState()
  const isfirstRenderInput = useRef(true)

  useEffect(()=>{
    //Esta referencia es para que no empiece a validar apenas se carga la aplicación sino cuando el usuario interactua con él
    if(isfirstRenderInput.current){
      isfirstRenderInput.current = search === ''
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

