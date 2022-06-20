// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Image, Images } from '../../types';
const fs = require('fs');
const path = require('path');
var sizeOf = require('image-size');
const dirPath = path.join(
  __dirname,
  '..',
  '..',
  '..',
  '..',
  'public',
  'images'
);

function getImages(): Images {
  const images = [] as Images;
  const files: [string] = fs.readdirSync(dirPath);
  files.forEach((file: string) => {
    const { height, width } = sizeOf(path.join(dirPath, file));
    const image: Image = {
      src: `/images/${file}`,
      alt: file.split('.')[0],
      width: Number(width),
      height: Number(height),
    };
    images.push(image);
  });
  return images;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Images>
) {
  const images = await getImages();
  res.status(200).json(images);
}
