var _ 	= 	require('underscore'),
http 	=	require('http')

//adapter for IDs
function validateVideoID(id, clbk) {
  validateUrl('www.youtube.com/watch?v='+id, clbk)
}

function validateUrl(url, clbk) {
	var videoID = '/'+_.last(url.split('/'))
	var urlLowerCase = url.toLowerCase()
	var urlSpltLowerCase = urlLowerCase.split('/')

	if(_.contains(urlSpltLowerCase, 'youtube.com') 
    || _.contains(urlSpltLowerCase, 'www.youtube.com')) {
		var begin = urlLowerCase.replace('youtube.com','')
      .replace(videoID.toLowerCase(),'')
    if(!(begin== 'www.' || begin== 'http://www.' || begin== '') ||
 begin== 'https://www.')  {
			clbk(null, 'error: URL malformed')
			return
		}
	} else {
		clbk(null, 'error: URL malformed')
		return
	}

	if(videoID=='' || videoID=='/') {
		clbk(null, 'error: URL malformed')
		return		
	}

  youtubeRequest(videoID, function(res, err) {
    clbk(res, err)
  })
}

function youtubeRequest(videoID, clbk) {
 	var options = {
		method: 'HEAD',
		host: 'www.youtube.com',
		port: 80,
		path: videoID
	}
	var req = http.request(options, function(res) {
		if(res.statusCode=='200' || res.statusCode=='301'){
			clbk(videoID, null)
		} else
		clbk(null, 'error: youtube video does not exist')

		req.on('error', function(e) {
			clbk(null, 'error: something occured')
		})
	})
	req.shouldKeepAlive = false
	req.end()
}


exports.validateUrl     = validateUrl
exports.validateVideoID = validateVideoID
