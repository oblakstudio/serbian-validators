import { mod11 } from './utils';

test('Mod 11 => 0', () => {
  expect(mod11('111114')).toEqual(0);
});

test('Mod 11 => 1', () => {
  expect(mod11('111123')).toEqual(null);
});

test('Mod 11 => anything else', () => {
  expect(mod11('111118')).not.toEqual(null);
  expect(mod11('111118')).not.toEqual(0);
});
