import { useEffect } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import {useMovies} from './components/hooks/UseMovies'
import { useSearch } from './components/hooks/UseSearch'

function App() {  
  const {search, error, setSearch} = useSearch()
  const {movies, getMovies} = useMovies({search})  
  

   const handleChange = (event) =>{
    setSearch(event.target.value)
    getMovies()

  } 

  useEffect(()=>{
    fetch(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1e1b33354fe84b57b4d1ff52d4dc205ffa06b695&hash=886d4a53771cea3fe9cfe46f272ad258`)
    .then(response => console.log(response))
    
  }, [])


  return  <div id='page'>
          <header>
            <h1>Buscador de Peliculas</h1>
            <form className='form'>
              <input onChange={handleChange} value={search} name='query'  placeholder='Avengers, Star Wars, The Matrix...' />
              <button type='submit'>Buscar</button>
            </form>
            {error && <p style={{color: 'red'}}>{error}</p>}
          </header>

          <main>
            <Movies movies={movies}/>
          </main>
        </div>
}

export default App
