var searchYouTube = (options, updateList, updateDetail) => {
  // TODO
  var data = {
    key: options.key,
    q: options.query,
    maxResults: options.max || 5,
    part: 'snippet',
    videoEmbeddable: 'true',
    type: 'video'
  };
  var url = 'https://www.googleapis.com/youtube/v3/search?' + $.param(data);

  fetch(url)
    .then((results)=> results.text())
    .then(text => {
      var items = JSON.parse(text).items;
      updateList(items);
      var videoIds = items.map(item => item.id.videoId).join(', ');
      var searchParam = {
        key: data.key,
        maxResults: data.maxResults,
        part: 'statistics, snippet',
        id: videoIds
      };
      var videoUrl = 'https://www.googleapis.com/youtube/v3/videos?' + $.param(searchParam);
      
      fetch(videoUrl)
        .then((results) => results.text())
        .then(text => {
          updateDetail(JSON.parse(text).items);
        });
      
    })
    .catch(err => {
      console.log(err);
    });
   
};

window.searchYouTube = searchYouTube;
