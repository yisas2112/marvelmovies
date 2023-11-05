import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./components/hooks/UseMovies";
import { useSearch } from "./components/hooks/UseSearch";
import debounce from "just-debounce-it";

function App() {
  const [sort, setSort] = useState(false)
  const { search, error, setSearch } = useSearch();
  const { movies, getMovies, loading} = useMovies(sort);
  const debounceGetMovies = useCallback(
    debounce(search=> {
    getMovies({search});
  },500)
  ,[])
  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(event.target.value);
    debounceGetMovies(newSearch)
  };

  const handleSort = ()=>{
    setSort(!sort)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({search});
  };

  useEffect(()=>{
    console.log('ads')
  },[getMovies])

  return (
    <div id="page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            name="query"
            placeholder="Avengers, Star Wars, The Matrix..."
          />
          <input type="checkbox" onChange={()=>handleSort()} checked={sort}></input>
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>
        
        {loading ? <p>Cargando...</p> : <Movies movies={movies} />}
      </main>
    </div>
  );
}

export default App;
