import { generatePic } from './template.js';
import { pics } from './fetchData.js';

document.querySelector('.images').innerHTML = pics.reduce((res, cur) => res + generatePic(cur), '');
