var Search = (props) => {
  
  var handleInput = function (event) {
    var pressedKey = event.nativeEvent.key;
    if (pressedKey === 'Enter') {
      handleSubmit();
    }
  };
  
  var activeSearch = function (event) {
    delayedSearch(event.target.value);
  };
  
  var debounce = function (func, wait) {
    var timeout, timestamp, args, context, result;
    var later = function () {
      var last = Date.now() - timestamp;
      if (0 <= last && last < wait) {
        timeout = setTimeout(later, 500 - last);
      } else {
        timeout = null;
      }
    };
    
    return function() {
      context = this;
      args = arguments;
      timestamp = Date.now();
      var callNow = !timeout;
      if (!timeout) { timeout = setTimeout(later, wait); }
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }
    };
    
    return result;
  };
  
  var delayedSearch = debounce(props.search, 500);
  
  var handleSubmit = function() {
    var target = document.getElementsByClassName('search-bar')[0].children[0].value;
    props.search(target);
    document.getElementsByClassName('search-bar')[0].children[0].value = '';
  };
  
  return (
    <div className="search-bar form-inline">
      <input onKeyDown={handleInput} onChange={activeSearch} className="form-control" type="text" />
      <button onClick={handleSubmit} className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;


