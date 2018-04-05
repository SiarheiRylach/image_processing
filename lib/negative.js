const converation = require('./convertation');

module.exports = (inputPath, outputPath)=>{
    converation(inputPath, outputPath, (pixel)=>{
        pixel.r = 255 - pixel.r;
        pixel.g = 255 - pixel.g;
        pixel.b = 255 - pixel.b;
    });
};