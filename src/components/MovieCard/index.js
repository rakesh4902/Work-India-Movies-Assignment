import {Link} from 'react-router-dom'
import './index.css'

const MovieCard=(props)=>{
    const {itemDetails}=props
    const {posterPath,title,voteAverage,id}=itemDetails
    return(
        <Link to={`/movie_details/${id}`} className="link-item">
        <div className='movie_card'>
            <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={posterPath} className='Movie_img'/>
            <p className='title'>{title}</p>
            <p className='voteAverage'>vote_average: {voteAverage}</p>
        </div>
        </Link>
    )
}
export default MovieCard