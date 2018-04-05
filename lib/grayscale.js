const converation = require('./convertation');

module.exports = (inputPath, outputPath)=>{
    converation(inputPath, outputPath, (pixel)=>{
        pixel.r = pixel.g = pixel.b = (0.2126 * pixel.r +  0.7152 * pixel.g + 0.0722 * pixel.b);
    });
};