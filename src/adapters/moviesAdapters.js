
export const moviesAdapters = (movies) => {
  
  let result = movies?.map((movie)=>{
    return {
      id : movie.imdbID,
      title: movie.Title,
      year : movie.Year,
      poster: movie.Poster    
    }
  })

  return result
}

