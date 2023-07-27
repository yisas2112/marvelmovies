
const moviesAdapters = ({movies}) => {

  movies?.map((movie)=>{
    return {
      id : movie.imdbID,
      title: movie.Title,
      year : movie.Year,
      poster: movie.Poster    
    }
  })
}

export default moviesAdapters
