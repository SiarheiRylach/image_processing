const Jimp = require("jimp");

module.exports = (inputPath, outputPath, workingWithPixel)=>{
    Jimp.read(inputPath, function (err, image) {
        // red: this.bitmap.data[ idx + 0 ]
        //green: this.bitmap.data[ idx + 1 ]
        //blue: this.bitmap.data[ idx + 2 ]
        //alpha: this.bitmap.data[ idx + 0 ]
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            workingWithPixel(new Proxy(this.bitmap.data, {
                get(target, prop) {
                    switch (prop){
                        case "r":
                            return  target[idx + 0];
                        case "g":
                            return target[idx + 1];
                        case "b":
                            return target[idx + 2];
                        default:
                            throw new Error('Forbidden property');
                    }
                },
                set(target, prop, value) {
                    switch (prop){
                        case "r":
                            target[idx + 0] = value;
                            break;
                        case "g":
                            target[idx + 1] = value;
                            break;
                        case "b":
                            target[idx + 2] = value;
                            break;
                        default:
                            throw new Error('Forbidden property');
                    }
                    return true
                }
            }));
            if(x === image.bitmap.width-1 && y === image.bitmap.height-1) {
                image.write(outputPath);
            }

        });
    });
};