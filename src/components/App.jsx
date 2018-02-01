class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentlyPlaying: 0,
      videoList: []
    };
  }
  
  componentDidMount() {
    this.searchVideo('Drake');
  }
  
  searchVideo(query) {
    var data = {
      key: window.YOUTUBE_API_KEY,
      max: 5,
      query: query
    };
    
    this.props.searchYouTube(data, this.updateList.bind(this));
  }

  
  selectVideo(index) {
    this.setState({
      currentlyPlaying: index
    });
  } 
  
  updateList(data) {
    this.setState({
      videoList: data
    });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <window.Search search={this.searchVideo.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <window.VideoPlayer video={this.state.videoList[this.state.currentlyPlaying]} />
          </div>
          <div className="col-md-5">
            <window.VideoList cb={this.selectVideo.bind(this)} videos={this.state.videoList}  />
          </div>
        </div>
      </div>
    );
  }
} 

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
