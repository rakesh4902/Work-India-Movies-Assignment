import {Component} from 'react'
import './index.css'
import Navbar from '../Navbar'
import MovieCard from '../MovieCard'

class Home extends Component{
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
        const response=await fetch('https://api.themoviedb.org/3/movie/popular?api_key=fa030b3d520335437ba6c4cbb262cfcb&language=en-US&page=1',options)
        
        if(response.ok===true){
            const data=await response.json()
            const camelCaseData=data.results.map(eachMovie=>({
                id:eachMovie.id,
                posterPath:eachMovie.poster_path,
                title:eachMovie.title,
                voteAverage:eachMovie.vote_average,
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
export default Home