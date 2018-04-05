const converation = require('./convertation');

module.exports = (inputPath, outputPath)=>{
    converation(inputPath, outputPath, (pixel)=>{
        let s = pixel.r + pixel.g + pixel.b;
        if (s > ((255 / 2) * 3)){
            pixel.r = pixel.g = pixel.b = 255;
        }else{
            pixel.r = pixel.g = pixel.b = 0;
        }
    });
};