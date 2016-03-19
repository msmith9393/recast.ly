class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  handleClick() {
    console.log('from the app')
  }
  
  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer firstVideo={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videoData={this.state.videos} />
        </div>
      </div>
    );
  }
} 




ReactDOM.render(<App />, document.getElementById('app'));