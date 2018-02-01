class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      currentlyPlaying: 0,
      videoList: window.exampleVideoData
    };
  }
  
  selectVideo(index) {
    this.setState({
      currentlyPlaying: index
    });
  } 
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
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
