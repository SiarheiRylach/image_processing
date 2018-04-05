const converation = require('./convertation');

module.exports = (inputPath, outputPath)=>{
    converation(inputPath, outputPath, (pixel)=>{
        rand = Math.random() * 5;
        pixel.r += rand;
        pixel.g += rand;
        pixel.b += rand;

        if (pixel.r > 255) pixel.r = 255;
        if (pixel.g > 255) pixel.g = 255;
        if (pixel.b > 255) pixel.b = 255;

        if (pixel.r < 0)  pixel.r = 0;
        if (pixel.g < 0)  pixel.g = 0;
        if (pixel.b < 0)  pixel.b = 0;

    });
};