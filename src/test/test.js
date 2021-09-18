import GameSavingLoader from '../js/GameSavingLoader.js';
import GameSaving from '../js/GameSaving.js';

test('expect correct GameSaving obj', () => {
  const obj = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  return GameSavingLoader.load().then((data) => {
    expect(data).toStrictEqual(new GameSaving(obj));
  });
});
