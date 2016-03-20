class VideoList extends React.Component {
  
  constructor(props) {
    super(props);
  }

  // videoListUpdate(video) {
  //   this.props.listUpdate(video);
  // }

  render() {
    // map over props.videoData and create a VideoListEntry
    return (  
      <div className="video-list media">
        {this.props.videoData.map(video =>
          <VideoListEntry listUpdate={this.props.listUpdate.bind(this)} video={video} />
        )}
      </div>
    );
  }

}

window.VideoList = VideoList;