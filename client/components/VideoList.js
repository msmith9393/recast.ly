class VideoList extends React.Component {
  
  constructor(props) {
    super(props);
  }

  videoListUpdate(video) {
    return this.props.listUpdate(video);
  }

  render() {
    // map over props.videoData and create a VideoListEntry
    return (  
      <div className="video-list media">
        {this.props.videoData.map(video =>
          <VideoListEntry listEntryUpdate={this.videoListUpdate.bind(this)} video={video} />
        )}
      </div>
    );
  }

}

window.VideoList = VideoList;