'use strict'

var FEED_URL = 'http://medium.com/feed/@mayu'

// https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http%3A%2F%2Fwww.medium.com%2Ffeed%2F@mayu

const feedStreamRetrieved$ = Kefir.stream((emitter) => {
  $.ajax({
    url      : 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(FEED_URL),
    dataType : 'json',
    success  : function (data) {
      if (data.responseData.feed && data.responseData.feed.entries) {
        emitter.emit(data.responseData.feed.entries)
      }
    }
  })
})

const feedStreamEntriesRetreieved$ = feedStreamRetrieved$
  .flatten()

feedStreamEntriesRetreieved$.onValue(entry => {
  $('#logs').append('<li><a href="' + entry.link + '">'+ entry.title + '</li>')
})
