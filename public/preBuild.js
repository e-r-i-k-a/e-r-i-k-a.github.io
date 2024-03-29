const fs = require('fs');
const path = require('path');
var sizeOf = require('image-size');
const dirPath = path.join(
  __dirname,
  'images'
);

async function getImages() {
  fs.unlink(path.join(dirPath, 'data.json'), function cb(err, __) {
    if (err) { } // do nothing
  });
  const images = [];
  fs.readdirSync(dirPath).forEach(file => {
    if (file.endsWith('.json')) return; // ignore data.json
    const { height, width } = sizeOf(path.join(dirPath, file));
    images.push({
      src: `/images/${file}`,
      height: Number(height),
      width: Number(width),
    });
  });
  fs.writeFileSync(path.join(dirPath, 'data.json'), JSON.stringify(images));
}

(async () => {
  const data = await getImages();
})();
