// 'fs' stands for 'file system'.
const fs = require('fs');

const filePath = `${__dirname}/somefile.txt`;

console.log('1')
// Node-style callbacks always take an error as the first parameter.
fs.readFile(filePath, 'utf8', (err, contents) => {
  console.log('2')

  if (err) {
    console.log('err', err);
    return;
  }
  console.log('contents', contents);
});
console.log('3')
