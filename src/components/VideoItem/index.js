import React from 'react';
import { VideoItemContainer } from './index.style'

class VideoItem extends React.Component {

    constructor(props) {
        super(props)
        this.onVideoClick = this.onVideoClick.bind(this)
    }

    onVideoClick() {
        const { video } = this.props
        this.props.onClick(video)
    }

    render() {
        const { video } = this.props;
        return (
            <VideoItemContainer className="item" onClick={this.onVideoClick}>
                <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                <div className="content">
                    <div className="header">{video.snippet.title}</div>
                </div>
            </VideoItemContainer>
        )
    }
}

export default VideoItem