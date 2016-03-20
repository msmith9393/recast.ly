var searchYouTube = (options, callback) => {
  // TODO
  // I think the url has to be built up with ?SEARCH_QUERY and &KEY=API_KEY
  // may need to do youtube/embed somehow - not sure how to tell if embeddable
  // &videoEmbeddable=true might be capital v
  // debugger;

  console.log('options and callback:', options, callback);

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    success: function(videosData) {
      console.log('videosData in ajax success is:', videosData);
      callback.call(this, videosData.items);
  
     console.log('Success');
    },
    error: function(videosData) {
      console.log('Error');
    }
  });

};



// var searchYouTube = ({key, query, max=5}, callback) => {
//   $.get('https://www.googleapis.com/youtube/v3/search', {
//     part: 'snippet',
//     key: key,
//     q: query,
//     maxResults: max,
//     type: 'video',
//     videoEmbeddable: 'true'
//   })
//   .done(({items}) => {
//     if (callback) {
//       callback(items);
//     }
//   })
//   .fail(({responseJSON}) => {
//     responseJSON.error.errors.forEach((err) =>
//       console.error(err)
//     )
//   });
// };
window.searchYouTube = searchYouTube;




