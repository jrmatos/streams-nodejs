const { pipeline } = require('stream/promises');
const fs = require('fs');

async function run() {
  await pipeline(
    fs.createReadStream('somefile.txt'),
    fs.createWriteStream('otherfile.txt')
  );
  console.log('Pipeline succeeded.');
}

run().catch(console.error);