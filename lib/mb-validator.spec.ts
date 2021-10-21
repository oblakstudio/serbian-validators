import { validMB } from '.';

test('Valid MB', () => {
  expect(validMB('66143627')).toEqual(true);
  expect(validMB(66143627)).toEqual(true);
});

test('Invalid MB', () => {
  expect(validMB('66143628')).toEqual(false);
  expect(validMB(66143628)).toEqual(false);
});

test('Short MB', () => {
  expect(validMB('6614362')).toEqual(false);
  expect(validMB(6614362)).toEqual(false);
});

test('Long MB', () => {
  expect(validMB('661436200')).toEqual(false);
  expect(validMB(661436200)).toEqual(false);
});
