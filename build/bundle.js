/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	var FEED_URL = 'http://medium.com/feed/@mayu';
	
	// https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http%3A%2F%2Fwww.medium.com%2Ffeed%2F@mayu
	
	const feedStreamRetrieved$ = Kefir.stream(emitter => {
	  $.ajax({
	    url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(FEED_URL),
	    dataType: 'json',
	    success: function (data) {
	      if (data.responseData.feed && data.responseData.feed.entries) {
	        emitter.emit(data.responseData.feed.entries);
	      }
	    }
	  });
	});
	
	const feedStreamEntriesRetreieved$ = feedStreamRetrieved$.flatten();
	
	feedStreamEntriesRetreieved$.onValue(entry => {
	  $('#logs').append('<li><a href="' + entry.link + '">' + entry.title + '</li>');
	});

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGRkZDJmYzgyOTRkYjBhNTI3YTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQUVBLEtBQUksV0FBVyw4QkFBWDs7OztBQUlKLE9BQU0sdUJBQXVCLE1BQU0sTUFBTixDQUFhLFdBQWE7QUFDckQsS0FBRSxJQUFGLENBQU87QUFDTCxVQUFXLGtGQUFrRixtQkFBbUIsUUFBbkIsQ0FBbEY7QUFDWCxlQUFXLE1BQVg7QUFDQSxjQUFXLFVBQVUsSUFBVixFQUFnQjtBQUN6QixXQUFJLEtBQUssWUFBTCxDQUFrQixJQUFsQixJQUEwQixLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsT0FBdkIsRUFBZ0M7QUFDNUQsaUJBQVEsSUFBUixDQUFhLEtBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixPQUF2QixDQUFiLENBRDREO1FBQTlEO01BRFM7SUFIYixFQURxRDtFQUFiLENBQXBDOztBQVlOLE9BQU0sK0JBQStCLHFCQUNsQyxPQURrQyxFQUEvQjs7QUFHTiw4QkFBNkIsT0FBN0IsQ0FBcUMsU0FBUztBQUM1QyxLQUFFLE9BQUYsRUFBVyxNQUFYLENBQWtCLGtCQUFrQixNQUFNLElBQU4sR0FBYSxJQUEvQixHQUFxQyxNQUFNLEtBQU4sR0FBYyxPQUFuRCxDQUFsQixDQUQ0QztFQUFULENBQXJDLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA0ZGRkMmZjODI5NGRiMGE1MjdhMlxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG52YXIgRkVFRF9VUkwgPSAnaHR0cDovL21lZGl1bS5jb20vZmVlZC9AbWF5dSdcblxuLy8gaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvc2VydmljZXMvZmVlZC9sb2FkP3Y9MS4wJnE9aHR0cCUzQSUyRiUyRnd3dy5tZWRpdW0uY29tJTJGZmVlZCUyRkBtYXl1XG5cbmNvbnN0IGZlZWRTdHJlYW1SZXRyaWV2ZWQkID0gS2VmaXIuc3RyZWFtKChlbWl0dGVyKSA9PiB7XG4gICQuYWpheCh7XG4gICAgdXJsICAgICAgOiAnaHR0cDovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9zZXJ2aWNlcy9mZWVkL2xvYWQ/dj0xLjAmbnVtPTEwJmNhbGxiYWNrPT8mcT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KEZFRURfVVJMKSxcbiAgICBkYXRhVHlwZSA6ICdqc29uJyxcbiAgICBzdWNjZXNzICA6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBpZiAoZGF0YS5yZXNwb25zZURhdGEuZmVlZCAmJiBkYXRhLnJlc3BvbnNlRGF0YS5mZWVkLmVudHJpZXMpIHtcbiAgICAgICAgZW1pdHRlci5lbWl0KGRhdGEucmVzcG9uc2VEYXRhLmZlZWQuZW50cmllcylcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59KVxuXG5jb25zdCBmZWVkU3RyZWFtRW50cmllc1JldHJlaWV2ZWQkID0gZmVlZFN0cmVhbVJldHJpZXZlZCRcbiAgLmZsYXR0ZW4oKVxuXG5mZWVkU3RyZWFtRW50cmllc1JldHJlaWV2ZWQkLm9uVmFsdWUoZW50cnkgPT4ge1xuICAkKCcjbG9ncycpLmFwcGVuZCgnPGxpPjxhIGhyZWY9XCInICsgZW50cnkubGluayArICdcIj4nKyBlbnRyeS50aXRsZSArICc8L2xpPicpXG59KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9