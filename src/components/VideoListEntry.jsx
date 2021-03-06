var VideoListEntry = (prop) => {
  var select = (e) => {
    var index = e.target.getAttribute('data-reactid').charAt(10);
    prop.appCallback(index);
  };
  
  return (
    <div className="video-list-entry media">
      <div className="media-left media-middle">
        <img className="media-object" src={prop.video.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div onClick={select} className="video-list-entry-title">{prop.video.snippet.title}</div>
        <div className="video-list-entry-detail">{prop.video.snippet.description}</div>
      </div>
    </div>
  );
};


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
