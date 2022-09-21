import { pokeIndex, card } from './template.js';
let fetchedData = [
  {
    url: 'https://i.ibb.co/DgdM9rQ/pokemon-PNG127.png',
    id: '#001',
    name: 'Bulbasaur',
    food: 'grass',
  },
  {
    url: 'https://i.ibb.co/DgdM9rQ/pokemon-PNG127.png',
    id: '#001',
    name: 'Bulbasaur',
    food: 'grass',
  },
  {
    url: 'https://i.ibb.co/DgdM9rQ/pokemon-PNG127.png',
    id: '#001',
    name: 'Bulbasaur',
    food: 'grass',
  },
  {
    url: 'https://i.ibb.co/DgdM9rQ/pokemon-PNG127.png',
    id: '#001',
    name: 'Bulbasaur',
    food: 'grass',
  },
  {
    url: 'https://i.ibb.co/DgdM9rQ/pokemon-PNG127.png',
    id: '#001',
    name: 'Bulbasaur',
    food: 'grass',
  },
  {
    url: 'https://i.ibb.co/DgdM9rQ/pokemon-PNG127.png',
    id: '#001',
    name: 'Bulbasaur',
    food: 'grass',
  },
  {
    url: 'https://i.ibb.co/DgdM9rQ/pokemon-PNG127.png',
    id: '#001',
    name: 'Bulbasaur',
    food: 'grass',
  },
  {
    url: 'https://i.ibb.co/DgdM9rQ/pokemon-PNG127.png',
    id: '#001',
    name: 'Bulbasaur',
    food: 'grass',
  },
  {
    url: 'https://i.ibb.co/DgdM9rQ/pokemon-PNG127.png',
    id: '#001',
    name: 'Bulbasaur',
    food: 'grass',
  },
  {
    url: 'https://i.ibb.co/DgdM9rQ/pokemon-PNG127.png',
    id: '#001',
    name: 'Bulbasaur',
    food: 'grass',
  },
  {
    url: 'https://i.ibb.co/DgdM9rQ/pokemon-PNG127.png',
    id: '#001',
    name: 'Bulbasaur',
    food: 'grass',
  },
];

document.querySelector('body').innerHTML = pokeIndex;

fetchedData.forEach(data => {
  document.querySelector('.cards').insertAdjacentHTML('beforeend', card(data));
});
