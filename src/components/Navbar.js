import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Movies.co</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/movies">Movies</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">News</a>
                  </li>
                </ul>
                <form class="d-flex"
                onSubmit={this.props.handleSubmit}
                >
                  <input 
                  className="form-control me-2" 
                  type="search" 
                  placeholder="Search" 
                  aria-label="Search" 
                  onChange={this.props.handleChange} 
                  />
                  <button 
                  className="btn btn-outline-success" 
                  type="submit"
                  >Search</button>
                </form>
              </div>
            </div>
          </nav>
        );
    }
}


export default Navbar;