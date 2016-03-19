class VideoListEntry extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  handleClick() {
    console.log('hi');
  }

  render() {
    return (
      <div className="video-list-entry">
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.video.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div onClick={this.handleClick.bind(this)} className="video-list-entry-title">{this.props.video.snippet.title}</div>
          <div className="video-list-entry-detail">{this.props.video.snippet.description}</div>
        </div>
      </div>
    );
  }
} 


window.VideoListEntry = VideoListEntry;



// var VideoListEntry = (props) => (
//   <div className="video-list-entry">
//     <div className="media-left media-middle">
//       <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
//     </div>
//     <div className="media-body">
//       <div onClick={this.handleClick.bind(this)} className="video-list-entry-title">{props.video.snippet.title}</div>
//       <div className="video-list-entry-detail">{props.video.snippet.description}</div>
//     </div>
//   </div>
// );

// window.VideoListEntry = VideoListEntry;

