import React from "react";
import MovieItem from "../components/MovieItem";
import Navbar from "../components/Navbar";



class Details extends React.Component{
    state={data:[],
        loading:false, 
        error: null}
    
    componentDidMount(){
        this.fetchData();   
    }
    fetchData = async ()=>{
        this.setState({loading:true, error: null});
        
        try{
            const API = 'http://www.omdbapi.com/?i=';
            let ID = window.location.pathname.slice(8,)
            const response = await  fetch(`${API}${ID}&apikey=eb0b75e1`);
            const resJson = await response.json();
            
            this.setState({loading:false, data: resJson});
    } catch(error){
        this.setState({loading:false, error: error});
    }

    }
    render(){
        if(this.state.loading){
            return 'Loading...'
        }
        if(this.state.error){
            return `Error`
        }
    return(
        <div>
            <Navbar/>
            <MovieItem data={this.state.data}/>
        </div>
    )}
}

export default Details;