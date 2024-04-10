import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { useParams } from 'react-router-dom';
import './index.css';

const MovieDetails = () => {
  const [movieDetailData, setMovieDetailData] = useState([]);
  const [castDetailsData, setCastDetailsData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getMoviesDetails = async () => {
      const options = {
        method: 'GET',
      };

      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=28cd1a02f267ddfad6c7720a93b85e07&language=en-US`, options);
        const data = await response.json();
        const camelCaseData = {
          id: data.id,
          title: data.title,
          overview: data.overview,
          posterPath: data.poster_path,
          releaseDate: data.release_date,
          genres: data.genres,
          runtime: data.runtime,
          voteAverage: data.vote_average,
          backdropPath: data.backdrop_path,
        };
        setMovieDetailData(camelCaseData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    const getCastDetails = async () => {
      const options = {
        method: 'GET',
      };
      try {
        const response = await fetch( `https://api.themoviedb.org/3/movie/${id}/credits?api_key=28cd1a02f267ddfad6c7720a93b85e07&language=en-US`, options);
        const data = await response.json();
        const camelCaseData = data.cast.map(eachDetails => ({
          id: eachDetails.id,
          profilePath: eachDetails.profile_path,
          name: eachDetails.name,
          character: eachDetails.character,
        }));
        setCastDetailsData(camelCaseData);
      } catch (error) {
        console.log('Error fetching cast details:', error);
      }
    };

    getMoviesDetails();
    getCastDetails();
  }, [id]); 

  const {posterPath,title,voteAverage,runtime,releaseDate,overview,backdropPath}=movieDetailData
  
  return (
    <div className="movie-details-container">
      <Navbar />
      <div className="details-container">
        <div className="movies-details-list-container">
          <div className="image-title-container">
            <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={posterPath} className="poster-img" />
            <div className="title-container">
              <h1 className="movie_title">{title}</h1>
              <p className="rating">Rating: {voteAverage}</p>
              <p className="duration">duration: {runtime} min</p>
              <p className="releaseDate">Release Date: {releaseDate}</p>
            </div>
          </div>
          <div className="overview-container">
            <h1 className="overview_heading">Overview</h1>
            <p className="overview">{overview}</p>
          </div>
        </div>
        <img src={`https://image.tmdb.org/t/p/w500${backdropPath}`} alt={backdropPath} className="backdrop_image" />
      </div>
      <h1 className="cast_heading">Cast</h1>
      <div className="cast-container">
        {castDetailsData.map(castMember => (
          <div key={castMember.id} className="cast-member">
            <img src={`https://image.tmdb.org/t/p/w500${castMember.profilePath}`} alt={castMember.name} className="profilePath" />
            <p className="name">{castMember.name}</p>
            <p className="character">{castMember.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;