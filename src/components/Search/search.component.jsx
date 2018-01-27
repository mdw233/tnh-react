import React from 'react';

const submitStyle = {
    'display': 'none'
}

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {searchText: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({searchText: event.target.value});
        console.log('search text changed',this.state.searchText);
    }

    handleSubmit(event) {
        console.log('search was submitted', this.state.searchText);
        event.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    placeholder="Search for nearby tweets ..."
                    className="input" 
                    type="text" 
                    value={this.state.searchText} 
                    onChange={this.handleChange} />
                <input type="submit" value="Submit" style={submitStyle}/>
            </form>
        )
    }
}

export default SearchForm