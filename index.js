const convertToBinary = require("./lib/binary");
const convertToGrayscale = require("./lib/grayscale");
const convertToSepia = require("./lib/sepia");
const convertToNegative = require("./lib/negative");
const addNoiseForPicture = require("./lib/noise");
const changeBrightnessForPicture = require("./lib/brightness");

//convertToBinary("4.jpg", "result.jpg");
//convertToGrayscale("1.jpg", "result.jpg");
//convertToSepia("1.jpg", "result.jpg");
//convertToNegative("1.jpg", "result.jpg");
addNoiseForPicture("1.jpg", "result.jpg", -10);
//changeBrightnessForPicture("1.jpg", "result.jpg", -20);