import axios from "axios"
import { moviesAdapters } from "../adapters/moviesAdapters"

const API_KEY = 'fc172ce5fcc79d79fafd9f2415175c9c'
const HASH = '886d4a53771cea3fe9cfe46f272ad258'

const searchMovies = async(search)=>{
  if(search == '')  return null

  try {
    const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=${API_KEY}&hash=${HASH}`)
    let movies = response.data?.data?.results
    return  moviesAdapters(movies)

  } catch (error) {
    throw new Error('Error al recuperar el personaje')
  }
  
}

export default searchMovies