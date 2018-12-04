import {getAvg} from './averageService';
import logomg from './content/logo-1.png';

$('body').css('background-color', 'lightgray');

//let's use some ES6 features
const colors = ["green", "blue", "red", "yellow"];
const favColor = "green";
const messageToDisplay = `my favorite color is ${favColor}`;

document.write(messageToDisplay);

const img = document.createElement('img');
img.src = logoImg;

document.getElementByClass('imgContainer').appendChild('img');