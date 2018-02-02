var VideoDetail = (props) => {
  
  if (props.detail) {
    return (
      <div className="video-detail">
        <h3>Advanced Analytics</h3>  
        <div>
          <div className='channel-tittle'>
            <p>{props.detail.snippet.channelTitle}</p>
            <p>{'Published on ' + props.detail.snippet.publishedAt.slice(0, 10)}</p>
          </div>
          <div className='view-count'>
            {(props.detail.statistics.viewCount) + ' views'}
          </div>
        </div>
        <div className='likes'>
          <div>{(props.detail.statistics.likeCount) + ' likes'}</div>
          <div>{(props.detail.statistics.dislikeCount) + ' dislikes'}</div>
        </div>
        <div className='comment-counts'>{(props.detail.statistics.commentCount) + ' comments'}</div>
      </div>
    );
  } else {
    return <div>Creating Advanced Analytics ... </div>;
  }
 
};
 

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoDetail.propTypes = {
  detail: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoDetail = VideoDetail;