import Parse from 'parse';

class BoobsPost extends Parse.Object {
  constructor() {
    super('Boobs');
  }
}

Parse.Object.registerSubclass('Boobs', BoobsPost);

export default BoobsPost;
