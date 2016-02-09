export default class DB {
  constructor(initialState = { errors: [] }) {
    this.data = initialState;
  }

  toJSON() {
    return this.data;
  }

  static getDefaultData(token) {
    return { token };
  }

  setToken(token) {
    this.data.token = token;
  }

  getToken() {
    return this.data.token;
  }

  getBoobsFile() {
    return this.data.boobsFile;
  }

  saveBoobsFile(boobsFile) {
    this.data.boobsFile = boobsFile;
    return boobsFile;
  }

  deleteBoobsFile() {
    this.data.boobsFile = null;
  }

  pushError(error) {
    this.data.errors.push(error);
  }
}
