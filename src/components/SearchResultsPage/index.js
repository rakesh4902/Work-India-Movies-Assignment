import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../Navbar';
import MovieCard from '../MovieCard';
import './index.css';

const SearchResultsPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fetchSearchResults = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=28cd1a02f267ddfad6c7720a93b85e07&language=en-US&query=${searchInput}&page=1`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      const data = await response.json();
      const { results } = data;
      const camelCaseData = results.map(eachMovie => ({
        id: eachMovie.id,
        title: eachMovie.title,
        posterPath: eachMovie.poster_path,
        voteAverage: eachMovie.vote_average,
      }));
      setSearchResults(camelCaseData);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  }, [searchInput]);

  useEffect(() => {
    if (searchInput.trim() !== '') {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchInput, fetchSearchResults]);

  return (
    <div className="search-movie-container">
      <Navbar />
      <div className="search-bar">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Want your movie then type it..."
          className='search-input'
        />
      </div>
      <div className="movies-list">
      {searchResults.length === 0 ? (
  <img src="https://img.freepik.com/premium-vector/no-data-found-illustration-sites-banner-design-vector-illustration_620585-1690.jpg" alt="no-searched-movie" className='no-movie-found'/>
) : (
  searchResults.map(eachMovie => (
    <MovieCard key={eachMovie.id} itemDetails={eachMovie} />
  ))
)}


      </div>
    </div>
  );
};

export default SearchResultsPage;