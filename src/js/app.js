import GameSavingLoader from './GameSavingLoader.js';

GameSavingLoader.load().then((saving) => {
  const gameSavingObj = saving;
}, (error) => {
  throw new Error(error);
});
