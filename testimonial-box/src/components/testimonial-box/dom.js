import { generateTestimonial } from './template.js';
import { data } from './data.js';

let content = document.querySelector('.content');
let currentTestimonial = 0;

// load first testimonial
content.innerHTML = generateTestimonial(data[0]);

// update testimonial every 0.5s
setInterval(() => {
  currentTestimonial++;
  if (currentTestimonial >= data.length) {
    currentTestimonial = 0;
  }
  content.innerHTML = generateTestimonial(data[currentTestimonial]);
}, 5000);
