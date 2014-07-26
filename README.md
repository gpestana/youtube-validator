##youtube-validator

nodejs module that validates wether a given url or id are valid youtube videos or not

---

####how to install
npm install youtube-validator

####what is valid and invalid url/id?
* valid url/id are all strings that do match with an existent youtube video url or id, depending on the function called. ex: 

```javascript
var validUrl1 = 'youtube.com/watch?v=2XH5_qafR8k' 
var validUrl2 = 'www.youtube.com/watch?v=2XH5_qafR8k' 
var validUrl3 = 'http://www.youtube.com/watch?v=2XH5_qafR8k' 
var validUrl4 = 'www.YOUTUBE.COM/watch?v=2XH5_qafR8k' 
var validID = '2XH5_qafR8k' 
```

* invalid url/id are the same as above, but on the other waya around.  ex:  

```javascript
var invalidUrl1 = 'random_stuff_here' 
var invalidUrl2 = 'www.youtube.com/' 
var invalidUrl3 = 'www.youtube.com' 
var invalidUrl44 = 'www.youtube.com/watch?v=2XH5_qafR8k'.toUpperCase() //video ids are case sensitive 
var invalidID = 'id_that_does_not_exist'  
```

###how to use

```javascript
var validator = require('youtube-validator')
//..
validator.validateUrl(url, function(res, err) {
  if(err) //err
  else
    //res == url
})`
//...

validator.validateVideoID(id, function(res, err) {
  if(err) //err
  else
    //res == url
})
```
