import { App } from 'revenge';
import getQueries from './queries';

export default class BoomBoobsApp extends App {

  constructor({ API, db, state = {}, data = {} }) {
    super({
      queries: getQueries(API),
      state,
      data,
      remote: false
    });
    this.API = API;
    this.db = db;
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
      return this.API.createBoobsPost(boobsOwnerId, boobsFile)
        .then(boobsPost => {
          this.db.deleteBoobsFile();
          return boobsPost;
        });
    });

  }



  getBoobsFile() {
    return this.db.getBoobsFile();
  }





}
