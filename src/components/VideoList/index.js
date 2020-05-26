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
        return (
            <div className="ui relaxed divided list">
                {
                    videos.map(video => (
                        <VideoItem
                            key={video.id.videoId}
                            video={video}
                            onClick={this.onVideoSelected}
                        />
                    ))
                }
            </div>
        )
    }
}

export default VideoList