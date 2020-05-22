import React from 'react'
import VideoItem from '../VideoItem'

class VideoList extends React.Component {

    constructor(props) {
        super(props)
        this.onVideoSelected = this.onVideoSelected.bind(this)
    }

    onVideoSelected(video) {
        this.props.onVideoSelected(video)
    }

    render() {
        const { videos } = this.props;
        const listRendered = videos.map( video => {
            return (
                <VideoItem
                    key={video.id.videoId}
                    video={video} 
                    onClick={this.onVideoSelected}
                />
            )
        })
        return <div className="ui relaxed divided list">{listRendered}</div>
    }
}

export default VideoList