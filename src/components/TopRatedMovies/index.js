import {Component} from 'react'
import './index.css'
import Navbar from '../Navbar'
import MovieCard from '../MovieCard'

class TopRatedMovies extends Component{
state={
    moviesData:[],
}

componentDidMount(){
    this.getMoviesDetails()
}

getMoviesDetails=async()=>{
    const options={
        method:'GET',
    }
    const response=await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=28cd1a02f267ddfad6c7720a93b85e07&language=en-US&page=1',options)
    
    if(response.ok===true){
        const data=await response.json()
        const camelCaseData=data.results.map(eachItem=>({
            id:eachItem.id,
            posterPath:eachItem.poster_path,
            title:eachItem.title,
            voteAverage:eachItem.vote_average,
        }))
        this.setState({moviesData:camelCaseData})
    }
}

    render(){
        const {moviesData}=this.state
        return(
            <div className='Home-Cont'>
                <Navbar/>
                <ul className='movies-list'>
                    {moviesData.map(eachItem=>(
                        <MovieCard key={eachItem.id} itemDetails={eachItem}/>
                    ))}
                </ul>
            </div>
        )
    }
}
export default TopRatedMovies