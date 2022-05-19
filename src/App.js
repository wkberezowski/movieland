import { useEffect } from 'react';

import './App.css';
import SearchIcon from './search.svg';

const API_URL = `https://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;

const movie1 = {
  Title: 'Italian Spiderman',
  Year: '2007',
  imdbID: 'tt2705436',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg',
};

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    // console.log(data.Search);
  };

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);
  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
          placeholder='Search for movies'
          value={'Superman'}
          onChange={() => {}}
          type='text'
        />
        <img src={SearchIcon} alt='Search' onClick={() => {}} />
      </div>

      <div className='container'>
        <div className='movie'>
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img
              src={
                movie1.Poster !== 'N/A'
                  ? movie1.Poster
                  : 'https://via.placeholder.com/400'
              }
              alt={movie1.Title}
            />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
