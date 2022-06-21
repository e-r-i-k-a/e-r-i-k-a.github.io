import { Image, Images } from '../types';
const images: Images = require('../public/images/data.json');
const seedrandom = require('seedrandom');

export function getImage (): Image {
    const date = new Date().toLocaleDateString();
    const randomNum = seedrandom(date)();
    const index = Math.floor(randomNum * (images.length));
    return images[index];
}