// if time make a logo or something CSS - https://www.hipsterlogogenerator.com/

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0],
      query: 'random initial query',
    };
    this.options = {
      key: window.YOUTUBE_API_KEY,
      query: this.state.query,
      max: 5,
      part: 'snippet',
    };
    
  }



// Use $.ajax to send a GET request to the search endpoint. This is the only time you should use jQuery in this sprint
// Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint
// Accept an options object with the following properties:
// query - the string to search for
// max - the maximum number of videos to get, which should default to 5
// key - an authorized YouTube Browser API key
// Only GET embeddable videos
  updateCurrentVideo(video) {
    this.setState({
      currentVideo: video
    });
  }

  resetSearchQuery(search) {
    console.log('inside App, search is:', search);
    console.log('before', this.options.query);
    this.options.query = search;
    console.log('after', this.options.query);
    searchYouTube(this.options, (function(data) {
      console.log('this is',this,'and data.items is',data.items);
      this.setState({
        videos: data.items
      });
    }).bind(this));
    console.log(this.state.videos);
      //this.updateVideoData.bind(this));
  //   searchYouTube(this.options, this.updateVideoData.bind(this));
  }
  
  updateVideoData(data) {

    // this.setState({
    //   videos: data
    // });
  }

  render() {
    return (
      <div>
        <Nav updateNav={this.resetSearchQuery.bind(this)} />
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