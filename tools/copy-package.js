const fs = require('fs');
let resizable = fs.readFileSync('package.json').toString();
let readme = fs.readFileSync('README.MD').toString();
fs.writeFileSync('dist/package.json', resizable);
fs.writeFileSync('dist/README.MD', readme);
