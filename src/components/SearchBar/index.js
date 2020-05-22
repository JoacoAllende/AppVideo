import React from 'react'

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            textSearch: ''
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange(e) {
        this.setState({textSearch: e.target.value})
    }

    onFormSubmit(e){
        const { textSearch } = this.state;
        e.preventDefault();
        this.props.onFormSubmit(textSearch)
    }

    render() {
        const { textSearch } = this.state;
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={textSearch} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar