var App = () => (
  <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer firstVideo={exampleVideoData[0]} />
    </div>
    <div className="col-md-5">
      <VideoList videoData={exampleVideoData} />
    </div>
  </div>
);




ReactDOM.render(<App />, document.getElementById('app'));