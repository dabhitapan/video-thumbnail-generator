var express = require("express"),
    fs = require('fs'),
    genThumbnail = require('simple-thumbnail'),
    index = express()



// promise
genThumbnail('path/to/image.png', 'output/file/path.png', '250x?')
    .then(() => console.log('done!'))
    .catch(err => console.error(err))

// async/await
module.exports = index;