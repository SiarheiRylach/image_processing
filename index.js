var Jimp = require("jimp");

Jimp.read("4.jpg", function (err, image) {

	image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
	    let red   = this.bitmap.data[ idx + 0 ];
	    let green = this.bitmap.data[ idx + 1 ];
	    let blue  = this.bitmap.data[ idx + 2 ];
	    let alpha = this.bitmap.data[ idx + 3 ];

	    let S = blue + green + red;

	    if (S > ((255 / 2) * 3)){
	    	this.bitmap.data[ idx + 0 ] = this.bitmap.data[ idx + 1 ] = this.bitmap.data[ idx + 2 ] = 255;
	    }
		else{
			this.bitmap.data[ idx + 0 ] = this.bitmap.data[ idx + 1 ] = this.bitmap.data[ idx + 2 ] = 0;
		}

		if(x === image.bitmap.width-1 && y === image.bitmap.height-1) {
        	image.write("result.jpg");
    	}

	});
});