import React from 'react'

export const ListOfMovies = ({movies}) => {

  return (<ul className='movies'>
            {movies.map(movie=>(
              <li className='movie' key={movie.id}>
                <h3>{movie.name}</h3>
                <img src={`${movie.thumbnail.path}.${movie.thumbnail.extension}`} alt={movie.title}/>
                <p>{movie.description.length < 1 ? 'Sin Descripción' : movie.description}</p>
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