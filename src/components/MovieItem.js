import React from 'react';
import './styles/MovieItem.css';


function MovieItem (props){
        const movie = props.data
        console.log(movie)
        return(
            <div className="container">
                <div className="mycard">
                <h1 className="card-title">{movie.Title}</h1>
                <div className="card-img">
                <img src={movie.Poster} alt="poster" />
                </div>
                <div className="body-card">
                    <div className="section-card first">
                    <div>
                    <span>Type: {movie.Type}</span>
                    <span>Year: {movie.Year}</span>
                    </div>
                    {movie.Ratings?<span>Ranked: {movie.Ratings[0].Source} {movie.Ratings[0].Value}</span>
                    : <span>Ranked ...</span>}
                    </div>
                    <p>Description: {movie.Plot}</p>
                    <div className="section-card last">
                        <span>Language: {movie.Language}</span>
                        <span>Gener: {movie.Genre}</span>
                        <span>Duration: {movie.Runtime}</span>
                    </div>
                </div>
                </div>
            </div>
            )
}

export default MovieItem;
