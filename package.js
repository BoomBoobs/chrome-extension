const ChromeExtension = require('crx');
const fs = require('fs');
const join = require('path').join;

const crx = new ChromeExtension({
  privateKey: fs.readFileSync(join(__dirname, 'package', 'key.pem'))
});

crx
  .load('./build/')
  .then((crx) => {

    return crx.pack()
    .then((crxBuffer) => {
      try {
        // var updateXML = crx.generateUpdateXML();
        // console.log(join(__dirname, 'package', 'update.xml'));
        // fs.writeFile(join(__dirname, 'package', 'updateXML', updateXML));
        fs.writeFile(join(__dirname, 'package', 'boomboobs.crx'), crxBuffer);
      } catch (e) {
        console.log(e);
      }

    }, (error) => {
      console.log(error);
    })

  })
;
