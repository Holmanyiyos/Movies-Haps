import React from "react";
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Homepage from "../pages/Homepage";
import Details from "../pages/Details";
import 'bootstrap';
import MovieList from "./MovieList";



function App(){
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/movies' component={MovieList}/>
      <Route exact path='/movies/:imdbID' component={Details}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
