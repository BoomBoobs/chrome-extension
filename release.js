import execThen from './utils/execThen';
import packingCrx from './utils/packingCrx';


const releaseType = process.argv.slice(2)[0];
const manifest = require('./src/manifest.json');
const { version } = manifest;
let [major, minor, patch ] = version.split('.');
let newMajor = major,
  newMinor = minor,
  newPatch = minor;
switch(releaseType) {
  case 'patch': {
    newPatch = parseInt(patch, 10) + 1;
  }
  break;
  case 'minor': {
    newMinor = parseInt(minor, 10) + 1;
    newPatch = 0;
  }
  break;
  case 'major': {
    newMajor = parseInt(major) + 1;
    newMinor = 0;
    newPatch = 0;
  }
  break;
  default:
    console.log('No valid arg passed! It has to be one of patch, minor or major');
    process.exit(0);
}
const newVersion = `${newMajor}.${newMinor}.${newPatch}`;
console.log(`${version} -> ${newVersion}`);


packingCrx(`${newVersion}`)
  .then(() =>
    execThen('git rev-parse --abbrev-ref HEAD')
      .then(({ stdout: branch }) => branch.replace(/(\r\n|\n|\r)/gm, ""))
      .then((branch) => {
        return execThen('git add .')
          .then(() => execThen(`git commit -m"Release: ${newVersion}."`))
          .then(() =>
            // specific steps for prs
            execThen(`git push origin ${branch}`)
            .then(() => execThen('git checkout master'))
            .then(() => execThen(`git merge --no-ff ${branch}`))
          )
          .then(() => execThen(`git tag v${newVersion}`))
          .then(() => execThen('git push origin master --tags'))
      })
  );
