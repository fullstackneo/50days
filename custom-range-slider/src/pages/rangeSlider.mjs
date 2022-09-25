import { rangeSlider } from '../components/rangeSlider/template.js';

// insert the range slider
document.querySelector('#rangeSlider').innerHTML = rangeSlider;

// async insert dom opertaions
import('../components/rangeSlider/dom.js');
