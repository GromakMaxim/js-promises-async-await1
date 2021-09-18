import json from './parser.js';
import read from './reader.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((response) => json(response)).then((r) => new GameSaving(JSON.parse(r)));
  }
}
