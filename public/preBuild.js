const fs = require('fs');
const path = require('path');
var sizeOf = require('image-size');
const dirPath = path.join(
  __dirname,
  'images'
);

async function getImages() {
  fs.unlinkSync(path.join(dirPath, 'data.json'));
  const images = [];
  fs.readdirSync(dirPath).forEach(file => {
    const { height, width } = sizeOf(path.join(dirPath, file));
    images.push({
      src: `/images/${file}`,
      width: Number(width),
      height: Number(height),
    });
  });
  fs.writeFileSync(path.join(dirPath, 'data.json'), JSON.stringify(images));
}

(async () => {
  const data = await getImages();
})();
