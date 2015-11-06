import { App } from 'revenge';
import getQueries from './queries';
import getCommands from './commands';

export default class BoomBoobsApp extends App {

  constructor({ API, db, state = {}, data = {} }) {
    const queries = getQueries(API);
    super({
      queries,
      state,
      data,
      remote: false
    });
    this.API = API;
    this.db = db;
    this.commands = getCommands(API, queries);
  }

  fetch(...args) {
    return super(...args).catch(res => {
      this.update(() => {
        this.db.pushError(res);
      });
    });
  }

  getState() {
    return {
      token: this.db.getToken() || ''
    };
  }

  isAuthenticated() {
    // window.console.log(Parse.Session.current());
    return true;
  }

  prepareBoobsFile(boobsFile) {
    const url = URL.createObjectURL(boobsFile);
    const createdBoobFile = { file: boobsFile, url };
    this.db.saveBoobsFile(createdBoobFile);
    return Promise.resolve(createdBoobFile);
  }

  createBoobsPost(boobsFile, boobsOwner) {
    return this.API.uploadBoobsFile(boobsFile).then((bf) => {
      if (!boobsOwner.id) {
        return this.API.createBoobsOwner(boobsOwner).then(bo => ({
          boobsFile: bf,
          boobsOwnerId: bo.id
        }), () => {
          return this.API.getBoobsOwner(boobsOwner).then(bo => ({
            boobsFile: bf,
            boobsOwnerId: bo[0].id
          }));
        });
      } else {
        return {
          boobsFile: bf,
          boobsOwnerId: boobsOwner.id
        };
      }
    })
    .then(({ boobsFile, boobsOwnerId }) => {
      return this.runCommand(this.commands.doCreateBoobsPost({ boobsFile, boobsOwnerId }))
        .then(() => this.db.deleteBoobsFile());
    });

  }



  getBoobsFile() {
    return this.db.getBoobsFile();
  }





}
