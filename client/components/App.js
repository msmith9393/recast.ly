class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  updateCurrentVideo(video) {
    this.setState({
      currentVideo: video
    });
  }
  
  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer firstVideo={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList listUpdate={this.updateCurrentVideo.bind(this)} videoData={this.state.videos} />
        </div>
      </div>
    );
  }
} 

ReactDOM.render(<App />, document.getElementById('app')); 