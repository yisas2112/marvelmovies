
export const moviesAdapters = (movies) => {
  let result = movies?.map((movie)=>{
    return {
      id : movie.id,
      name: movie.name,
      description : movie.description,
      thumbnail:  { 
                    path: movie.thumbnail.path,
                    extension : movie.thumbnail.extension,
                  }
          
    }
  })

  return result
}

