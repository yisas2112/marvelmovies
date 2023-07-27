import './App.css'
import responseMovies from './mocks/with-result.json'
import noResults from './mocks/no-result.json'
import { useEffect } from 'react'
import { Movies } from './components/Movies'

function App() {
  const movies = responseMovies.Search

  return  <div id='page'>
          <header>
            <h1>Buscador de Peliculas</h1>
            <form className='form'>
              <input placeholder='Avengers, Star Wars, The Matrix...' />
              <button type='submit'>Buscar</button>
            </form>
          </header>

          <main>
            <Movies movies={movies}/>
            
            
          </main>
        </div>
}

export default App
