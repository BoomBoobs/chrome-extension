const ChromeExtension = require('crx');
const fs = require('fs');
const join = require('path').join;

const crx = new ChromeExtension({
  codebase: 'https://github.com/BoomBoobs/chrome-extension/raw/master/package/boomboobs.crx',
  privateKey: fs.readFileSync(join(__dirname, 'package', 'key.pem'))
});

crx
  .load('./build/')
  .then((crx) => {

    return crx.pack()
    .then((crxBuffer) => {
      try {
        const updateXML = crx.generateUpdateXML();
        fs.writeFile(join(__dirname, 'package', 'update.xml'), updateXML);
        fs.writeFile(join(__dirname, 'package', 'boomboobs.crx'), crxBuffer);
      } catch (e) {
        console.log(e);
      }

    }, (error) => {
      console.log(error);
    })

  })
;
