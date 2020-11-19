import React, { Component } from 'react';
import unsplash from './Api/unsplash';
import './App.css';
import SearchBar from './Components/SearchBar';
import ImagesList from './Components/ImagesList';

class App extends Component {
  state = { images:[] }
  
  onSearchSubmit = async item =>{
    const res = await unsplash.get('/search/photos', {
      params:{query:item},
      headers:{
        Authorization: 'Client-ID 5Qn9Lo7AMYNz-AbFpnndblrl-qKpNHKT7lawUMZ3wIE'
      }
    })
    this.setState({images:res.data.results});
  }

  render() { 
    return ( 
      <div className="ui container" style={{marginTop: '35px'}}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImagesList images={this.state.images} />
      </div>
     );
  }
}
 
export default App;