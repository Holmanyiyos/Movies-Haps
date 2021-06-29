import React from 'react'; 
import { Link } from 'react-router-dom';
import './styles/MovieList.css'
import Navbar from './Navbar';
import Footer from './Footer';


const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=eb0b75e1';

class MovieList extends React.Component{
    state={
        data:[],
        item:"pirates"
    }

    handleChange = (e)=>{
        this.setState({item: e.target.value})
    }

    handleSubmit=e=>{
        e.preventDefault();
        this.fetchData();
    }
    async componentDidMount(){
        this.fetchData()
       
    }
      async  fetchData(){
        const response = await  fetch(`${API}&s=${this.state.item}`);
        const resJson = await response.json();
        await this.setState({data: resJson.Search})
    }

    render(){
    return(
        <>
        <Navbar handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <div className="mt-5 mb-3 text-center">
            <h2>The search results for "{this.state.item}" are:</h2>
        </div>
    <ul className="list-unstyled">
    {this.state.data.map((movie)=>{
        return(
            <div className="card text-reset text-decoration-none">
            
            <img src={movie.Poster} class="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-titles">{movie.Title}  {movie.Year}</h5>
            <div className="button__container">
                <Link to={`/movies/${movie.imdbID}`} key={movie.imdbID} className="btn btn-primary">Show More</Link>
                <div className="addButton">
                    <span> </span>
                    <span> </span>
                </div>
            </div>

            
            </div>
           
            </div>
    )})}
    </ul>
    <Footer/>
    </>)}
}

export default MovieList;