var searchYouTube = (options, callback) => {
  // TODO
  // I think the url has to be built up with ?SEARCH_QUERY and &KEY=API_KEY
  // may need to do youtube/embed somehow - not sure how to tell if embeddable
  // &videoEmbeddable=true might be capital v
  // debugger;
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    success: function(data) {
      callback(data);
      console.log('Success');
    },
    error: function(data) {
      console.log('Error');
    }
  });

};

// Use $.ajax to send a GET request to the search endpoint. This is the only time you should use jQuery in this sprint
// Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint
// Accept an options object with the following properties:
// query - the string to search for
// max - the maximum number of videos to get, which should default to 5
// key - an authorized YouTube Browser API key
// Only GET embeddable videos

window.searchYouTube = searchYouTube;
