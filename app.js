var express = require("express"),
    fs = require('fs'),
    bodyParser = require('body-parser'),
    app = express(),
    ffmpeg = require('ffmpeg');



//configuration
app.use(bodyParser.urlencoded({ extended: false }), bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//database [LIVE DATABASE]

// const { ThumbnailGenerator } = require('video-thumbnail-generator');
const ThumbnailGenerator = require('video-thumbnail-generator').default

// app.get('/convert', async(req, res) => {
//     console.log(process.cwd() + '/public/videos/');

const tg = new ThumbnailGenerator({
    sourcePath: process.cwd() + '/public/videos/z.mp4',
    thumbnailPath: process.cwd() + '/public/thumb',
    tmpDir: process.cwd() + '/public/thumb', //only required if you can't write to /tmp/ and you need to generate gifs
});


// })

run()
async function run() {

    tg.generateCb({
        size: '1080x607'
    }, (err, result) => {
        console.log(result);
        // [ 'test-thumbnail-200x200-0001.png',
        //  'test-thumbnail-200x200-0002.png',
        //  'test-thumbnail-200x200-0003.png',
        //  'test-thumbnail-200x200-0004.png',
        //  'test-thumbnail-200x200-0005.png',
        //  'test-thumbnail-200x200-0006.png',
        //  'test-thumbnail-200x200-0007.png',
        //  'test-thumbnail-200x200-0008.png',
        //  'test-thumbnail-200x200-0009.png',
        //  'test-thumbnail-200x200-0010.png' ]    
    });
    // tg.generateOneByPercentCb(90, (err, result) => {
    //     console.log(result);
    //     // 'test-thumbnail-320x240-0001.png'
    // });
    // tg.generate(50,{
    //         size: '200x200'
    //     })
    // try {
    //     await genThumbnail(process.cwd() + '/public/videos/z.mp4', process.cwd() + '/public/thumb/video-1image.jpg', '1080x607', { seek: '00:00:00.20' })
    //     console.log('Done!')
    // } catch (err) {
    //     console.error(err)
    // }

}
// async/await

//MAIN ROUTE
//app.use(['/convert', '/thumbnail'], require('./routes/index'));



module.exports = app;