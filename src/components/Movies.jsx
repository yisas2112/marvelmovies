import React from 'react'
import { moviesAdapters } from '../adapters/moviesAdapters'

export const ListOfMovies = ({movies}) => {
  const listMovies = moviesAdapters(movies)
  console.log(listMovies)
  return (<ul>
            {listMovies.map(movie=>(
              <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <img src={movie.poster} alt={movie.title}/>
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
    <ListOfMovies movies={movies}/>
    : <NoMovies/>
  }

  </>
}