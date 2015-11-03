import Parse from 'parse';
import { log } from 'revenge';
import { BoobsOwner, Boobs } from './app/models';

export default class API {

  constructor() {
    Parse.initialize('hrb0yHVkItcCXaMJp6S90K8Uglb7TWPaiV2lrsKg', '5bYXE74sdRkVRaBYju1mV9zowGEWDUpsdGHmVhiG');
  }

  getUser() {
    return Parse.User.current();
  }

  @log('uploadBoobsFile')
  uploadBoobsFile(file) {
    const boobsFile = new Parse.File(file.name, file);
    return boobsFile.save().then(() => boobsFile);
  }

  @log('createBoobsPost')
  createBoobsPost(boobsOwnerId, file) {
    const boobsPost = new Boobs();
    boobsPost.set('boobsOwner', new BoobsOwner({ id: boobsOwnerId }));
    boobsPost.set('preview', file.url());
    return boobsPost.save();
  }

  @log('createBoobsOwner')
  createBoobsOwner(boobsOwner) {
    return new BoobsOwner(boobsOwner).save();
  }

  @log('getBoobsOwners')
  getBoobsOwners() {
    const query = new Parse.Query(BoobsOwner);
    return query.find();
  }

  @log('getBoobOwner')
  getBoobsOwner({ firstName, lastName }) {
    return new Parse.Query(BoobsOwner)
      .equalTo('firstName', firstName)
      .equalTo('lastName', lastName)
      .find();
  }

  @log('getBoobs')
  getBoobs() {
    return new Parse.Query(Boobs)
      .include('boobsOwner')
      .descending('createdAt')
      .find();
  }
}
