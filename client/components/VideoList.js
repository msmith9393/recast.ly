var VideoList = (props) => (
  // map over props.videoData and create a VideoListEntry
  <div className="video-list media">
    {props.videoData.map(video =>
      <VideoListEntry video={video} />
    )}
  </div>
);

window.VideoList = VideoList;
