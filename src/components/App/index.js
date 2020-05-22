import React from 'react'
import youtube from '../../api/youtube'
import SearchBar from '../SearchBar'
import Videolist from '../VideoList'
import VideoDetail from '../VideoDetail'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            videoSelected: null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onVideoSelected = this.onVideoSelected.bind(this);
    }

    async onFormSubmit(text) {
        const response = await youtube.get('/search', {
            q: text
        })
        this.setState({ 
            videos: response.data.items,
            videoSelected: response.data.items[0]
        })
    }

    onVideoSelected(video) {
        this.setState({
            videoSelected: video
        })
    }

    render() {
        const { videos, videoSelected } = this.state;
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onFormSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail videoSelected={videoSelected} />
                        </div>
                        <div className="five wide column">
                            <Videolist videos={videos} onVideoSelected={this.onVideoSelected} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App