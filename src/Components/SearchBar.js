import React, { Component } from 'react';
class SearchBar extends Component {
    state = { term:'' }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term)
    }

    handleInputChange = (e) => { 
        this.setState({term: e.target.value})
    }

    render() { 
        return ( 
            <div className="ui segment">
                <form onSubmit={this.handleSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"
                            value={this.state.term}
                            onChange={this.handleInputChange}
                            placeholder="What do you want to search about ?"
                        />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default SearchBar;