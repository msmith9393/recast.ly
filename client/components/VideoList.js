class VideoList extends React.Component {
  
  constructor(props) {
    super(props);
  }

  handleClick() {
    return this.props.fred();
  }

  render() {
      // map over props.videoData and create a VideoListEntry
    return (  
      <div className="video-list media">
        {this.props.videoData.map(video =>
          <VideoListEntry test={this.handleClick.bind(this)} video={video} />
        )}
      </div>
    );
  }
};


// var VideoList = (props) => (
//   // map over props.videoData and create a VideoListEntry
//   <div className="video-list media">
//     {props.videoData.map(video =>
//       <VideoListEntry video={video} />
//     )}
//   </div>
// );

window.VideoList = VideoList;
