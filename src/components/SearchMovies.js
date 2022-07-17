import React, {useState} from "react";
import MovieCard from './MovieCard.js';

function SearchMovies(){
    
    //states- input query, movies
    const [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);
    //create a state for checking if the movies are loading and update the state apropriately
    const [ loading, setLoading ] = useState(false);
    
    const searchMovies = async (e) => {
        e.preventDefault();
        setLoading(true);        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
            setLoading(false);
        }catch(err){
            console.error(err);
        }
    }
    const MovieCardResults = movies.filter(movie => movie.poster_path).map(movie => (
        <MovieCard movie={movie} key={movie.id} /> ))
    const text = loading ===true ? "Loading...." : MovieCardResults
    
    
    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" 
                    type="text" 
                    name="query"
                    placeholder="Enter movie title to search e.g. 'Harry Potter'"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>
            
            <div className="card-list">
                <h1>{text}</h1>
            </div> 
        </>
    )
}

// export default SearchMovies