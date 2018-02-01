var searchYouTube = (options, callback) => {
  // TODO
  var url = 'https://www.googleapis.com/youtube/v3/search';
  var data = {
    key: options.key,
    q: options.query,
    maxResults: options.max || 5,
    part: 'snippet',
    videoEmbeddable: 'true',
    type: 'video'
  };
  
  var parseData = function(data) {
    callback(data.items);
  };
  
  $.get(url, data, parseData);
};

window.searchYouTube = searchYouTube;