import Parse from 'parse';

class BoobsOwner extends Parse.Object {
  constructor(boobsOwner) {
    super('BoobsOwner');
    Object.keys(boobsOwner).forEach(k => k && this.set(k, boobsOwner[k]));
  }
}

Parse.Object.registerSubclass('BoobsOwner', BoobsOwner);

export default BoobsOwner;
