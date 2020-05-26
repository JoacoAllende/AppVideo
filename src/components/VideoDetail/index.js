import React from 'react';

function VideoDetail({ videoSelected }) {
    if (!videoSelected)
        return <div />
    const src = `https://www.youtube.com/embed/${videoSelected.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe title="Youtube-api" src={src} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{videoSelected.snippet.title}</h4>
                <p>{videoSelected.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail