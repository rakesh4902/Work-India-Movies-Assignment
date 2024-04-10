import {Link} from 'react-router-dom'
import './index.css'

const Navbar=()=>(
    <>
            <nav className='navbar-container'>
            <Link className='link-item' to='/'>
                <h1 className='heading'>MoviesDb</h1>
            </Link>
            <div className='right-side-container'>
                <Link className='link' to='/'>
                <p className='heading'>Popular</p>
                </Link>
                <Link className='link' to='/top_rated_movies'>
                <p className='heading'>Top Rated</p>
                </Link>
                <Link className='link' to='/upcoming_movies'>
                <p className='heading'>Upcoming</p>
                </Link>
                <Link to='/search_results'>
                    <button type='button' className='searchBtn' ><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/search-movie-1888750-1600122.png?f=webp" className='serach-image' alt="search"/></button>
                </Link>
            </div>
        </nav>
        
        </>
        

)
export default Navbar