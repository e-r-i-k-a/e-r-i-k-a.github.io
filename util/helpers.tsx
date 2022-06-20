import { Image, Images } from '../types';
const seedrandom = require('seedrandom');

export function getImage (data: Images): Image {
    const date = new Date().toLocaleDateString();
    const randomNum = seedrandom(date)();
    const index = Math.floor(randomNum * (data.length));
    return data[index];
}