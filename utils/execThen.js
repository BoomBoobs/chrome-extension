import { exec } from 'child_process';

export default (cmd) => new Promise((resolve, reject) => {
  console.log(`Executing: ${cmd}`);
  exec(cmd, (err, o, i) => {
    if (err) throw err;
    console.log('Done!');
    return resolve({
      err,
      stdout: o,
      stderr: i
    })
  });
});
