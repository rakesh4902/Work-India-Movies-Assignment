import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import MovieDetails from './components/MovieDetails';
import TopRatedMovies from './components/TopRatedMovies';
import UpcomingMovies from './components/UpcomingMovies';
import SearchResultsPage from './components/SearchResultsPage';

const App=()=>(
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path="/movie_details/:id" element={<MovieDetails/>}/>
    <Route exact path='/top_rated_movies' element={<TopRatedMovies/>}/>
    <Route exact path='/upcoming_movies' element={<UpcomingMovies/>}/>
    <Route exact path='/search_results' element={<SearchResultsPage/>}/>
    </Routes>
  </BrowserRouter>
)

export default App;