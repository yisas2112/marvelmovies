import { useEffect } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import {useMovies} from './components/hooks/UseMovies'
import { useSearch } from './components/hooks/UseSearch'
import axios from 'axios'

function App() {  
  const {search, error, setSearch} = useSearch()
  const {movies, getMovies} = useMovies(search)  
  

   const handleChange = (event) =>{        
    setSearch(event.target.value)   
  }  

  const handleSubmit = (event)=>{
    event.preventDefault()
    getMovies()



  }

  return  <div id='page'>
          <header>
            <h1>Buscador de Peliculas</h1>
            <form className='form' onSubmit={handleSubmit}>
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
