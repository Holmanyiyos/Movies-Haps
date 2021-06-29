import React from 'react';
import Navbar from "../components/Navbar";
import './styles/Homepage.css'

class Homepage extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <div className="row">
                    <div className="col-9">
                        <h2 className="text-center mt-5">Premieres</h2>
                        <div className="carousel__container">
                        </div>
                    </div>
                    <div className="col-3">
                    <h2 className="text-center mt-5">News</h2>
                    <div className="news__container">
                    </div>
                    </div>
                </div>
                <div className="row">
                    <h2 className="text-center mt-5">cinema listings</h2>
                        <div className="carousel__container">
                        </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Homepage;