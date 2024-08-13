import React from 'react'
import './Movies.css';

const Movies = ({ movies }) => {
    return (
        <div class="bg-danger">
        <div className="backimg row ml-5 mt-2  " id='movie'>
            {movies.map((movie) => (
                <div className="col col-md-6 col-lg-3 mt-3 mb-3" >
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={movie.image} className="card-img-top" alt="Card image" />
                        <div className="card-body">
                            <h5 className="card-title">{movie.modelName}</h5>
                            <h6>{movie.Director}</h6>

                            <p className="card-text">{movie.desciption}</p>

                            <a href={movie.link} className="btn btn-primary">Watch Now</a>

                        </div>
                    </div>
                </div>
            ))}


        </div>
        </div>
    )
}

export default Movies
