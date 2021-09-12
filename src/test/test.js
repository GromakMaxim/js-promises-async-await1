import GameSavingLoader from '../js/GameSavingLoader';

test('expect correct obj', () => {
  const expected = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';

  return expect(GameSavingLoader.load()).resolves.toBe(expected);
});
