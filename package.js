import packingCrx from './utils/packingCrx';
const version = process.argv.slice(2)[0] || 'dev-version';
packingCrx(version);
