import React from 'react'
import moviesAdapters from '../adapters/moviesAdaprtes'

export const ListOfMovies = ({movies}) => {
  const listMovies = moviesAdapters(movies)

  return (<ul>
            {listMovies.map(movie=>(
              <li key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title}/>
              </li>

              ))
            }
          </ul>
          )
}

export const NoMovies = ()=>{
    return <>
            <p>No se encontraron resultados</p>
            </>
}


export const Movies = ({movies}) =>{
  
  const hasMovies = movies?.length > 0
  
  return <>
    {hasMovies ? 
    <ListOfMovies movies={movies}></ListOfMovies>
    : <NoMovies></NoMovies>
  }

  </>
}