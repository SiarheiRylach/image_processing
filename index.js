const convertToBinary = require("./lib/binary");
const convertToGrayscale = require("./lib/grayscale");
const convertToSepia = require("./lib/sepia");
const convertToNegative = require("./lib/negative");

//convertToBinary("4.jpg", "result.jpg");
//convertToGrayscale("1.jpg", "result.jpg");
//convertToSepia("1.jpg", "result.jpg");
convertToNegative("1.jpg", "result.jpg");