const converation = require('./convertation');

module.exports = (inputPath, outputPath)=>{
    converation(inputPath, outputPath, (pixel)=>{
        average = (pixel.r +  pixel.g + pixel.b) / 3;

        pixel.r = average + 46;
        pixel.g = average;
        pixel.b = average - 46;

        if (pixel.r > 255) pixel.r = 255;
        if (pixel.b < 0)  pixel.b = 0;

    });
};