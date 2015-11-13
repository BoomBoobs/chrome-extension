import ChromeExtension from 'crx';
import fs from 'fs';
import { join } from 'path';
import execThen from './execThen';

export default (version) => new Promise((resolve, reject) => {
  let manifest = require(join(__dirname, '..', 'src', 'manifest.json'));
  manifest.version = version;
  fs.writeFileSync(join(__dirname, '..', 'src', 'manifest.json'), JSON.stringify(manifest, null, 2));


  const crx = new ChromeExtension({
    codebase: 'https://github.com/BoomBoobs/chrome-extension/raw/master/package/boomboobs.crx',
    privateKey: fs.readFileSync(join(__dirname, '..', 'key.pem'))
  });

  execThen('npm run build').then(({ err }) => {
    if (err) {
      console.log(err);
      process.exit();
      return;
    }

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
  });
});
