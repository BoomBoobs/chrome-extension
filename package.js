const ChromeExtension = require('crx');
const fs = require('fs');
const join = require('path').join;

const crx = new ChromeExtension({
  privateKey: fs.readFileSync(join(__dirname, 'package', 'key.pem'))
});

crx.pack()
  .then(crxBuffer => {
    console.log(crxBuffer);
    fs.writeFile(join(__dirname, 'package', 'boomboobs.crx', crxBuffer));
  });
