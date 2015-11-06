import ChromeExtension from 'crx';
import fs from 'fs';
import { join } from 'path';

export default (version) => new Promise((resolve, reject) => {
  let manifest = require('../src/manifest.json');
  manifest.version = version;
  fs.writeFileSync(join(__dirname, '..', 'src', 'manifest.json'), JSON.stringify(manifest));

  const crx = new ChromeExtension({
    codebase: 'https://github.com/BoomBoobs/chrome-extension/raw/master/package/boomboobs.crx',
    privateKey: fs.readFileSync(join(__dirname, '..', 'key.pem'))
  });

  crx
    .load('./build/')
    .then((crx) => {

      return crx.pack()
      .then((crxBuffer) => {
        try {
          const updateXML = crx.generateUpdateXML();
          fs.writeFileSync(join(__dirname, '..', 'package', 'update.xml'), updateXML);
          fs.writeFileSync(join(__dirname, '..', 'package', 'boomboobs.crx'), crxBuffer);
          resolve();
        } catch (e) {
          reject(e);
        }

      }, (error) => {
        reject(error);
      })

    })
  ;
})
