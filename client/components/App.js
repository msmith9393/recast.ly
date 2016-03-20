// if time make a logo or something CSS - https://www.hipsterlogogenerator.com/

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: null,
    };
    
  }

  componentDidMount() {
    this.getYouTubeVideos('cute cats');
  }

  getYouTubeVideos(query) {
    console.log('query in getYoutubeVideos:', query);
    var options = {
      key: window.YOUTUBE_API_KEY,
      q: query,
      maxResults: 7,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true',
    };

    console.log('options:', options);

    searchYouTube(options, videos => {
      console.log('videos in syt', videos);
      this.setState({
        videos: videos,
        currentVideo: videos[1]
      });
      console.log('videos in searchYoutube is:', videos);
      console.log('this.setState in searchYoutube:', this.state);
    });
  }

  updateCurrentVideo(video) {
    this.setState({
      currentVideo: video
    });
  }

  // resetSearchQuery(search) {

  //   this.options.query = search;

  //   searchYouTube(this.options, (function(data) {

  //     this.setState({
  //       videos: data.items
  //     });
  //   }).bind(this));

  //   console.log('this.state after ajax call&callback is:', this.state);
  // }

  render() {
    return (
      <div>
        <Nav updateNav={this.getYouTubeVideos.bind(this)} />
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