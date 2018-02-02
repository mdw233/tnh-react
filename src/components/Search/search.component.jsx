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

        fetch("http://api.tweets-near-here.com/tweet/search?q=d&geocode=3")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('result', result);
                }
            )
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    placeholder="Search for nearby tweets ..."
                    type="text" 
                    className="form-control"
                    value={this.state.searchText} 
                    onChange={this.handleChange} />
                <input type="submit" value="Submit" style={submitStyle}/>
            </form>
        )
    }
}

export default SearchForm