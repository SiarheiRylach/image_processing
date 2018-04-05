const convertToBinary = require("./lib/binary");
const convertToGrayscale = require("./lib/grayscale");
const convertToSepia = require("./lib/sepia");
const convertToNegative = require("./lib/negative");
const noiseForPicture = require("./lib/noise");

//convertToBinary("4.jpg", "result.jpg");
//convertToGrayscale("1.jpg", "result.jpg");
//convertToSepia("1.jpg", "result.jpg");
//convertToNegative("1.jpg", "result.jpg");
noiseForPicture("1.jpg", "result.jpg");