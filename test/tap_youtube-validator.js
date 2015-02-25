var test	= require('tape'),
utils 		= require('../lib/youtube-validator.js')

test('wrong urls', function(t) {
	var urlWrong1 = 'asdasd'
	var urlWrong2 = 'www.youtube.com/'
	var urlWrong3 = 'www.youtube.com'
	var urlWrong4 = 'www.youtube.com/watch?v=2XH5_qafR8k'.toUpperCase()

	utils.validateUrl(urlWrong1, function(res, err){
		t.equal(res, null, 'urlWrong1 res should be null')
		t.notEqual(err, null, 'urlWrong1 err should not be null')
	})

	utils.validateUrl(urlWrong2, function(res, err){
		t.equal(res, null, 'urlWrong2 res should be null')
    t.notEqual(err, null, 'urlWrong2 err should not be null')
	})

	utils.validateUrl(urlWrong3, function(res, err){
		t.equal(res, null, 'urlWrong3 res should be null')
		t.notEqual(err, null, 'urlWrong3 err should not be null')
	})

	utils.validateUrl(urlWrong4, function(res, err){
		t.equal(res, null, 'urlWrong4 res should be null')
		t.notEqual(err, null, 'urlWrong4 err should not be null')
	})

  t.end()
})


test('valid urls', function(t) {
	var urlCorr1 = 'youtube.com/watch?v=2XH5_qafR8k'
	var urlCorr2 = 'www.youtube.com/watch?v=2XH5_qafR8k'
	var urlCorr3 = 'http://www.youtube.com/watch?v=2XH5_qafR8k'
	var urlCorr4 = 'www.YOUTUBE.COM/watch?v=2XH5_qafR8k'

	utils.validateUrl(urlCorr1, function(res, err){
		t.notEqual(res, null, 'urlCorr1 res should not be null')
		t.equal(err, null, 'urlCorr1 err should be null')
	})
	
 utils.validateUrl(urlCorr2, function(res, err){
		t.notEqual(res, null, 'urlCorr2 res should not be null')
		t.equal(err, null, 'urlCorr2 err should be null')
	})

 utils.validateUrl(urlCorr3, function(res, err){
		t.notEqual(res, null, 'urlCorr3 res should not be null')
		t.equal(err, null, 'urlCorr3 err should be null')
	})

  utils.validateUrl(urlCorr4, function(res, err){
		t.notEqual(res, null, 'urlCorr4 res should not be null')
		t.equal(err, null, 'urlCorr4 err should be null')
	})
	t.end()
})


test('ID validate adapter', function(t) {
  var wrongID = 'this is wrong'
  var correctID = '2XH5_qafR8k'

  utils.validateVideoID(wrongID, function(res, err) {
  	t.equal(res, null, 'wrongID res should  be null')
		t.notEqual(err, null, 'wrongID err should not be null')
  })

 utils.validateVideoID(correctID, function(res, err) {
  	t.notEqual(res, null, 'correctID res should be null')
		t.equal(err, null, 'correctID err should be null')
  })

  t.end()
})
