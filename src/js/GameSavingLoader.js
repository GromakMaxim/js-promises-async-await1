import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      read()
        .then((response) => json(response))
        .then((data) => resolve(data));
    });
  }
}
